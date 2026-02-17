import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, Sparkles, SprayCan, PenTool, Coffee, SlidersHorizontal, Star, ShoppingCart, ArrowRight, CheckCircle2 } from 'lucide-react';

const ALL_CATEGORIES = [
    {
        name: 'Housekeeping Materials',
        slug: 'housekeeping-materials',
        icon: Sparkles,
        count: 234,
        color: 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100',
        image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&h=250&fit=crop&q=80',
        description: 'Brooms, mops, dusters, garbage bags & more',
    },
    {
        name: 'Cleaning Chemicals',
        slug: 'cleaning-chemicals',
        icon: SprayCan,
        count: 189,
        color: 'bg-green-50 text-green-600 border-green-200 hover:bg-green-100',
        image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=250&fit=crop&q=80',
        description: 'Disinfectants, floor & glass cleaners',
    },
    {
        name: 'Office Stationery',
        slug: 'office-stationery',
        icon: PenTool,
        count: 312,
        color: 'bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100',
        image: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=400&h=250&fit=crop&q=80',
        description: 'Pens, paper, folders & desk essentials',
    },
    {
        name: 'Pantry Items',
        slug: 'pantry-items',
        icon: Coffee,
        count: 156,
        color: 'bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=250&fit=crop&q=80',
        description: 'Coffee, tea, snacks & pantry supplies',
    },
];

const SAMPLE_PRODUCTS = [
    { name: 'Heavy Duty Floor Mop', category: 'Housekeeping', price: '₹349', mrp: '₹450', rating: 4.5, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=300&fit=crop&q=80', badge: 'Best Seller' },
    { name: 'Multipurpose Disinfectant 5L', category: 'Cleaning', price: '₹899', mrp: '₹1,200', rating: 4.7, image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=300&h=300&fit=crop&q=80', badge: 'Top Rated' },
    { name: 'A4 Copier Paper (500 Sheets)', category: 'Stationery', price: '₹299', mrp: '₹380', rating: 4.3, image: 'https://images.unsplash.com/photo-1568205631-a0c65a4350e0?w=300&h=300&fit=crop&q=80' },
    { name: 'Premium Filter Coffee 1kg', category: 'Pantry', price: '₹549', mrp: '₹650', rating: 4.8, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop&q=80', badge: 'Popular' },
    { name: 'Garbage Bags (Pack of 100)', category: 'Housekeeping', price: '₹199', mrp: '₹280', rating: 4.2, image: 'https://images.unsplash.com/photo-1610141160614-68f2257db5ad?w=300&h=300&fit=crop&q=80' },
    { name: 'Glass Cleaner Spray 500ml', category: 'Cleaning', price: '₹179', mrp: '₹220', rating: 4.4, image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=300&h=300&fit=crop&q=80' },
    { name: 'Ballpoint Pens (Box of 50)', category: 'Stationery', price: '₹249', mrp: '₹350', rating: 4.1, image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=300&h=300&fit=crop&q=80', badge: 'Bulk Deal' },
    { name: 'Green Tea Bags (100 Pack)', category: 'Pantry', price: '₹399', mrp: '₹499', rating: 4.6, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop&q=80' },
];

function getDiscount(price: string, mrp: string) {
    const p = parseInt(price.replace(/[₹,]/g, ''));
    const m = parseInt(mrp.replace(/[₹,]/g, ''));
    return Math.round(((m - p) / m) * 100);
}

export default function ProductsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0f2560] text-white py-16">
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">All Products</h1>
                        <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-6">
                            Browse our full catalog of facility management supplies — 891+ products across 4 categories.
                        </p>
                        <div className="max-w-md mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input type="text" placeholder="Search products..." className="w-full rounded-xl bg-white text-gray-900 pl-12 pr-4 py-3.5 text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                    </div>
                </section>

                {/* Category cards overview */}
                <section className="py-8 bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex items-center gap-2 mb-5">
                            <SlidersHorizontal className="h-4 w-4 text-gray-400" />
                            <span className="text-sm font-semibold text-gray-500">Shop by Category</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {ALL_CATEGORIES.map((cat) => {
                                const Icon = cat.icon;
                                return (
                                    <Link
                                        key={cat.slug}
                                        href={`/category/${cat.slug}`}
                                        className="group relative rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all"
                                    >
                                        <div className="h-32 overflow-hidden">
                                            <img
                                                src={cat.image}
                                                alt={cat.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                                            <div className="flex items-center gap-2">
                                                <Icon className="h-4 w-4" />
                                                <span className="text-sm font-semibold">{cat.name}</span>
                                            </div>
                                            <div className="flex items-center justify-between mt-1">
                                                <span className="text-[11px] text-gray-300">{cat.count} products</span>
                                                <span className="inline-flex items-center gap-0.5 text-[11px] font-medium text-amber-400 group-hover:gap-1 transition-all">
                                                    Explore <ArrowRight className="h-3 w-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Product grid */}
                <section className="py-10">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-sm text-gray-500">Showing {SAMPLE_PRODUCTS.length} of 891 products</p>
                            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 text-green-600 px-2.5 py-1 text-xs font-medium">
                                <CheckCircle2 className="h-3 w-3" /> Free delivery above ₹5,000
                            </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {SAMPLE_PRODUCTS.map((p) => (
                                <div key={p.name} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                                    {/* Product image */}
                                    <div className="relative h-44 bg-gray-100 overflow-hidden">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {p.badge && (
                                            <span className="absolute top-2.5 left-2.5 rounded-full bg-[#1E3A8A] text-white px-2.5 py-0.5 text-[11px] font-semibold shadow-md">
                                                {p.badge}
                                            </span>
                                        )}
                                        <span className="absolute top-2.5 right-2.5 rounded-full bg-red-500 text-white px-2 py-0.5 text-[11px] font-bold">
                                            {getDiscount(p.price, p.mrp)}% OFF
                                        </span>
                                    </div>
                                    <div className="p-4">
                                        <span className="text-[11px] text-[#1E3A8A] font-semibold">{p.category}</span>
                                        <h3 className="mt-1 font-semibold text-gray-900 text-sm group-hover:text-[#1E3A8A] transition">{p.name}</h3>
                                        <div className="flex items-center gap-0.5 mt-1.5">
                                            {[...Array(5)].map((_, idx) => (
                                                <Star
                                                    key={idx}
                                                    className={`h-3 w-3 ${idx < Math.floor(p.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}`}
                                                />
                                            ))}
                                            <span className="text-[11px] text-gray-400 ml-1">{p.rating}</span>
                                        </div>
                                        <div className="flex items-baseline gap-2 mt-2">
                                            <span className="text-lg font-bold text-gray-900">{p.price}</span>
                                            <span className="text-sm text-gray-400 line-through">{p.mrp}</span>
                                        </div>
                                        <button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E3A8A] text-white py-2 text-sm font-semibold hover:bg-[#162e6e] transition shadow-sm">
                                            <ShoppingCart className="h-3.5 w-3.5" /> Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
