'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/hooks/useAuth';
import { Heart, ShoppingCart, Trash2, User } from 'lucide-react';
import { useState } from 'react';

interface WishlistProduct {
    id: string;
    name: string;
    brand: string;
    image: string;
    price: number;
    originalPrice: number;
    sku: string;
    inStock: boolean;
    category: string;
}

const INITIAL_WISHLIST: WishlistProduct[] = [
    {
        id: '1',
        name: 'Kenclean Floor Cleaner – Lavender 5L',
        brand: 'Kenclean',
        image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=200&h=200&fit=crop&q=80',
        price: 345,
        originalPrice: 450,
        sku: 'KC-FC-LAV-5L',
        inStock: true,
        category: 'Cleaning Chemicals',
    },
    {
        id: '2',
        name: 'Premium Microfiber Mop Set – 18 inch',
        brand: 'CleanPro',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=200&h=200&fit=crop&q=80',
        price: 899,
        originalPrice: 1199,
        sku: 'CP-MF-MOP-18',
        inStock: true,
        category: 'Housekeeping Materials',
    },
    {
        id: '3',
        name: 'A4 Copier Paper 75 GSM – 500 Sheets',
        brand: 'JK Paper',
        image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=200&h=200&fit=crop&q=80',
        price: 265,
        originalPrice: 320,
        sku: 'JK-A4-75-500',
        inStock: true,
        category: 'Office Stationery',
    },
    {
        id: '4',
        name: 'Nescafé Sunrise Instant Coffee 200g',
        brand: 'Nescafé',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b955?w=200&h=200&fit=crop&q=80',
        price: 175,
        originalPrice: 210,
        sku: 'NES-SUN-200',
        inStock: false,
        category: 'Pantry Items',
    },
    {
        id: '5',
        name: 'Diversey Taski Glass Cleaner 5L',
        brand: 'Diversey',
        image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200&h=200&fit=crop&q=80',
        price: 520,
        originalPrice: 650,
        sku: 'DV-TK-GC-5L',
        inStock: true,
        category: 'Cleaning Chemicals',
    },
    {
        id: '6',
        name: 'Heavy Duty Trash Bags – 50 Pack',
        brand: 'EcoBag',
        image: 'https://images.unsplash.com/photo-1610141083329-75f2c3c0da41?w=200&h=200&fit=crop&q=80',
        price: 180,
        originalPrice: 230,
        sku: 'EB-HD-TB-50',
        inStock: true,
        category: 'Housekeeping Materials',
    },
];

export default function WishlistPage() {
    const { user, isAuthenticated, isLoading } = useAuth();
    const [items, setItems] = useState<WishlistProduct[]>(INITIAL_WISHLIST);

    const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

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
                        <p className="text-gray-500 mb-6">Log in to view your wishlist.</p>
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
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <nav className="text-sm text-gray-500 mb-6">
                        <Link href="/" className="hover:text-blue-700">Home</Link>
                        <span className="mx-2">›</span>
                        <Link href="/account" className="hover:text-blue-700">My Account</Link>
                        <span className="mx-2">›</span>
                        <span className="text-gray-900 font-medium">Wishlist</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                        <Heart className="h-7 w-7 text-red-500" />
                        My Wishlist
                    </h1>
                    <p className="text-gray-500 text-sm mb-8">Your saved products & frequently ordered items</p>

                    {items.length === 0 ? (
                        <div className="text-center py-20">
                            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h2>
                            <p className="text-gray-500 mb-6">Save products you order frequently for quick reordering.</p>
                            <Link href="/products" className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#162e6e] transition">
                                Browse Products
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {items.map((item) => {
                                const discount = Math.round((1 - item.price / item.originalPrice) * 100);
                                return (
                                    <div key={item.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all group">
                                        {/* Image */}
                                        <div className="relative h-48 bg-gray-100">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            {discount > 0 && (
                                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">{discount}% OFF</span>
                                            )}
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-400 hover:text-red-500 hover:bg-red-50 transition shadow-sm"
                                                aria-label="Remove from wishlist"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                            {!item.inStock && (
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                    <span className="bg-white px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">Out of Stock</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Info */}
                                        <div className="p-4">
                                            <p className="text-xs text-gray-400 font-medium uppercase mb-1">{item.brand} · {item.category}</p>
                                            <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2 min-h-[2.5rem]">{item.name}</h3>
                                            <p className="text-xs text-gray-400 mb-3">SKU: {item.sku}</p>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <span className="text-lg font-bold text-gray-900">₹{item.price}</span>
                                                    <span className="text-sm text-gray-400 line-through ml-2">₹{item.originalPrice}</span>
                                                </div>
                                                <button
                                                    disabled={!item.inStock}
                                                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#1E3A8A] text-white text-xs font-semibold hover:bg-[#162e6e] disabled:opacity-50 disabled:cursor-not-allowed transition"
                                                >
                                                    <ShoppingCart className="h-3.5 w-3.5" /> Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
