'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  if (pathname === '/') {
    return (
      <html>
        <body>
          {children}
        </body>
      </html>
    );
  }

  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
