'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroCarousel from '@/components/home/HeroCarousel';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import {
  Sparkles,
  SprayCan,
  PenTool,
  Coffee,
  Star,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const CATEGORIES = [
  {
    name: 'Housekeeping Materials',
    slug: 'housekeeping-materials',
    icon: Sparkles,
    description: 'Everything you need for spotless commercial spaces — from heavy-duty floor mops and brooms to microfiber cloths, dusters, garbage bags, and wet floor signs.',
    includes: ['Floor Mops', 'Brooms', 'Dusters', 'Garbage Bags', 'Cleaning Cloths', 'Buckets'],
    itemCount: 234,
    color: 'bg-blue-50 text-blue-600',
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Cleaning Chemicals',
    slug: 'cleaning-chemicals',
    icon: SprayCan,
    description: 'Industrial-grade disinfectants, floor cleaners, glass cleaners, toilet cleaners, hand sanitizers, and furniture polish for every surface.',
    includes: ['Disinfectants', 'Floor Cleaners', 'Glass Cleaners', 'Sanitizers', 'Toilet Cleaners', 'Polish'],
    itemCount: 189,
    color: 'bg-green-50 text-green-600',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Office Stationery',
    slug: 'office-stationery',
    icon: PenTool,
    description: 'Pens, paper reams, sticky notes, staplers, file folders, desk organizers, whiteboard markers, and all your daily office essentials in bulk.',
    includes: ['Paper & Pens', 'Staplers', 'File Folders', 'Sticky Notes', 'Markers', 'Desk Organizers'],
    itemCount: 312,
    color: 'bg-orange-50 text-orange-600',
    image: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=600&h=400&fit=crop&q=80',
  },
  {
    name: 'Pantry Items',
    slug: 'pantry-items',
    icon: Coffee,
    description: 'Premium filter coffee, green tea bags, assorted snacks, disposable cups, sugar sachets, and tissue rolls to keep your team refreshed.',
    includes: ['Coffee & Tea', 'Snacks', 'Paper Cups', 'Sugar Sachets', 'Tissues', 'Water Bottles'],
    itemCount: 156,
    color: 'bg-purple-50 text-purple-600',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&q=80',
  },
];



const PRO_FEATURES = [
  '60-day credit terms',
  '1-year price lock-in',
  'Free delivery on all orders',
  'Extra 5% discount',
  'Dedicated account manager',
  'Priority 24/7 support',
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* =============== HERO SECTION =============== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1e3a8acc] to-[#0f2560] text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoLTZ2LTZoNnptMC0zMHY2aC02VjRoNnptMzAgMzB2NmgtNnYtNmg2em0wLTMwdjZoLTZWNGg2ek02IDM0djZIMHYtNmg2em0wLTMwdjZIMFY0aDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

          <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Text */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-medium mb-6 backdrop-blur-sm">
                  <Star className="h-3.5 w-3.5 text-amber-400" />
                  Trusted by 500+ businesses across India
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Your One-Stop B2B
                  <span className="block text-amber-400">Facility Supplies</span>
                  Marketplace
                </h1>

                <p className="mt-5 text-lg text-blue-100 max-w-xl leading-relaxed">
                  Streamline your procurement with bulk pricing, flexible credit
                  terms, and next-day delivery on housekeeping, cleaning, stationery,
                  and pantry supplies.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 rounded-xl bg-white text-[#1E3A8A] px-6 py-3.5 text-sm font-semibold shadow-lg hover:bg-blue-50 transition"
                  >
                    Browse Products
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/pro"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold backdrop-blur-sm hover:bg-white/20 transition"
                  >
                    Get Pro Plan
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="mt-10 flex flex-wrap items-center gap-4 text-xs text-blue-200">
                  {['45-Day Credit Terms', '24/7 Support', 'Bulk Discounts'].map(
                    (badge) => (
                      <span
                        key={badge}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
                        {badge}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Right Column: Carousel */}
              <div className="hidden lg:block w-full max-w-lg mx-auto">
                <HeroCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* =============== CATEGORY CARDS =============== */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Shop by Category
              </h2>
              <p className="mt-2 text-gray-500">
                Everything your facility needs, organized and ready to order.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-[320px]"
                  >
                    {/* Background image */}
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-6 text-white">
                      <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm mb-3`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{cat.name}</h3>
                      <p className="mt-1 text-sm text-gray-200 leading-relaxed line-clamp-2">
                        {cat.description}
                      </p>

                      {/* Includes tags */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {cat.includes.slice(0, 4).map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-white/15 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-medium text-white/90"
                          >
                            {item}
                          </span>
                        ))}
                        {cat.includes.length > 4 && (
                          <span className="rounded-full bg-white/15 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-medium text-white/90">
                            +{cat.includes.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-gray-300">
                          {cat.itemCount} products
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-amber-400 group-hover:gap-2 transition-all">
                          Explore <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* =============== WHY CHOOSE US =============== */}
        <WhyChooseUs />

        {/* =============== PRO PLAN TEASER =============== */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="rounded-3xl bg-gradient-to-r from-[#1E3A8A] to-[#2d4ba0] text-white p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 text-amber-300 px-3 py-1 text-xs font-semibold mb-4">
                  <Star className="h-3.5 w-3.5" /> PRO PLAN
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                  Unlock Premium Benefits with{' '}
                  <span className="text-amber-400">PrimeServe Pro</span>
                </h2>
                <p className="mt-4 text-blue-200 max-w-lg">
                  Save more with extended credit, exclusive discounts, and a
                  dedicated account manager. Starting at ₹2,999/month.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PRO_FEATURES.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 text-sm text-blue-100"
                    >
                      <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link
                  href="/pro"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-400 text-gray-900 px-6 py-3.5 text-sm font-semibold shadow-lg hover:bg-amber-300 transition"
                >
                  Upgrade to Pro
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Price card */}
              <div className="w-full max-w-xs rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center shrink-0">
                <p className="text-sm text-blue-200 mb-1">Starting from</p>
                <p className="text-5xl font-bold">
                  ₹2,999
                  <span className="text-lg font-normal text-blue-200">
                    /mo
                  </span>
                </p>
                <p className="text-xs text-blue-300 mt-1">
                  or ₹29,999/year (save 17%)
                </p>
                <hr className="border-white/20 my-5" />
                <p className="text-sm text-blue-100">
                  Includes all premium features. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =============== CTA =============== */}
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to Simplify Your Procurement?
            </h2>
            <p className="mt-3 text-gray-500">
              Join 500+ businesses that trust PrimeServe for reliable supply,
              competitive pricing, and flexible credit terms.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/auth/register"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1E3A8A] text-white px-8 py-3.5 text-sm font-semibold shadow-md hover:bg-[#162e6e] transition"
              >
                Create Free Account
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white text-gray-700 px-8 py-3.5 text-sm font-medium hover:bg-gray-50 transition"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
