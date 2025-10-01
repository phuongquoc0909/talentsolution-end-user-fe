'use client';
import { useState, useCallback } from 'react';

// Types for menu data
interface SubMenuItem {
  CATE_NAME: string;
  CATE_LINK: string;
  CATE_LINKTARGET?: string; // Optional - defaults to '_self'
}

interface MenuItem {
  CATE_ID?: string; // Optional - will use index as fallback
  CATE_NAME: string;
  CATE_LINK: string;
  CATE_LINKTARGET?: string; // Optional - defaults to '_self'
  hasSubmenu?: boolean; // Optional - auto-detect from submenu presence
  submenu?: SubMenuItem[];
  className?: string;
}

interface HeaderProps {
  menuItems?: MenuItem[];
  onLogin?: () => void;
}

// Default menu data (fallback when no data from backend)
const defaultMenuItems: MenuItem[] = [
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
        CATE_LINK: '/demop11/jobs',
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

export default function Header({ menuItems = defaultMenuItems, onLogin }: HeaderProps) {
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  const handleMouseEnter = useCallback((menuIndex: number) => {
    setHoveredMenu(menuIndex);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredMenu(null);
  }, []);

  // Create memoized handlers for each menu item
  const createMouseEnterHandler = useCallback((index: number) => {
    return () => handleMouseEnter(index);
  }, [handleMouseEnter]);

  // Handle login
  const handleLogin = useCallback(() => {
    if (onLogin) {
      onLogin();
    }
  }, [onLogin]);

  return (
    <div className="section-header" id="section-header">
      <div id="my-download">
        <div className="container">
          <div className="download_form_premium"><a href="https://image.talentnetwork.vn/content/Vinasoy-Mau-thong-tin-UV-2024.doc">Download application form</a></div>
        </div>
      </div>
      <div id="header-pre">
        <div className="columns hidden"><div id="show-menu"><span className="fa fa-bars"></span></div></div>
        <div className="container">
          <div className="logo"><a href="https://vinasoy.com/"><img alt="Vinasoy" src="https://image.talentnetwork.vn/vinasoy//rws//en_1603425322.jpg" /></a></div>
          <div className="menu">
            <ul>
              {menuItems.map((menuItem, index) => {
                const hasSubmenu = menuItem.hasSubmenu ?? (menuItem.submenu && menuItem.submenu.length > 0);
                const menuKey = menuItem.CATE_ID || `menu-${index}`;
                const target = menuItem.CATE_LINKTARGET || '_self';
                
                return (
                  <li 
                    key={menuKey}
                    className={hasSubmenu ? 'parent' : (menuItem.className || '')}
                    onMouseEnter={hasSubmenu ? createMouseEnterHandler(index) : undefined}
                    onMouseLeave={hasSubmenu ? handleMouseLeave : undefined}
                  >
                    <a 
                      href={menuItem.CATE_LINK} 
                      id={menuItem.CATE_ID} 
                      target={target}
                    >
                      {menuItem.CATE_NAME}
                      {hasSubmenu && <i className="fa fa-chevron-down"></i>}
                    </a>
                    {hasSubmenu && hoveredMenu === index && menuItem.submenu && (
                      <ul className="submenu" style={{ display: 'block' }}>
                        {menuItem.submenu.map((subItem, subIndex) => {
                          const subKey = `submenu-${index}-${subIndex}`;
                          const subTarget = subItem.CATE_LINKTARGET || '_self';
                          
                          return (
                            <li key={subKey}>
                              <a 
                                href={subItem.CATE_LINK} 
                                target={subTarget}
                              >
                                {subItem.CATE_NAME}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="navbar-right">
            <ul>
              <li><a tabIndex={0} role="button" className="showDialogD" onClick={handleLogin}>Login</a></li>
              <li><span className="vi"></span><a href="http://career.vinasoy.com/tim-viec-lam/tat-ca-viec-lam/vi">Vietnamese</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
