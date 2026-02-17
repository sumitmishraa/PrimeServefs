'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/hooks/useAuth';
import {
    User,
    Building2,
    Phone,
    Mail,
    FileText,
    Briefcase,
    Shield,
    Calendar,
    Edit3,
} from 'lucide-react';

export default function AccountPage() {
    const { user, isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return (
            <>
                <Header />
                <main className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1E3A8A]" />
                </main>
                <Footer />
            </>
        );
    }

    if (!isAuthenticated || !user) {
        return (
            <>
                <Header />
                <main className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <div className="text-center">
                        <User className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Please log in</h2>
                        <p className="text-gray-500 mb-6">You need to be logged in to view your account.</p>
                        <Link
                            href="/auth/login"
                            className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#162e6e] transition"
                        >
                            Log In
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    const fields = [
        { icon: User, label: 'Full Name', value: user.name },
        { icon: Mail, label: 'Email Address', value: user.email },
        { icon: Phone, label: 'Phone Number', value: user.phone || 'Not provided' },
        { icon: Building2, label: 'Company / Business Name', value: user.company || 'Not provided' },
        { icon: FileText, label: 'GST Number', value: user.gstNumber || 'Not provided' },
        { icon: Briefcase, label: 'Business Type', value: user.businessType || 'Not specified' },
        { icon: Calendar, label: 'Member Since', value: user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : 'N/A' },
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 py-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-gray-500 mb-6">
                        <Link href="/" className="hover:text-blue-700">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-gray-900 font-medium">My Account</span>
                    </nav>

                    {/* Profile Header */}
                    <div className="bg-gradient-to-r from-[#1E3A8A] to-[#2d4ea3] rounded-2xl p-6 sm:p-8 mb-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                        <div className="relative flex items-center gap-5">
                            <div className="h-20 w-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl font-bold border border-white/30">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h1 className="text-2xl sm:text-3xl font-bold">{user.name}</h1>
                                    {user.isPro && (
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                                            <Shield className="h-3 w-3" /> PRO
                                        </span>
                                    )}
                                </div>
                                <p className="text-blue-200 text-sm">{user.email}</p>
                                <p className="text-blue-300/70 text-xs mt-1">{user.company}</p>
                            </div>
                        </div>
                    </div>

                    {/* Profile Details */}
                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                            <h2 className="text-lg font-bold text-gray-900">Profile Details</h2>
                            <button className="inline-flex items-center gap-2 text-sm font-medium text-[#1E3A8A] hover:text-[#162e6e] transition">
                                <Edit3 className="h-4 w-4" /> Edit Profile
                            </button>
                        </div>

                        <div className="divide-y divide-gray-100">
                            {fields.map((field) => {
                                const Icon = field.icon;
                                return (
                                    <div key={field.label} className="px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition">
                                        <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                            <Icon className="h-5 w-5 text-[#1E3A8A]" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{field.label}</p>
                                            <p className="text-sm font-semibold text-gray-900 truncate">{field.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                        <Link href="/orders" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                            <h3 className="font-semibold text-gray-900 group-hover:text-[#1E3A8A] transition">My Orders</h3>
                            <p className="text-xs text-gray-500 mt-1">View order history & track shipments</p>
                        </Link>
                        <Link href="/wishlist" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                            <h3 className="font-semibold text-gray-900 group-hover:text-[#1E3A8A] transition">Wishlist</h3>
                            <p className="text-xs text-gray-500 mt-1">Your saved & frequently ordered items</p>
                        </Link>
                        <Link href="/settings" className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                            <h3 className="font-semibold text-gray-900 group-hover:text-[#1E3A8A] transition">Settings</h3>
                            <p className="text-xs text-gray-500 mt-1">Manage password, notifications & more</p>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
