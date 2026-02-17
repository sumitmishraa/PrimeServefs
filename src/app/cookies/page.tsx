import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const SECTIONS = [
    { title: '1. What Are Cookies?', content: 'Cookies are small text files stored on your device when you visit our website. They help us recognize you, remember your preferences, and improve your browsing experience.' },
    { title: '2. Essential Cookies', content: 'These cookies are necessary for the website to function properly. They enable core features such as security, account authentication, and shopping cart functionality. You cannot opt out of essential cookies.' },
    { title: '3. Analytics Cookies', content: 'We use analytics cookies to understand how visitors interact with our website. This helps us improve site performance and user experience. Data collected is aggregated and anonymized.' },
    { title: '4. Preference Cookies', content: 'These cookies remember your settings and preferences, such as language, region, and display options, to provide a personalized experience on future visits.' },
    { title: '5. Marketing Cookies', content: 'Marketing cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. You can opt out of marketing cookies without affecting site functionality.' },
    { title: '6. Managing Cookies', content: 'You can manage or delete cookies through your browser settings. Please note that disabling certain cookies may limit your ability to use some features of our platform. Most browsers accept cookies by default.' },
    { title: '7. Updates', content: 'We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of the site constitutes acceptance of the updated policy.' },
];

export default function CookiesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0f2560] text-white py-16">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold mb-3">Cookie Policy</h1>
                        <p className="text-blue-200 text-sm">Last updated: February 2026</p>
                    </div>
                </section>
                <section className="py-12">
                    <div className="max-w-3xl mx-auto px-4 space-y-8">
                        <p className="text-gray-600 leading-relaxed">
                            This Cookie Policy explains how PrimeServe uses cookies and similar technologies on our website.
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
