import React, { useState, useCallback } from 'react';

import imgZalo from '@/styles/common/images/zalo_icon.png';
import imgTiktok from '@/styles/common/images/tiktok-svg.svg';
import imgZaloBlack from '@/styles/common/images/zalo_icon_black.png';
import imgTiktokBlack from '@/styles/common/images/tiktok-svg-black.svg';

const Footer: React.FC = (): React.ReactElement => {
  const [isZalo, setIsZalo] = useState<boolean>(false);
  const [isTiktok, setIsTiktok] = useState<boolean>(false);

  const handleZaloMouseEnter = useCallback((): void => {
    setIsZalo(true);
  }, []);

  const handleZaloMouseLeave = useCallback((): void => {
    setIsZalo(false);
  }, []);

  const handleTiktokMouseEnter = useCallback((): void => {
    setIsTiktok(true);
  }, []);

  const handleTiktokMouseLeave = useCallback((): void => {
    setIsTiktok(false);
  }, []);
  return (
    <>
      <div id="footer" className="section-page">
        <div className="container">
          <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 hidden-xs">
              <div className="column internal-link">
                  <h6>About The Owner</h6>
                  <a href="https://talentnetworkdev.vn/gioi-thieu-35A52747/vi" target="_self">Giới Thiệu</a>
                  <a href="https://talentnetworkdev.vn/tin-tuc-35A52749/vi" target="_self">Tin Tức</a>
                  <a href="https://talentnetworkdev.vn/lien-he/vi" target="_self">Liên Hệ</a>
              </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 hidden-xs">
              <div className="column internal-link">
                  <h6>Job Functions</h6>
                  <a tabIndex={0} role="button" className="showDialogD">Joining Our Talent Network</a>
                  <a href="https://talentnetworkdev.vn/vi/resume">My Career</a>
                  <a href="https://talentnetworkdev.vn/resume/preferences">Job Recommendation</a>
                  <a href="https://talentnetworkdev.vn/tim-viec-lam/tat-ca-viec-lam/vi">Career Opportunities</a>
              </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 hidden-xs">
              <div className="column internal-link">
                  <h6>Browse Jobs By</h6>
                  <a href="https://talentnetworkdev.vn/tat-ca-viec-lam/vi#label_location">Jobs by Location</a>
                  <a href="https://talentnetworkdev.vn/tat-ca-viec-lam/vi#label_industry">Jobs by Industry</a>
              </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <div className="column social_col">
                  <h6>Join The Conversation</h6>
                  <a target="_blank" href="#" aria-label="facebook" title="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                  <a target="_blank" href="#" aria-label="linkedin" title="linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                  <a target="_blank" href="#" aria-label="twitter" title="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                  <a target="_blank" href="#" aria-label="youtube" title="youtube"><i className="fa fa-youtube" aria-hidden="true"></i></a>
                  <a target="_blank" href="#" aria-label="instagram" title="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                  <a 
                    target="_blank" 
                    href="#" 
                    aria-label="zalo" 
                    className="zalo21" 
                    title="zalo" 
                    onMouseEnter={handleZaloMouseEnter} 
                    onMouseLeave={handleZaloMouseLeave}
                  >
                    <img 
                      src={isZalo ? imgZaloBlack.src : imgZalo.src} 
                      alt="zalo" 
                    />
                  </a>
                  <a 
                    target="_blank" 
                    href="#" 
                    aria-label="tiktok" 
                    className="tiktok21" 
                    title="tiktok" 
                    onMouseEnter={handleTiktokMouseEnter} 
                    onMouseLeave={handleTiktokMouseLeave}
                  >
                    <img 
                      src={isTiktok ? imgTiktokBlack.src : imgTiktok.src} 
                      alt="tiktok" 
                    />
                  </a>
                  <div className="creatby"><a href="https://VieclamIT.vn/" target="_blank" style={{color: 'inherit'}}>Talent&nbsp;</a><a href="https://careerviet.vn/careermap" target="_blank" style={{color: 'inherit'}}>Solution&nbsp;</a><a href="https://VietnamSalary.vn/" target="_blank" style={{color: 'inherit'}}>by&nbsp;</a><a href="https://careerviet.vn/" title="CareerViet" target="_blank" style={{color: 'inherit'}}>CareerViet</a></div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

Footer.displayName = 'Footer';

export default Footer;
