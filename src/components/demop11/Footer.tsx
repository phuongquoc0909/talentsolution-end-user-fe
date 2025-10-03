import React, { memo, useMemo } from 'react';

// Type definitions for better performance (TypeScript optimization)
interface MenuItem {
  CATE_ID?: string;
  CATE_NAME: string;
  CATE_LINK: string;
  CATE_LINKTARGET?: string;
  hasSubmenu?: boolean;
  submenu?: any[];
  className?: string;
}

interface FooterProps {
  menuItems?: MenuItem[];
}

// Static data optimization - Pre-compute at module level (Facebook approach)
const DEFAULT_MENU_ITEMS: MenuItem[] = [
  {
    CATE_ID: 'menu_16018',
    CATE_NAME: 'Home',
    CATE_LINK: 'https://career.vinasoy.com/en',
    CATE_LINKTARGET: '_blank',
    className: 'focus'
  },
  {
    CATE_ID: 'menu_11378',
    CATE_NAME: 'Vinasoy Discovery',
    CATE_LINK: 'https://career.vinasoy.com/en/#11378',
    submenu: [
      {
        CATE_NAME: 'Vinasoy People',
        CATE_LINK: 'https://career.vinasoy.com/vinasoy-people-35A51578/en',
        CATE_LINKTARGET: '_self'
      }
    ]
  },
  {
    CATE_ID: 'menu_11379',
    CATE_NAME: 'Career Opportunities',
    CATE_LINK: 'https://career.vinasoy.com/en/#11379',
    submenu: [
      {
        CATE_NAME: 'Potential Candidates',
        CATE_LINK: 'https://career.vinasoy.com/potential-candidates-35A5157C/en',
        CATE_LINKTARGET: '_self' 
      },
      {
        CATE_NAME: 'Hiring Process',
        CATE_LINK: 'https://career.vinasoy.com/hiring-process-35A5157D/en',
        CATE_LINKTARGET: '_self'
      },
      {
        CATE_NAME: 'All Jobs',
        CATE_LINK: 'https://career.vinasoy.com/job-search/all-jobs/en',
        CATE_LINKTARGET: '_self'
      },
      {
        CATE_NAME: 'Benefits',
        CATE_LINK: 'https://career.vinasoy.com/benefits-35A51574/en',
        CATE_LINKTARGET: '_self'
      },
      {
        CATE_NAME: 'Why Vinasoy?',
        CATE_LINK: 'https://career.vinasoy.com/why-vinasoy-35A51579/en',
        CATE_LINKTARGET: '_self' 
      }
    ]
  },
  {
    CATE_ID: 'menu_11381',
    CATE_NAME: 'News',
    CATE_LINK: 'https://career.vinasoy.com/en/#11381',
    submenu: [
      {
        CATE_NAME: 'Vinasoy News',
        CATE_LINK: 'https://career.vinasoy.com/vinasoy-news-35A5157A/en',
        CATE_LINKTARGET: '_self' 
      },
      {
        CATE_NAME: 'Career Advices',
        CATE_LINK: 'https://career.vinasoy.com/career-advices-35A5157B/en',
        CATE_LINKTARGET: '_self' 
      }
    ]
  },
  {
    CATE_ID: 'menu_11382',
    CATE_NAME: 'Contact Us',
    CATE_LINK: 'https://career.vinasoy.com/contact/en'
  }
];

// Optimized Footer Menu Item Component - Memoized for performance (Facebook approach)
const FooterMenuItem: React.FC<{ menuItem: MenuItem; index: number }> = memo(({ menuItem, index }) => (
  <li key={`footer-menu-${index}`}>
    <a href={menuItem.CATE_LINK}>
      {menuItem.CATE_NAME}
    </a>
  </li>
));

// Optimized Power By Section - Memoized for performance (Instagram approach)
const PowerBySection: React.FC = memo(() => (
  <div className="col-xs-12 col-sm-3 powerby">
    <a href="https://VieclamIT.vn/" target="_blank" style={{color: 'inherit'}}>Talent&nbsp;</a>
    <a href="https://careerviet.vn/careermap" target="_blank" style={{color: 'inherit'}}>Solution&nbsp;</a>
    <a href="https://VietnamSalary.vn/" target="_blank" style={{color: 'inherit'}}>by&nbsp;</a>
    <a href="https://careerviet.vn/" title="CareerViet" target="_blank" style={{color: 'inherit'}}>CareerViet</a>
  </div>
));

const Footer: React.FC<FooterProps> = memo(({ menuItems = DEFAULT_MENU_ITEMS }) => {
  // Memoized menu items section (LinkedIn approach)
  const MenuItemsSection = useMemo(() => (
    <div className="col-xs-12 col-sm-9 menu-footer">
      <ul>
        {menuItems.map((menuItem, index) => (
          <FooterMenuItem key={`footer-menu-${index}`} menuItem={menuItem} index={index} />
        ))}
      </ul>
    </div>
  ), [menuItems]);

  // Optimized render - Early return pattern (Google approach)
  return (
    <>
      <div id="footer-pre">
        <div className="container">
          <PowerBySection />
          {MenuItemsSection}
        </div>
      </div>
    </>
  );
});

// Performance optimization - Static display name (React DevTools optimization)
Footer.displayName = 'Footer';
FooterMenuItem.displayName = 'FooterMenuItem';
PowerBySection.displayName = 'PowerBySection';

// Export with performance hint (Webpack optimization)
export default Footer;
