'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
    Mail,
    Lock,
    Loader2,
    AlertCircle,
    MailCheck,
    ArrowLeft,
} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const forgotSchema = z.object({
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Please enter a valid email'),
});

type ForgotFormData = z.infer<typeof forgotSchema>;

export default function ForgotPasswordForm() {
    const [step, setStep] = useState<1 | 2>(1);
    const [isLoading, setIsLoading] = useState(false);
    const [submittedEmail, setSubmittedEmail] = useState('');
    const [resendTimer, setResendTimer] = useState(0);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotFormData>({
        resolver: zodResolver(forgotSchema),
    });

    // ---- Resend timer ----

    useEffect(() => {
        if (resendTimer <= 0) return;
        const id = setInterval(() => setResendTimer((t) => t - 1), 1000);
        return () => clearInterval(id);
    }, [resendTimer]);

    // ---- Handlers ----

    const onSubmit = async (data: ForgotFormData) => {
        setIsLoading(true);
        await new Promise((r) => setTimeout(r, 1200));
        setSubmittedEmail(data.email);
        setIsLoading(false);
        setStep(2);
        setResendTimer(60);
    };

    const handleResend = useCallback(async () => {
        if (resendTimer > 0) return;
        setIsLoading(true);
        await new Promise((r) => setTimeout(r, 1000));
        setIsLoading(false);
        setResendTimer(60);
    }, [resendTimer]);

    // ---- Step 2: Confirmation UI ----

    if (step === 2) {
        return (
            <div className="text-center space-y-5">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <MailCheck className="h-8 w-8 text-green-600" />
                </div>

                <h2 className="text-xl font-bold text-gray-900">Check Your Email</h2>
                <p className="text-sm text-gray-600">
                    We&apos;ve sent a password reset link to{' '}
                    <span className="font-medium text-gray-900">{submittedEmail}</span>
                </p>

                <p className="text-xs text-gray-500">
                    Didn&apos;t receive the email? Check your spam folder or click below
                    to resend.
                </p>

                <button
                    onClick={handleResend}
                    disabled={resendTimer > 0 || isLoading}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                    {resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend Link'}
                </button>

                <div className="pt-2">
                    <Link
                        href="/auth/login"
                        className="inline-flex items-center gap-1 text-sm font-medium text-[#1E3A8A] hover:underline"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Login
                    </Link>
                </div>
            </div>
        );
    }

    // ---- Step 1: Email form ----

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="text-center space-y-1">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 mb-3">
                    <Lock className="h-7 w-7 text-[#1E3A8A]" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Forgot Password?</h2>
                <p className="text-sm text-gray-500">
                    Enter your registered email and we&apos;ll send you a reset link.
                </p>
            </div>

            <div className="space-y-1.5">
                <label
                    htmlFor="forgot-email"
                    className="block text-sm font-medium text-gray-700"
                >
                    Email Address
                </label>
                <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                        id="forgot-email"
                        type="email"
                        autoComplete="email"
                        placeholder="your.email@company.com"
                        className={`block w-full rounded-lg border bg-white py-3 pl-10 pr-4 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 transition ${errors.email ? 'border-red-400' : 'border-gray-300'
                            }`}
                        {...register('email')}
                    />
                </div>
                {errors.email && (
                    <p className="flex items-center gap-1 text-xs text-red-600">
                        <AlertCircle className="h-3.5 w-3.5" /> {errors.email.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="relative flex w-full items-center justify-center gap-2 rounded-lg bg-[#1E3A8A] py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#162e6e] focus:outline-none focus:ring-2 focus:ring-blue-600/40 disabled:opacity-60 disabled:cursor-not-allowed h-12"
            >
                {isLoading && <Loader2 className="h-4.5 w-4.5 animate-spin" />}
                {isLoading ? 'Sending…' : 'Send Reset Link'}
            </button>

            <div className="text-center">
                <Link
                    href="/auth/login"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#1E3A8A] hover:underline"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Login
                </Link>
            </div>
        </form>
    );
}
