import React, { ReactNode, Suspense } from 'react';
import ScrollTopButton from '@/components/common/scrollToTop';
import Header from '@/components/demop21/Header';
import Footer from '@/components/demop21/Footer';

import '@/styles/demop21/bootstrap.css';
import '@/styles/demop21/iefix.css';
import '@/styles/common/general.css';
import '@/styles/common/core.css';
import '@/styles/common/theme_default.css';
import '@/styles/demop21/premium.css';
import '@/styles/owner/geet/themes.css';
// import '@/styles/demop21/nav_vi.css';

interface Demop21Props {
  children: ReactNode;
}

const Demop21 = React.memo(({ children }: Demop21Props) => {
  return (
    <Suspense fallback={<div>Loading template...</div>}>
      <Header />
      <div id="wrapper">{children}</div>
      <Footer />
      <ScrollTopButton />
    </Suspense>
  );
});

Demop21.displayName = 'Demop21Layout';

export default Demop21;