import SwiperCore, { A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const companies = [
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/uvery/ceska-sporitelna.svg",
  },
  {
    alt: "Hypoteční Banka",
    src: "/svg/loga-instituce/uvery/hypotecni-banka.svg",
  },
  {
    alt: "Komerční Banka",
    src: "/svg/loga-instituce/uvery/kb.svg",
  },
  {
    alt: "mBank",
    src: "/svg/loga-instituce/uvery/mbank.svg",
  },
  {
    alt: "Moneta",
    src: "/svg/loga-instituce/uvery/moneta.svg",
  },
  {
    alt: "Raiffeisen Bank",
    src: "/svg/loga-instituce/uvery/raiffeisen-bank.svg",
  },
  {
    alt: "Uni Credit Bank",
    src: "/svg/loga-instituce/uvery/uni-credit.svg",
  },
  {
    alt: "Amindi",
    src: "/svg/loga-instituce/investice/amindi.svg",
  },
  {
    alt: "Blackrock",
    src: "/svg/loga-instituce/investice/blackrock.svg",
  },
  {
    alt: "Conseq",
    src: "/svg/loga-instituce/investice/conseq.svg",
  },
  {
    alt: "Franklin",
    src: "/svg/loga-instituce/investice/franklin.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/investice/ubs.svg",
  },
  {
    alt: "Vanguard",
    src: "/svg/loga-instituce/investice/vanguard.svg",
  },
  {
    alt: "Allianz",
    src: "/svg/loga-instituce/pojisteni/allianz.svg",
  },
  {
    alt: "ČPP",
    src: "/svg/loga-instituce/pojisteni/cpp.svg",
  },
  {
    alt: "ČSOB",
    src: "/svg/loga-instituce/pojisteni/csob.svg",
  },
  {
    alt: "Generali",
    src: "/svg/loga-instituce/pojisteni/generali.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/pojisteni/kb.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/pojisteni/kooperativa.svg",
  },
  {
    alt: "kooperativa",
    src: "/svg/loga-instituce/pojisteni/maxima.svg",
  },
  {
    alt: "Uniqa",
    src: "/svg/loga-instituce/pojisteni/uniqa.svg",
  },
];

type BrandsCarouselProps = {
  className?: string;
};

export default function BrandsCarousel({
  className = "",
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
