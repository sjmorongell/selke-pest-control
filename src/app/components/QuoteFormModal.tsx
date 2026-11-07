import { X, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading?: string;
  initialMessage?: string;
}

export function QuoteFormModal({
  isOpen,
  onClose,
  heading = 'Get Your Free Quote',
  initialMessage = '',
}: QuoteFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    serviceType: 'general',
    message: initialMessage
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Load reCAPTCHA only when the form opens so it does not block the homepage.
  useEffect(() => {
    if (!isOpen || document.querySelector('script[data-selke-recaptcha]')) return;
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=6LfeCvMsAAAAACOr9IAPU42iKu39uoxV-O5DuovB`;
    script.async = true;
    script.dataset.selkeRecaptcha = 'true';
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Get reCAPTCHA token — wait for script to be ready before executing
      const token = await new Promise<string>((resolve, reject) => {
        (window as any).grecaptcha.ready(async () => {
          try {
            const t = await (window as any).grecaptcha.execute('6LfeCvMsAAAAACOr9IAPU42iKu39uoxV-O5DuovB', { action: 'submit' });
            resolve(t);
          } catch (err) {
            reject(err);
          }
        });
      });

      // Send email via EmailJS
      await emailjs.send(
        'service_lrhj3zl', // Service ID
        'template_jrowfkf', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          service_type: formData.serviceType,
          message: formData.message,
          'g-recaptcha-response': token
        },
        'TFRT3kmtcsoEaopnr' // Public Key
      );

      setStatus('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        serviceType: 'general',
        message: initialMessage
      });

      // Close modal after 60 seconds
      setTimeout(() => {
        setStatus('idle');
        onClose();
      }, 60000);

    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');

      // Reset error state after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={status === 'sending' ? undefined : onClose} role="presentation">
      <div
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        style={{ color: '#111827' }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-form-title"
      >
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 id="quote-form-title" className="text-2xl font-bold text-gray-900">{heading}</h2>
          <button
            onClick={onClose}
            disabled={status === 'sending'}
            className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
            aria-label="Close quote form"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {status === 'success' ? (
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You for Your Quote Request!</h3>
            <p className="text-lg text-gray-700 mb-2">
              We're excited to help protect your home and family from pests.
            </p>
            <p className="text-gray-600">
              Our team will contact you within 24 hours to discuss your needs and schedule a free inspection.
            </p>
            <div className="mt-6 p-4 bg-cyan-50 rounded-lg">
              <p className="text-sm text-cyan-900">
                <strong>What happens next?</strong> We'll review your request and call you to confirm details, answer questions, and find a convenient time for your free inspection.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="quote-name" className="block mb-2 font-semibold text-gray-900">Full Name *</label>
              <input
                id="quote-name"
                type="text"
                required
                placeholder="Full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white px-4 py-2 text-gray-900 placeholder:text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label htmlFor="quote-phone" className="block mb-2 font-semibold text-gray-900">Phone Number *</label>
              <input
                id="quote-phone"
                type="tel"
                required
                placeholder="(704) 555-0123"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white px-4 py-2 text-gray-900 placeholder:text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="quote-email" className="block mb-2 font-semibold text-gray-900">Email Address *</label>
            <input
              id="quote-email"
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white px-4 py-2 text-gray-900 placeholder:text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="quote-address" className="block mb-2 font-semibold text-gray-900">Street Address *</label>
              <input
                id="quote-address"
                type="text"
                required
                placeholder="Street address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full bg-white px-4 py-2 text-gray-900 placeholder:text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label htmlFor="quote-city" className="block mb-2 font-semibold text-gray-900">City *</label>
              <input
                id="quote-city"
                type="text"
                required
                placeholder="City"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-white px-4 py-2 text-gray-900 placeholder:text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="quote-service" className="block mb-2 font-semibold text-gray-900">Service Needed *</label>
            <select
              id="quote-service"
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full bg-white px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="general">General Pest Control</option>
              <option value="mosquito">Mosquito Control</option>
              <option value="flea-tick">Flea & Tick Control</option>
              <option value="rodent">Mice & Rodent Control</option>
              <option value="other">Other / Not Sure</option>
            </select>
          </div>

          <div>
            <label htmlFor="quote-details" className="block mb-2 font-semibold text-gray-900">Additional Details</label>
            <textarea
              id="quote-details"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              placeholder="Tell us about your pest problem..."
              className="w-full bg-white px-4 py-2 text-gray-900 placeholder:text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
              <strong>Oops!</strong> Something went wrong. Please try again or call us at <a href="tel:704-728-0204" className="underline font-semibold">704-728-0204</a>.
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex-1 bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Submit Quote Request'}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={status === 'sending'}
              className="px-6 py-3 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Privacy Policy</a> and{' '}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Terms of Service</a> apply.
          </p>
        </form>
        )}
      </div>
    </div>
  );
}
