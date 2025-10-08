'use client';

import React, { ReactNode, useState, Suspense } from 'react';
import ScrollTopButton from '@/components/common/scrollToTop';
import LoginDialog from '@/components/UI/dialog/login_ajax_v1';
import Header from '@/components/demop11/Header';
import Footer from '@/components/demop11/Footer';
import SocialSection from '@/components/demop11/box_social_section';

import '@/styles/demop11/bootstrap.css';
import '@/styles/demop11/iefix.css';
import '@/styles/common/general.css';
import '@/styles/common/core.css';
import '@/styles/common/theme_default.css';
import '@/styles/demop11/premium.css';
import '@/styles/demop11/themes.css';
// import '@/styles/demop11/nav_vi.css';

interface Demop11Props {
  children: ReactNode;
}

export default function Demop11({ children }: Demop11Props) {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  
  const handleLogin = () => {
    setIsOpenLogin(true);
  };

  return (
    <Suspense fallback={<div>Loading template...</div>}>
      <Header onLogin={handleLogin} />
      <div id="wrapper">{children}</div>
      <SocialSection />
      <Footer />
      <ScrollTopButton />
      <LoginDialog isOpen={isOpenLogin} onClose={() => setIsOpenLogin(false)} />
    </Suspense>
  );
}
