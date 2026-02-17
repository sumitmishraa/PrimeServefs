import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Building2, Users, Target, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0f2560] text-white py-20">
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About PrimeServe</h1>
                        <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                            India&apos;s leading B2B marketplace for facility management supplies.
                            We connect businesses with quality products at competitive prices.
                        </p>
                    </div>
                </section>

                {/* Mission / Vision */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                            <div className="h-12 w-12 rounded-xl bg-blue-100 text-[#1E3A8A] flex items-center justify-center mb-4">
                                <Target className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed">
                                To simplify B2B procurement for facility management by providing a one-stop platform
                                with transparent pricing, flexible credit terms, and reliable delivery — empowering
                                businesses to focus on what matters most.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                            <div className="h-12 w-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-4">
                                <Award className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h2>
                            <p className="text-gray-600 leading-relaxed">
                                To become the most trusted B2B supply partner for every facility in India — from
                                small offices to large enterprises — by offering quality products, exceptional
                                service, and technology-driven convenience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-16 bg-gray-50 border-y border-gray-200">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { value: '500+', label: 'Businesses Served' },
                                { value: '10,000+', label: 'Products Available' },
                                { value: '50+', label: 'Cities Covered' },
                                { value: '99.2%', label: 'Order Fulfillment Rate' },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#1E3A8A]">{stat.value}</p>
                                    <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Core Values</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: Building2, title: 'Reliability', desc: 'Consistent quality and on-time delivery you can count on.' },
                                { icon: Users, title: 'Customer First', desc: 'Every decision starts with how it benefits our business partners.' },
                                { icon: CheckCircle2, title: 'Transparency', desc: 'Clear pricing, honest communication, no hidden fees.' },
                            ].map((v) => (
                                <div key={v.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                                    <v.icon className="h-8 w-8 text-[#1E3A8A] mb-3" />
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{v.title}</h3>
                                    <p className="text-sm text-gray-500">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-[#1E3A8A] text-white text-center">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-3">Partner With Us</h2>
                        <p className="text-blue-200 mb-8">Join 500+ businesses that trust PrimeServe for their facility supply needs.</p>
                        <Link href="/auth/register" className="inline-flex items-center gap-2 rounded-xl bg-white text-[#1E3A8A] px-8 py-3.5 font-semibold hover:bg-blue-50 transition">
                            Create Free Account <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
