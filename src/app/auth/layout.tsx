import Link from 'next/link';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
            {/* Slim top bar */}
            <div className="w-full bg-[#1E3A8A] py-2">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <img
                            src={`${process.env.__NEXT_ROUTER_BASEPATH || ''}/logo.png`}
                            alt="PrimeServe Facility Solutions"
                            className="h-8 w-auto object-contain brightness-0 invert"
                        />
                    </Link>
                    <span className="text-blue-200 text-xs hidden sm:block">
                        B2B Facility Management Marketplace
                    </span>
                </div>
            </div>

            {/* Content */}
            <main className="flex-1 flex flex-col items-center justify-center py-10 px-4">
                {children}
            </main>

            {/* Footer */}
            <footer className="py-4 text-center text-xs text-gray-400 space-x-3">
                <Link href="/privacy" className="hover:text-gray-600">
                    Privacy Policy
                </Link>
                <span>·</span>
                <Link href="/terms" className="hover:text-gray-600">
                    Terms of Service
                </Link>
                <span>·</span>
                <Link href="/contact" className="hover:text-gray-600">
                    Help
                </Link>
            </footer>
        </div>
    );
}
