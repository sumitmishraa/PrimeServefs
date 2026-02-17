'use client';

import LoginForm from '@/components/auth/LoginForm';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function LoginContent() {
    const searchParams = useSearchParams();
    const registered = searchParams.get('registered');

    return (
        <div className="w-full max-w-md">
            {/* Success banner after registration */}
            {registered && (
                <div className="mb-4 rounded-lg bg-green-50 border border-green-200 p-3 text-sm text-green-700 text-center">
                    ✅ Registration successful! Please sign in with your new account.
                </div>
            )}

            <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 border border-gray-100">
                {/* Logo & Heading */}
                <div className="text-center mb-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1E3A8A] shadow-lg">
                        <span className="text-2xl font-bold text-white">P</span>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Sign in to your business account
                    </p>
                </div>

                <LoginForm />
            </div>

            {/* Demo credentials hint */}
            <div className="mt-4 rounded-lg bg-blue-50 border border-blue-100 p-3 text-center">
                <p className="text-xs text-blue-700">
                    <span className="font-semibold">Demo credentials:</span>{' '}
                    demo@business.com / Demo@123
                </p>
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense>
            <LoginContent />
        </Suspense>
    );
}
