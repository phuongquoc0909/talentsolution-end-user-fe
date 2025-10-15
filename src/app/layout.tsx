import React from 'react';
import ClientLayoutWrapper from '@/components/common/ClientLayoutWrapper'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body style={{ margin: '0' }}>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
