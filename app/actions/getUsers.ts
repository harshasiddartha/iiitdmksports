import { db } from '../../lib/db'; // Import your Prisma client instance

export const getAllUsers = async () => {
  try {
    // Fetch all users from the database
    const users = await db.user.findMany();

    return users; // Return the list of users
  } catch (error) {
    console.error('Error fetching users:', error); // Log any errors
    throw new Error('Could not fetch users'); // Throw an error if fetching fails
  }
};
