import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Truck, Clock, MapPin, Package, CheckCircle2 } from 'lucide-react';

export default function ShippingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0f2560] text-white py-20">
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Shipping Information</h1>
                        <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                            Fast, reliable delivery across India. Learn about our shipping options and policies.
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        {/* Delivery options */}
                        <div className="grid sm:grid-cols-3 gap-6 mb-12">
                            {[
                                { icon: Truck, title: 'Standard Delivery', desc: '2-3 business days', sub: 'Free on orders ₹5,000+' },
                                { icon: Clock, title: 'Express Delivery', desc: 'Next business day', sub: '₹199 per order' },
                                { icon: Package, title: 'Same-Day Delivery', desc: 'Order before 12 PM', sub: 'Select cities • ₹299' },
                            ].map((opt) => (
                                <div key={opt.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm text-center">
                                    <div className="mx-auto h-12 w-12 rounded-xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center mb-3">
                                        <opt.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900">{opt.title}</h3>
                                    <p className="text-sm text-[#1E3A8A] font-medium mt-1">{opt.desc}</p>
                                    <p className="text-xs text-gray-500 mt-1">{opt.sub}</p>
                                </div>
                            ))}
                        </div>

                        {/* Policy details */}
                        <div className="prose prose-gray max-w-none">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Policy</h2>
                            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-4">
                                {[
                                    'Orders are processed within 24 hours on business days (Mon–Sat).',
                                    'Delivery timelines start from order confirmation and may vary by location.',
                                    'We currently deliver to 50+ cities across India. Enter your pincode during checkout to verify.',
                                    'Free delivery is available on orders above ₹5,000. Pro plan members get free delivery on all orders.',
                                    'For bulk orders (above ₹50,000), custom delivery schedules can be arranged.',
                                    'Real-time tracking is available via SMS and email once your order is dispatched.',
                                    'Deliveries require a signature from an authorized person at the delivery address.',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                        <p className="text-sm text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
