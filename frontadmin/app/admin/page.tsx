import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect to the sign-in page if not authenticated
    redirect('/auth/signin');
  }

  return <div>Welcome, Admin! You are signed in.</div>;
}
