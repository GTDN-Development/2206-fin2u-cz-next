import SwiperCore, { A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

type BrandsCarouselProps = {
  className?: string;
  companies: { alt: string; src: string }[];
};

export default function BrandsCarousel({
  className = "",
  companies,
}: BrandsCarouselProps) {
  SwiperCore.use([Pagination, Autoplay, A11y]);

  return (
    <Swiper
      slidesPerView={"auto"}
      breakpoints={{
        1: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 4,
        },
        960: {
          slidesPerView: 6,
        },
      }}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className={`h-auto w-full ${className}`}
    >
      {companies.map((company, i) => (
        <SwiperSlide key={i}>
          <div className="h-[40px] w-[120px]">
            <img
              src={company.src}
              alt={company.alt}
              width="120"
              height="40"
              className="h-full w-full invert"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
