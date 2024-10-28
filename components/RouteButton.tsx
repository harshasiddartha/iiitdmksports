"use client"; // This directive allows the use of hooks in this component.

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type RouteButtonProps = {
  label: string;
  route: string;
  isLoggedIn: boolean; // Prop to check if the user is logged in
};

const RouteButton: React.FC<RouteButtonProps> = ({ label, route, isLoggedIn }) => {
  const router = useRouter();

  const handleClick = () => {
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      router.push("/loginFirst");
    } else {
      // Redirect to the specified route if logged in
      router.push(route);
    }
  };

  return (
    <Button size="lg" onClick={handleClick}>
      {label}
    </Button>
  );
};

export default RouteButton;
