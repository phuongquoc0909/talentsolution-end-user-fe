'use client';
import { useState, useCallback } from 'react';

// Types for menu data
interface SubMenuItem {
  CATE_NAME: string;
  CATE_LINK: string;
  CATE_LINKTARGET?: string; // Optional - defaults to '_self'
  type?: string; // 2: page, 3: list
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
    CATE_LINK: '/demop11/home',
    CATE_LINKTARGET: '_self',
    className: 'focus'
  },
  {
    CATE_ID: 'menu_11378',
    CATE_NAME: 'Vinasoy Discovery',
    CATE_LINK: 'https://career.vinasoy.com/en/#11378',
    submenu: [
      {
        CATE_NAME: 'Vinasoy People',
        CATE_LINK: '/demop11/news/',
        CATE_LINKTARGET: '_self',
        type: '2' // 2: page, 3: list
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
        CATE_LINK: '/demop11/news/',
        CATE_LINKTARGET: '_self' ,
        type: '2'
      },
      {
        CATE_NAME: 'Hiring Process',
        CATE_LINK: '/demop11/news/',
        CATE_LINKTARGET: '_self',
        type: '2'

      },
      {
        CATE_NAME: 'All Jobs',
        CATE_LINK: '/demop11/jobs',
        CATE_LINKTARGET: '_self',
        type: '2'
      },
      {
        CATE_NAME: 'Benefits',
        CATE_LINK: '/demop11/news/',
        CATE_LINKTARGET: '_self',
        type: '2'
      },
      {
        CATE_NAME: 'Why Vinasoy?',
        CATE_LINK: '/demop11/news/',
        CATE_LINKTARGET: '_self',
        type: '2'
      }
    ]
  },
  {
    CATE_ID: 'menu_11381',
    CATE_NAME: 'News',
    CATE_LINK: '/demop11/home/#11381',
    submenu: [
      {
        CATE_NAME: 'Vinasoy News',
        CATE_LINK: '/demop11/news/',
        CATE_LINKTARGET: '_self',
        type: '3'
      },
      {
        CATE_NAME: 'Career Advices',
        CATE_LINK: '/demop11/news/',
        CATE_LINKTARGET: '_self',
        type: '3'
      }
    ]
  },
  {
    CATE_ID: 'menu_11382',
    CATE_NAME: 'Contact Us',
    CATE_LINK: '/demop11/contact'
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

  // Handle submenu click for news pages
  const handleSubmenuClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, subItem: SubMenuItem) => {
    if (subItem.CATE_LINK.startsWith('/demop11/news/')) {
      e.preventDefault();
      // Convert CATE_NAME to URL-friendly slug
      const categorySlug = subItem.CATE_NAME
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
      
      // Store type in sessionStorage to pass to the page
      if (subItem.type) {
        sessionStorage.setItem('newsType', subItem.type);
      }
      
      window.location.href = `/demop11/news/${categorySlug}`;
    }
  }, []);

  return (
    <div className="section-header" id="section-header">
      <div id="my-download">
        <div className="container">
          <div className="download_form_premium"><a href="#">Download application form</a></div>
        </div>
      </div>
      <div id="header-pre">
        <div className="columns hidden"><div id="show-menu"><span className="fa fa-bars"></span></div></div>
        <div className="container">
          <div className="logo"><a href="/demop11/home"><img alt="Vinasoy" src="https://image.talentnetwork.vn/vinasoy//rws//en_1603425322.jpg" /></a></div>
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
                                onClick={(e) => handleSubmenuClick(e, subItem)}
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
              <li><span className="vi"></span><a href="#">Vietnamese</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
