import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const SECTIONS = [
    { title: '1. Acceptance of Terms', content: 'By accessing or using PrimeServe, you agree to be bound by these Terms of Service. If you are placing orders on behalf of a company, you represent that you have the authority to bind that company to these terms.' },
    { title: '2. Account Registration', content: 'You must register for an account to place orders. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must provide accurate business information including company name, GST number (if applicable), and contact details.' },
    { title: '3. Orders & Pricing', content: 'All prices are listed in Indian Rupees (INR) and are exclusive of GST unless stated otherwise. We reserve the right to modify prices at any time. Orders are subject to acceptance and availability. Bulk pricing tiers are automatically applied based on order quantity.' },
    { title: '4. Credit Terms', content: 'Credit terms are offered at our discretion based on your business profile. Standard accounts receive 45-day credit terms. Failure to pay within the agreed credit period may result in suspension of credit facilities, late payment charges, and/or account suspension.' },
    { title: '5. Delivery', content: 'We make reasonable efforts to deliver within the estimated timelines. Delivery dates are estimates and not guaranteed. Risk of loss passes to you upon delivery. You must inspect goods upon receipt and report any issues within 48 hours.' },
    { title: '6. Returns & Refunds', content: 'Returns are accepted within 7 days of delivery for eligible items as described in our Returns Policy. Refunds are processed within 5-7 business days. We reserve the right to refuse returns that do not meet our return criteria.' },
    { title: '7. Limitation of Liability', content: 'PrimeServe shall not be liable for any indirect, incidental, special, or consequential damages. Our total liability shall not exceed the amount paid by you for the specific order giving rise to the claim.' },
    { title: '8. Governing Law', content: 'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.' },
];

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0f2560] text-white py-16">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold mb-3">Terms of Service</h1>
                        <p className="text-blue-200 text-sm">Last updated: February 2026</p>
                    </div>
                </section>
                <section className="py-12">
                    <div className="max-w-3xl mx-auto px-4 space-y-8">
                        <p className="text-gray-600 leading-relaxed">
                            These Terms of Service govern your use of the PrimeServe B2B marketplace platform. Please read them carefully before using our services.
                        </p>
                        {SECTIONS.map((s) => (
                            <div key={s.title}>
                                <h2 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h2>
                                <p className="text-sm text-gray-600 leading-relaxed">{s.content}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
