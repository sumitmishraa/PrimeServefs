import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const SECTIONS = [
    { title: '1. Information We Collect', content: 'We collect information you provide directly to us, such as your name, email address, company name, phone number, GST number, and shipping address when you register for an account, place an order, or contact us. We also automatically collect certain information when you use our platform, including your IP address, browser type, and usage data.' },
    { title: '2. How We Use Your Information', content: 'We use your information to process orders, manage your account, communicate with you about orders and promotions, provide customer support, and improve our services. We also use aggregated, anonymized data for analytics and business insights.' },
    { title: '3. Information Sharing', content: 'We do not sell your personal information. We may share your information with delivery partners to fulfill orders, payment processors for transactions, and as required by law. All third-party partners are bound by strict data protection agreements.' },
    { title: '4. Data Security', content: 'We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your personal information. Access to personal data is restricted to authorized personnel only.' },
    { title: '5. Cookies', content: 'We use cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyze site traffic. You can manage cookie preferences through your browser settings.' },
    { title: '6. Data Retention', content: 'We retain your personal information for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time by contacting our support team.' },
    { title: '7. Your Rights', content: 'You have the right to access, correct, update, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, contact us at privacy@primeserve.in.' },
    { title: '8. Contact Us', content: 'If you have questions about this Privacy Policy, please contact us at privacy@primeserve.in or call +91 1800 123 4567.' },
];

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0f2560] text-white py-16">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
                        <p className="text-blue-200 text-sm">Last updated: February 2026</p>
                    </div>
                </section>
                <section className="py-12">
                    <div className="max-w-3xl mx-auto px-4 space-y-8">
                        <p className="text-gray-600 leading-relaxed">
                            PrimeServe (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our B2B marketplace platform.
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
