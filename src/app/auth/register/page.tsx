import RegisterForm from '@/components/auth/RegisterForm';

export default function RegisterPage() {
    return (
        <div className="w-full max-w-2xl">
            <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 border border-gray-100">
                {/* Heading */}
                <div className="text-center mb-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1E3A8A] shadow-lg">
                        <span className="text-2xl font-bold text-white">P</span>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Create Your Account
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Join PrimeServe for seamless B2B procurement
                    </p>
                </div>

                <RegisterForm />
            </div>
        </div>
    );
}
