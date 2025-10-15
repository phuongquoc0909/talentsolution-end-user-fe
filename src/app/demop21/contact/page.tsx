import React from "react";
import HeaderSection from "@/components/common/HeaderSection";
import FormContact from "@/components/common/contact";

const ContactPage = () => {
  return (
    <div className="main-container">
      <div className="section-page page-contact-pre">
        <HeaderSection title="Contact Us" />
        <FormContact />
      </div>
    </div>
  );
};

export default ContactPage;
