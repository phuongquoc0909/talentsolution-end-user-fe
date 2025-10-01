export interface NewsItem {
    NEWS_ID: string;
    NEWS_TITLE: string;
    NEWS_PICTURE: string;
    LINK: string;
    NEWS_SUBCONTENT?: string;
}

export const newsData: NewsItem[] = [
    {
        NEWS_ID: "1",
        NEWS_TITLE: "VINASOY BÌNH DƯƠNG CHÀO ĐÓN ĐOÀN GIẢNG VIÊN, SINH VIÊN ĐH KANSAI (NHẬT BẢN) & ĐH THỦ DẦU MỘT THAM QUAN NHÀ MÁY",
        NEWS_PICTURE: "https://image.talentnetwork.vn/vinasoy/news/2025/06/11/z6662952755867_3b2b35af95701d882242e090f54ee1b9_081810.jpg",
        LINK: "https://career.vinasoy.com/news/vinasoy-news/vinasoy-binh-duong-chao-don-doan-giang-vien-sinh-vien-dh-kansai-nhat-ban-amp-dh-thu-dau-mot-tham-quan-nha-may.35a55ba0/en",
        NEWS_SUBCONTENT: "NEWS_SUBCONTENT"
    },
    {
        NEWS_ID: "2", 
        NEWS_TITLE: "VINASOY CHÀO ĐÓN SINH VIÊN ĐẠI HỌC BÁCH KHOA HÀ NỘI VÀ ĐẠI HỌC TENNESSEE (MỸ)",
        NEWS_PICTURE: "https://image.talentnetwork.vn/vinasoy/news/2025/06/11/z6662952755867_3b2b35af95701d882242e090f54ee1b9_081810.jpg",
        LINK: "https://career.vinasoy.com/news/vinasoy-news/vinasoy-chao-don-sinh-vien-dai-hoc-bach-khoa-ha-noi-va-dai-hoc-tennessee-my-.35a55b87/en",
        NEWS_SUBCONTENT: ""
    },
    {
        NEWS_ID: "3",
        NEWS_TITLE: "[BƯỚC CHÂN XANH CÙNG SỮA HẠT VEYO] – HÀNH TRÌNH CỦA SỨC MẠNH CON NGƯỜI VÀ TÌNH YÊU MÔI TRƯỜNG",
        NEWS_PICTURE: "https://image.talentnetwork.vn/vinasoy/news/2025/02/03/b_c_ch_n_xanh_164001.jpg",
        LINK: "https://career.vinasoy.com/news/vinasoy-news/-buoc-chan-xanh-cung-sua-hat-veyo-hanh-trinh-cua-suc-manh-con-nguoi-va-tinh-yeu-moi-truong.35a55a13/en",
        NEWS_SUBCONTENT: ""
    },
    {
        NEWS_ID: "4",
        NEWS_TITLE: "VINASOY BẮC NINH – NHÀ MÁY SẢN XUẤT VỚI CÔNG NGHỆ HIỆN ĐẠI BẬC NHẤT THẾ GIỚI",
        NEWS_PICTURE: "https://image.talentnetwork.vn/vinasoy/news/2025/02/03/b_c_ch_n_xanh_164001.jpg",
        LINK: "https://career.vinasoy.com/news/vinasoy-news/vinasoy-bac-ninh-nha-may-san-xuat-voi-cong-nghe-hien-dai-bac-nhat-the-gioi.35a55a12/en",
        NEWS_SUBCONTENT: ""
    }
];

export interface BoxNewsProps {
    newsItems?: NewsItem[];
    CATE_NAME?: string;
    layout: '2items' | '3items' | '4items' | '5items' | '6itemsUpto';
}