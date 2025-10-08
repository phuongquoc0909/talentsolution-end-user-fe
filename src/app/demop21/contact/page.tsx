'use client';

import { memo, useMemo } from "react";
import HeaderSection from "@/components/common/HeaderSection";
import FormContact from "@/components/common/contact";

const ContactPage: React.FC = memo((): React.ReactElement => {
  const HeaderSectionComponent: React.ReactElement = useMemo(() => (
    <HeaderSection title="Contact Us" />
  ), []);

  const FormContactComponent: React.ReactElement = useMemo(() => (
    <FormContact />
  ), []);

  return (
    <div className="section-page page-contact-pre">
      {HeaderSectionComponent}
      {FormContactComponent}
    </div>
  );
});

ContactPage.displayName = 'ContactPage';

export default ContactPage;
