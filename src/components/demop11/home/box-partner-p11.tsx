import React from 'react';
import { partnerData, PartnerItem } from '@/contants/partner';

const PartnerSection: React.FC = (): React.ReactElement => {
    // Chia partnerData thành các nhóm 3 phần tử
    const chunkArray = (array: PartnerItem[], size: number): PartnerItem[][] => {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    };
    const partnerChunks: PartnerItem[][] = chunkArray(partnerData, 3);


    const HeaderSection: React.ReactElement = (
        <header className="container-fluid">
            <h2 className="section-title">Partner</h2>
        </header>
    );

    const PartnerListSection: React.ReactElement = (
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
                                <a href="#" className="click_viewmore" style={{ cursor: 'pointer' }}>View More</a>
                                <a href={partner.LINK}>View Jobs</a>
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );

    const ViewMoreSection: React.ReactElement = (
        <div className="row">
            <div className="col-xs-3 btn-viewmore">
                <a href="#" className="btn btn-block btn-primary">View More</a>
            </div>
        </div>
    );

    return (
        <div id="11383" className="section-page news-three-items-s2">
            <div className="container">
                {HeaderSection}
                {PartnerListSection}
                {ViewMoreSection}
            </div>
        </div>
    );
};

export default PartnerSection;