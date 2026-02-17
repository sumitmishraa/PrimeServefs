'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ_SECTIONS = [
    {
        title: 'Ordering & Products',
        items: [
            { q: 'What products does PrimeServe offer?', a: 'We offer a wide range of facility management supplies across four categories: Housekeeping Materials (mops, brooms, dusters, garbage bags), Cleaning Chemicals (disinfectants, floor cleaners, glass cleaners), Office Stationery (pens, paper, filing supplies), and Pantry Items (tea, coffee, snacks, disposables).' },
            { q: 'Is there a minimum order value?', a: 'There is no minimum order value for standard orders. However, free delivery is available on orders above ₹5,000 (or on all orders for Pro plan members).' },
            { q: 'Can I set up recurring orders?', a: 'Yes! You can set up scheduled deliveries on a weekly, bi-weekly, or monthly basis. This feature is available for all registered accounts.' },
        ],
    },
    {
        title: 'Payments & Credit',
        items: [
            { q: 'What payment methods do you accept?', a: 'We accept bank transfers (NEFT/RTGS), UPI, credit/debit cards, and net banking. For credit purchases, invoices are generated with your agreed credit terms.' },
            { q: 'How do credit terms work?', a: 'Standard accounts get 45-day credit terms. Pro plan members enjoy 60-day credit terms. Credit limits are set based on your order history and business profile.' },
            { q: 'Do you provide GST invoices?', a: 'Yes, all orders include proper GST invoices. You can add your GST number during registration or in your account settings.' },
        ],
    },
    {
        title: 'Delivery & Shipping',
        items: [
            { q: 'What are the delivery timelines?', a: 'Standard delivery is 2-3 business days. Same-day delivery is available in select cities for orders placed before 12 PM. Pro plan members get priority fulfillment.' },
            { q: 'Do you deliver pan-India?', a: 'We currently cover 50+ cities across India. Enter your pincode during checkout to check delivery availability in your area.' },
            { q: 'Is delivery free?', a: 'Delivery is free on orders above ₹5,000. Pro plan members enjoy free delivery on all orders regardless of value.' },
        ],
    },
    {
        title: 'Returns & Refunds',
        items: [
            { q: 'What is your return policy?', a: 'We accept returns within 7 days of delivery for damaged, defective, or incorrect items. Products must be unused and in original packaging.' },
            { q: 'How long do refunds take?', a: 'Refunds are processed within 5-7 business days after we receive and inspect the returned items. Credit note refunds are applied to your next invoice.' },
        ],
    },
];

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
            <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition">
                <span className="font-medium text-gray-900">{q}</span>
                {open ? <ChevronUp className="h-5 w-5 text-gray-400 shrink-0" /> : <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />}
            </button>
            {open && (
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed animate-in fade-in">
                    {a}
                </div>
            )}
        </div>
    );
}

export default function FaqsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0f2560] text-white py-20">
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
                        <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                            Quick answers to common questions about ordering, payments, delivery, and more.
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-3xl mx-auto px-4 space-y-10">
                        {FAQ_SECTIONS.map((section) => (
                            <div key={section.title}>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h2>
                                <div className="space-y-3">
                                    {section.items.map((item) => (
                                        <FaqItem key={item.q} q={item.q} a={item.a} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
