'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/hooks/useAuth';
import {
    SettingsIcon,
    Lock,
    Bell,
    Globe,
    CreditCard,
    Trash2,
    User,
    ChevronRight,
} from 'lucide-react';
import { useState } from 'react';

export default function SettingsPage() {
    const { user, isAuthenticated, isLoading } = useAuth();
    const [notifications, setNotifications] = useState({
        orderUpdates: true,
        promotions: false,
        newsletter: true,
        smsAlerts: true,
    });

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
                        <p className="text-gray-500 mb-6">Log in to manage your settings.</p>
                        <Link href="/auth/login" className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#162e6e] transition">Log In</Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 py-8">
                    <nav className="text-sm text-gray-500 mb-6">
                        <Link href="/" className="hover:text-blue-700">Home</Link>
                        <span className="mx-2">›</span>
                        <Link href="/account" className="hover:text-blue-700">My Account</Link>
                        <span className="mx-2">›</span>
                        <span className="text-gray-900 font-medium">Settings</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <SettingsIcon className="h-7 w-7 text-[#1E3A8A]" />
                        Settings
                    </h1>

                    <div className="space-y-6">
                        {/* Password & Security */}
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                                <Lock className="h-5 w-5 text-[#1E3A8A]" />
                                <h2 className="text-base font-bold text-gray-900">Password & Security</h2>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Change Password</p>
                                        <p className="text-xs text-gray-500">Last changed 30 days ago</p>
                                    </div>
                                    <button className="text-sm font-medium text-[#1E3A8A] hover:text-[#162e6e] transition flex items-center gap-1">
                                        Update <ChevronRight className="h-4 w-4" />
                                    </button>
                                </div>
                                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Two-Factor Authentication</p>
                                        <p className="text-xs text-gray-500">Add an extra layer of security</p>
                                    </div>
                                    <button className="text-sm font-medium text-[#1E3A8A] hover:text-[#162e6e] transition flex items-center gap-1">
                                        Enable <ChevronRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Notifications */}
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                                <Bell className="h-5 w-5 text-[#1E3A8A]" />
                                <h2 className="text-base font-bold text-gray-900">Notifications</h2>
                            </div>
                            <div className="p-6 space-y-4">
                                {[
                                    { key: 'orderUpdates' as const, label: 'Order Updates', desc: 'Get notified about order status changes' },
                                    { key: 'promotions' as const, label: 'Promotions & Offers', desc: 'Receive special deals and discounts' },
                                    { key: 'newsletter' as const, label: 'Newsletter', desc: 'Weekly industry insights and tips' },
                                    { key: 'smsAlerts' as const, label: 'SMS Alerts', desc: 'Important updates via SMS' },
                                ].map((item, i) => (
                                    <div key={item.key} className={`flex items-center justify-between ${i > 0 ? 'border-t border-gray-100 pt-4' : ''}`}>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{item.label}</p>
                                            <p className="text-xs text-gray-500">{item.desc}</p>
                                        </div>
                                        <button
                                            onClick={() => setNotifications((prev) => ({ ...prev, [item.key]: !prev[item.key] }))}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notifications[item.key] ? 'bg-[#1E3A8A]' : 'bg-gray-200'}`}
                                        >
                                            <span className={`inline-block h-4 w-4 rounded-full bg-white shadow transform transition-transform ${notifications[item.key] ? 'translate-x-6' : 'translate-x-1'}`} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Language & Region */}
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                                <Globe className="h-5 w-5 text-[#1E3A8A]" />
                                <h2 className="text-base font-bold text-gray-900">Language & Region</h2>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Language</p>
                                        <p className="text-xs text-gray-500">Currently set to English</p>
                                    </div>
                                    <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600/30">
                                        <option>English</option>
                                        <option>Hindi</option>
                                    </select>
                                </div>
                                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Currency</p>
                                        <p className="text-xs text-gray-500">All prices shown in INR</p>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1.5 rounded-lg">₹ INR</span>
                                </div>
                            </div>
                        </div>

                        {/* Billing */}
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                                <CreditCard className="h-5 w-5 text-[#1E3A8A]" />
                                <h2 className="text-base font-bold text-gray-900">Billing & Addresses</h2>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Manage Addresses</p>
                                        <p className="text-xs text-gray-500">Add or edit delivery addresses</p>
                                    </div>
                                    <button className="text-sm font-medium text-[#1E3A8A] hover:text-[#162e6e] transition flex items-center gap-1">
                                        Manage <ChevronRight className="h-4 w-4" />
                                    </button>
                                </div>
                                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">GST Details</p>
                                        <p className="text-xs text-gray-500">{user.gstNumber || 'No GST number on file'}</p>
                                    </div>
                                    <button className="text-sm font-medium text-[#1E3A8A] hover:text-[#162e6e] transition flex items-center gap-1">
                                        Edit <ChevronRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Danger zone */}
                        <div className="bg-white rounded-xl border border-red-200 overflow-hidden">
                            <div className="px-6 py-4 border-b border-red-100 flex items-center gap-3">
                                <Trash2 className="h-5 w-5 text-red-500" />
                                <h2 className="text-base font-bold text-red-600">Danger Zone</h2>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Delete Account</p>
                                        <p className="text-xs text-gray-500">Permanently delete your account and all data</p>
                                    </div>
                                    <button className="text-sm font-medium text-red-600 border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50 transition">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
