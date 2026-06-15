import { X } from 'lucide-react';
import { useState } from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LegalModal({ isOpen, onClose }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
          <h2 className="text-2xl font-bold text-gray-900">Legal</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <div className="flex border-b border-gray-200 flex-shrink-0">
          <button onClick={() => setActiveTab('privacy')} className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'privacy' ? 'border-b-2 border-cyan-500 text-cyan-600' : 'text-gray-500 hover:text-gray-700'}`}>
            Privacy Policy
          </button>
          <button onClick={() => setActiveTab('terms')} className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'terms' ? 'border-b-2 border-cyan-500 text-cyan-600' : 'text-gray-500 hover:text-gray-700'}`}>
            Terms & Conditions
          </button>
        </div>
        <div className="overflow-y-auto p-6 text-gray-700 text-sm leading-relaxed space-y-4">
          {activeTab === 'privacy' ? (
            <>
              <p className="text-xs text-gray-400">Last updated: June 2025</p>
              <h3 className="text-lg font-bold text-gray-900">Privacy Policy</h3>
              <p>Selke Pest Control ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>selkepestcontrol.com</strong> or contact us for services.</p>
              <h4 className="font-bold text-gray-900">Information We Collect</h4>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name, phone number, email address, and home address when you request a quote or contact us</li>
                <li>Information about your pest control needs and property</li>
                <li>Website usage data (pages visited, time on site) via standard analytics tools</li>
              </ul>
              <h4 className="font-bold text-gray-900">How We Use Your Information</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>To provide pest control services and respond to your inquiries</li>
                <li>To schedule appointments and send service reminders</li>
                <li>To send you text messages and communications you have opted into</li>
                <li>To improve our website and customer experience</li>
              </ul>
              <h4 className="font-bold text-gray-900">SMS / Text Messaging</h4>
              <p>When you provide your phone number and consent to receive text messages from Selke Pest Control, you agree to receive SMS communications related to your service, appointments, and account. <strong>Mobile information and opt-in consent will not be shared with third parties or affiliates for marketing or promotional purposes.</strong> All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
              <h4 className="font-bold text-gray-900">Sharing of Information</h4>
              <p>We do not sell, trade, rent, or otherwise share your personal information with third parties for their marketing purposes. We may share information with trusted service providers who assist us in operating our business (such as our CRM software), subject to confidentiality agreements.</p>
              <h4 className="font-bold text-gray-900">Data Security</h4>
              <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
              <h4 className="font-bold text-gray-900">Your Rights</h4>
              <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at <strong>sales@selkepestcontrol.com</strong> or <strong>704-728-0204</strong>.</p>
              <h4 className="font-bold text-gray-900">Contact Us</h4>
              <p>Selke Pest Control<br />Mooresville, North Carolina<br />Phone: 704-728-0204<br />Email: sales@selkepestcontrol.com</p>
            </>
          ) : (
            <>
              <p className="text-xs text-gray-400">Last updated: June 2025</p>
              <h3 className="text-lg font-bold text-gray-900">Terms & Conditions</h3>
              <p>By using the website <strong>selkepestcontrol.com</strong> or engaging our services, you agree to the following Terms and Conditions. Please read them carefully.</p>
              <h4 className="font-bold text-gray-900">Services</h4>
              <p>Selke Pest Control provides residential and commercial pest control services including general pest control, mosquito control, and flea & tick treatment in the Charlotte Metro area of North Carolina.</p>
              <h4 className="font-bold text-gray-900">SMS Text Messaging Program</h4>
              <p><strong>Program Name:</strong> Selke Pest Control SMS Communications</p>
              <p><strong>Program Description:</strong> By opting in to receive text messages from Selke Pest Control, you consent to receive SMS messages regarding appointment scheduling, service reminders, quotes, follow-ups, and customer support.</p>
              <p><strong>Message Frequency:</strong> Message frequency varies. You may receive up to 4 messages per month depending on your service schedule and account activity.</p>
              <p><strong>Message & Data Rates:</strong> Message and data rates may apply depending on your mobile carrier and plan.</p>
              <h4 className="font-bold text-gray-900">How to Opt Out of Text Messages</h4>
              <p>You may opt out of receiving text messages at any time by replying <strong>STOP</strong> to any message you receive from us. After opting out, you will receive one final confirmation message and no further SMS messages will be sent. To re-enroll, reply <strong>START</strong>.</p>
              <h4 className="font-bold text-gray-900">Help</h4>
              <p>For help, reply <strong>HELP</strong> to any text message or contact us directly at <strong>704-728-0204</strong> or <strong>sales@selkepestcontrol.com</strong>.</p>
              <h4 className="font-bold text-gray-900">Carrier Disclaimer</h4>
              <p><strong>Carriers are not liable for delayed or undelivered messages.</strong></p>
              <h4 className="font-bold text-gray-900">Selke Guarantee</h4>
              <p>If you experience any pest issues between scheduled quarterly treatments, Selke Pest Control will return to re-treat your property at no additional charge, subject to your active service agreement.</p>
              <h4 className="font-bold text-gray-900">Limitation of Liability</h4>
              <p>Selke Pest Control is not liable for damages resulting from misuse of services, failure to follow preparation instructions, or circumstances beyond our control. Our liability is limited to the cost of the service provided.</p>
              <h4 className="font-bold text-gray-900">Privacy</h4>
              <p>Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>
              <h4 className="font-bold text-gray-900">Contact Us</h4>
              <p>Selke Pest Control<br />Mooresville, North Carolina<br />Phone: 704-728-0204<br />Email: sales@selkepestcontrol.com</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
