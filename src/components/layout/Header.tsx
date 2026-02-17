'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import {
    Search,
    ShoppingCart,
    User,
    Menu,
    X,
    ChevronDown,
    LogOut,
    Package,
    Heart,
    Settings,
    SprayCan,
    Sparkles,
    PenTool,
    Coffee,
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CATEGORIES = [
    { name: 'Housekeeping Materials', slug: 'housekeeping-materials', icon: Sparkles },
    { name: 'Cleaning Chemicals', slug: 'cleaning-chemicals', icon: SprayCan },
    { name: 'Office Stationery', slug: 'office-stationery', icon: PenTool },
    { name: 'Pantry Items', slug: 'pantry-items', icon: Coffee },
];

export default function Header() {
    const { user, isAuthenticated, logout } = useAuth();
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const userMenuRef = useRef<HTMLDivElement>(null);

    // Close user menu when clicking outside
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
                setUserMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const handleLogout = () => {
        logout();
        setUserMenuOpen(false);
        router.push('/auth/login');
    };

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            {/* ---- Top offer bar ---- */}
            <div className="bg-[#1E3A8A] text-white text-xs text-center py-1.5 px-4">
                🎉 Get <span className="font-semibold">45-Day Credit Terms</span> on all orders
                &nbsp;·&nbsp; Free Delivery on orders above ₹5,000
            </div>

            {/* ---- Main header ---- */}
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
                {/* Logo */}
                <Link href="/" className="flex items-center shrink-0">
                    <img
                        src={`${process.env.__NEXT_ROUTER_BASEPATH || ''}/logo.png`}
                        alt="PrimeServe Facility Solutions"
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* Search Bar (desktop) */}
                <div className="hidden md:flex flex-1 max-w-xl mx-4">
                    <div className="relative w-full">
                        <Search className="pointer-events-none absolute left-3 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search for products, brands, SKU..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-10 pr-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition"
                        />
                    </div>
                </div>

                {/* Right actions */}
                <div className="flex items-center gap-2 ml-auto shrink-0">
                    {/* Cart */}
                    <Link
                        href="/cart"
                        className="relative p-2 rounded-lg hover:bg-gray-100 transition"
                        aria-label="Shopping cart"
                    >
                        <ShoppingCart className="h-5 w-5 text-gray-700" />
                        <span className="absolute -top-0.5 -right-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#F59E0B] text-[10px] font-bold text-white">
                            0
                        </span>
                    </Link>

                    {/* Auth section */}
                    {isAuthenticated && user ? (
                        <div className="relative" ref={userMenuRef}>
                            <button
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100 transition"
                            >
                                <div className="h-8 w-8 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white text-sm font-semibold">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <span className="hidden lg:block text-sm font-medium text-gray-700 max-w-[120px] truncate">
                                    {user.name}
                                </span>
                                <ChevronDown className="hidden lg:block h-4 w-4 text-gray-400" />
                            </button>

                            {/* Dropdown */}
                            {userMenuOpen && (
                                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white border border-gray-200 shadow-xl py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="px-4 py-3 border-b border-gray-100">
                                        <p className="text-sm font-semibold text-gray-900">
                                            {user.name}
                                        </p>
                                        <p className="text-xs text-gray-500 truncate">
                                            {user.email}
                                        </p>
                                        {user.isPro && (
                                            <span className="inline-block mt-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-semibold px-2 py-0.5">
                                                PRO
                                            </span>
                                        )}
                                    </div>
                                    <div className="py-1">
                                        <DropdownItem icon={User} label="My Account" href="/account" onClick={() => setUserMenuOpen(false)} />
                                        <DropdownItem icon={Package} label="My Orders" href="/orders" onClick={() => setUserMenuOpen(false)} />
                                        <DropdownItem icon={Heart} label="Wishlist" href="/wishlist" onClick={() => setUserMenuOpen(false)} />
                                        <DropdownItem icon={Settings} label="Settings" href="/settings" onClick={() => setUserMenuOpen(false)} />
                                    </div>
                                    <div className="border-t border-gray-100 py-1">
                                        <button
                                            onClick={handleLogout}
                                            className="flex w-full items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                                        >
                                            <LogOut className="h-4 w-4" /> Sign Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link
                                href="/auth/login"
                                className="hidden sm:inline-flex rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                            >
                                Log In
                            </Link>
                            <Link
                                href="/auth/register"
                                className="rounded-lg bg-[#1E3A8A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#162e6e] transition shadow-sm"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}

                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <X className="h-5 w-5 text-gray-700" />
                        ) : (
                            <Menu className="h-5 w-5 text-gray-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* ---- Category nav (desktop) ---- */}
            <nav className="hidden md:block border-t border-gray-100 bg-gray-50/70">
                <div className="max-w-7xl mx-auto px-4">
                    <ul className="flex items-center gap-1">
                        {CATEGORIES.map((cat) => {
                            const Icon = cat.icon;
                            return (
                                <li key={cat.slug}>
                                    <Link
                                        href={`/category/${cat.slug}`}
                                        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-[#1E3A8A] hover:bg-blue-50 rounded-lg transition"
                                    >
                                        <Icon className="h-4 w-4" />
                                        {cat.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>

            {/* ---- Mobile drawer ---- */}
            {mobileOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white animate-in slide-in-from-top-2 duration-200">
                    {/* Mobile search */}
                    <div className="px-4 py-3">
                        <div className="relative">
                            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-10 pr-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                            />
                        </div>
                    </div>

                    {/* Mobile categories */}
                    <div className="border-t border-gray-100">
                        {CATEGORIES.map((cat) => {
                            const Icon = cat.icon;
                            return (
                                <Link
                                    key={cat.slug}
                                    href={`/category/${cat.slug}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                                >
                                    <Icon className="h-5 w-5 text-gray-400" />
                                    {cat.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </header>
    );
}

// ---- Dropdown item helper ----

function DropdownItem({
    icon: Icon,
    label,
    href,
    onClick,
}: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    href: string;
    onClick?: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
        >
            <Icon className="h-4 w-4 text-gray-400" /> {label}
        </Link>
    );
}
