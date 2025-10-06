import React, { useMemo, memo, useCallback } from 'react';

export interface PartnerItem {
    PARTNER_ID: string;
    DEP_NAME: string;
    DEP_LOGO: string;
    LINK: string;
    DEP_PROFILE?: string;
}

const partnerData: PartnerItem[] = [
    {
        PARTNER_ID: "1",
        DEP_NAME: "VINASOY BÌNH DƯƠNG CHÀO ĐÓN ĐOÀN GIẢNG VIÊN, SINH VIÊN ĐH KANSAI (NHẬT BẢN) & ĐH THỦ DẦU MỘT THAM QUAN NHÀ MÁY",
        DEP_LOGO: "https://image.talentnetwork.vn/vinasoy/news/2025/06/11/z6662952755867_3b2b35af95701d882242e090f54ee1b9_081810.jpg",
        LINK: "https://career.vinasoy.com/news/vinasoy-news/vinasoy-binh-duong-chao-don-doan-giang-vien-sinh-vien-dh-kansai-nhat-ban-amp-dh-thu-dau-mot-tham-quan-nha-may.35a55ba0/en",
        DEP_PROFILE: "Vinasoy Bình Dương vừa hân hạnh đón tiếp đoàn giảng viên và sinh viên từ Trường Đại học Kansai (Nhật Bản) và Trường Đại học Thủ Dầu Một đến tham quan nhà máy, khám phá quy trình sản xuất hiện đại và trải nghiệm môi trường làm việc chuyên nghiệp tại Vinasoy."
    },
    {
        PARTNER_ID: "2", 
        DEP_NAME: "VINASOY CHÀO ĐÓN SINH VIÊN ĐẠI HỌC BÁCH KHOA HÀ NỘI VÀ ĐẠI HỌC TENNESSEE (MỸ)",
        DEP_LOGO: "https://image.talentnetwork.vn/vinasoy/news/2025/06/11/z6662952755867_3b2b35af95701d882242e090f54ee1b9_081810.jpg",
        LINK: "https://career.vinasoy.com/news/vinasoy-news/vinasoy-chao-don-sinh-vien-dai-hoc-bach-khoa-ha-noi-va-dai-hoc-tennessee-my-.35a55b87/en",
        DEP_PROFILE: ""
    },
    {
        PARTNER_ID: "3",
        DEP_NAME: "[BƯỚC CHÂN XANH CÙNG SỮA HẠT VEYO] – HÀNH TRÌNH CỦA SỨC MẠNH CON NGƯỜI VÀ TÌNH YÊU MÔI TRƯỜNG",
        DEP_LOGO: "https://image.talentnetwork.vn/vinasoy/news/2025/02/03/b_c_ch_n_xanh_164001.jpg",
        LINK: "https://career.vinasoy.com/news/vinasoy-news/-buoc-chan-xanh-cung-sua-hat-veyo-hanh-trinh-cua-suc-manh-con-nguoi-va-tinh-yeu-moi-truong.35a55a13/en",
        DEP_PROFILE: ""
    },
    {
        PARTNER_ID: "4",
        DEP_NAME: "VINASOY BẮC NINH – NHÀ MÁY SẢN XUẤT VỚI CÔNG NGHỆ HIỆN ĐẠI BẬC NHẤT THẾ GIỚI",
        DEP_LOGO: "https://image.talentnetwork.vn/vinasoy/news/2025/02/03/b_c_ch_n_xanh_164001.jpg",
        LINK: "https://career.vinasoy.com/news/vinasoy-news/vinasoy-bac-ninh-nha-may-san-xuat-voi-cong-nghe-hien-dai-bac-nhat-the-gioi.35a55a12/en",
        DEP_PROFILE: ""
    }
];

const PartnerSection: React.FC = memo((): React.ReactElement => {
    // Chia partnerData thành các nhóm 3 phần tử
    const chunkArray = useCallback((array: PartnerItem[], size: number): PartnerItem[][] => {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    }, []);
    const partnerChunks: PartnerItem[][] = useMemo(() => 
        chunkArray(partnerData, 3), 
        [chunkArray]
    );

    const handleViewMore = useCallback((partnerId: string): void => {
        console.log(partnerId);
    }, []);

    const HeaderSection: React.ReactElement = useMemo(() => (
        <header className="container-fluid">
            <h2 className="section-title">Partner</h2>
        </header>
    ), []);

    const PartnerListSection: React.ReactElement = useMemo(() => (
        <div className="container-fluid">
            {partnerChunks.map((chunk, chunkIndex) => (
                <div key={chunkIndex} className="row setheight">
                    {chunk.map((partner: PartnerItem, index: number) => (
                        <div key={partner.PARTNER_ID} className="col-xs-12 col-sm-6 col-md-4">
                            <div className="col-xs-12 img-box">
                                <a href={partner.LINK} title={partner.DEP_NAME}>
                                    <img 
                                        src={partner.DEP_LOGO}
                                        className="img-responsive center-block lazyload"
                                    />
                                </a>
                            </div>
                            <h3 className="boxhead"><a href={partner.LINK} title={partner.DEP_NAME}>{partner.DEP_NAME}</a></h3>
                            {partner.DEP_PROFILE && (
                                <div className="txt-short content_fck">
                                    <div className="inner_fck">
                                        {partner.DEP_PROFILE}
                                    </div>
                                </div>
                            )}
                            <p className="link-box">
                                <a onClick={() => handleViewMore(partner.PARTNER_ID)} className="click_viewmore" style={{ cursor: 'pointer' }}>View More</a>
                                <a href={partner.LINK}>View Jobs</a>
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    ), [partnerChunks]);

    const ViewMoreSection: React.ReactElement = useMemo(() => (
        <div className="row">
            <div className="col-xs-3 btn-viewmore">
                <a href="#" className="btn btn-block btn-primary">View More</a>
            </div>
        </div>
    ), []);

    return (
        <div id="11383" className="section-page news-three-items-s2">
            <div className="container">
                {HeaderSection}
                {PartnerListSection}
                {ViewMoreSection}
            </div>
        </div>
    );
});

export default PartnerSection;