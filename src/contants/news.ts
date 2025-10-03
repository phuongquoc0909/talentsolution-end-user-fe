export interface NewsItem {
    NEWS_ID: string;
    NEWS_TITLE: string;
    NEWS_PICTURE: string;
    LINK: string;
    NEWS_SUBCONTENT?: string;
    NEWS_CONTENT: string;
}

export const newsData: NewsItem[] = [
    {
        NEWS_ID: "1",
        NEWS_TITLE: "VINASOY BÌNH DƯƠNG CHÀO ĐÓN ĐOÀN GIẢNG VIÊN, SINH VIÊN ĐH KANSAI (NHẬT BẢN) & ĐH THỦ DẦU MỘT THAM QUAN NHÀ MÁY",
        NEWS_PICTURE: "https://image.talentnetwork.vn/vinasoy/news/2025/06/11/z6662952755867_3b2b35af95701d882242e090f54ee1b9_081810.jpg",
        LINK: "https://career.vinasoy.com/news/vinasoy-news/vinasoy-binh-duong-chao-don-doan-giang-vien-sinh-vien-dh-kansai-nhat-ban-amp-dh-thu-dau-mot-tham-quan-nha-may.35a55ba0/en",
        NEWS_SUBCONTENT: "NEWS_SUBCONTENT",
        NEWS_CONTENT:
        `
        <div style="line-height:1.2;"><span style="font-size:18px"><span style="font-family:times new roman,times,serif"><span style="color:rgb(8, 8, 9)">Vinasoy Bình Dương vừa hân hạnh đón tiếp đoàn giảng viên và sinh viên từ Trường Đại học Kansai (Nhật Bản) và Trường Đại học Thủ Dầu Một đến tham quan nhà máy, khám phá quy trình sản xuất hiện đại và trải nghiệm môi trường làm việc chuyên nghiệp tại Vinasoy.</span></span></span></div>
        <div style="line-height:1.2;">&nbsp;</div>
        <div style="line-height:1.2;">&nbsp;</div>
        <div style="line-height:1.2;"><img alt="z6418216265283_4752720499bdb0b0d2ce03e315a2f3e0" src="https://image.talentnetwork.vn/vinasoy///news/2025/06/13/1749778539_z6418216265283-4752720499bdb0b0d2ce03e315a2f3e0.jpg"></div>
        <div style="line-height:1.2;">&nbsp;</div>
        <div style="line-height:1.2;"><span style="font-size:18px"><span style="font-family:times new roman,times,serif"><span style="color:rgb(8, 8, 9)">Đoàn tham quan đã có cơ hội tìm hiểu hành trình phát triển của Vinasoy, từ những ngày đầu thành lập đến vị thế dẫn đầu ngành sữa đậu nành hôm nay. Đặc biệt, các bạn sinh viên được trực tiếp quan sát quy trình sản xuất tiên tiến và hệ thống xử lý nước thải đạt chuẩn quốc tế – minh chứng cho cam kết phát triển bền vững của Vinasoy.</span></span></span></div>
        <div style="line-height:1.2;">&nbsp;</div>
        <div style="line-height:1.2;"><img alt="z6418215141167_b8ebf38e3190a7ef2847ae57cd227fef" src="https://image.talentnetwork.vn/vinasoy///news/2025/06/13/1749778735_z6418215141167-b8ebf38e3190a7ef2847ae57cd227fef.jpg"></div>
        <div style="line-height:1.2;"><img alt="z6418215121473_574b64c584ed9932fab4fc7924236d4b" src="https://image.talentnetwork.vn/vinasoy///news/2025/06/13/1749778750_z6418215121473-574b64c584ed9932fab4fc7924236d4b.jpg"></div>
        <p>&nbsp;</p>
        <div style="line-height: 1.2; text-align: justify;"><img alt="z6418215192151_12eb2068f5e823544a0336e370f94424" src="https://image.talentnetwork.vn/vinasoy///news/2025/06/13/1749778761_z6418215192151-12eb2068f5e823544a0336e370f94424.jpg"></div>
        <p>&nbsp;</p>
        <div style="line-height: 1.2; text-align: justify;">&nbsp;</div>
        <div style="line-height: 1.2; text-align: justify;"><span style="font-size:18px"><span style="font-family:times new roman,times,serif"><span style="color:rgb(8, 8, 9)">Không chỉ là một chuyến đi thực tế bổ ích, buổi giao lưu còn mở ra cơ hội kết nối giữa sinh viên và doanh nghiệp, giúp các bạn trẻ hiểu hơn về môi trường làm việc trong ngành thực phẩm. Hy vọng rằng trải nghiệm này sẽ trở thành nguồn cảm hứng để các bạn tiếp tục khám phá, sáng tạo và theo đuổi đam mê trong tương lai./.</span></span></span></div>
        `
    },
    {
        NEWS_ID: "2", 
        NEWS_TITLE: "VINASOY CHÀO ĐÓN SINH VIÊN ĐẠI HỌC BÁCH KHOA HÀ NỘI VÀ ĐẠI HỌC TENNESSEE (MỸ)",
        NEWS_PICTURE: "https://image.talentnetwork.vn/vinasoy/news/2025/06/11/z6662952755867_3b2b35af95701d882242e090f54ee1b9_081810.jpg",
        LINK: "https://career.vinasoy.com/news/vinasoy-news/vinasoy-chao-don-sinh-vien-dai-hoc-bach-khoa-ha-noi-va-dai-hoc-tennessee-my-.35a55b87/en",
        NEWS_SUBCONTENT: "",
        NEWS_CONTENT: "noi dung chi tiet"
    },
    {
        NEWS_ID: "3",
        NEWS_TITLE: "[BƯỚC CHÂN XANH CÙNG SỮA HẠT VEYO] – HÀNH TRÌNH CỦA SỨC MẠNH CON NGƯỜI VÀ TÌNH YÊU MÔI TRƯỜNG",
        NEWS_PICTURE: "https://image.talentnetwork.vn/vinasoy/news/2025/02/03/b_c_ch_n_xanh_164001.jpg",
        LINK: "https://career.vinasoy.com/news/vinasoy-news/-buoc-chan-xanh-cung-sua-hat-veyo-hanh-trinh-cua-suc-manh-con-nguoi-va-tinh-yeu-moi-truong.35a55a13/en",
        NEWS_SUBCONTENT: "",
        NEWS_CONTENT: "noi dung chi tiet"
    },
    {
        NEWS_ID: "4",
        NEWS_TITLE: "VINASOY BẮC NINH – NHÀ MÁY SẢN XUẤT VỚI CÔNG NGHỆ HIỆN ĐẠI BẬC NHẤT THẾ GIỚI",
        NEWS_PICTURE: "https://image.talentnetwork.vn/vinasoy/news/2025/02/03/b_c_ch_n_xanh_164001.jpg",
        LINK: "https://career.vinasoy.com/news/vinasoy-news/vinasoy-bac-ninh-nha-may-san-xuat-voi-cong-nghe-hien-dai-bac-nhat-the-gioi.35a55a12/en",
        NEWS_SUBCONTENT: "",
        NEWS_CONTENT: "noi dung chi tiet"
    }
];

export interface ItemTypePage {
    CATE_NAME: string;
    CATE_CONTENT: string;
}

// Static data optimization - Pre-compute at module level (Facebook approach)
export const NEWS_CONTENT_TYPE_PAGE: ItemTypePage[] = [
    {
        CATE_NAME: 'Vinasoy People',
        CATE_CONTENT:
        `
        <div style="line-height:1.2;"><span style="font-size:18px"><span style="font-family:times new roman,times,serif"><span style="color:rgb(8, 8, 9)">Vinasoy Bình Dương vừa hân hạnh đón tiếp đoàn giảng viên và sinh viên từ Trường Đại học Kansai (Nhật Bản) và Trường Đại học Thủ Dầu Một đến tham quan nhà máy, khám phá quy trình sản xuất hiện đại và trải nghiệm môi trường làm việc chuyên nghiệp tại Vinasoy.</span></span></span></div>
        <div style="line-height:1.2;">&nbsp;</div>
        <div style="line-height:1.2;">&nbsp;</div>
        <div style="line-height:1.2;"><img alt="z6418216265283_4752720499bdb0b0d2ce03e315a2f3e0" src="https://image.talentnetwork.vn/vinasoy///news/2025/06/13/1749778539_z6418216265283-4752720499bdb0b0d2ce03e315a2f3e0.jpg"></div>
        <div style="line-height:1.2;">&nbsp;</div>
        <div style="line-height:1.2;"><span style="font-size:18px"><span style="font-family:times new roman,times,serif"><span style="color:rgb(8, 8, 9)">Đoàn tham quan đã có cơ hội tìm hiểu hành trình phát triển của Vinasoy, từ những ngày đầu thành lập đến vị thế dẫn đầu ngành sữa đậu nành hôm nay. Đặc biệt, các bạn sinh viên được trực tiếp quan sát quy trình sản xuất tiên tiến và hệ thống xử lý nước thải đạt chuẩn quốc tế – minh chứng cho cam kết phát triển bền vững của Vinasoy.</span></span></span></div>
        `
    },
    {
        CATE_NAME: 'Potential Candidates',
        CATE_CONTENT:
        `
        <p style="text-align:justify">Con người là nguồn lực quý giá nhất đối với tất mọi doanh nghiệp. Ở Vinasoy, nguồn lực con người luôn được trân trọng, liên tục được phát triển không chỉ về chuyên môn, kỹ năng mà còn được bồi đắp những giá trị, phẩm chất tốt đẹp.</p>
        <p style="text-align:justify">Mỗi ứng viên ở mọi vị trí khác nhau có thể có bằng cấp, trình độ chuyên môn, kỹ năng khác nhau nhưng hình mẫu về phẩm chất cá nhân mà chúng tôi thật sự mong đợi ở mọi ứng viên tiềm năng chính là 3 yếu tố: <strong>Tính chính trực, Thích thử thách và Vì mọi người</strong>.</p>
        <p style="text-align:justify"><strong>Tính chính trực (Integrity)</strong></p>
        <p style="text-align:justify">Trong sạch và đạo đức là 1 trong những giá trị cốt lõi của Vinasoy. Chính giá trị này tạo ra một môi trường làm việc minh bạch để tất mọi người được cống hiến và phát triển.</p>
        <p style="text-align:justify">Và cũng chính giá trị cốt lõi như thế, chúng tôi cần sự chính trực bởi vì chỉ những người chính trực mới có thể sống, làm việc cống hiến hết mình trong một môi trường minh bạch và ngược lại, những người chính trực mới có thể tiếp tục đóng góp và bảo tồn sự trong sạch và đạo đức của Vinasoy.</p>
        `
    },
    {
        CATE_NAME: 'Hiring Process',
        CATE_CONTENT:
        `
        <p style="text-align:justify">Quy trình tuyển dụng sẽ giúp cho ứng viên hiểu rõ cách thức mà chúng tôi chọn nhân tài một cách rõ ràng, minh bạch, đồng thời sẽ hướng dẫn cho ứng viên cách thức thực hiện các bước khi bắt đầu tham gia vào quy trình tuyển dụng của chúng tôi.</p>
        
        <p><span style="font-size:14px"><strong>1. Nộp hồ sơ ứng tuyển: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong></span></p>
        <p>Một khi bạn đã tìm hiểu kỹ về Vinasoy và về vị trí mà bạn thấy năng lực của mình phù hợp nhất, bạn có thể ứng tuyển bằng các hình thức sau:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp; + Nộp trực tuyến trên website này.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp; + Nộp trực tiếp tại công ty</p>
        `
    },
    {
        CATE_NAME: 'Benefits',
        CATE_CONTENT:
        `
        <p>Vinasoy cam kết không ngừng hoàn thiện hướng đến sự quan tâm, chăm sóc toàn diện cho người lao động từ vật chất đến tinh thần để người lao động trong công ty đều cảm nhận được Vinasoy là gia đình thứ hai của mình, đều cảm nhận được sự cân bằng trong công việc và trong cuộc sống.</p>
        `
    },
    {
        CATE_NAME: 'Why Vinasoy?',
        CATE_CONTENT:
        `
        <p style="text-align:center"><iframe frameborder="0" height="373" src="https://www.youtube.com/embed/sUt5pHRawiM" width="664"></iframe></p>
        <p>Không có gì là hoàn hảo. Vinasoy cũng thế. Vinasoy chưa phải là một công ty có điều kiện trang thiết bị làm việc tốt nhất, và càng không phải là Công ty trả lương cao nhất nhưng chúng tôi có những gì quan trọng nhất cho con đường phát triển nghề nghiệp của bạn, cho cuộc sống tinh thần của bạn.</p>
        <p><strong>Ở Vinasoy, bạn sẽ được hòa vào một môi trường làm việc minh bạch</strong></p>
        <p>Vinasoy tự hào là một môi trường minh bạch. Trong công việc hằng ngày, đồng nghiệp làm việc với nhau bằng tinh thần đồng đội, cởi mở như anh em trong một gia đình. Cấp trên đối với nhân viên với tinh thần cầu thị, lắng nghe và thấu hiểu cùng phương châm “người bước nhanh sẽ dìu dắt người bước chậm”. Đặc biệt, trong công tác tuyển dụng, sự minh bạch, rõ ràng, công khai là những điều kiện quan trọng để Vinasoy tuyển chọn nhân tài có năng lực thật sự.</p>
        `
    }
];

export interface BoxNewsProps {
    newsItems?: NewsItem[];
    CATE_NAME?: string;
    layout: '2items' | '3items' | '4items' | '5items' | '6itemsUpto';
}