'use client';

import React, { useState } from 'react';
import Header from '@/components/demop11/Header';
import Footer from '@/components/demop11/Footer';
import ScrollTopButton from '@/components/common/scrollToTop';
import LoginDialog from '@/components/UI/dialog/LoginDialog';
import SocialSection from '@/components/demop11/box_social_section';

import '@/styles/demop11/bootstrap.css';
import '@/styles/demop11/iefix.css';
import '@/styles/common/general.css';
import '@/styles/common/core.css';
import '@/styles/common/theme_default.css';
import '@/styles/demop11/premium.css';
import '@/styles/demop11/themes.css';
// import '@/styles/demop11/nav_vi.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const handleLogin = () => {
    setIsOpenLogin(true);
  };
  return (
    <html>
      <body>
        <Header onLogin={handleLogin} />
        <div id="wrapper">{children}</div>
        <SocialSection />
        <Footer />
        <ScrollTopButton />
        <LoginDialog isOpen={isOpenLogin} onClose={() => setIsOpenLogin(false)} />
      </body>
    </html>
  );
}
