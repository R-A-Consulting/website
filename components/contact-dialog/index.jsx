"use client"
import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, X, Check, CheckCircle } from 'lucide-react';

const ContactDialog = ({ isOpen, onClose }) => {
  const [contactMethod, setContactMethod] = useState('phone'); // Default to phone
  const [formData, setFormData] = useState({
    phone: '+91',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

  // Auto-close after 10 seconds when showing success
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        handleClose();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

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

    try {
      const submissionData = {
        contactMethod,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        message: formData.message
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        // Reset form after showing success
        setTimeout(() => {
          resetDialog();
        }, 500);
      } else {
        alert('Error: ' + result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Error: Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
    if (showSuccess) {
      setShowSuccess(false);
    } else {
      resetDialog();
    }
    onClose();
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    resetDialog();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={showSuccess ? handleSuccessClose : handleClose}
      />

      {/* Dialog */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        {/* <div className="flex items-center justify-between p-6 py-3 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">
            Get In Touch
          </h2>
          <button
            onClick={showSuccess ? handleSuccessClose : handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div> */}

        {/* Content */}
        <div className="p-6">
          <X className="w-5 h-5 text-gray-500 absolute top-5 right-5" onClick={showSuccess ? handleSuccessClose : handleClose} />

          {showSuccess ? (
            /* Success Message */
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Thank You!
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your message has been sent successfully. We'll get back to you soon.
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-xs text-gray-500">
                  Auto-closing in <span className="font-medium text-primary">10 seconds</span>
                </div>
                <button
                  onClick={handleSuccessClose}
                  className="w-full bg-primary hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  Close Now
                </button>
              </div>
            </div>
          ) : (
            /* Contact Form */
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
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-primary hover:bg-red-50'
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
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-primary hover:bg-red-50'
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
                  className={`w-full p-4 py-3 text-lg font-medium bg-slate-100 border-0 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200 ${
                    contactMethod === 'email' ? 'placeholder:text-gray-400' : 'placeholder:text-gray-400'
                  }`}
                  placeholder={contactMethod === 'email' ? 'someone@example.com' : '+91 98765 43210'}
                  style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    letterSpacing: contactMethod === 'email' ? '0.5px' : '1px'
                  }}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
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
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:bg-red-50'
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
                  className="w-full px-3 py-2 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us more about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-red-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactDialog;
