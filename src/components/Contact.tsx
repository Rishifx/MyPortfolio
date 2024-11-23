import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(''); // Feedback to the user

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(''); // Reset result message

    try {
      // Create FormData for the Web3Forms API
      const formPayload = new FormData();
      formPayload.append('access_key', '55b48334-75e1-4c97-9d29-f7c5324f7538'); // Replace with your actual key
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload, // Web3Forms expects FormData directly
      });

      const result = await response.json();
      console.log('Web3Forms Response:', result);

      if (result.success) {
        setResult('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setResult(result.message || 'Failed to send the message. Try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred while sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black/90 to-green-900/10 animate-gradient-slow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-green-400" />
                  <a href="mailto:rishi.pathak193@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    rishi.pathak193@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">+91 9340702348</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">Rewa Madhya Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-green-400/50 focus:ring-1 focus:ring-green-400/50 transition-all duration-300"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-green-400/50 focus:ring-1 focus:ring-green-400/50 transition-all duration-300"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-green-400/50 focus:ring-1 focus:ring-green-400/50 transition-all duration-300"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-8 py-4 rounded-lg bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold flex items-center justify-center gap-2 ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-green-500/20'
              } transition-all duration-300`}
            >
              {loading ? 'Sending...' : <><Send className="w-5 h-5" />Send Message</>}
            </button>
            {/* Display Result */}
            {result && <p className="text-center text-white mt-4">{result}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
