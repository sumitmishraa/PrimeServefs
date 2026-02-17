import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { MapPin, Briefcase, ArrowRight } from 'lucide-react';

const OPENINGS = [
    { title: 'Senior Frontend Developer', dept: 'Engineering', location: 'Mumbai', type: 'Full-time' },
    { title: 'Product Manager', dept: 'Product', location: 'Mumbai', type: 'Full-time' },
    { title: 'Supply Chain Analyst', dept: 'Operations', location: 'Delhi', type: 'Full-time' },
    { title: 'Business Development Executive', dept: 'Sales', location: 'Bangalore', type: 'Full-time' },
    { title: 'Customer Success Associate', dept: 'Support', location: 'Remote', type: 'Full-time' },
    { title: 'UI/UX Designer', dept: 'Design', location: 'Mumbai', type: 'Full-time' },
];

export default function CareersPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0f2560] text-white py-20">
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Join Our Team</h1>
                        <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                            Help us build the future of B2B facility supply. We&apos;re growing fast and looking for talented people.
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Open Positions</h2>
                        <div className="space-y-4">
                            {OPENINGS.map((job) => (
                                <div key={job.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                                        <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-500">
                                            <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{job.dept}</span>
                                            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                                            <span className="rounded-full bg-blue-50 text-[#1E3A8A] px-2.5 py-0.5 text-xs font-medium">{job.type}</span>
                                        </div>
                                    </div>
                                    <button className="inline-flex items-center gap-2 rounded-lg border border-[#1E3A8A] text-[#1E3A8A] px-5 py-2 text-sm font-medium hover:bg-blue-50 transition shrink-0">
                                        Apply <ArrowRight className="h-3.5 w-3.5" />
                                    </button>
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
