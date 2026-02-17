import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Generate a simple unique ID (for mock purposes).
 */
export function generateId(): string {
    return `user-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

/**
 * Simulate an async API call with a configurable delay.
 */
export function simulateDelay(ms = 1200): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generate a fake JWT-like token (for mock purposes only).
 */
export function generateMockToken(): string {
    const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
    const payload = btoa(
        JSON.stringify({ iat: Date.now(), exp: Date.now() + 86400000 })
    );
    const sig = btoa(Math.random().toString(36).slice(2));
    return `${header}.${payload}.${sig}`;
}
