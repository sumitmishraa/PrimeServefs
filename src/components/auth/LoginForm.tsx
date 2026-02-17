'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Lock, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const loginSchema = z.object({
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Please enter a valid email'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must be at least 8 characters'),
    rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const { login } = useAuth();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: { rememberMe: false },
    });

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        setServerError(null);
        try {
            await login(data.email, data.password, data.rememberMe);
            router.push('/');
        } catch (error: unknown) {
            const msg =
                error instanceof Error ? error.message : 'Something went wrong';
            setServerError(msg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Server Error Banner */}
            {serverError && (
                <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{serverError}</span>
                </div>
            )}

            {/* Email Field */}
            <div className="space-y-1.5">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                >
                    Email Address
                </label>
                <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="your.email@company.com"
                        className={`block w-full rounded-lg border bg-white py-3 pl-10 pr-4 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 transition ${errors.email ? 'border-red-400' : 'border-gray-300'
                            }`}
                        {...register('email')}
                    />
                </div>
                {errors.email && (
                    <p className="flex items-center gap-1 text-xs text-red-600 mt-1">
                        <AlertCircle className="h-3.5 w-3.5" /> {errors.email.message}
                    </p>
                )}
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                >
                    Password
                </label>
                <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        className={`block w-full rounded-lg border bg-white py-3 pl-10 pr-12 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 transition ${errors.password ? 'border-red-400' : 'border-gray-300'
                            }`}
                        {...register('password')}
                    />
                    <button
                        type="button"
                        tabIndex={-1}
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                        ) : (
                            <Eye className="h-5 w-5" />
                        )}
                    </button>
                </div>
                {errors.password && (
                    <p className="flex items-center gap-1 text-xs text-red-600 mt-1">
                        <AlertCircle className="h-3.5 w-3.5" /> {errors.password.message}
                    </p>
                )}
            </div>

            {/* Remember Me / Forgot Password */}
            <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-900 focus:ring-blue-600 transition"
                        {...register('rememberMe')}
                    />
                    <span className="text-sm text-gray-600">Remember me for 30 days</span>
                </label>
                <Link
                    href="/auth/forgot-password"
                    className="text-sm font-medium text-[#1E3A8A] hover:underline"
                >
                    Forgot password?
                </Link>
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={isLoading}
                className="relative flex w-full items-center justify-center gap-2 rounded-lg bg-[#1E3A8A] py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#162e6e] focus:outline-none focus:ring-2 focus:ring-blue-600/40 disabled:opacity-60 disabled:cursor-not-allowed h-12"
            >
                {isLoading && <Loader2 className="h-4.5 w-4.5 animate-spin" />}
                {isLoading ? 'Signing in…' : 'Sign In to Your Account'}
            </button>

            {/* Divider */}
            <div className="relative my-2">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-3 text-gray-400">or</span>
                </div>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-500">
                Don&apos;t have an account?{' '}
                <Link
                    href="/auth/register"
                    className="font-semibold text-[#1E3A8A] hover:underline"
                >
                    Sign up
                </Link>
            </p>
        </form>
    );
}
