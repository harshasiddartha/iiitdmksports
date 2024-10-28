import { currentUser } from '@clerk/nextjs/server';
import LoginPage from '../login/page';
import DashboardClient from '../../../components/DashboardClient';

export default async function Dashboard() {
  const user = await currentUser();

  if (!user) {
    return <LoginPage />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <DashboardClient />
    </div>
  );
}
