import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';

export default function ForgotPasswordPage() {
    return (
        <div className="w-full max-w-md">
            <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 border border-gray-100">
                <ForgotPasswordForm />
            </div>
        </div>
    );
}
