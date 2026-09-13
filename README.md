# 🎓 Tutorium

> **The next generation LMS with AI voice tutoring**

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)
[![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white)](https://stripe.com/)

A modern Learning Management System that lets students learn through conversation with AI-powered voice assistants. Built for the future of education.

## ✨ What makes it special?

Instead of just reading or watching videos, students can **talk** with AI tutors who understand, respond, and adapt to their learning style in real-time.

- 🎯 **Talk to learn, don't just read**
- 🤖 **AI tutors that actually understand you**
- 💡 **Personalized learning paths**
- 🌍 **Available anywhere, anytime**

## 📋 Core Features

| For Students | For Teachers | For Business |
| :--- | :--- | :--- |
| 🎤 Voice conversations with AI tutors | 📝 Create and manage courses | 💳 Subscription billing with Stripe |
| 📚 Interactive courses and lessons | 👥 Monitor student progress | 🔐 Secure user authentication |
| 📊 Track your learning progress | 🎯 Customize AI tutor personalities | 📱 Mobile-friendly design |
| 💬 Get instant help and feedback | 📈 View detailed analytics | ⚡ Real-time updates |

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or later
- npm, yarn, or pnpm
- A Supabase account
- Vapi and Stripe API keys

### Installation

```bash
# Clone the repository
git clone [https://github.com/yourusername/tutorium.git](https://github.com/yourusername/tutorium.git)
cd tutorium

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### 🔧 Environment Setup

Populate your `.env.local` file with the required credentials:

```env
# Supabase (Find these in your Project Settings > API)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

# Stripe (Find these in the Stripe Developer Dashboard)
STRIPE_SECRET_KEY=your_stripe_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public

# Vapi - Voice AI (Find this in your Vapi Dashboard)
VAPI_API_KEY=your_vapi_key
```

### Running the App

```bash
# Start the development server
npm run dev
```
Visit `http://localhost:3000` to start learning! 🎉

## 🎯 Project Structure

```text
tutorium/
├── app/            # Next.js pages, layouts, & API routes
├── components/     # Reusable UI components (buttons, modals, etc.)
├── lib/            # Helper functions and utilities
├── types/          # TypeScript interface definitions
└── supabase/       # Database schemas and migrations
```

## 🚧 Current Status

- ✅ **Working:** User signup/login, basic course structure, Stripe payments, Voice AI integration.
- 🔄 **In Progress:** Advanced course builder, student dashboard, progress tracking, mobile app generation.

## 🤝 Contributing

Want to help build the future of education? Check out our [Contributing Guide](CONTRIBUTING.md) to get started.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
**Made with ❤️ for better learning experiences**  
*Questions? Open an issue or reach out!*
