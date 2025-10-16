import React from 'react';

import BoxCareer from '@/components/demop21/job/box_career';
import Share from '@/components/demop21/share';
import imgJoinNow from '@/styles/owner/geet/images/join_now.png';
import imgQuoteGreenBottom from '@/styles/owner/geet/images/quote_green_bottom.png';
import imgQuoteYellowBottom from '@/styles/owner/geet/images/quote_yellow_bottom.png';

const HomePage = () => {
  return (
    <>
      <div className="main-container">
        <div className="section-page company-profile-wrapper">
          <div className="container">
            <div className="head-spec">
                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                    <div className="title-block">
                        <h1>We are<br /><div className="big-title">CAREERBUILDER</div></h1>
                    </div>
                    <div className="btn-row">
                      <a href="#" className="see-job blue-solid-button-xs">See Our Jobs</a>
                      <a href="#" className="download_form"><i className="fa fa-save"></i>Download Apply Form</a>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <div className="join-talent-top center">
                        <a tabIndex={0} role="button" className="showDialogD join-button"><img src={imgJoinNow.src} /></a>
                        <p className="stayconnect">Kết nối với chúng tôi <a tabIndex={0} role="button" className="showDialog">Vì sao?</a></p>
                    </div>
                </div>
            </div>
            <div id="company-profile" className="company-profile-styling">
              <div className="hidden-xs hidden-sm">
                <div className="grey-buttons companies vertical absolute-top" id="share" style={{ top: '0px' }}>
                  <div className="icon-wrapper favorite-container">
                    <div><a tabIndex={0} role="button" aria-label="favorite" className="favorite showDialogD"><i aria-hidden="true" className="fa fa-heart-o"></i></a></div>
                  </div>
                  <Share />
                  <div className="icon-wrapper">
                    <a tabIndex={0} role="button" className="share-button btn-greyscale email">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="company-wrapper">
                <div className="area">
                  <div className="office">
                    <div className="section col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="grid_2_2">
                            <img className="share-base" src="https://image.talentnetwork.vn/geet///news/2022/11/11/1668153538_banner-chinh.jpg?v=None" />
                            <div className="text-lower-right gradient">
                                <h2>Trường Quốc Tế Him Lam</h2>
                            </div>
                        </div>
                    </div>
                    <div className="section col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="grid_1_1">
                            <img src="https://image.talentnetwork.vn/geet///news/2022/11/11/1668153823_banner1.jpg?v=None" />
                            <div className="text-lower-right gradient">
                            </div>
                        </div>
                    </div>
                    <div className="section col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="grid_1_1">
                            <img src="https://image.talentnetwork.vn/geet///news/2022/11/11/1668153907_banner2.jpg?v=None" />
                        </div>
                    </div>
                  </div>
                </div>
                <div className="area" id="widgets">
                  <div className="section col-xs-6 col-sm-4 col-md-4 col-lg-4">
                    <div className="widget insight video grid_1_2">
                      <img src="https://image.talentnetwork.vn/geet///news/2022/11/11/1668154008_banner3.jpg?v=None" />
                    </div>
                    <div className="widget insight grid_1">
                      <div className='insight-image'>
                        <img src="https://image.talentnetwork.vn/geet///news/2022/11/11/1668154102_banner4.jpg" />
                      </div>
                      <div className='insight-body'>
                        <div className='insight-date'>SỨ MỆNH - TẦM NHÌN</div>
                        <div className='insight-text'>
                            SỨ MỆNH: Hệ thống trường Quốc tế Him Lam – HIMLAMIS hướng đến mục tiêu dung dưỡng những công dân toàn cầu trẻ tuổi, ham học hỏi với một thái độ tôn trọng và năng lực vững vàng nhằm phát triển một thế giới bền vững và hòa bình.<br />TẦM NHÌN: Hệ thống trường Quốc tế Him Lam – HIMLAMIS nỗ lực truyền cảm hứng, trao quyền, và phục vụ học sinh cũng như cộng đồng toàn cầu hướng tới một thế hệ những người tiên phong với tư duy và năng lực mang tầm Quốc tế.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section col-xs-6 col-sm-4 col-md-4 col-lg-4">
                    <div className='widget insight grid_1'>
                      <div className='insight-image'>
                      <img src="https://image.talentnetwork.vn/geet///news/2022/11/11/1668154175_banner5.jpg?v=None" />
                      </div>
                      <div className='insight-body'>
                        <div className='insight-date'>Triết lý Giáo dục</div>
                        <div className="insight-text" style={{textAlign: 'left'}}>
                          Mọi hoạt động giáo dục tại trường Quốc tế Him Lam được Hội đồng Giáo dục nhà trường xây dựng xoay quanh triết lý “Lấy người học làm trung tâm". Bằng cách tập trung vào nhu cầu của học sinh, giáo viên có thể hỗ trợ và dạy học sinh trong lớp học để đảm bảo học sinh đạt được thành công cao hơn. Triết lý này chú trọng nhiều hơn đến tính cá nhân của học sinh và giúp họ nhận ra tiềm năng của mình. Một lớp học lấy học sinh làm trung tâm có thể ít cứng nhắc hoặc có cấu trúc hơn, ít quan tâm hơn đến các phương pháp giảng dạy trong quá khứ và học thuật khoan thai, và tập trung hơn vào việc đào tạo học sinh để thành công trong một thế giới luôn thay đổi. Học sinh và giáo viên thường cùng nhau quyết định những gì nên học, cũng như làm thế nào để đạt được điều này một cách tốt nhất.
                        </div>
                      </div>
                    </div>
                    <div className='widget insight video grid_1_2'>
                      <img src="https://image.talentnetwork.vn/geet///news/2021/12/08/1638954706_geet-04.png?v=None" />
                    </div>
                  </div>
                  <div className="section col-xs-6 col-sm-4 col-md-4 col-lg-4">
                    <div className='widget widget-col-2'>
                      <div className='quote quote-green'>
                        <div className="quote-green-top">
                            &nbsp;
                        </div>
                        <div className="quote-green-side">
                            &nbsp;
                        </div>
                        <div className="quote-body">
                          "Hệ thống trường Quốc tế Him Lam được xây dựng dựa trên những chuẩn mực và tinh hoa của giáo dục quốc tế kết hợp với sự tận tâm và nhiệt huyết của các nhà giáo dày dặn kinh nghiệm, cung cấp nền giáo dục đẳng cấp Quốc tế cho học sinh từ 2-18 tuổi.."
                          <div className="quote-source">
                            <div className="quote-author">
                              HIMLAMIS
                            </div>
                            <div className="quote-author-position">
                              Him Lam Green Park, Bắc Ninh
                            </div>
                          </div>
                        </div>
                        <div className="quote-green-side">
                            &nbsp;
                        </div>
                        <img src={imgQuoteGreenBottom.src} className="quote-bottom" alt="quote-bottom" />
                      </div>
                    </div>
                    <div className="widget widget-col-2">
                      <div className="quote quote-yellow">
                        <div className="quote-yellow-top">
                            &nbsp;
                        </div>
                        <div className="quote-yellow-side">
                            &nbsp;
                        </div>
                        <div className="quote-body">
                          "Hello! My name is Kimberly House and I teach early years at Him Lam International School. I am really glad to be at Him Lam International School this year and I really enjoy the beautiful campus and facilities! Working with kind, knowledgeable and passionate leaders and colleagues makes working at Him Lam a very positive experience. The Vietnamese people are very kind and generous and enjoy teaching you about their unique culture. Once you get to know them, you will have lifelong friends! Coming from Ho Chi Minh City which is very warm, I am enjoying the cooler weather in the north. The cost of living is relatively cheap compared to other parts of the world. There are many schools in Vietnam, but so far HIMLAMIS is my favorite one!"
                          <div className="quote-source">
                              <div className="quote-author">
                                  Ms. Kimberly House
                              </div>
                              <div className="quote-author-position">
                                  Early Years Teacher
                              </div>
                          </div>
                        </div>
                        <div className="quote-yellow-side">
                            &nbsp;
                        </div>
                        <img src={imgQuoteYellowBottom.src} className="quote-bottom" alt="quote-bottom" />
                      </div>
                    </div>
                    <div className="widget insight grid_1 widget-col-2">
                      <BoxCareer />
                    </div>
                    <div className="widget insight grid_1 widget-col-2">
                      <div className="insight-image join-talent-box">
                        <div className="title">Gia nhập Talent Network của chúng tôi sẽ giúp bạn nâng cao khả năng tìm kiếm việc làm.</div>
                        <div className="full-width center">
                          <a href="https://careers.himlamis.edu.vn/join-talent-network/vi" className="showDialogD join-button"><img src={imgJoinNow.src} /></a>
                          <p className="stayconnect">Kết nối với chúng tôi <a tabIndex={0} role="button" className="showDialog">Vì sao?</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
