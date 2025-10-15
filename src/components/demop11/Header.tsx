'use client';

import React, { useState, useCallback } from 'react';
import { MenuItem, SubMenuItem, defaultMenuItems } from '@/components/demop11/dataHeader';
import LoginDialog from '@/components/UI/dialog/login_ajax_v1';

interface HeaderProps {
  menuItems?: MenuItem[];
}

const REGEX_POOL = {
  SPACE_REPLACE: /\s+/g,
  NON_ALPHANUMERIC: /[^a-z0-9-]/g,
  NEWS_LINK_CHECK: /^\/demop11\/news\//
} as const;

const Header = React.memo(({ menuItems = defaultMenuItems }: HeaderProps): React.ReactElement => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const handleLogin = useCallback(() => {
    setIsOpenLogin(true);
  }, []);
  const handleCloseLogin = useCallback(() => {
    setIsOpenLogin(false);
  }, []);

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

  const transformToSlug = useCallback((name: string): string => {
    return name
      .toLowerCase()
      .replace(REGEX_POOL.SPACE_REPLACE, '-')
      .replace(REGEX_POOL.NON_ALPHANUMERIC, '');
  }, []);

  // Handle main menu click to store category info for components
  const handleMainMenuClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, menuItem: MenuItem) => {
    // Only handle main menu items without submenu
    const hasSubmenu = menuItem.hasSubmenu ?? (menuItem.submenu && menuItem.submenu.length > 0);
    
    if (!hasSubmenu) {
      // Check if this is a news page with type (2 or 3)
      if (menuItem.CATE_LINK === '/demop11/news/' && menuItem.type && (menuItem.type === '2' || menuItem.type === '3')) {
        e.preventDefault();
        // Convert CATE_NAME to URL-friendly slug using optimized function
        const categorySlug = transformToSlug(menuItem.CATE_NAME);
        
        // Store type in sessionStorage to pass to the page
        sessionStorage.setItem('newsType', menuItem.type);
        
        window.location.href = `/demop11/news/${categorySlug}`;
      } else {
        // For all other cases (including type 2/3 with different CATE_LINK), follow normal link behavior
        // Store category name in sessionStorage for components to use
        sessionStorage.setItem('currentCategoryName', menuItem.CATE_NAME);
        // Let the default link behavior happen (no preventDefault)
      }
    }
  }, [transformToSlug]);

  // Handle submenu click for news pages
  const handleSubmenuClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, subItem: SubMenuItem) => {
    if (REGEX_POOL.NEWS_LINK_CHECK.test(subItem.CATE_LINK)) {
      e.preventDefault();
      // Convert CATE_NAME to URL-friendly slug using optimized function
      const categorySlug = transformToSlug(subItem.CATE_NAME);
      
      // Store type in sessionStorage to pass to the page
      if (subItem.type) {
        sessionStorage.setItem('newsType', subItem.type);
      }
      
      window.location.href = `/demop11/news/${categorySlug}`;
    }
  }, [transformToSlug]);

  const DownloadSection = (
      <div id="my-download">
          <div className="container">
              <div className="download_form_premium"><a href="#">Download application form</a></div>
          </div>
      </div>
  );

  const HeaderMainSection = (
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
                    onClick={(e) => handleMainMenuClick(e, menuItem)}
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
  );

  return (
    <>
      <div className="section-header" id="section-header">
        {DownloadSection}
        {HeaderMainSection}
      </div>
      <LoginDialog isOpen={isOpenLogin} onClose={handleCloseLogin} />
    </>
  );
});

Header.displayName = 'Header';

export default Header;
