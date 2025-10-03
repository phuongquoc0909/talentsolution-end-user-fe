'use client';

import { memo } from "react";
import HeaderSection from "@/components/common/HeaderSection";
import FormContact from "@/components/common/contact";

const ContactPage: React.FC = memo(() => {
  return (
    <>
      <div className="section-page page-contact-pre">
        <HeaderSection />
        <FormContact />
      </div>
    </>
  );
});

ContactPage.displayName = 'ContactPage';

export default ContactPage;
