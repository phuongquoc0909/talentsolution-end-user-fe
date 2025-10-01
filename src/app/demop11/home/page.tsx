'use client';

import SearchJobSection from "@/components/common/_searchjob_section";
import BannerVideo from "@/components/demop11/banner/BannerVideo";
import BannerSlide, { arrBannerSlide } from "@/components/demop11/banner/BannerSlide";
import NewTopBanner, { arrTopBanner } from "@/components/demop11/banner/new-top-banner";
import AboutSection from "@/components/demop11/home/about_section";
import CareerSection from "@/components/demop11/career/box-career-p11";
import PartnerSection from "@/components/demop11/home/box-partner-p11";
import NewMidBanner, { arrMidBanner } from "@/components/demop11/banner/new-mid-banner";
import BoxNews from "@/components/demop11/news/layout";
import MediaSection from "@/components/common/media_section";
import SocialSection from "@/components/demop11/box_social_section";

export default function HomePage() {
  return (
    <>
      <div id="photo-area">
        {/* <BannerVideo />
        <div className="container-search">
          <SearchJobSection />
        </div> */}
        <BannerSlide banners={arrBannerSlide} />
      </div>
      {/* <NewTopBanner banners={arrTopBanner} /> */}
      <AboutSection />
      <CareerSection />
      <PartnerSection />
      <NewMidBanner banners={arrMidBanner} />
      <BoxNews layout="5items" />
      <MediaSection />
      <SocialSection />
    </>
  );
}
