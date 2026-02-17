import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    label?: string;
}

const sizeMap = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
};

export default function LoadingSpinner({
    size = 'md',
    className = '',
    label,
}: LoadingSpinnerProps) {
    return (
        <div
            className={`flex flex-col items-center justify-center gap-3 ${className}`}
            role="status"
        >
            <Loader2 className={`animate-spin text-[#1E3A8A] ${sizeMap[size]}`} />
            {label && <p className="text-sm text-gray-500">{label}</p>}
            <span className="sr-only">Loading…</span>
        </div>
    );
}
