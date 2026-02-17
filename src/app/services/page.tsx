import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Sparkles, SprayCan, PenTool, Coffee, Truck, CreditCard, ShieldCheck, Headphones } from 'lucide-react';

const SERVICES = [
    { icon: Sparkles, title: 'Housekeeping Supply', desc: 'Complete range of mops, brooms, dusters, garbage bags, and cleaning cloths for commercial spaces.' },
    { icon: SprayCan, title: 'Cleaning Chemical Supply', desc: 'Industrial-grade disinfectants, floor cleaners, glass cleaners, and specialty chemicals.' },
    { icon: PenTool, title: 'Office Stationery', desc: 'Pens, paper, filing systems, desk organizers, and all office essentials in bulk.' },
    { icon: Coffee, title: 'Pantry Management', desc: 'Tea, coffee, snacks, disposable cups, and full pantry restocking services.' },
    { icon: Truck, title: 'Scheduled Delivery', desc: 'Set up recurring orders with automatic weekly or monthly deliveries to your facility.' },
    { icon: CreditCard, title: 'Credit Procurement', desc: 'Flexible 45-day credit terms (60 days for Pro members) with transparent invoicing.' },
    { icon: ShieldCheck, title: 'Quality Assurance', desc: 'All products sourced from authorized brands with quality certifications and warranties.' },
    { icon: Headphones, title: 'Dedicated Support', desc: 'Dedicated account manager and priority support for Pro plan members.' },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0f2560] text-white py-20">
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
                        <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                            End-to-end facility supply solutions tailored for businesses of all sizes.
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SERVICES.map((s) => (
                            <div key={s.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                                <div className="h-12 w-12 rounded-xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center mb-4">
                                    <s.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
