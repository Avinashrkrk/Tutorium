<div align="center">

# 🎓 Tutorium

**The next-generation LMS with AI voice tutoring**

Learn by talking. Tutorium pairs course content with real-time, voice-based AI tutors that adapt to how each student learns.

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)
[![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white)](https://stripe.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

[Features](#-core-features) · [Quick Start](#-quick-start) · [Project Structure](#-project-structure) · [Roadmap](#-roadmap) · [Contributing](#-contributing)

</div>

---

## ✨ What Makes It Special

Instead of passively reading text or watching videos, students **talk** with AI tutors that understand context, respond conversationally, and adjust to individual learning pace and style — in real time.

- 🎯 **Talk to learn** — conversational learning instead of static content
- 🤖 **AI tutors that adapt** — responses shaped by how each student learns
- 💡 **Personalized paths** — course flow adjusts to progress and performance
- 🌍 **Learn anywhere** — voice-first, available on any device

## 📋 Core Features

| For Students | For Teachers | For Business |
| :--- | :--- | :--- |
| 🎤 Voice conversations with AI tutors | 📝 Create and manage courses | 💳 Subscription billing with Stripe |
| 📚 Interactive courses and lessons | 👥 Monitor student progress | 🔐 Secure user authentication |
| 📊 Track personal learning progress | 🎯 Customize AI tutor personalities | 📱 Mobile-friendly design |
| 💬 Get instant help and feedback | 📈 View detailed analytics | ⚡ Real-time updates |

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Database & Auth | [Supabase](https://supabase.com/) |
| Payments | [Stripe](https://stripe.com/) |
| Voice AI | [Vapi](https://vapi.ai/) |

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm
- A [Supabase](https://supabase.com/) account
- API keys for [Vapi](https://vapi.ai/) and [Stripe](https://stripe.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tutorium.git
cd tutorium

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### 🔧 Environment Setup

Populate `.env.local` with the required credentials:

```env
# Supabase — Project Settings > API
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

# Stripe — Developer Dashboard
STRIPE_SECRET_KEY=your_stripe_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public

# Vapi — Voice AI Dashboard
VAPI_API_KEY=your_vapi_key
```

### Running the App

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to start learning. 🎉

## 🎯 Project Structure

```text
tutorium/
├── app/            # Next.js pages, layouts, & API routes
├── components/     # Reusable UI components (buttons, modals, etc.)
├── lib/            # Helper functions and utilities
├── types/          # TypeScript interface definitions
└── supabase/       # Database schemas and migrations
```

## 🗺️ Roadmap

**Shipped**
- User signup / login
- Basic course structure
- Stripe payments
- Voice AI integration

**In Progress**
- Advanced course builder
- Student dashboard
- Progress tracking
- Mobile-friendly UI polish

## 🤝 Contributing

Contributions are welcome. Please read the [Contributing Guide](CONTRIBUTING.md) before opening a pull request.

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'feat: add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📄 License

Licensed under the MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">

**Made with ❤️ for better learning experiences**

Questions or ideas? [Open an issue](../../issues) or start a discussion.

</div>
