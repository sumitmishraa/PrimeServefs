import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Star, CheckCircle2, ArrowRight, Zap, Crown, Shield } from 'lucide-react';

const PLANS = [
    {
        name: 'Standard',
        price: 'Free',
        period: '',
        desc: 'For small offices getting started.',
        color: 'border-gray-200',
        features: ['Access to full catalog', '45-day credit terms', 'Standard delivery', 'Email support', 'Bulk order discounts'],
        cta: 'Current Plan',
        ctaStyle: 'border border-gray-300 text-gray-500 cursor-default',
    },
    {
        name: 'Pro',
        price: '₹2,999',
        period: '/mo',
        desc: 'For growing businesses that need more.',
        color: 'border-[#1E3A8A] ring-2 ring-[#1E3A8A]/20',
        badge: 'Most Popular',
        features: ['Everything in Standard', '60-day credit terms', 'Free delivery on all orders', 'Extra 5% discount', 'Dedicated account manager', 'Priority 24/7 support', '1-year price lock-in'],
        cta: 'Upgrade to Pro',
        ctaStyle: 'bg-[#1E3A8A] text-white hover:bg-[#162e6e]',
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        desc: 'For large organizations with custom needs.',
        color: 'border-gray-200',
        features: ['Everything in Pro', 'Custom credit terms', 'Volume-based pricing', 'API access', 'Multi-location delivery', 'Custom invoicing', 'SLA guarantees'],
        cta: 'Contact Sales',
        ctaStyle: 'border border-[#1E3A8A] text-[#1E3A8A] hover:bg-blue-50',
    },
];

export default function ProPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0f2560] text-white py-20">
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 text-amber-300 px-4 py-1.5 text-xs font-semibold mb-4">
                            <Star className="h-3.5 w-3.5" /> PRO PLAN
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Choose the Right Plan</h1>
                        <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                            Unlock premium benefits, priority support, and exclusive pricing for your business.
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
                        {PLANS.map((plan) => (
                            <div key={plan.name} className={`bg-white rounded-2xl border-2 ${plan.color} p-8 shadow-sm relative flex flex-col`}>
                                {plan.badge && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1E3A8A] text-white text-xs font-semibold px-4 py-1 rounded-full">
                                        {plan.badge}
                                    </span>
                                )}
                                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                                <div className="mt-3 flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    {plan.period && <span className="text-gray-500">{plan.period}</span>}
                                </div>
                                <p className="mt-2 text-sm text-gray-500">{plan.desc}</p>
                                <hr className="my-6 border-gray-200" />
                                <ul className="space-y-3 flex-1">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition ${plan.ctaStyle}`}>
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
