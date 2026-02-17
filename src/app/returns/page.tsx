import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { RotateCcw, Clock, Package, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ReturnsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0f2560] text-white py-20">
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Returns & Refunds</h1>
                        <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                            Hassle-free returns within 7 days. Your satisfaction is our priority.
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        {/* Process steps */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Returns Work</h2>
                        <div className="grid sm:grid-cols-4 gap-4 mb-12">
                            {[
                                { step: '1', icon: AlertCircle, title: 'Report Issue', desc: 'Raise a return request within 7 days of delivery.' },
                                { step: '2', icon: Package, title: 'Pack Items', desc: 'Pack items in original packaging for pickup.' },
                                { step: '3', icon: RotateCcw, title: 'Free Pickup', desc: 'We arrange a free pickup from your address.' },
                                { step: '4', icon: Clock, title: 'Get Refund', desc: 'Refund processed in 5-7 business days.' },
                            ].map((s) => (
                                <div key={s.step} className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm text-center relative">
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1E3A8A] text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">{s.step}</span>
                                    <s.icon className="h-8 w-8 text-[#1E3A8A] mx-auto mb-2 mt-2" />
                                    <h3 className="font-semibold text-gray-900 text-sm">{s.title}</h3>
                                    <p className="text-xs text-gray-500 mt-1">{s.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Eligible / Not eligible */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl border border-green-200 p-6">
                                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" /> Eligible for Return
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {['Damaged or defective products', 'Incorrect items delivered', 'Missing items from order', 'Expired products (chemicals/pantry)', 'Quality not matching description'].map((item) => (
                                        <li key={item} className="flex items-start gap-2"><span className="text-green-500 mt-1">•</span>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white rounded-2xl border border-red-200 p-6">
                                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <AlertCircle className="h-5 w-5 text-red-500" /> Not Eligible
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {['Products used or opened (unless defective)', 'Returns requested after 7 days', 'Custom or special-order items', 'Products without original packaging', 'Change of mind (unless sealed)'].map((item) => (
                                        <li key={item} className="flex items-start gap-2"><span className="text-red-500 mt-1">•</span>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
