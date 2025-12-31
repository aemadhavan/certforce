import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-salesforce-blue/20 bg-white/95 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold">
            <span className="text-salesforce-blue">Certforce</span>{" "}
            {/* <span className="text-salesforce-navy">Admin Mastery</span> */}
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-salesforce-navy hover:text-salesforce-blue transition-colors px-4 py-2 font-medium">
                Sign in
              </button>
            </SignInButton>
            <Link href="/sign-up">
              <button className="bg-salesforce-blue hover:bg-salesforce-blue-dark text-white px-6 py-2 rounded-lg transition-colors font-medium shadow-sm">
                Sign up
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard" className="text-salesforce-navy hover:text-salesforce-blue transition-colors px-4 py-2 font-medium">
              Dashboard
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
