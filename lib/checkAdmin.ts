// lib/checkAdmin.ts

import { currentUser } from '@clerk/nextjs/server';

// List of admin user IDs (replace with actual IDs or use metadata for roles)
const adminUserIds = ['user_2nQN8zPsHt0S5MwrPDndz3F4CKY', 'user_2nRPLaUte4qs5JGVmrcXZhxX6kw']; // Replace with actual IDs

export async function isAdmin() {
  const user = await currentUser();
  return user && adminUserIds.includes(user.id);
}
