import React from 'react';
import imageCaptcha from '@/styles/common/images/8a4ba5a06b3e22cce803747eb6cfc5cc.png';

const FormContact = () => {

    const LeftContactSection = (
        <div className="LeftContact">
            <div className="content_fck" role="complementary" aria-label="Contact information">
                <p className="text"></p><p><em><strong>Hãy để chúng tôi chủ động liên lạc với bạn. Chỉ cần click vào đây <a href="http://career.vinasoy.vn/join-talent-network/en" title="Join Our Talent Network"><img alt="Join Our Talent Network" src="http://static.talentnetwork.vn/talentnetwork/source/vinasoy/vinasoy/images/join_now.png" style={{maxWidth: '190px'}} /></a> và điền thông tin chính xác của bạn.</strong></em></p>
                <p><em><strong>Khi bạn muốn được tìm hiểu&nbsp;bất cứ thông tin gì về Vinasoy, hãy liên hệ ngay cho chúng tôi theo&nbsp;một trong những địa chỉ liên hệ như bên dưới, các chuyên viên của Vinasoy sẽ trực tiếp phản hồi cho bạn.</strong></em></p>
                <p>&nbsp;</p>
                <p><u><strong>1. Bộ phận Tuyển dụng và Thu hút nhân tài&nbsp;- Công ty Sữa đậu nành Việt Nam Vinasoy</strong></u></p>
                <p><strong>(Trụ sở chính và Nhà máy tại Quảng Ngãi)</strong></p>
                <p>- Địa chỉ liên hệ trực tiếp: Văn phòng Vinasoy tại&nbsp;Số 2, Nguyễn Chí Thanh, TP.Quảng Ngãi (Xem bản đồ)</p>
                <p>- Điện thoại:&nbsp;(02553) 726.699 (Gặp Ms. Thủy/Nhật)</p>
                <p>- Thư điện tử (Email): <u><span style={{color: '#0000FF'}}>tuyendung@vinasoy.com</span></u></p>
                <p>- Kênh Fanpage: <span style={{color: '#0000FF'}}><u>Vinasoy Careers</u></span></p>
                <p><img src="http://image.talentnetwork.vn/vinasoy///news/2015/10/20/1445333743_map1.png" alt="Map showing Vinasoy office location in Quang Ngai" /></p>
                <p>&nbsp;</p>
                <p><u><strong>2. Phòng Hành chính Nhân sự -&nbsp;Nhà máy Sữa đậu nành Vinasoy Bắc Ninh</strong></u></p>
                <p>-&nbsp; Địa chỉ:&nbsp;Đường TS5, KCN Tiên Sơn, Thị xã Từ Sơn, Tỉnh Bắc Ninh (Xem bản đồ)</p>
                <p>- Điện thoại: (0222) 3714.503&nbsp;(Gặp Ms. Nga)</p>
                <p>- Thư điện tử (Email): <span style={{color: '#0000FF'}}><u>tuyendungvnb@vinasoy.com</u></span></p>
                <p><img src="http://image.talentnetwork.vn/vinasoy///news/2015/10/20/1445333752_map2.png" alt="Map showing Vinasoy factory location in Bac Ninh" /></p>
                <p>&nbsp;</p>
                <p><u><strong>3. Phòng Hành chính Nhân sự - Nhà máy Sữa đậu nành Vinasoy Bình Dương</strong></u></p>
                <p>- Địa Chỉ: Đường 31, KCN VSIP 2A, Thị xã Tân Uyên, Tỉnh Bình Dương</p>
                <p>- Điện Thoại: (0274) 222 1943&nbsp;(Gặp Ms. Dung)</p>
                <p>- Thư điện tử (Email): <span style={{color: '#0000FF'}}><u>tuyendungvnd@vinasoy.com</u></span></p>
                <p><img src="http://image.talentnetwork.vn/vinasoy///news/2017/05/05/1493974145_-4bfbf2994db35a414ed16340c66e3d55a765c8eb429af7661d-pimgpsh-fullsize-distr.jpg" alt="Map showing Vinasoy factory location in Binh Duong" /></p>
                <p><span style={{color: '#FF0000'}}><em><strong>Đây là những kênh thông tin chính chủ và hợp lệ của Vinasoy, vì vậy nếu bạn nhận được nguồn thông tin từ các kênh khác, vui lòng cảnh giác và chú ý.</strong></em></span></p>
                <p></p>
                <p className="text"><i className="fa fa-map-marker"></i> Quang Ngai, Vietnam<br /><i className="fa fa-phone-square"></i> <a href="tel:0255-3726699">0255-3726699</a><br /><i className="fa fa-envelope"></i> <a href="mailto:tuyendung@vinasoy.com">tuyendung@vinasoy.com</a>					</p>	
            </div>
        </div>
    );

    const RightContactSection = (
        <div className="RightContact">
            <form name="frmContact" id="frmContact" method="post" className="frmContact" role="form" aria-label="Contact form">
                <p className="text"><b>Please make sure to provide correct email so that we can contact you for support.</b></p>
                <div className="row">
                    <label htmlFor="sender">Your Name <span className="red" aria-label="required">*</span></label>
                    <div className="fl_left value">
                        <input 
                            type="text" 
                            className="width_238 required" 
                            name="sender" 
                            id="sender"
                            required
                            aria-required="true"
                            aria-label="Your full name"
                        />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="from">Your Email <span className="red" aria-label="required">*</span></label>
                    <div className="fl_left value">
                        <input 
                            type="text" 
                            className="width_238 required" 
                            name="from" 
                            id="from"
                            required
                            aria-required="true"
                            aria-label="Your email address"
                        />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="phone">Phone</label>
                    <div className="fl_left value">
                        <input 
                            type="text" 
                            className="width_238" 
                            name="phone" 
                            id="phone"
                            aria-label="Your phone number (optional)"
                        />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="content">Your Message, Question, Comment, or Testimonial <span className="red" aria-label="required">*</span></label>
                    <div className="fl_left value">
                        <textarea 
                            name="content" 
                            className="required"
                            required
                            aria-required="true"
                            aria-label="Your message or question"
                            rows={5}
                        />
                    </div>
                </div>
                <div className="row">
                    <label className="width_202" htmlFor="security_code">Security code <span className="red" aria-label="required">*</span></label>
                    <div className="fl_left" id="security_div">
                        <input 
                            name="security_code" 
                            type="text" 
                            className="required width_125" 
                            id="security_code" 
                            maxLength={10} 
                            autoComplete="off"
                            required
                            aria-required="true"
                            aria-label="Enter the security code shown in the image"
                        />
                        <span id="captchaim" className="fl_left mar_left10">
                            <span id="tn_captcha">
                                <img 
                                    width="150" 
                                    height="50" 
                                    alt="Security code image - please enter the characters you see" 
                                    src={imageCaptcha.src}
                                    role="img"
                                />
                            </span>  
                        </span>
                        <a 
                            style={{float: 'left', padding: '0px 0px 0px 10px'}} 
                            role="button" 
                            tabIndex={0} 
                            className="line_bot" 
                            id="trynewcode" 
                            href="#"
                            aria-label="Generate a new security code"
                        >
                            Try new code
                        </a>
                    </div>
                </div>
                <div className="row">
                    <input 
                        type="submit" 
                        value="Submit" 
                        className="ui_btnCb" 
                        aria-label="Submit contact form"
                    />
                    <a 
                        role="button" 
                        tabIndex={0} 
                        className="btnTextLink" 
                        href="#"
                        aria-label="Clear form and start over"
                    >
                        Cancel
                    </a>
                </div>
            </form>
        </div>
    );

    return (
        <>
            <div className="container">
                <div className="s-wrapper">
                    {LeftContactSection}
                    {RightContactSection}
                </div>
            </div>
        </>
    );
};

export default FormContact;
