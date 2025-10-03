'use client';

import React, { memo, useMemo } from 'react';
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

const HomePage: React.FC = memo(() => {
  const sectionsConfig = useMemo(() => [
    { id: 'banner-video', priority: 1, component: BannerVideo, props: {} },
    { id: 'search-section', priority: 2, component: SearchJobSection, props: {} },
    { id: 'banner-slide', priority: 3, component: BannerSlide, props: { banners: arrBannerSlide } },
    { id: 'top-banner', priority: 4, component: NewTopBanner, props: { banners: arrTopBanner } },
    { id: 'about-section', priority: 5, component: AboutSection, props: {} },
    { id: 'career-section', priority: 6, component: CareerSection, props: {} },
    { id: 'partner-section', priority: 7, component: PartnerSection, props: {} },
    { id: 'mid-banner', priority: 8, component: NewMidBanner, props: { banners: arrMidBanner } },
    { id: 'news-section', priority: 9, component: BoxNews, props: { layout: '5items' } },
    { id: 'media-section', priority: 10, component: MediaSection, props: {} }
  ], []);

  const sortedSections = useMemo(() => 
    sectionsConfig.sort((a, b) => a.priority - b.priority),
    [sectionsConfig]
  );

  const renderSections = useMemo(() => {
    return sortedSections.map((section) => {
      const Component = section.component;
      const props = section.props || {};
      
      if (section.id === 'search-section') {
        return (
          <div key={section.id} className="container-search">
            <Component {...(props as any)} />
          </div>
        );
      }

      if (section.id === 'banner-video' || section.id === 'banner-slide') {
        return <Component key={section.id} {...(props as any)} />;
      }

      return <Component key={section.id} {...(props as any)} />;
    });
  }, [sortedSections]);

  const photoAreaContent = useMemo(() => {
    const photoAreaSections = sortedSections.filter(section => 
      ['banner-video', 'search-section', 'banner-slide'].includes(section.id)
    );

    return photoAreaSections.map((section) => {
      const Component = section.component;
      const props = section.props || {};
      
      if (section.id === 'search-section') {
        return (
          <div key={section.id} className="container-search">
            <Component {...(props as any)} />
          </div>
        );
      }

      return <Component key={section.id} {...(props as any)} />;
    });
  }, [sortedSections]);

  const otherSections = useMemo(() => {
    return sortedSections
      .filter(section => !['banner-video', 'search-section', 'banner-slide'].includes(section.id))
      .map((section) => {
        const Component = section.component;
        const props = section.props || {};
        return <Component key={section.id} {...(props as any)} />;
      });
  }, [sortedSections]);

  return (
    <>
      <div id="photo-area">
        {photoAreaContent}
      </div>
      
      {otherSections}
    </>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
