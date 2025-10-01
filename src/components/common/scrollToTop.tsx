'use client';
import React, { useState, useEffect } from 'react';

interface ScrollTopButtonProps {
  showAfter?: number; // số px cuộn xuống mới hiện nút, mặc định 120
}

const ScrollTopButton: React.FC<ScrollTopButtonProps> = ({ showAfter = 120 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Kiểm tra ngay khi mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div id="back-top" onClick={scrollToTop}
      style={{
        transition: 'opacity 0.3s ease',
        opacity: isVisible ? 1 : 0,
        cursor: 'pointer',
      }}
    >
        <a className="bgcolor_theme" id="topToPage">_Top_</a>
    </div>
  );
};

export default ScrollTopButton;