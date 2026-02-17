'use client';

import { useState } from 'react';
import {
    CreditCard,
    Truck,
    ShieldCheck,
    BadgePercent,
    CheckCircle2,
} from 'lucide-react';

const TABS = [
    {
        id: 'credit',
        label: 'Flexible Credit',
        icon: CreditCard,
        heading: 'Flexible Credit & Payment Terms',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=560&h=420&fit=crop&q=80',
        badge: { text: 'Up to 60-day credit for Pro members', position: 'top-right' as const },
        floatingCard: { text: 'No upfront cost on qualifying B2B orders across all categories.' },
        points: [
            'Get 45-day credit terms on every order — no questions asked',
            'Pro members enjoy extended 60-day credit periods',
            'No upfront payment required on qualifying orders above ₹5,000',
            'Simple monthly invoicing with GST-compliant billing',
            'Dedicated payment support for hassle-free reconciliation',
            'Multiple payment modes: UPI, NEFT, credit cards, and cheques',
        ],
    },
    {
        id: 'delivery',
        label: 'Fast Delivery',
        icon: Truck,
        heading: 'Fast & Free Pan-India Delivery',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=560&h=420&fit=crop&q=80',
        badge: { text: 'Same-day delivery in 15+ metro cities', position: 'top-right' as const },
        floatingCard: { text: 'Real-time tracking & dedicated logistics support for every shipment.' },
        points: [
            'Free delivery on all orders above ₹5,000 across India',
            'Same-day delivery available in Delhi, Mumbai, Bangalore & more',
            'Real-time shipment tracking with SMS & email updates',
            'Careful packaging to ensure zero damage during transit',
            'Scheduled delivery slots for large or recurring orders',
            'Dedicated logistics team for priority enterprise shipments',
        ],
    },
    {
        id: 'discounts',
        label: 'Bulk Discounts',
        icon: BadgePercent,
        heading: 'Volume-Based Pricing & Bulk Savings',
        image: 'https://images.unsplash.com/photo-1553729459-uj1ef3752bf5?w=560&h=420&fit=crop&q=80',
        badge: { text: 'Save up to 25% on bulk orders', position: 'top-right' as const },
        floatingCard: { text: 'Tiered pricing that rewards every rupee you spend with us.' },
        points: [
            'Automatic tiered discounts — the more you buy, the more you save',
            'Up to 25% off on bulk orders across all product categories',
            'Special negotiated pricing for enterprise and annual contracts',
            'Price lock-in guarantee for Pro members — no surprise hikes',
            'Transparent pricing with no hidden charges or service fees',
            'Custom quotes available for orders above ₹1,00,000',
        ],
    },
    {
        id: 'quality',
        label: 'Quality Assurance',
        icon: ShieldCheck,
        heading: 'Certified Quality & Trusted Brands',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=560&h=420&fit=crop&q=80',
        badge: { text: '100% authentic, certified products only', position: 'top-right' as const },
        floatingCard: { text: 'Every product comes with quality certification & easy returns.' },
        points: [
            'All products sourced directly from authorized brands and manufacturers',
            'Quality certification and safety data sheets for every product',
            'Rigorous quality checks before dispatch — zero defect policy',
            'Hassle-free 7-day return and replacement policy',
            'ISO-compliant warehousing and supply chain processes',
            'Dedicated quality team to handle escalations within 24 hours',
        ],
    },
];

export default function WhyChooseUs() {
    const [activeTab, setActiveTab] = useState(0);
    const tab = TABS[activeTab];
    const TabIcon = tab.icon;

    return (
        <section className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1a3578] to-[#0f2560]">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZ2LTZoNnptMC0zMHY2aC02VjRoNnptMzAgMzB2NmgtNnYtNmg2em0wLTMwdjZoLTZWNGg2ek02IDM0djZIMHYtNmg2em0wLTMwdjZIMFY0aDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />

            <div className="relative max-w-7xl mx-auto px-4">
                {/* Section header */}
                <div className="mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Why Businesses Choose PrimeServe
                    </h2>
                </div>

                {/* Tab navigation */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {TABS.map((t, i) => {
                        const Icon = t.icon;
                        const isActive = i === activeTab;
                        return (
                            <button
                                key={t.id}
                                onClick={() => setActiveTab(i)}
                                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
                                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                                        : 'bg-white/10 text-blue-200 hover:bg-white/20 border border-white/10'
                                    }`}
                            >
                                <Icon className="h-4 w-4" />
                                {t.label}
                            </button>
                        );
                    })}
                </div>

                {/* Content area — 2 columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Left: Heading + bullet points */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-1 w-6 rounded-full bg-emerald-400" />
                            <h3 className="text-xl sm:text-2xl font-bold text-white">
                                {tab.heading}
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {tab.points.map((point, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 text-blue-100/90"
                                    style={{ animationDelay: `${i * 60}ms` }}
                                >
                                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span className="text-sm sm:text-[15px] leading-relaxed">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Image with floating badges */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                            <img
                                src={tab.image}
                                alt={tab.heading}
                                className="w-full h-[340px] sm:h-[380px] object-cover"
                            />
                        </div>

                        {/* Floating badge — top right */}
                        <div className="absolute -top-4 -right-2 sm:right-4 bg-emerald-500 text-white rounded-xl px-4 py-2.5 shadow-xl shadow-emerald-500/30 max-w-[220px]">
                            <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                                <span className="text-xs sm:text-sm font-semibold leading-snug">
                                    {tab.badge.text}
                                </span>
                            </div>
                        </div>

                        {/* Floating card — bottom */}
                        <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-5 py-3.5 shadow-xl">
                            <div className="flex items-start gap-3">
                                <div className="h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                                    <TabIcon className="h-4 w-4 text-emerald-400" />
                                </div>
                                <p className="text-sm text-blue-100 leading-relaxed">
                                    {tab.floatingCard.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
