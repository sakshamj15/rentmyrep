'use client'

import { useState } from 'react'
import { Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    // Build mailto with form data
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0A%0AMessage:%0A${form.message}`
    const subject = encodeURIComponent(form.subject || 'Enquiry from RentMyRep Website')
    window.location.href = `mailto:workwithnikhilnainwani@gmail.com?subject=${subject}&body=${body}` // eslint-disable-line
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section id="contact" className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-6xl w-full border-x border-gray-200 border-dashed px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-4">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628]">Get in Touch</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Have a question or ready to get started? Fill in the form below and we&apos;ll get back to you promptly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-[#0A1628] mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Phone</div>
                    <a href="tel:+919306412332" className="text-sm font-medium text-[#0A1628] hover:text-[#2563EB] transition-colors">
                      +91 93064 12332
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Address</div>
                    <address className="text-sm text-gray-600 not-italic leading-relaxed">
                      811/19, Nirala Nagar,<br />
                      Near SJS Public School,<br />
                      Raebareli, Uttar Pradesh — 229001
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0A1628] rounded-2xl p-6 text-white">
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <p className="text-blue-200/70 text-sm leading-relaxed">
                Monday – Saturday<br />
                9:00 AM – 7:00 PM IST
              </p>
              <p className="text-blue-200/70 text-sm mt-3">
                We typically respond to enquiries within a few hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-white rounded-2xl border border-gray-200 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <CheckCircle className="w-7 h-7 text-[#2563EB]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0A1628] mb-2">Message Sent!</h3>
                <p className="text-sm text-gray-500 max-w-xs">
                  Your mail client should have opened. We&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                  className="mt-6 text-sm text-[#2563EB] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="e.g. Google Workspace Setup"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full text-sm font-medium transition-all disabled:opacity-70"
                >
                  {loading ? 'Opening mail client...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
