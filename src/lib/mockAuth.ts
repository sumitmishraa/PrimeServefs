import seedUsers from "@/data/mockUsers.json";
import type { MockUser, RegisterData, User } from "@/types";
import { generateId, generateMockToken, simulateDelay } from "./utils";

// ---- Constants ----

const USERS_STORAGE_KEY = "primeserve-users";
const SESSION_STORAGE_KEY = "primeserve-session";

// ---- Helpers: localStorage user list ----

function getStoredUsers(): MockUser[] {
    if (typeof window === "undefined") return seedUsers as MockUser[];
    try {
        const raw = localStorage.getItem(USERS_STORAGE_KEY);
        if (raw) return JSON.parse(raw) as MockUser[];
    } catch {
        // corrupted – fall through to seed
    }
    // First load: seed localStorage with mock data
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(seedUsers));
    return seedUsers as MockUser[];
}

function saveUsers(users: MockUser[]) {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

// ---- Public API ----

/**
 * Authenticate against the mock user list.
 * Returns the user (without password) on success; throws on failure.
 */
export async function authenticateUser(
    email: string,
    password: string
): Promise<User> {
    await simulateDelay();

    const users = getStoredUsers();
    const match = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!match) {
        throw new Error("Invalid email or password. Please try again.");
    }

    // Strip password before returning
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _pw, ...user } = match;
    return user as User;
}

/**
 * Register a new user in localStorage.
 * Returns the created user on success; throws on failure.
 */
export async function registerUser(data: RegisterData): Promise<User> {
    await simulateDelay();

    const users = getStoredUsers();

    // Check for duplicate email
    if (users.some((u) => u.email.toLowerCase() === data.email.toLowerCase())) {
        throw new Error("An account with this email already exists.");
    }

    const newUser: MockUser = {
        id: generateId(),
        email: data.email,
        password: data.password,
        name: data.name,
        company: data.company,
        phone: data.phone,
        role: "user",
        isPro: false,
        gstNumber: data.gstNumber || "",
        businessType: data.businessType,
        createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    saveUsers(users);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _pw, ...user } = newUser;
    return user as User;
}

// ---- Session helpers ----

export function saveSession(
    user: User,
    rememberMe: boolean
) {
    const session = {
        user,
        token: generateMockToken(),
        expiresAt: new Date(
            Date.now() + (rememberMe ? 30 : 1) * 24 * 60 * 60 * 1000
        ).toISOString(),
        rememberMe,
    };
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
}

export function getSession(): { user: User; token: string } | null {
    if (typeof window === "undefined") return null;
    try {
        const raw = localStorage.getItem(SESSION_STORAGE_KEY);
        if (!raw) return null;
        const session = JSON.parse(raw);
        if (new Date(session.expiresAt) < new Date()) {
            clearSession();
            return null;
        }
        return { user: session.user, token: session.token };
    } catch {
        return null;
    }
}

export function clearSession() {
    localStorage.removeItem(SESSION_STORAGE_KEY);
}
