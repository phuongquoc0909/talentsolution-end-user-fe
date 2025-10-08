'use client';

import React, { ReactNode, useState, Suspense } from 'react';
import ScrollTopButton from '@/components/common/scrollToTop';
import LoginDialog from '@/components/UI/dialog/login_ajax_v1';
import Header from '@/components/demop21/Header';
import Footer from '@/components/demop21/Footer';

import '@/styles/demop21/bootstrap.css';
import '@/styles/demop21/iefix.css';
import '@/styles/common/general.css';
import '@/styles/common/core.css';
import '@/styles/common/theme_default.css';
import '@/styles/demop21/premium.css';
import '@/styles/demop21/themes.css';
// import '@/styles/demop21/nav_vi.css';

interface Demop21Props {
  children: ReactNode;
}

export default function Demop21({ children }: Demop21Props) {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  
  const handleLogin = () => {
    setIsOpenLogin(true);
  };

  return (
    <Suspense fallback={<div>Loading template...</div>}>
      <Header onLogin={handleLogin} />
      <div id="wrapper">{children}</div>
      <Footer />
      <ScrollTopButton />
      <LoginDialog isOpen={isOpenLogin} onClose={() => setIsOpenLogin(false)} />
    </Suspense>
  );
}
