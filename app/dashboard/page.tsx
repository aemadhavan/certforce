import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-6">
            <span className="text-yellow-400">Dashboard</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Welcome to your Salesforce Admin Mastery dashboard!
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Total Progress</h3>
              <p className="text-3xl font-bold text-yellow-400">0%</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Flashcards Completed</h3>
              <p className="text-3xl font-bold text-purple-400">0 / 450</p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Modules Passed</h3>
              <p className="text-3xl font-bold text-green-400">0 / 7</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
