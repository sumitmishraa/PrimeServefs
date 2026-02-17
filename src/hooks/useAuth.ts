'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';

/**
 * Custom auth hook — thin wrapper around the Zustand store.
 * Also triggers hydration from localStorage on first mount.
 */
export function useAuth() {
    const store = useAuthStore();

    useEffect(() => {
        store.hydrate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        user: store.user,
        isAuthenticated: store.isAuthenticated,
        isLoading: store.isLoading,
        login: store.login,
        logout: store.logout,
        register: store.register,
    };
}
