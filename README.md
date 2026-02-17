# PrimeServe – B2B Facility Management Marketplace

> India's leading B2B marketplace for facility management supplies. Trusted by 5,000+ businesses.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🚀 Features

- **Product Catalog** – Browse housekeeping materials, cleaning chemicals, office stationery & pantry items
- **Category Pages** – Full-width hero banners, product grids with discount badges & ratings
- **Shopping Cart** – Add/remove items, quantity controls, order summary with savings
- **User Authentication** – Login, Register, Forgot Password with mock auth
- **User Dashboard** – My Account, My Orders, Wishlist, Settings
- **Pro Plan** – Premium membership with extended credit terms and extra discounts
- **Responsive Design** – Works seamlessly on desktop, tablet & mobile
- **Modern UI** – Glassmorphism, gradients, micro-animations, premium feel

---

## 📂 Project Structure

```
primeserve-app/
├── public/                 # Static assets (logo, favicon)
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── page.tsx        # Homepage
│   │   ├── layout.tsx      # Root layout
│   │   ├── globals.css     # Global styles (Tailwind)
│   │   ├── about/          # About PrimeServe
│   │   ├── account/        # My Account (profile details)
│   │   ├── auth/           # Login, Register, Forgot Password
│   │   ├── careers/        # Careers page
│   │   ├── cart/           # Shopping Cart
│   │   ├── category/       # Dynamic category pages [slug]
│   │   ├── contact/        # Contact Us
│   │   ├── cookies/        # Cookie Policy
│   │   ├── faqs/           # FAQs
│   │   ├── help/           # Help Center
│   │   ├── orders/         # My Orders
│   │   ├── privacy/        # Privacy Policy
│   │   ├── pro/            # Pro Plan page
│   │   ├── products/       # Products listing
│   │   ├── returns/        # Returns Policy
│   │   ├── services/       # Services
│   │   ├── settings/       # Account Settings
│   │   ├── shipping/       # Shipping Info
│   │   ├── terms/          # Terms of Service
│   │   └── wishlist/       # Wishlist
│   ├── components/         # Reusable components
│   │   ├── auth/           # LoginForm, RegisterForm, ForgotPasswordForm
│   │   ├── home/           # HeroCarousel, WhyChooseUs
│   │   ├── layout/         # Header, Footer
│   │   └── ui/             # AuthGuard, Input
│   ├── data/               # Mock data (JSON seed users)
│   ├── hooks/              # Custom hooks (useAuth)
│   ├── lib/                # Utilities & mock auth logic
│   ├── store/              # Zustand auth store
│   └── types/              # TypeScript interfaces
├── .gitignore
├── next.config.ts
├── tailwind.config.ts      # (via Tailwind v4 CSS config)
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS 4** | Utility-first styling |
| **Zustand** | Lightweight state management |
| **Lucide React** | Icon library |
| **localStorage** | Mock auth & session persistence |

---

## ⚡ Getting Started

### Prerequisites

- **Node.js** 18+ installed
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/primeserve-app.git
cd primeserve-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🔐 Demo Login

Use these test credentials to explore the authenticated experience:

| Email | Password |
|-------|----------|
| `admin@primeserve.in` | `admin123` |
| `sumitmishraa.business@gmail.com` | *(your registered password)* |

---

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ by PrimeServe Team**
