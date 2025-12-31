import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-salesforce-blue-lighter via-white to-salesforce-cloud">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div>
          <h1 className="text-4xl font-bold mb-6">
            <span className="text-salesforce-blue">Dashboard</span>
          </h1>
          <p className="text-xl text-salesforce-navy/80 mb-8">
            Welcome to your Salesforce Admin Mastery dashboard!
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-salesforce-blue/20 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-salesforce-navy">Total Progress</h3>
              <p className="text-3xl font-bold text-salesforce-blue">0%</p>
            </div>
            <div className="bg-white border border-salesforce-blue/20 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-salesforce-navy">Flashcards Completed</h3>
              <p className="text-3xl font-bold text-salesforce-sky">0 / 450</p>
            </div>
            <div className="bg-white border border-salesforce-blue/20 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-salesforce-navy">Modules Passed</h3>
              <p className="text-3xl font-bold text-salesforce-orange">0 / 7</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
