import React, { ReactNode, Suspense } from 'react';
import ScrollTopButton from '@/components/common/scrollToTop';
import Header from '@/components/demop11/Header';
import Footer from '@/components/demop11/Footer';
import SocialSection from '@/components/common/box_social_section';
import DynamicCSSImporter from '@/components/common/DynamicCSSImporter';

import '@/styles/demop11/bootstrap.css';
import '@/styles/demop11/iefix.css';
import '@/styles/common/general.css';
import '@/styles/common/core.css';
import '@/styles/common/theme_default.css';
import '@/styles/demop11/premium.css';
// import '@/styles/owner/vinasoy/themes.css';
// import '@/styles/demop11/nav_vi.css';


interface Demop11Props {
  children: ReactNode;
}

export default function Demop11({ children }: Demop11Props) {
  return (
    <Suspense fallback={<div>Loading template...</div>}>
      <DynamicCSSImporter />
      <Header />
      <div id="wrapper">
        {children}
      </div>
      <SocialSection />
      <Footer />
      <ScrollTopButton />
    </Suspense>
  );
}
