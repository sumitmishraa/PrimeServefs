'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/hooks/useAuth';
import { Package, Truck, CheckCircle2, Clock, Eye, RotateCcw, User } from 'lucide-react';

const STATUS_CONFIG: Record<string, { icon: typeof Clock; color: string; bg: string }> = {
    processing: { icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    shipped: { icon: Truck, color: 'text-blue-600', bg: 'bg-blue-50' },
    delivered: { icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
};

const MOCK_ORDERS = [
    {
        id: 'ORD-2026-0034',
        date: '14 Feb 2026',
        status: 'shipped',
        total: 12450,
        items: [
            { name: 'Kenclean Floor Cleaner – Lavender 5L', qty: 10, price: 345, image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=80&h=80&fit=crop&q=80' },
            { name: 'Premium Microfiber Mop Set – 18 inch', qty: 5, price: 899, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=80&h=80&fit=crop&q=80' },
        ],
    },
    {
        id: 'ORD-2026-0029',
        date: '08 Feb 2026',
        status: 'delivered',
        total: 8900,
        items: [
            { name: 'A4 Copier Paper 75 GSM – 500 Sheets', qty: 20, price: 265, image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=80&h=80&fit=crop&q=80' },
            { name: 'Nescafé Sunrise Instant Coffee 200g', qty: 10, price: 175, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b955?w=80&h=80&fit=crop&q=80' },
        ],
    },
    {
        id: 'ORD-2026-0021',
        date: '28 Jan 2026',
        status: 'delivered',
        total: 22300,
        items: [
            { name: 'Diversey Taski Glass Cleaner 5L', qty: 8, price: 520, image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=80&h=80&fit=crop&q=80' },
        ],
    },
    {
        id: 'ORD-2026-0015',
        date: '18 Jan 2026',
        status: 'processing',
        total: 5600,
        items: [
            { name: 'Heavy Duty Trash Bags – 50 Pack', qty: 15, price: 180, image: 'https://images.unsplash.com/photo-1610141083329-75f2c3c0da41?w=80&h=80&fit=crop&q=80' },
        ],
    },
];

export default function OrdersPage() {
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
                        <p className="text-gray-500 mb-6">Log in to view your orders.</p>
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
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <nav className="text-sm text-gray-500 mb-6">
                        <Link href="/" className="hover:text-blue-700">Home</Link>
                        <span className="mx-2">›</span>
                        <Link href="/account" className="hover:text-blue-700">My Account</Link>
                        <span className="mx-2">›</span>
                        <span className="text-gray-900 font-medium">My Orders</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <Package className="h-7 w-7 text-[#1E3A8A]" />
                        My Orders
                    </h1>

                    <div className="space-y-5">
                        {MOCK_ORDERS.map((order) => {
                            const statusConf = STATUS_CONFIG[order.status] || STATUS_CONFIG.processing;
                            const StatusIcon = statusConf.icon;
                            return (
                                <div key={order.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition">
                                    {/* Header */}
                                    <div className="px-5 py-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm font-bold text-gray-900">{order.id}</span>
                                            <span className="text-xs text-gray-400">{order.date}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${statusConf.color} ${statusConf.bg}`}>
                                                <StatusIcon className="h-3.5 w-3.5" />
                                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                            </span>
                                            <span className="text-sm font-bold text-gray-900">₹{order.total.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    {/* Items */}
                                    <div className="px-5 py-4 space-y-3">
                                        {order.items.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <img src={item.image} alt={item.name} className="h-12 w-12 rounded-lg object-cover bg-gray-100" />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                                                    <p className="text-xs text-gray-500">Qty: {item.qty} × ₹{item.price}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 flex items-center gap-3">
                                        <button className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1E3A8A] hover:text-[#162e6e] transition">
                                            <Eye className="h-4 w-4" /> View Details
                                        </button>
                                        {order.status === 'delivered' && (
                                            <button className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition">
                                                <RotateCcw className="h-4 w-4" /> Reorder
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
