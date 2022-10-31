import Heading from "@components/Heading";
import ScrollReveal from "@components/ScrollReveal";

type Props = {
  variant?: "hlavni-strana" | "uvery" | "investice" | "pojisteni";
  headingColor?: "primary" | "white";
};

const hlavniStrana = [
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/uvery/ceska-sporitelna.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/uvery/moneta.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/pojisteni/csob.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/pojisteni/generali.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/investice/vanguard.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/investice/blackrock.svg",
  },
];

const uvery = [
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/uvery/ceska-sporitelna.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/uvery/hypotecni-banka.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/uvery/kb.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/uvery/mbank.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/uvery/moneta.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/uvery/raiffeisen-bank.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/uvery/uni-credit.svg",
  },
];

const investice = [
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/investice/amindi.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/investice/blackrock.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/investice/conseq.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/investice/franklin.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/investice/ubs.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/investice/vanguard.svg",
  },
];

const pojisteni = [
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/pojisteni/allianz.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/pojisteni/cpp.svg",
  },
  {
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/pojisteni/csob.svg",
  },
  {
    alt: "Česká spořitelna",
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
    alt: "Česká spořitelna",
    src: "/svg/loga-instituce/pojisteni/maxima.svg",
  },
  {
    alt: "Česká spořitelna",
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

      {/* Hlavní strana */}
      {variant === "hlavni-strana" && (
        <div className="grid w-full grid-cols-2 justify-between gap-10 md:grid-cols-3 xl:grid-cols-6">
          {hlavniStrana.map((logo, i) => (
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

      {/* Služba Hypotéky a Firemní úvěry */}
      {variant === "uvery" && (
        <div className="grid w-full grid-cols-2 justify-between gap-5 md:grid-cols-4 xl:grid-cols-7">
          {uvery.map((logo, i) => (
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
