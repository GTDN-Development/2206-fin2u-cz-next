import Heading from "@components/Heading";
import ScrollReveal from "@components/ScrollReveal";
import BrandsCarousel from "./home/BrandsCarousel";

type Props = {
  variant?: "hlavni-strana" | "uvery" | "investice" | "pojisteni";
  headingColor?: "primary" | "white";
};

const uvery = [
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
    alt: "Kooperativa",
    src: "/svg/loga-instituce/uvery/kooperativa.svg",
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
    alt: "Generali",
    src: "/svg/loga-instituce/uvery/generali.svg",
  },
  {
    alt: "CPP",
    src: "/svg/loga-instituce/uvery/cpp.svg",
  },
];

const investice = [
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
];

const pojisteni = [
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

export default function CollabLogos({
  variant = "hlavni-strana",
  headingColor = "white",
}: Props) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-20 py-20">
      <ScrollReveal>
        <Heading
          level={2}
          size="base"
          color={headingColor}
          className="text-center"
        >
          Spolupracujeme
        </Heading>
      </ScrollReveal>

      {/* Služba Hypotéky a Firemní úvěry */}
      {variant === "uvery" && <BrandsCarousel companies={uvery} />}

      {/* Služba Finanční nezávislost (investice) */}
      {variant === "investice" && (
        <div className="grid w-full grid-cols-2 justify-between gap-5 md:grid-cols-3 xl:grid-cols-6">
          {investice.map((logo, i) => (
            <ScrollReveal
              key={i}
              className="col-span-1 flex w-full items-center justify-center p-3"
            >
              <div className="h-[50px] w-[150px]">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width="150"
                  height="50"
                  className="h-full w-full invert"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* Služba zajištění rizik (pojištění) */}
      {variant === "pojisteni" && (
        <div className="grid w-full grid-cols-2 justify-between gap-5 md:grid-cols-4 xl:grid-cols-8">
          {pojisteni.map((logo, i) => (
            <ScrollReveal
              key={i}
              className="col-span-1 flex w-full items-center justify-center p-3"
            >
              <div className="h-[50px] w-[150px]">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width="150"
                  height="50"
                  className="h-full w-full"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
}
