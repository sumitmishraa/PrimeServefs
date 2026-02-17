'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, SprayCan, PenTool, Coffee } from 'lucide-react';

const SLIDES = [
    {
        id: 1,
        title: 'Office Stationery',
        color: 'bg-blue-100',
        icon: PenTool,
        imageParams: 'office+stationery',
    },
    {
        id: 2,
        title: 'Pantry Items',
        color: 'bg-orange-100',
        icon: Coffee,
        imageParams: 'coffee+pantry',
    },
    {
        id: 3,
        title: 'Cleaning Chemicals',
        color: 'bg-green-100',
        icon: SprayCan,
        imageParams: 'cleaning+chemicals',
    },
    {
        id: 4,
        title: 'Housekeeping Materials',
        color: 'bg-purple-100',
        icon: Sparkles,
        imageParams: 'mops+cleaning',
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % SLIDES.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            {SLIDES.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Placeholder Background (Gradient) */}
                    <div className={`w-full h-full ${slide.color} flex flex-col items-center justify-center p-10`}>
                        {/* 
                NOTE: Once images are generated, replace this div with:
                <Image 
                  src={`/hero_${slide.imageParams}.png`} 
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
             */}

                        {/* Fallback Icon Visualization */}
                        <slide.icon className="w-24 h-24 text-gray-700/50 mb-4" />
                        <h3 className="text-3xl font-bold text-gray-800/70">{slide.title}</h3>
                        <p className="text-gray-600/60 mt-2">Premium quality supplies</p>
                    </div>
                </div>
            ))}

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {SLIDES.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => setCurrent(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${index === current ? 'bg-[#1E3A8A] w-8' : 'bg-gray-400/50 hover:bg-gray-600'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
