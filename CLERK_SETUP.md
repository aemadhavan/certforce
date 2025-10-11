# Clerk Authentication Setup

This application uses Clerk for authentication with Google OAuth support.

## Setup Instructions

### 1. Create a Clerk Account
1. Go to [https://clerk.com](https://clerk.com)
2. Sign up for a free account
3. Create a new application

### 2. Get Your API Keys
1. In the Clerk Dashboard, go to **API Keys**
2. Copy your **Publishable Key** (starts with `pk_test_` or `pk_live_`)
3. Copy your **Secret Key** (starts with `sk_test_` or `sk_live_`)

### 3. Configure Environment Variables
1. Open `.env.local` in the project root
2. Replace the placeholder values:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
   CLERK_SECRET_KEY=sk_test_your_actual_key_here
   ```

### 4. Enable Google OAuth
1. In the Clerk Dashboard, go to **User & Authentication** → **Social Connections**
2. Enable **Google** as a sign-in method
3. Follow the prompts to configure Google OAuth:
   - You'll need to create a Google Cloud Project
   - Enable Google OAuth API
   - Add authorized redirect URIs from Clerk

### 5. Configure Redirect URLs (Optional)
The app is pre-configured with these redirect URLs:
- Sign In: `/sign-in`
- Sign Up: `/sign-up`
- After Sign In: `/dashboard`
- After Sign Up: `/dashboard`

You can modify these in `.env.local` if needed.

### 6. Test Authentication
1. Start the dev server: `npm run dev`
2. Click "Sign up" to create an account
3. Try signing in with Google OAuth
4. You should be redirected to `/dashboard` after successful authentication

## Features Implemented

- ✅ Google OAuth sign-in
- ✅ Email/password sign-in (Clerk default)
- ✅ Protected routes (dashboard requires authentication)
- ✅ User profile management via UserButton
- ✅ Sign-in modal on homepage
- ✅ Dedicated sign-in/sign-up pages

## Security Notes

- Never commit `.env.local` to version control
- Use different API keys for development and production
- Clerk automatically handles session management and security
