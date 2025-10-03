'use client';

import { memo } from "react";
import HeaderSection from "@/components/common/HeaderSection";

const TestPage: React.FC = memo(() => {
  return (
    <>
      <div className="section-page page-contact-pre">
        <HeaderSection />
        <p>test</p>
      </div>
    </>
  );
});

TestPage.displayName = 'TestPage';

export default TestPage;
