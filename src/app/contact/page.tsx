import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0f2560] text-white py-20">
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
                        <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                            Have questions? Our team is here to help you with your procurement needs.
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                            <div className="space-y-6">
                                {[
                                    { icon: Phone, label: 'Phone', value: '+91 1800 123 4567', sub: 'Toll-free, Mon–Sat' },
                                    { icon: Mail, label: 'Email', value: 'support@primeserve.in', sub: 'We reply within 4 hours' },
                                    { icon: MapPin, label: 'Office', value: 'PrimeServe HQ, Andheri East', sub: 'Mumbai, Maharashtra 400069' },
                                    { icon: Clock, label: 'Hours', value: 'Mon – Sat: 9 AM – 7 PM', sub: 'Sunday: Closed' },
                                ].map((c) => (
                                    <div key={c.label} className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center shrink-0">
                                            <c.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{c.value}</p>
                                            <p className="text-sm text-gray-500">{c.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                            <h2 className="text-xl font-bold text-gray-900 mb-5">Send us a Message</h2>
                            <form className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input type="email" placeholder="john@company.com" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                                    <input type="text" placeholder="Your Company Name" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input type="text" placeholder="How can we help?" className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea rows={4} placeholder="Tell us more..." className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 resize-none" />
                                </div>
                                <button type="button" className="w-full rounded-lg bg-[#1E3A8A] py-3 text-sm font-semibold text-white hover:bg-[#162e6e] transition">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
