'use client'; // Ensure this is a client component

import { useRouter } from 'next/navigation'; // Use the new router for Next.js 13+
import { Button } from "@/components/ui/button";
import { UserPlus, Users } from "lucide-react";

export default function DashboardClient() {
  const router = useRouter();

  const handleButtonClick = (section: 'requests' | 'students') => {
    switch (section) {
      case 'requests':
        router.push('/reservations'); // Redirect to reservations page
        break;
      case 'students':
        router.push('/users'); // Redirect to students page
        break;
    }
  };

  return (
    <div>
      <div className="flex space-x-4 mb-6">
        <Button onClick={() => handleButtonClick('requests')}>
          <UserPlus className="mr-2 h-4 w-4" />
          Student Reservations
        </Button>
        <Button onClick={() => handleButtonClick('students')}>
          <Users className="mr-2 h-4 w-4" />
          Students List
        </Button>
      </div>
    </div>
  );
}
