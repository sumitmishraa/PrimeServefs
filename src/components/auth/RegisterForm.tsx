'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
    User,
    Building2,
    Mail,
    Phone,
    Lock,
    Eye,
    EyeOff,
    FileText,
    Briefcase,
    Loader2,
    AlertCircle,
    Check,
} from 'lucide-react';
import { useState, useMemo } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// ---- Validation Schema ----

const registerSchema = z
    .object({
        name: z.string().min(3, 'Name must be at least 3 characters'),
        company: z.string().min(1, 'Company name is required'),
        email: z
            .string()
            .min(1, 'Email is required')
            .email('Please enter a valid email'),
        phone: z
            .string()
            .min(1, 'Phone number is required')
            .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit phone number'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters')
            .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
            .regex(/[a-z]/, 'Must contain at least one lowercase letter')
            .regex(/[0-9]/, 'Must contain at least one number')
            .regex(/[^A-Za-z0-9]/, 'Must contain at least one special character'),
        confirmPassword: z.string().min(1, 'Please confirm your password'),
        gstNumber: z
            .string()
            .regex(
                /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
                'Invalid GST number format'
            )
            .optional()
            .or(z.literal('')),
        businessType: z.string().min(1, 'Please select a business type'),
        agreeTerms: z.literal(true, {
            message: 'You must accept the Terms & Conditions',
        }),
    })
    .refine((d) => d.password === d.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });

type RegisterFormData = z.infer<typeof registerSchema>;

// ---- Constants ----

const BUSINESS_TYPES = [
    'Manufacturing',
    'Retail',
    'Services',
    'Healthcare',
    'Hospitality',
    'Education',
    'Other',
];

// ---- Password Strength ----

function getPasswordStrength(pw: string) {
    let score = 0;
    const checks = {
        length: pw.length >= 8,
        uppercase: /[A-Z]/.test(pw),
        lowercase: /[a-z]/.test(pw),
        number: /[0-9]/.test(pw),
        special: /[^A-Za-z0-9]/.test(pw),
    };
    score = Object.values(checks).filter(Boolean).length;
    const label = score <= 2 ? 'Weak' : score <= 3 ? 'Medium' : 'Strong';
    const color =
        score <= 2 ? 'bg-red-500' : score <= 3 ? 'bg-yellow-500' : 'bg-green-500';
    const pct = (score / 5) * 100;
    return { score, label, color, pct, checks };
}

// ---- Component ----

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const { register: registerUser } = useAuth();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            gstNumber: '',
            businessType: '',
            agreeTerms: false as unknown as true,
        },
    });

    const passwordValue = watch('password', '');
    const strength = useMemo(
        () => getPasswordStrength(passwordValue),
        [passwordValue]
    );

    const onSubmit = async (data: RegisterFormData) => {
        setIsLoading(true);
        setServerError(null);
        try {
            await registerUser({
                name: data.name,
                company: data.company,
                email: data.email,
                phone: data.phone,
                password: data.password,
                confirmPassword: data.confirmPassword,
                gstNumber: data.gstNumber || '',
                businessType: data.businessType,
                agreeTerms: data.agreeTerms,
            });
            router.push('/auth/login?registered=true');
        } catch (error: unknown) {
            const msg =
                error instanceof Error ? error.message : 'Something went wrong';
            setServerError(msg);
        } finally {
            setIsLoading(false);
        }
    };

    // ---- Helpers ----

    const inputCls = (hasError: boolean) =>
        `block w-full rounded-lg border bg-white py-3 pl-10 pr-4 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 transition ${hasError ? 'border-red-400' : 'border-gray-300'
        }`;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Server Error */}
            {serverError && (
                <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{serverError}</span>
                </div>
            )}

            {/* ---- Row 1: Name / Company ---- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <div className="relative">
                        <User className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                            id="name"
                            placeholder="Enter your full name"
                            className={inputCls(!!errors.name)}
                            {...register('name')}
                        />
                    </div>
                    {errors.name && (
                        <p className="flex items-center gap-1 text-xs text-red-600">
                            <AlertCircle className="h-3.5 w-3.5" /> {errors.name.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                        Company Name
                    </label>
                    <div className="relative">
                        <Building2 className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                            id="company"
                            placeholder="Your company name"
                            className={inputCls(!!errors.company)}
                            {...register('company')}
                        />
                    </div>
                    {errors.company && (
                        <p className="flex items-center gap-1 text-xs text-red-600">
                            <AlertCircle className="h-3.5 w-3.5" /> {errors.company.message}
                        </p>
                    )}
                </div>
            </div>

            {/* ---- Row 2: Email / Phone ---- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Business Email
                    </label>
                    <div className="relative">
                        <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            placeholder="your.email@company.com"
                            className={inputCls(!!errors.email)}
                            {...register('email')}
                        />
                    </div>
                    {errors.email && (
                        <p className="flex items-center gap-1 text-xs text-red-600">
                            <AlertCircle className="h-3.5 w-3.5" /> {errors.email.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <div className="relative">
                        <Phone className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                            id="phone"
                            type="tel"
                            placeholder="9876543210"
                            maxLength={10}
                            className={inputCls(!!errors.phone)}
                            {...register('phone')}
                        />
                    </div>
                    {errors.phone && (
                        <p className="flex items-center gap-1 text-xs text-red-600">
                            <AlertCircle className="h-3.5 w-3.5" /> {errors.phone.message}
                        </p>
                    )}
                </div>
            </div>

            {/* ---- Row 3: Password / Confirm ---- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="relative">
                        <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Create a strong password"
                            className={`${inputCls(!!errors.password)} pr-12`}
                            {...register('password')}
                        />
                        <button
                            type="button"
                            tabIndex={-1}
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="flex items-center gap-1 text-xs text-red-600">
                            <AlertCircle className="h-3.5 w-3.5" /> {errors.password.message}
                        </p>
                    )}

                    {/* Strength Indicator */}
                    {passwordValue.length > 0 && (
                        <div className="space-y-1.5 pt-1">
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 flex-1 rounded-full bg-gray-200 overflow-hidden">
                                    <div
                                        className={`h-full rounded-full transition-all duration-300 ${strength.color}`}
                                        style={{ width: `${strength.pct}%` }}
                                    />
                                </div>
                                <span
                                    className={`text-xs font-medium ${strength.score <= 2
                                        ? 'text-red-600'
                                        : strength.score <= 3
                                            ? 'text-yellow-600'
                                            : 'text-green-600'
                                        }`}
                                >
                                    {strength.label}
                                </span>
                            </div>
                            <ul className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-xs text-gray-500">
                                {Object.entries(strength.checks).map(([key, ok]) => (
                                    <li key={key} className="flex items-center gap-1">
                                        <Check
                                            className={`h-3 w-3 ${ok ? 'text-green-500' : 'text-gray-300'
                                                }`}
                                        />
                                        {key === 'length'
                                            ? 'Min 8 characters'
                                            : key === 'uppercase'
                                                ? 'Uppercase'
                                                : key === 'lowercase'
                                                    ? 'Lowercase'
                                                    : key === 'number'
                                                        ? 'Number'
                                                        : 'Special char'}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                            id="confirmPassword"
                            type={showConfirm ? 'text' : 'password'}
                            placeholder="Confirm your password"
                            className={`${inputCls(!!errors.confirmPassword)} pr-12`}
                            {...register('confirmPassword')}
                        />
                        <button
                            type="button"
                            tabIndex={-1}
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                    </div>
                    {errors.confirmPassword && (
                        <p className="flex items-center gap-1 text-xs text-red-600">
                            <AlertCircle className="h-3.5 w-3.5" /> {errors.confirmPassword.message}
                        </p>
                    )}
                </div>
            </div>

            {/* ---- Row 4: GST / Business Type ---- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-700">
                        GST Number <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                        <FileText className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                            id="gstNumber"
                            placeholder="22AAAAA0000A1Z5"
                            className={inputCls(!!errors.gstNumber)}
                            {...register('gstNumber')}
                        />
                    </div>
                    {errors.gstNumber && (
                        <p className="flex items-center gap-1 text-xs text-red-600">
                            <AlertCircle className="h-3.5 w-3.5" /> {errors.gstNumber.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                        Business Type
                    </label>
                    <div className="relative">
                        <Briefcase className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <select
                            id="businessType"
                            className={`${inputCls(!!errors.businessType)} appearance-none`}
                            defaultValue=""
                            {...register('businessType')}
                        >
                            <option value="" disabled>
                                Select business type
                            </option>
                            {BUSINESS_TYPES.map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>
                    </div>
                    {errors.businessType && (
                        <p className="flex items-center gap-1 text-xs text-red-600">
                            <AlertCircle className="h-3.5 w-3.5" /> {errors.businessType.message}
                        </p>
                    )}
                </div>
            </div>

            {/* ---- Terms ---- */}
            <label className="flex items-start gap-2 cursor-pointer select-none">
                <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-900 focus:ring-blue-600"
                    {...register('agreeTerms')}
                />
                <span className="text-sm text-gray-600">
                    I agree to the{' '}
                    <Link
                        href="/terms"
                        target="_blank"
                        className="text-[#1E3A8A] hover:underline font-medium"
                    >
                        Terms & Conditions
                    </Link>{' '}
                    and{' '}
                    <Link
                        href="/privacy"
                        target="_blank"
                        className="text-[#1E3A8A] hover:underline font-medium"
                    >
                        Privacy Policy
                    </Link>
                </span>
            </label>
            {errors.agreeTerms && (
                <p className="flex items-center gap-1 text-xs text-red-600 -mt-3">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.agreeTerms.message}
                </p>
            )}

            {/* ---- Submit ---- */}
            <button
                type="submit"
                disabled={isLoading}
                className="relative flex w-full items-center justify-center gap-2 rounded-lg bg-[#1E3A8A] py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#162e6e] focus:outline-none focus:ring-2 focus:ring-blue-600/40 disabled:opacity-60 disabled:cursor-not-allowed h-12"
            >
                {isLoading && <Loader2 className="h-4.5 w-4.5 animate-spin" />}
                {isLoading ? 'Creating Account…' : 'Create Your Account'}
            </button>

            {/* ---- Login link ---- */}
            <p className="text-center text-sm text-gray-500">
                Already have an account?{' '}
                <Link
                    href="/auth/login"
                    className="font-semibold text-[#1E3A8A] hover:underline"
                >
                    Sign in
                </Link>
            </p>
        </form>
    );
}
