"use client"
import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, X, Check } from 'lucide-react';

const ContactDialog = ({ isOpen, onClose }) => {
  const [contactMethod, setContactMethod] = useState('phone'); // Default to phone
  const [formData, setFormData] = useState({
    phone: '+91',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneInputRef = useRef(null);

  const services = [
    'Web Development',
    'Mobile App Development',
    'AI/ML Solutions',
    'Cloud Migration',
    'Automation',
    'Consulting',
    'Other'
  ];

  // Focus phone input when dialog opens
  useEffect(() => {
    if (isOpen && phoneInputRef.current) {
      setTimeout(() => {
        phoneInputRef.current.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceSelect = (service) => {
    setFormData(prev => ({
      ...prev,
      service
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the data to your backend
    // For now, we'll just simulate a submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you! We\'ll get back to you soon.');
      onClose();
      // Reset form
      setContactMethod('phone');
      setFormData({
        phone: '+91',
        email: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const resetDialog = () => {
    setContactMethod('phone');
    setFormData({
      phone: '+91',
      email: '',
      service: '',
      message: ''
    });
  };

  const handleClose = () => {
    resetDialog();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Dialog */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        {/* <div className="flex items-center justify-between p-6 py-3 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">
            Get In Touch
          </h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div> */}

        {/* Content */}
        <div className="p-6">
          <X className="w-5 h-5 text-gray-500 absolute top-5 right-5" onClick={handleClose} />
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Method Selection - Button Group */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Preferred Contact Method
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setContactMethod('email')}
                  className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors duration-200 flex items-center gap-2 ${
                    contactMethod === 'email'
                      ? 'bg-[#ff0708] text-white border-[#ff0708]'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-[#ff0708] hover:bg-red-50'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => setContactMethod('phone')}
                  className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors duration-200 flex items-center gap-2 ${
                    contactMethod === 'phone'
                      ? 'bg-[#ff0708] text-white border-[#ff0708]'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-[#ff0708] hover:bg-red-50'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  Phone
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">{contactMethod === 'email' ? 'Email Address *' : 'Phone Number *'}</label>
              <input
                ref={contactMethod === 'phone' ? phoneInputRef : null}
                type={contactMethod === 'email' ? 'email' : 'tel'}
                required
                value={contactMethod === 'email' ? (formData.email || '') : formData.phone}
                onChange={(e) => handleInputChange(contactMethod === 'email' ? 'email' : 'phone', e.target.value)}
                className={`w-full p-4 py-3 text-lg font-medium bg-slate-100 border-0 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#ff0708] focus:outline-none transition-all duration-200 ${
                  contactMethod === 'email' ? 'placeholder:text-gray-400' : 'placeholder:text-gray-400'
                }`}
                placeholder={contactMethod === 'email' ? 'someone@example.com' : '+91 98765 43210'}
                style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  letterSpacing: contactMethod === 'email' ? '0.5px' : '1px'
                }}
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff0708]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
            </div>

            {/* Service Selection - Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Interests
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map(service => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServiceSelect(service)}
                    className={`px-3 py-2 text-sm font-medium rounded-full border transition-colors duration-200 ${
                      formData.service === service
                        ? 'bg-[#ff0708] text-white border-[#ff0708]'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#ff0708] hover:bg-red-50'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="w-full px-3 py-2 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-[#ff0708] focus:border-transparent resize-none"
                placeholder="Tell us more about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#ff0708] hover:bg-[#e00607] disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  Send Request
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactDialog;
