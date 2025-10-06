import React, { useMemo, memo } from 'react';

interface CareerItem {
    INDUSTRY_NAME: string;
    imageUrl: string;
    LINK: string;
}

const backgroundImageSection = "https://image.talentnetwork.vn/staging5///news/2020/06/24/1592995941_home.png";

const careerData: CareerItem[] = [
    {
        INDUSTRY_NAME: "Dịch vụ khách hàng",
        imageUrl: "https://image.talentnetwork.vn/staging5///news/2020/06/24/1592993913_customer-service-3-color-21.png",
        LINK: "http://career.vinasoy.com/tim-viec-lam/dich-vu-khach-hang.12/vi",
    },
    {
        INDUSTRY_NAME: "Sản xuất / Vận hành sản xuất",
        imageUrl: "https://image.talentnetwork.vn/staging5///news/2020/06/24/1592994102_real-estate-1-color-21.png",
        LINK: "http://career.vinasoy.com/tim-viec-lam/san-xuat-van-hanh-san-xuat.25/vi",
    },
    {
        INDUSTRY_NAME: "Hành chính / Thư ký",
        imageUrl: "https://image.talentnetwork.vn/staging5///news/2020/06/24/1592994013_administrative-2-color-21.png",
        LINK: "http://career.vinasoy.com/tim-viec-lam/hanh-chinh-thu-ky.3/vi",
    },
    {
        INDUSTRY_NAME: "Tiếp thị / Marketing",
        imageUrl: "https://image.talentnetwork.vn/staging5///news/2020/06/24/1592993982_marketing-1-color-21.png",
        LINK: "http://career.vinasoy.com/tim-viec-lam/tiep-thi.4/vi",
    },
    {
        INDUSTRY_NAME: "Kế toán / Kiểm toán",
        imageUrl: "https://image.talentnetwork.vn/staging5///news/2020/06/24/1592993968_accounting-2-color-21.png",
        LINK: "http://career.vinasoy.com/tim-viec-lam/ke-toan-kiem-toan.2/vi",
    },
    {
        INDUSTRY_NAME: "Luật / Pháp lý",
        imageUrl: "https://image.talentnetwork.vn/staging5///news/2020/06/24/1592994223_administrative-1-color-21.png",
        LINK: "http://career.vinasoy.com/tim-viec-lam/luat-phap-ly.24/vi",
    }
];

const CareerSection: React.FC = memo((): React.ReactElement => {
    const HeaderSection: React.ReactElement = useMemo(() => (
        <header className="container-fluid">
            <h2 className="section-title">Career Opportunities</h2>
        </header>
    ), []);
    
    const CareerListSection: React.ReactElement = useMemo(() => (
        <div className="container-fluid container-narrow">
            <ul className="flex-row jobs">
                {careerData.map((career: CareerItem, index: number) => (
                    <li key={index} className="col-xs-6 col-sm-6 col-md-4 job">
                        <a href={career.LINK}>
                            <img 
                                src={career.imageUrl} 
                                alt={career.INDUSTRY_NAME}
                            />
                        </a>
                        <h3 className="job-title">
                            <a href={career.LINK}>{career.INDUSTRY_NAME}</a>
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    ), []);
    
    const ViewMoreSection: React.ReactElement = useMemo(() => (
        <div className="row">
            <div className="col-xs-3 btn-viewmore">
                <a href="#" className="btn btn-block btn-primary">View More</a>
            </div>
        </div>
    ), []);

    return (
        <div id="11379" className="section-page section-grid-career bg-odd"
            {...(backgroundImageSection && {
                style: {
                    backgroundImage: `url(${backgroundImageSection})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                }
            })}
        >
            <div className="container">
                {HeaderSection}
                {CareerListSection}
                {ViewMoreSection}
            </div>
        </div>
    );
});

export default CareerSection;