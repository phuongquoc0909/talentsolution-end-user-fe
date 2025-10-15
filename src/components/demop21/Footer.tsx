'use client';

import React, { useState, useCallback } from 'react';

import imgZalo from '@/styles/common/images/zalo_icon.png';
import imgTiktok from '@/styles/common/images/tiktok-svg.svg';
import imgZaloBlack from '@/styles/common/images/zalo_icon_black.png';
import imgTiktokBlack from '@/styles/common/images/tiktok-svg-black.svg';

import { 
  aboutOwnerLinks,
  jobFunctionsLinks,
  browseJobsLinks,
  socialLinks,
  specialSocialLinks,
  sectionTitles,
  type FooterLink,
  type SocialLink,
  type SpecialSocialLink
} from './dataFooter';
import { useMenuItems } from '@/hooks/useCrossMenuItems';
import { defaultMenuItems } from './dataHeader';

const IMAGE_MAP = {
  'zalo_icon.png': imgZalo,
  'zalo_icon_black.png': imgZaloBlack,
  'tiktok-svg.svg': imgTiktok,
  'tiktok-svg-black.svg': imgTiktokBlack,
} as const;

const HOVER_STATE_MAP = {
  zalo21: 'isZalo',
  tiktok21: 'isTiktok',
} as const;

const REGEX_POOL = {
  SPACE_REPLACE: /\s+/g,
  NON_ALPHANUMERIC: /[^a-z0-9-]/g,
  NEWS_LINK_CHECK: /^\/demop21\/news\//
} as const;

const Footer = React.memo((): React.ReactElement => {
  const [isZalo, setIsZalo] = useState<boolean>(false);
  const [isTiktok, setIsTiktok] = useState<boolean>(false);
  
  // Get cross-menu items with menucross: 1
  const crossMenuItems = useMenuItems(defaultMenuItems, { menucrossValue: 1 });

  const transformToSlug = useCallback((name: string): string => {
    return name
      .toLowerCase()
      .replace(REGEX_POOL.SPACE_REPLACE, '-')
      .replace(REGEX_POOL.NON_ALPHANUMERIC, '');
  }, []);

  // Handle cross-menu click for news pages
  const handleCrossMenuClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, link: FooterLink) => {
    // Check if this is a news page link
    if (REGEX_POOL.NEWS_LINK_CHECK.test(link.href)) {
      e.preventDefault();
      // Convert text to URL-friendly slug using optimized function
      const categorySlug = transformToSlug(link.text);
      
      // Store type in sessionStorage to pass to the page (use actual type from data)
      if (link.type) {
        sessionStorage.setItem('newsType', link.type);
      }
      
      window.location.href = `/demop21/news/${categorySlug}`;
    }
    // For other links, let the default behavior happen
  }, [transformToSlug]);

  // Optimized event handlers with proper typing
  const handleSpecialSocialMouseEnter = useCallback((className: string): void => {
    const stateKey = HOVER_STATE_MAP[className as keyof typeof HOVER_STATE_MAP];
    if (stateKey === 'isZalo') setIsZalo(true);
    if (stateKey === 'isTiktok') setIsTiktok(true);
  }, []);

  const handleSpecialSocialMouseLeave = useCallback((className: string): void => {
    const stateKey = HOVER_STATE_MAP[className as keyof typeof HOVER_STATE_MAP];
    if (stateKey === 'isZalo') setIsZalo(false);
    if (stateKey === 'isTiktok') setIsTiktok(false);
  }, []);

  // Render footer link component
  const renderFooterLink = useCallback((link: FooterLink, index: number): React.ReactElement => (
    <a
      key={`footer-link-${index}`}
      href={link.href}
      target={link.target}
      tabIndex={link.tabIndex}
      role={link.role}
    >
      {link.text}
    </a>
  ), []);

  // Render cross-menu link component with special handling
  const renderCrossMenuLink = useCallback((link: FooterLink, index: number): React.ReactElement => (
    <a
      key={`cross-menu-link-${index}`}
      href={link.href}
      target={link.target}
      tabIndex={link.tabIndex}
      role={link.role}
      onClick={(e) => handleCrossMenuClick(e, link)}
    >
      {link.text}
    </a>
  ), [handleCrossMenuClick]);

  // Render social link component
  const renderSocialLink = useCallback((link: SocialLink, index: number): React.ReactElement | null => {
    if (link.show !== 1) return null;
    
    return (
      <a
        key={`social-link-${index}`}
        target="_blank"
        href={link.href}
        aria-label={link.ariaLabel}
        title={link.title}
      >
        <i className={link.icon} aria-hidden="true"></i>
      </a>
    );
  }, []);

  // Render special social link component with simple error handling
  const renderSpecialSocialLink = useCallback((link: SpecialSocialLink, index: number): React.ReactElement | null => {
    if (link.show !== 1) return null;
    
    const isHovered = link.className === 'zalo21' ? isZalo : isTiktok;
    const imageSrc = isHovered && link.hoverImageSrc 
      ? IMAGE_MAP[link.hoverImageSrc as keyof typeof IMAGE_MAP]?.src 
      : IMAGE_MAP[link.imageSrc as keyof typeof IMAGE_MAP]?.src;

    return (
      <a
        key={`special-social-link-${index}`}
        target="_blank"
        href={link.href}
        aria-label={link.ariaLabel}
        className={link.className}
        title={link.title}
        onMouseEnter={() => handleSpecialSocialMouseEnter(link.className)}
        onMouseLeave={() => handleSpecialSocialMouseLeave(link.className)}
      >
        <img 
          src={imageSrc} 
          alt={link.imageAlt}
          onError={(e) => {
            // Simple fallback - hide broken image
            e.currentTarget.style.display = 'none';
          }}
        />
      </a>
    );
  }, [isZalo, isTiktok, handleSpecialSocialMouseEnter, handleSpecialSocialMouseLeave]);
  return (
    <div id="footer" className="section-page">
      <div className="container">
        {/* About The Owner Section */}
        <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 hidden-xs">
          <div className="column internal-link">
            <h6>{sectionTitles.aboutOwner}</h6>
            {aboutOwnerLinks.map(renderFooterLink)}
            {/* Cross-menu items with menucross: 1 */}
            {crossMenuItems.map(renderCrossMenuLink)}
          </div>
        </div>

        {/* Job Functions Section */}
        <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 hidden-xs">
          <div className="column internal-link">
            <h6>{sectionTitles.jobFunctions}</h6>
            {jobFunctionsLinks.map(renderFooterLink)}
          </div>
        </div>

        {/* Browse Jobs By Section */}
        <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 hidden-xs">
          <div className="column internal-link">
            <h6>{sectionTitles.browseJobs}</h6>
            {browseJobsLinks.map(renderFooterLink)}
          </div>
        </div>

        {/* Social Links Section */}
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <div className="column social_col">
            <h6>{sectionTitles.socialLinks}</h6>
            {/* Standard Social Links */}
            {socialLinks.map(renderSocialLink).filter(Boolean)}
            {/* Special Social Links (Zalo & TikTok) */}
            {specialSocialLinks.map(renderSpecialSocialLink).filter(Boolean)}
            
            {/* Footer Credits */}
            <div className="creatby">
              <a href="https://VieclamIT.vn/" target="_blank" style={{color: 'inherit'}}>Talent&nbsp;</a>
              <a href="https://careerviet.vn/careermap" target="_blank" style={{color: 'inherit'}}>Solution&nbsp;</a>
              <a href="https://VietnamSalary.vn/" target="_blank" style={{color: 'inherit'}}>by&nbsp;</a>
              <a href="https://careerviet.vn/" title="CareerViet" target="_blank" style={{color: 'inherit'}}>CareerViet</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Footer.displayName = 'Footer';

export default Footer;
