'use client';

import { create } from 'zustand';
import type { AuthState, RegisterData, User } from '@/types';
import {
    authenticateUser,
    registerUser,
    saveSession,
    getSession,
    clearSession,
} from '@/lib/mockAuth';

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: true,

    login: async (email: string, password: string, rememberMe = false) => {
        const user: User = await authenticateUser(email, password);
        saveSession(user, rememberMe);
        set({ user, isAuthenticated: true });
    },

    logout: () => {
        clearSession();
        set({ user: null, isAuthenticated: false });
    },

    register: async (data: RegisterData) => {
        await registerUser(data);
        // Don't auto-login after registration; redirect to login page
    },

    hydrate: () => {
        const session = getSession();
        if (session) {
            set({ user: session.user, isAuthenticated: true, isLoading: false });
        } else {
            set({ isLoading: false });
        }
    },
}));
