import Link from 'next/link';
import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Mail,
    Phone,
    MapPin,
} from 'lucide-react';

const FOOTER_LINKS = {
    shop: [
        { label: 'Housekeeping Materials', href: '/category/housekeeping-materials' },
        { label: 'Cleaning Chemicals', href: '/category/cleaning-chemicals' },
        { label: 'Office Stationery', href: '/category/office-stationery' },
        { label: 'Pantry Items', href: '/category/pantry-items' },
        { label: 'View All Products', href: '/products' },
    ],
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Services', href: '/services' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Pro Plan', href: '/pro' },
        { label: 'Careers', href: '/careers' },
    ],
    support: [
        { label: 'Help Center', href: '/help' },
        { label: 'FAQs', href: '/faqs' },
        { label: 'Shipping Info', href: '/shipping' },
        { label: 'Returns & Refunds', href: '/returns' },
        { label: 'Contact Support', href: '/contact' },
    ],
};

const SOCIALS = [
    { label: 'LinkedIn', icon: Linkedin, href: '#' },
    { label: 'Twitter', icon: Twitter, href: '#' },
    { label: 'Facebook', icon: Facebook, href: '#' },
    { label: 'Instagram', icon: Instagram, href: '#' },
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* ---- Main footer ---- */}
            <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">
                {/* Logo & Branding */}
                <div className="mb-10 pb-8 border-b border-gray-800">
                    <Link href="/" className="inline-block">
                        <img
                            src={`${process.env.__NEXT_ROUTER_BASEPATH || ''}/logo.png`}
                            alt="PrimeServe Facility Solutions"
                            className="h-12 w-auto object-contain brightness-0 invert"
                        />
                    </Link>
                    <p className="mt-3 text-sm text-gray-400 max-w-xs leading-relaxed">
                        India&apos;s leading B2B marketplace for facility management supplies. Trusted by 5,000+ businesses.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Column 1: Shop */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Shop
                        </h3>
                        <ul className="space-y-2">
                            {FOOTER_LINKS.shop.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-gray-400 hover:text-white transition"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            {FOOTER_LINKS.company.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-gray-400 hover:text-white transition"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Support
                        </h3>
                        <ul className="space-y-2">
                            {FOOTER_LINKS.support.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-gray-400 hover:text-white transition"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Connect */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Connect
                        </h3>

                        {/* Contact info */}
                        <ul className="space-y-3 mb-5">
                            <li className="flex items-start gap-2 text-sm">
                                <Phone className="h-4 w-4 mt-0.5 text-gray-500" />
                                <span>+91 1800 123 4567</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm">
                                <Mail className="h-4 w-4 mt-0.5 text-gray-500" />
                                <span>support@primeserve.in</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm">
                                <MapPin className="h-4 w-4 mt-0.5 text-gray-500" />
                                <span>Mumbai, Maharashtra, India</span>
                            </li>
                        </ul>

                        {/* Social icons */}
                        <div className="flex items-center gap-3">
                            {SOCIALS.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        aria-label={s.label}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:bg-[#1E3A8A] hover:text-white transition"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Newsletter */}
                        <div className="mt-5">
                            <p className="text-xs text-gray-500 mb-2">
                                Subscribe to our newsletter
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 rounded-lg bg-gray-800 border border-gray-700 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                                />
                                <button className="rounded-lg bg-[#1E3A8A] px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">
                                    Go
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---- Bottom bar ---- */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} PrimeServe. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                        <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                            Terms of Service
                        </Link>
                        <Link href="/cookies" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
