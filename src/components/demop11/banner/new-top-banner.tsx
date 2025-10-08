'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import SearchJobSection from '@/components/common/_searchjob_section';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

type NewTopBannerSwiperProps = {
  banners: Banner[];
};

export interface Banner {
    PHOTO_ID: number;
    PHOTO_BACKGROUND: string;
    PHOTO_LINK: string | null;
}

export const arrTopBanner: Banner[] = [
    {
        PHOTO_ID: 319,
        PHOTO_BACKGROUND:
        'https://images.careerviet.vn/background/cv-eoc-2025_launching_plb_1900-x-570_1749467957.jpg',
        PHOTO_LINK:
        'http://careerbuilder.vn/vi/nha-tuyen-dung/cty-tnhh-bao-hiem-nhan-tho-chubb-viet-nam.35A58A4A.html',
    },
    {
        PHOTO_ID: 349,
        PHOTO_BACKGROUND:
        'https://images.careerviet.vn/background/cv-ai-matching_1_1900-x-570-en_1744787575.jpg',
        PHOTO_LINK: '',
    },
];

export default function NewTopBanner({ banners = arrTopBanner }: NewTopBannerSwiperProps): React.ReactElement | null {
  function getBannerImageSrc(item: Banner) {
    return item.PHOTO_BACKGROUND;
  }

  const renderBannerImage = (item: Banner, index: number): React.ReactElement => {
    return (
      <div className="image">
        <Image
          src={getBannerImageSrc(item)}
          alt={`Banner ${index + 1}`}
          loading={index === 0 ? 'eager' : 'lazy'}
          priority={index === 0} // Add priority for first image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          unoptimized={true} // Tạm thời disable optimization để tránh lỗi
        />
      </div>
    );
  };

  const renderBannerSlide = (item: Banner, index: number): React.ReactElement => {
    const imageElement = renderBannerImage(item, index);

    return item.PHOTO_LINK ? (
      <Link
        href={item.PHOTO_LINK}
        onClick={() => handleBannerCounterClick(item)}
        rel="nofollow noreferrer"
        target="_blank"
      >
        {imageElement}
      </Link>
    ) : (
      imageElement
    );
  };

  function handleBannerCounterClick(item: Banner): void {
    console.log('Banner clicked:', item.PHOTO_ID);
  }

  const handleSwiperInit = (wrapperId: string) => (swiper: SwiperType): void => {
    if (swiper.wrapperEl && !swiper.wrapperEl.id) {
      swiper.wrapperEl.id = wrapperId;
    }
  };

  if (!banners || banners.length === 0) {
    console.log('NewTopBanner - No banners to display');
    return null;
  }

  return (
    <>
    <div className="hidden-xs hidden-sm slidebg SetHeightTopBanner">
        <div className="texton">
            <div className="slogan"><h1>Không chỉ một công việc mà còn là <br /> con đường sự nghiệp</h1></div>
            <div className="join-talent-onclip">
                <a href="#" className="btn-gradient showDialogD">Join Our Talent Network</a>
            </div>
        </div>
        <div className="cb-banner-home __TopBannerSlide" id="topBannerSlidePC"
            style={
                {
                '--swiper-pagination-color': '#e8c80d',
                '--swiper-pagination-bullet-size': '10px',
                '--swiper-pagination-bullet-horizontal-gap': '4.5px',
                '--swiper-pagination-bottom': '-5px',
                } as React.CSSProperties
            }
        >
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                className="swiper-container"
                loop={banners.length > 1}
                speed={2000}
                effect="fade"
                autoplay={banners.length > 1 ? { delay: 5000, disableOnInteraction: false } : false}
                pagination={{ clickable: true, el: '.main-page .swiper-pagination' }}
                lazyPreloadPrevNext={1}
                wrapperClass="swiper-wrapper"
                onSwiper={handleSwiperInit('divTopBannerPCSlide')}
            >
                {banners.map((item, index) => (
                <SwiperSlide key={item.PHOTO_ID}>
                    {renderBannerSlide(item, index)}
                </SwiperSlide>
                ))}
                <div className="main-page">
                  <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
        <div className="container-search setOutBanner">
            <SearchJobSection />
        </div>
    </div>
    <div className="visible-xs visible-sm">
        <div className="cb-banner-home __TopBannerSlide" id="topBannerSlideMB"
            style={
                {
                '--swiper-pagination-color': '#e8c80d',
                '--swiper-pagination-bullet-size': '10px',
                '--swiper-pagination-bullet-horizontal-gap': '4.5px',
                '--swiper-pagination-bottom': '-5px',
                } as React.CSSProperties
            }
        >
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                className="swiper-container"
                loop={banners.length > 1}
                speed={2000}
                effect="fade"
                autoplay={banners.length > 1 ? { delay: 5000, disableOnInteraction: false } : false}
                pagination={{ clickable: true, el: '.main-page .swiper-pagination' }}
                lazyPreloadPrevNext={1}
                wrapperClass="swiper-wrapper"
                onSwiper={handleSwiperInit('divTopBannerMBSlide')}
            >
                {banners.map((item, index) => (
                <SwiperSlide key={item.PHOTO_ID}>
                    {renderBannerSlide(item, index)}
                </SwiperSlide>
                ))}
                <div className="main-page">
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
        <div className="container-search setOutBanner">
            <SearchJobSection />
        </div>
    </div>
    </>
  );
}
