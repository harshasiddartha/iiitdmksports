import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { checkUser } from '../lib/checkUser';
import Link from 'next/link';

const Header = async () => {
  const user = await checkUser();

  // List of admin user IDs (replace with actual IDs or use a role check)
  const adminUserIds = ['user_2nQN8zPsHt0S5MwrPDndz3F4CKY', 'user_2nRPLaUte4qs5JGVmrcXZhxX6kw']; // Replace with actual admin IDs

  const isAdmin = user && adminUserIds.includes(user.clerkUserId); // Check if the user is an admin

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Make the title a clickable link to the home page */}
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">IIITDM SPORTS</h1>
        </Link>

        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center space-x-4">
              {/* Only show Admin Dashboard if the user is an admin */}
              {isAdmin && (
                <Link href="/Dashboard">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                    Admin Dashboard
                  </button>
                </Link>
              )}
              <span className="text-sm font-semibold">
                {user?.name ? `Hello, ${user.name}` : 'Hello'}
              </span>
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
