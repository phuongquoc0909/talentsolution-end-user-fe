'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

export default function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  const pathname = usePathname();

  // If it's root page (only "/"), render only children
  if (pathname === '/') {
    return (
      <>
        {children}
      </>
    );
  }

  // Other pages will be handled by their respective template layouts
  return (
    <>
      {children}
    </>
  );
}
