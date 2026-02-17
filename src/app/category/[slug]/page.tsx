import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Sparkles, SprayCan, PenTool, Coffee, ArrowLeft, Star, ShoppingCart, CheckCircle2 } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Category data with Unsplash images + rich descriptions             */
/* ------------------------------------------------------------------ */

const CATEGORY_DATA: Record<string, {
    name: string;
    icon: typeof Sparkles;
    tagline: string;
    description: string;
    includes: string[];
    heroImage: string;
    color: string;
    accent: string;
    products: { name: string; price: string; mrp: string; rating: number; image: string; badge?: string }[];
}> = {
    'housekeeping-materials': {
        name: 'Housekeeping Materials',
        icon: Sparkles,
        tagline: 'Keep your facilities spotless',
        description: 'Professional-grade housekeeping supplies for commercial spaces. From heavy-duty floor mops and brooms to microfiber cleaning cloths, garbage bags, dusters, wet floor signs, and cleaning buckets — everything you need to maintain hygiene and cleanliness.',
        includes: ['Floor Mops & Buckets', 'Brooms & Dustpans', 'Microfiber Cloths', 'Garbage Bags', 'Dusters', 'Wet Floor Signs', 'Cleaning Carts', 'Scrubbing Pads'],
        heroImage: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=1200&h=500&fit=crop&q=80',
        color: 'from-blue-600 to-blue-800',
        accent: 'bg-blue-100 text-blue-700',
        products: [
            { name: 'Heavy Duty Floor Mop', price: '₹349', mrp: '₹450', rating: 4.5, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=300&fit=crop&q=80', badge: 'Best Seller' },
            { name: 'Garbage Bags (Pack of 100)', price: '₹199', mrp: '₹280', rating: 4.2, image: 'https://images.unsplash.com/photo-1610141160614-68f2257db5ad?w=300&h=300&fit=crop&q=80' },
            { name: 'Microfiber Cleaning Cloth (10 pcs)', price: '₹299', mrp: '₹399', rating: 4.6, image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=300&fit=crop&q=80', badge: 'Top Rated' },
            { name: 'Broom – Grass Bristle', price: '₹129', mrp: '₹180', rating: 4.1, image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=300&fit=crop&q=80' },
            { name: 'Wet Floor Warning Sign', price: '₹249', mrp: '₹320', rating: 4.3, image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=300&h=300&fit=crop&q=80' },
            { name: 'Duster – Feather (Large)', price: '₹179', mrp: '₹250', rating: 4.0, image: 'https://images.unsplash.com/photo-1527515637462-cee1395c616b?w=300&h=300&fit=crop&q=80' },
        ],
    },
    'cleaning-chemicals': {
        name: 'Cleaning Chemicals',
        icon: SprayCan,
        tagline: 'Industrial-strength cleaning solutions',
        description: 'Premium-quality disinfectants, floor cleaners, glass cleaners, toilet cleaners, hand sanitizers, and furniture polish. All products are industrial-grade with safety data sheets and quality certifications for commercial use.',
        includes: ['Disinfectants', 'Floor Cleaners', 'Glass Cleaners', 'Toilet Cleaners', 'Hand Sanitizers', 'Furniture Polish', 'Air Fresheners', 'Drain Cleaners'],
        heroImage: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1200&h=500&fit=crop&q=80',
        color: 'from-emerald-600 to-emerald-800',
        accent: 'bg-emerald-100 text-emerald-700',
        products: [
            { name: 'Multipurpose Disinfectant 5L', price: '₹899', mrp: '₹1,200', rating: 4.7, image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=300&h=300&fit=crop&q=80', badge: 'Best Seller' },
            { name: 'Glass Cleaner Spray 500ml', price: '₹179', mrp: '₹220', rating: 4.4, image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=300&h=300&fit=crop&q=80' },
            { name: 'Floor Cleaner – Lavender 2L', price: '₹349', mrp: '₹450', rating: 4.5, image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300&h=300&fit=crop&q=80' },
            { name: 'Toilet Cleaner 1L', price: '₹149', mrp: '₹199', rating: 4.2, image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=300&h=300&fit=crop&q=80' },
            { name: 'Hand Sanitizer 5L', price: '₹599', mrp: '₹800', rating: 4.6, image: 'https://images.unsplash.com/photo-1584265549884-cb8ea486780c?w=300&h=300&fit=crop&q=80', badge: 'Popular' },
            { name: 'Furniture Polish 500ml', price: '₹229', mrp: '₹299', rating: 4.3, image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=300&fit=crop&q=80' },
        ],
    },
    'office-stationery': {
        name: 'Office Stationery',
        icon: PenTool,
        tagline: 'Everything for a productive workspace',
        description: 'Complete range of office stationery — from A4 copier paper and ballpoint pens to heavy-duty staplers, file folders, sticky notes, whiteboard markers, desk organizers, and presentation supplies. Order in bulk and save more.',
        includes: ['A4 Paper Reams', 'Ballpoint Pens', 'Sticky Notes', 'File Folders', 'Staplers', 'Whiteboard Markers', 'Desk Organizers', 'Envelopes'],
        heroImage: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=1200&h=500&fit=crop&q=80',
        color: 'from-orange-500 to-orange-700',
        accent: 'bg-orange-100 text-orange-700',
        products: [
            { name: 'A4 Copier Paper (500 Sheets)', price: '₹299', mrp: '₹380', rating: 4.3, image: 'https://images.unsplash.com/photo-1568205631-a0c65a4350e0?w=300&h=300&fit=crop&q=80' },
            { name: 'Ballpoint Pens (Box of 50)', price: '₹249', mrp: '₹350', rating: 4.1, image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=300&h=300&fit=crop&q=80', badge: 'Bulk Deal' },
            { name: 'Sticky Notes (Pack of 12)', price: '₹199', mrp: '₹260', rating: 4.4, image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=300&h=300&fit=crop&q=80' },
            { name: 'File Folders (Pack of 20)', price: '₹349', mrp: '₹450', rating: 4.0, image: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=300&h=300&fit=crop&q=80' },
            { name: 'Stapler – Heavy Duty', price: '₹449', mrp: '₹600', rating: 4.5, image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&h=300&fit=crop&q=80', badge: 'Best Seller' },
            { name: 'Whiteboard Markers (Set of 8)', price: '₹179', mrp: '₹240', rating: 4.2, image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=300&h=300&fit=crop&q=80' },
        ],
    },
    'pantry-items': {
        name: 'Pantry Items',
        icon: Coffee,
        tagline: 'Keep your team refreshed & energized',
        description: 'Premium-quality pantry supplies including filter coffee, green tea, assorted biscuits, disposable paper cups, sugar sachets, tissue rolls, and bottled water. Perfect for office pantries, break rooms, and hospitality setups.',
        includes: ['Coffee & Tea', 'Assorted Snacks', 'Paper Cups', 'Sugar Sachets', 'Tissue Rolls', 'Water Bottles', 'Napkins', 'Stirrers'],
        heroImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=500&fit=crop&q=80',
        color: 'from-purple-600 to-purple-800',
        accent: 'bg-purple-100 text-purple-700',
        products: [
            { name: 'Premium Filter Coffee 1kg', price: '₹549', mrp: '₹650', rating: 4.8, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop&q=80', badge: 'Top Rated' },
            { name: 'Green Tea Bags (100 Pack)', price: '₹399', mrp: '₹499', rating: 4.6, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop&q=80' },
            { name: 'Disposable Paper Cups (200)', price: '₹249', mrp: '₹320', rating: 4.1, image: 'https://images.unsplash.com/photo-1572119865084-43c285814d63?w=300&h=300&fit=crop&q=80' },
            { name: 'Sugar Sachets (500 Pack)', price: '₹299', mrp: '₹399', rating: 4.3, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=300&fit=crop&q=80' },
            { name: 'Assorted Biscuits Box', price: '₹449', mrp: '₹550', rating: 4.5, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop&q=80', badge: 'Popular' },
            { name: 'Tissue Paper (Box of 6 Rolls)', price: '₹349', mrp: '₹450', rating: 4.4, image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=300&h=300&fit=crop&q=80' },
        ],
    },
};

export function generateStaticParams() {
    return [
        { slug: 'housekeeping-materials' },
        { slug: 'cleaning-chemicals' },
        { slug: 'office-stationery' },
        { slug: 'pantry-items' },
    ];
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = CATEGORY_DATA[slug];

    if (!data) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Category Not Found</h1>
                        <p className="text-gray-500 mb-6">The category you are looking for doesn&apos;t exist.</p>
                        <Link href="/products" className="inline-flex items-center gap-2 rounded-xl bg-[#1E3A8A] text-white px-6 py-3 text-sm font-semibold hover:bg-[#162e6e] transition">
                            <ArrowLeft className="h-4 w-4" /> View All Products
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const Icon = data.icon;
    const discount = (i: number) => {
        const prices = data.products.map(p => {
            const price = parseInt(p.price.replace(/[₹,]/g, ''));
            const mrp = parseInt(p.mrp.replace(/[₹,]/g, ''));
            return Math.round(((mrp - price) / mrp) * 100);
        });
        return prices[i];
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-1">
                {/* Hero banner with image */}
                <section className="relative h-[340px] sm:h-[380px] overflow-hidden">
                    <img
                        src={data.heroImage}
                        alt={data.name}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${data.color} opacity-80`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    <div className="relative max-w-6xl mx-auto px-4 h-full flex flex-col justify-end pb-10">
                        <Link href="/products" className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition mb-4 w-fit">
                            <ArrowLeft className="h-4 w-4" /> All Products
                        </Link>
                        <div className="flex items-center gap-4 mb-3">
                            <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                <Icon className="h-7 w-7 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-white/70 font-medium">{data.tagline}</p>
                                <h1 className="text-3xl sm:text-4xl font-bold text-white">{data.name}</h1>
                            </div>
                        </div>
                        <p className="text-white/80 max-w-2xl text-sm leading-relaxed">
                            {data.description}
                        </p>
                    </div>
                </section>

                {/* What's included */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-6xl mx-auto px-4 py-5">
                        <div className="flex items-center gap-3 overflow-x-auto pb-1">
                            <span className="text-sm font-semibold text-gray-500 shrink-0">Includes:</span>
                            {data.includes.map((item) => (
                                <span
                                    key={item}
                                    className={`shrink-0 inline-flex items-center gap-1 rounded-full ${data.accent} px-3 py-1 text-xs font-medium`}
                                >
                                    <CheckCircle2 className="h-3 w-3" /> {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Products grid */}
                <section className="py-10">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-sm text-gray-500">Showing {data.products.length} products</p>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 text-green-600 px-2.5 py-1 font-medium">
                                    <CheckCircle2 className="h-3 w-3" /> Free delivery on orders above ₹5,000
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data.products.map((p, i) => (
                                <div key={p.name} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                                    {/* Product image */}
                                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {p.badge && (
                                            <span className="absolute top-3 left-3 rounded-full bg-[#1E3A8A] text-white px-2.5 py-0.5 text-[11px] font-semibold shadow-md">
                                                {p.badge}
                                            </span>
                                        )}
                                        <span className="absolute top-3 right-3 rounded-full bg-red-500 text-white px-2 py-0.5 text-[11px] font-bold">
                                            {discount(i)}% OFF
                                        </span>
                                    </div>

                                    {/* Product details */}
                                    <div className="p-5">
                                        <span className={`text-[11px] font-semibold ${data.accent} px-2 py-0.5 rounded-full`}>
                                            {data.name}
                                        </span>
                                        <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-[#1E3A8A] transition">
                                            {p.name}
                                        </h3>

                                        <div className="flex items-center gap-1 mt-1.5">
                                            {[...Array(5)].map((_, idx) => (
                                                <Star
                                                    key={idx}
                                                    className={`h-3.5 w-3.5 ${idx < Math.floor(p.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}`}
                                                />
                                            ))}
                                            <span className="text-xs text-gray-500 ml-1">{p.rating}</span>
                                        </div>

                                        <div className="flex items-baseline gap-2 mt-3">
                                            <span className="text-xl font-bold text-gray-900">{p.price}</span>
                                            <span className="text-sm text-gray-400 line-through">{p.mrp}</span>
                                        </div>

                                        <button className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E3A8A] text-white py-2.5 text-sm font-semibold hover:bg-[#162e6e] transition shadow-sm">
                                            <ShoppingCart className="h-4 w-4" /> Add to Cart
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
