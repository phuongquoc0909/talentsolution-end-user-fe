'use client';
import { useState, useCallback, useMemo, memo } from 'react';
import { MenuItem, SubMenuItem, defaultMenuItems } from '@/contants/header';

interface HeaderProps {
  menuItems?: MenuItem[];
  onLogin?: () => void;
}

const REGEX_POOL = {
  SPACE_REPLACE: /\s+/g,
  NON_ALPHANUMERIC: /[^a-z0-9-]/g,
  NEWS_LINK_CHECK: /^\/demop11\/news\//
} as const;

const Header = memo(({ menuItems = defaultMenuItems, onLogin }: HeaderProps): React.ReactElement => {
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  const handleMouseEnter = useCallback((menuIndex: number) => {
    setHoveredMenu(menuIndex);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredMenu(null);
  }, []);

  const createMouseEnterHandler = useCallback((index: number) => {
    return () => handleMouseEnter(index);
  }, [handleMouseEnter]);

  const handleLogin = useCallback(() => {
    if (onLogin) {
      onLogin();
    }
  }, [onLogin]);

  const transformToSlug = useCallback((name: string): string => {
    return name
      .toLowerCase()
      .replace(REGEX_POOL.SPACE_REPLACE, '-')
      .replace(REGEX_POOL.NON_ALPHANUMERIC, '');
  }, []);

  const handleMainMenuClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, menuItem: MenuItem) => {
    const hasSubmenu = menuItem.hasSubmenu ?? (menuItem.submenu && menuItem.submenu.length > 0);
    
    if (!hasSubmenu) {
      if (menuItem.CATE_LINK === '/demop11/news/' && menuItem.type && (menuItem.type === '2' || menuItem.type === '3')) {
        e.preventDefault();
        const categorySlug = transformToSlug(menuItem.CATE_NAME);
        
        sessionStorage.setItem('newsType', menuItem.type);
        
        window.location.href = `/demop11/news/${categorySlug}`;
      } else {
        sessionStorage.setItem('currentCategoryName', menuItem.CATE_NAME);
      }
    }
  }, [transformToSlug]);

  const handleSubmenuClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, subItem: SubMenuItem) => {
    if (REGEX_POOL.NEWS_LINK_CHECK.test(subItem.CATE_LINK)) {
      e.preventDefault();
      const categorySlug = transformToSlug(subItem.CATE_NAME);
      
      if (subItem.type) {
        sessionStorage.setItem('newsType', subItem.type);
      }
      
      window.location.href = `/demop11/news/${categorySlug}`;
    }
  }, [transformToSlug]);

  const DownloadSection: React.ReactElement = useMemo(() => (
      <div id="my-download">
        <div className="download_form_premium"><a href="#">Download application form</a></div>
      </div>
  ), []);

  const HeaderMainSection: React.ReactElement = useMemo(() => (
    <div className="header" id="section-header">
      <div className="columns hidden"><div id="show-menu"><span className="fa fa-bars"></span></div></div>
      <div className="header-container">
        <a href="/demop21/home" className="the-muse-logo"><img src="https://image.talentnetwork.vn/geet//rws//asset_1_1640255213.png" alt="Vinasoy" /></a>
        <div className="user-nav">
          <div className="sign-in-wrapper right hidden-xs">
            <a tabIndex={0} role="button" className="showDialogD" onClick={handleLogin}><i className="fa fa-lock"></i>Sign In</a>
          </div>
          <div className="language21">
            <span className="vi"></span><a href="#">Change Language</a>
          </div>
        </div>
        <div className="main-nav" id="header-pre">
          <ul>
            {menuItems.map((menuItem, index) => {
              const hasSubmenu = menuItem.hasSubmenu ?? (menuItem.submenu && menuItem.submenu.length > 0);
              const menuKey = menuItem.CATE_ID || `menu-${index}`;
              const target = menuItem.CATE_LINKTARGET || '_self';
              
              return (
                <li 
                  key={menuKey}
                  className="parent"
                  onMouseEnter={hasSubmenu ? createMouseEnterHandler(index) : undefined}
                  onMouseLeave={hasSubmenu ? handleMouseLeave : undefined}
                >
                  <a 
                    className={hasSubmenu ? 'parent' : (menuItem.className || '')}
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
                              className="link_menu"
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
      </div>
    </div>
  ), [menuItems, hoveredMenu, createMouseEnterHandler, handleMouseLeave, handleMainMenuClick, handleSubmenuClick, handleLogin]);

  return (
    <div className="section-header" id="section-header">
      {DownloadSection}
      {HeaderMainSection}
    </div>
  );
});

Header.displayName = 'Header';

export default Header;
