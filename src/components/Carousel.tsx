import SwiperCore, { A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

type CarouselProps = {
  itemsArray: any;
}

export default function Carousel({itemsArray}: CarouselProps) {
  SwiperCore.use([Pagination, Autoplay, A11y]);

  return (
    <Swiper
      slidesPerView={2}
      breakpoints={{
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
      className="h-auto w-full"
    >
      {itemsArray.map((item:any , index:number) => (
        <SwiperSlide className="" key={index}>
          <div className="h-[50px] w-[150px]">
            <img
              src={item.src}
              alt={item.alt}
              width="150"
              height="50"
              className="h-full w-full invert"
            />
          </div>
      </SwiperSlide>
      ))}
    </Swiper>
  );
}