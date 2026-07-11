import { X, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteFormModal({ isOpen, onClose }: QuoteFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    serviceType: 'general',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=6LfeCvMsAAAAACOr9IAPU42iKu39uoxV-O5DuovB`;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
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

      await emailjs.send(
        'service_lrhj3zl',
        'template_jrowfkf',
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
        'TFRT3kmtcsoEaopnr'
      );

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', address: '', city: '', serviceType: 'general', message: '' });
      setTimeout(() => { setStatus('idle'); onClose(); }, 60000);

    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setTimeout(() => { setStatus('idle'); }, 5000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={status === 'sending' ? undefined : onClose}>
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl">Get Your Free Quote</h2>
          <button onClick={onClose} disabled={status === 'sending'} className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50">
            <X className="w-6 h-6" />
          </button>
        </div>

        {status === 'success' ? (
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You for Your Quote Request!</h3>
            <p className="text-lg text-gray-700 mb-2">We're excited to help protect your home and family from pests.</p>
            <p className="text-gray-600">Our team will contact you within 24 hours to discuss your needs and schedule a free inspection.</p>
            <div className="mt-6 p-4 bg-cyan-50 rounded-lg">
              <p className="text-sm text-cyan-900"><strong>What happens next?</strong> We'll review your request and call you to confirm details, answer questions, and find a convenient time for your free inspection.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Full Name *</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div>
                <label className="block mb-2">Phone Number *</label>
                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
            </div>
            <div>
              <label className="block mb-2">Email Address *</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Street Address *</label>
                <input type="text" required value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div>
                <label className="block mb-2">City *</label>
                <input type="text" required value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
            </div>
            <div>
              <label className="block mb-2">Service Needed *</label>
              <select value={formData.serviceType} onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option value="general">General Pest Control</option>
                <option value="mosquito">Mosquito Control</option>
                <option value="flea-tick">Flea & Tick Control</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Additional Details</label>
              <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} placeholder="Tell us about your pest problem..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                <strong>Oops!</strong> Something went wrong. Please try again or call us at <a href="tel:704-728-0204" className="underline font-semibold">704-728-0204</a>.
              </div>
            )}
            <div className="flex gap-4 pt-4">
              <button type="submit" disabled={status === 'sending'} className="flex-1 bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'sending' ? 'Sending...' : 'Submit Quote Request'}
              </button>
              <button type="button" onClick={onClose} disabled={status === 'sending'} className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50">
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
