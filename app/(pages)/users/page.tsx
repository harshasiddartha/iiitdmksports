// app/(pages)/users/page.tsx
import React from 'react';
import { getAllUsers } from '../../../app/actions/getUsers'; // Adjust the import path
import { currentUser } from '@clerk/nextjs/server';
import LoginPage from '../login/page';
import { isAdmin } from '@/lib/checkAdmin'; // Import the isAdmin function
import { redirect } from 'next/navigation'; // Import redirect for navigation
import { User } from '@prisma/client'; // Import User type from Prisma Client

const UserList = async () => {
  const user =  currentUser();

  // If user is not logged in, show the login page
  if (!user) {
    return <LoginPage />;
  }

  // Check if the logged-in user is an admin
  const userIsAdmin = await isAdmin();

  // If the user is not an admin, redirect them to the home page
  if (!userIsAdmin) {
    redirect('/');
     // Return null since redirect() will navigate away from this component
  }

  const users: User[] = await getAllUsers(); // Fetch users and use the User type

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">User List</h1>
      {users.length === 0 ? ( // Check if there are no users
        <p className="text-center text-gray-600">No users found.</p>
      ) : (
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="border rounded-lg shadow-md p-4 hover:bg-gray-100 transition">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p> {/* Display user name and email */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
