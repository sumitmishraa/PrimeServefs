import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, MessageCircle, Phone, FileText, Truck, CreditCard, Shield, RotateCcw } from 'lucide-react';

const TOPICS = [
    { icon: FileText, title: 'Getting Started', desc: 'Account setup, first order, and navigation basics.', href: '#' },
    { icon: CreditCard, title: 'Payments & Credit', desc: 'Invoicing, credit terms, payment methods, and GST.', href: '#' },
    { icon: Truck, title: 'Orders & Delivery', desc: 'Track orders, delivery schedules, and shipping policies.', href: '#' },
    { icon: RotateCcw, title: 'Returns & Refunds', desc: 'Return eligibility, process, and refund timelines.', href: '/returns' },
    { icon: Shield, title: 'Account Security', desc: 'Password reset, two-factor auth, and account safety.', href: '#' },
    { icon: MessageCircle, title: 'Pro Plan Support', desc: 'Billing, upgrades, and dedicated manager queries.', href: '/pro' },
];

export default function HelpPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0f2560] text-white py-20">
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Help Center</h1>
                        <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8">
                            Find answers to your questions or reach out to our support team.
                        </p>
                        <div className="max-w-md mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input type="text" placeholder="Search help articles..." className="w-full rounded-xl bg-white text-gray-900 pl-12 pr-4 py-3.5 text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TOPICS.map((t) => (
                            <Link key={t.title} href={t.href} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-[#1E3A8A]/30 transition group">
                                <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center mb-3">
                                    <t.icon className="h-5 w-5" />
                                </div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-[#1E3A8A] transition">{t.title}</h3>
                                <p className="mt-1 text-sm text-gray-500">{t.desc}</p>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="py-12 bg-gray-50 border-t border-gray-200">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Still need help?</h2>
                        <p className="text-gray-500 mb-6">Our support team is available Mon–Sat, 9 AM to 7 PM.</p>
                        <div className="flex justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#1E3A8A] text-white px-6 py-3 text-sm font-semibold hover:bg-[#162e6e] transition">
                                <MessageCircle className="h-4 w-4" /> Contact Support
                            </Link>
                            <a href="tel:+911800123456" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white text-gray-700 px-6 py-3 text-sm font-medium hover:bg-gray-50 transition">
                                <Phone className="h-4 w-4" /> Call Us
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
