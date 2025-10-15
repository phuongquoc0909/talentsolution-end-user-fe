import React from 'react';
import { MenuItem, DEFAULT_MENU_ITEMS, FooterProps } from './dataFooter';

const FooterMenuItem: React.FC<{ menuItem: MenuItem; index: number }> = ({ menuItem, index }): React.ReactElement => (
  <li key={`footer-menu-${index}`}>
    <a href={menuItem.CATE_LINK}>
      {menuItem.CATE_NAME}
    </a>
  </li>
);

const PowerBySection = () => (
  <div className="col-xs-12 col-sm-3 powerby">
    <a href="https://VieclamIT.vn/" target="_blank" style={{color: 'inherit'}}>Talent&nbsp;</a>
    <a href="https://careerviet.vn/careermap" target="_blank" style={{color: 'inherit'}}>Solution&nbsp;</a>
    <a href="https://VietnamSalary.vn/" target="_blank" style={{color: 'inherit'}}>by&nbsp;</a>
    <a href="https://careerviet.vn/" title="CareerViet" target="_blank" style={{color: 'inherit'}}>CareerViet</a>
  </div>
);

const Footer: React.FC<FooterProps> = React.memo(({ menuItems = DEFAULT_MENU_ITEMS }): React.ReactElement => {
  const MenuItemsSection: React.ReactElement = (
    <div className="col-xs-12 col-sm-9 menu-footer">
      <ul>
        {menuItems.map((menuItem, index) => (
          <FooterMenuItem key={`footer-menu-${index}`} menuItem={menuItem} index={index} />
        ))}
      </ul>
    </div>
  );

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

Footer.displayName = 'Footer';

export default Footer;
