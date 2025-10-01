import React from 'react';

const BannerVideo: React.FC = () => {
    return (
        <>
        <div className="texton">
            <div className="slogan"><h1>Không chỉ một công việc mà còn là <br /> con đường sự nghiệp</h1></div>
            <div className="join-talent-onclip"><a href="#">Join Our Talent Network</a></div>
        </div>
        <div id="banner-video">
            <div className="filter-video"></div>
            <video muted={true} autoPlay={true} playsInline={true} loop={true} id="bgvid" className="hidden-xs video">
                <source type="video/mp4" src="https://image.talentnetwork.vn/vinasoy/rws/VINASOY.mp4" />
                Your browser does not support
            </video>
        </div>
        </>
    );
}

export default BannerVideo;