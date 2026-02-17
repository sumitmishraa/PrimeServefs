// ==========================================
// B2B Facility Management Marketplace Types
// ==========================================

// --- User & Auth ---

export interface User {
  id: string;
  email: string;
  name: string;
  company: string;
  phone: string;
  role: 'user' | 'admin';
  isPro: boolean;
  gstNumber?: string;
  businessType: string;
  createdAt: string;
}

export interface RegisterData {
  name: string;
  company: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  gstNumber?: string;
  businessType: string;
  agreeTerms: boolean;
}

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface ForgotPasswordData {
  email: string;
}

export interface AuthSession {
  user: Omit<User, 'createdAt'>;
  token: string;
  expiresAt: string;
  rememberMe: boolean;
}

// --- Mock user with password (only used in mock auth) ---

export interface MockUser extends User {
  password: string;
}

// --- Auth Store State ---

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
  logout: () => void;
  register: (data: RegisterData) => Promise<void>;
  hydrate: () => void;
}

// --- Product (placeholder for future phases) ---

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  subCategory: string;
  brand: string;
  price: number;
  bulkPricing: BulkTier[];
  images: string[];
  description: string;
  specifications: Record<string, string>;
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
}

export interface BulkTier {
  minQty: number;
  maxQty: number | null;
  pricePerUnit: number;
}

// --- Cart (placeholder for future phases) ---

export interface CartItem {
  product: Product;
  quantity: number;
}

// --- Category ---

export type CategorySlug =
  | 'housekeeping-materials'
  | 'cleaning-chemicals'
  | 'office-stationery'
  | 'pantry-items';

export interface Category {
  name: string;
  slug: CategorySlug;
  description: string;
  itemCount: number;
  icon: string; // Lucide icon name
}
