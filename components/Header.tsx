import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-slate-700">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold">
            <span className="text-yellow-400">Certforce</span>{" "}
            {/* <span className="text-white">Admin Mastery</span> */}
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-white hover:text-yellow-400 transition-colors px-4 py-2">
                Sign in
              </button>
            </SignInButton>
            <Link href="/sign-up">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors font-medium">
                Sign up
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard" className="text-white hover:text-yellow-400 transition-colors px-4 py-2">
              Dashboard
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
