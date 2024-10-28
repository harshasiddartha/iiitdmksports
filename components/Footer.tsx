// app/components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 px-4 md:px-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          © 2024 IIITDM Sports. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
