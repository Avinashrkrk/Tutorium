# 🎓 Tutorium

> **The next generation LMS with AI voice tutoring**

A modern Learning Management System that lets students learn through conversation with AI-powered voice assistants. Built for the future of education.

## ✨ What makes it special?

Instead of just reading or watching videos, students can **talk** with AI tutors who understand, respond, and adapt to their learning style in real-time.

```
🎯 Talk to learn, don't just read
🤖 AI tutors that actually understand you  
💡 Personalized learning paths
🌍 Available anywhere, anytime
```

## 🛠️ Built with

- **Next.js** - Modern React framework
- **Supabase** - Database & authentication  
- **Stripe** - Payments & subscriptions
- **Vapi** - Voice AI integration
- **TypeScript** - Type-safe development

## 🚀 Quick start

```bash
# Get the code
git clone https://github.com/yourusername/tutorium.git
cd tutorium

# Install stuff
npm install

# Set up your secrets
cp .env.example .env.local
# Add your API keys here

# Run it
npm run dev
```

Visit `http://localhost:3000` and start learning! 🎉

## 📋 Features

**For Students:**
- 🎤 Voice conversations with AI tutors
- 📚 Interactive courses and lessons
- 📊 Track your learning progress
- 💬 Get instant help and feedback

**For Teachers:**
- 📝 Create and manage courses
- 👥 Monitor student progress
- 🎯 Customize AI tutor personalities
- 📈 View detailed analytics

**For Business:**
- 💳 Subscription billing with Stripe
- 🔐 Secure user authentication
- 📱 Mobile-friendly design
- ⚡ Real-time updates

## 🎯 Project structure

```
tutorium/
├── app/           # Next.js pages & API routes
├── components/    # Reusable UI components
├── lib/          # Helper functions
├── types/        # TypeScript types
└── supabase/     # Database setup
```

## 🔧 Environment setup

Create `.env.local` with:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public

# Vapi (Voice AI)
VAPI_API_KEY=your_vapi_key
```

## 🚧 Current status

**What's working:**
- ✅ User signup/login
- ✅ Basic course structure
- ✅ Stripe payment setup
- ✅ Voice AI integration

**Coming soon:**
- 🔄 Advanced course builder
- 🔄 Student dashboard
- 🔄 Progress tracking
- 🔄 Mobile app

## 🤝 Contributing

Want to help build the future of education? Check out our [contributing guide](CONTRIBUTING.md) and jump in!

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

**Made with ❤️ for better learning experiences**

*Questions? Open an issue or reach out!*
