'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, PackageOpen } from 'lucide-react';
import { useState } from 'react';

interface CartProduct {
    id: string;
    name: string;
    brand: string;
    image: string;
    price: number;
    originalPrice: number;
    qty: number;
    sku: string;
}

const INITIAL_CART: CartProduct[] = [
    {
        id: '1',
        name: 'Kenclean Floor Cleaner – Lavender 5L',
        brand: 'Kenclean',
        image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=120&h=120&fit=crop&q=80',
        price: 345,
        originalPrice: 450,
        qty: 2,
        sku: 'KC-FC-LAV-5L',
    },
    {
        id: '2',
        name: 'Premium Microfiber Mop Set – 18 inch',
        brand: 'CleanPro',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=120&h=120&fit=crop&q=80',
        price: 899,
        originalPrice: 1199,
        qty: 5,
        sku: 'CP-MF-MOP-18',
    },
    {
        id: '3',
        name: 'A4 Copier Paper 75 GSM – 500 Sheets',
        brand: 'JK Paper',
        image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=120&h=120&fit=crop&q=80',
        price: 265,
        originalPrice: 320,
        qty: 10,
        sku: 'JK-A4-75-500',
    },
];

export default function CartPage() {
    const [items, setItems] = useState<CartProduct[]>(INITIAL_CART);

    const updateQty = (id: string, delta: number) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
            )
        );
    };
    const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const savings = items.reduce((sum, i) => sum + (i.originalPrice - i.price) * i.qty, 0);
    const deliveryFee = subtotal >= 5000 ? 0 : 99;
    const total = subtotal + deliveryFee;

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-gray-500 mb-6">
                        <Link href="/" className="hover:text-blue-700">Home</Link>
                        <span className="mx-2">›</span>
                        <span className="text-gray-900 font-medium">Shopping Cart</span>
                    </nav>

                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <ShoppingCart className="h-7 w-7 text-[#1E3A8A]" />
                        Shopping Cart
                        <span className="text-base font-normal text-gray-500">({items.length} items)</span>
                    </h1>

                    {items.length === 0 ? (
                        <div className="text-center py-20">
                            <PackageOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
                            <p className="text-gray-500 mb-6">Add some products to get started!</p>
                            <Link href="/products" className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#162e6e] transition">
                                Browse Products <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Cart items */}
                            <div className="lg:col-span-2 space-y-4">
                                {items.map((item) => (
                                    <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 flex gap-4 hover:shadow-md transition">
                                        <img src={item.image} alt={item.name} className="h-20 w-20 sm:h-24 sm:w-24 rounded-lg object-cover bg-gray-100" />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2">
                                                <div>
                                                    <p className="text-xs text-gray-500 font-medium uppercase">{item.brand}</p>
                                                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2">{item.name}</h3>
                                                    <p className="text-xs text-gray-400 mt-0.5">SKU: {item.sku}</p>
                                                </div>
                                                <button onClick={() => removeItem(item.id)} className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition" aria-label="Remove">
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-between mt-3">
                                                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                                                    <button onClick={() => updateQty(item.id, -1)} className="px-2.5 py-1.5 hover:bg-gray-100 transition">
                                                        <Minus className="h-3.5 w-3.5" />
                                                    </button>
                                                    <span className="px-3 py-1.5 text-sm font-semibold bg-gray-50 min-w-[40px] text-center">{item.qty}</span>
                                                    <button onClick={() => updateQty(item.id, 1)} className="px-2.5 py-1.5 hover:bg-gray-100 transition">
                                                        <Plus className="h-3.5 w-3.5" />
                                                    </button>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-base font-bold text-gray-900">₹{(item.price * item.qty).toLocaleString()}</p>
                                                    <p className="text-xs text-gray-400 line-through">₹{(item.originalPrice * item.qty).toLocaleString()}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Order summary */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-28">
                                    <h3 className="text-lg font-bold text-gray-900 mb-5">Order Summary</h3>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between text-gray-600">
                                            <span>Subtotal ({items.length} items)</span>
                                            <span className="font-medium text-gray-900">₹{subtotal.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-emerald-600">
                                            <span>You Save</span>
                                            <span className="font-medium">-₹{savings.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Delivery</span>
                                            <span className={`font-medium ${deliveryFee === 0 ? 'text-emerald-600' : 'text-gray-900'}`}>
                                                {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                                            </span>
                                        </div>
                                        {deliveryFee > 0 && (
                                            <p className="text-xs text-blue-600 bg-blue-50 px-3 py-2 rounded-lg">
                                                Add ₹{(5000 - subtotal).toLocaleString()} more for free delivery
                                            </p>
                                        )}
                                        <div className="border-t border-gray-200 pt-3 flex justify-between text-base font-bold text-gray-900">
                                            <span>Total</span>
                                            <span>₹{total.toLocaleString()}</span>
                                        </div>
                                    </div>
                                    <button className="w-full mt-6 bg-[#1E3A8A] text-white py-3 rounded-lg font-semibold hover:bg-[#162e6e] transition flex items-center justify-center gap-2">
                                        Proceed to Checkout <ArrowRight className="h-4 w-4" />
                                    </button>
                                    <p className="text-xs text-gray-400 text-center mt-3">
                                        GST invoice will be generated at checkout
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
