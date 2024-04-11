import Button from "@components/Button";
import CollabLogos from "@components/CollabLogos";
import Heading from "@components/Heading";
import Hero from "@components/Hero";
import LargeCTA from "@components/LargeCTA";
import LargeImageCTA from "@components/LargeImageCTA";
import ScrollReveal from "@components/ScrollReveal";
import SectionHeader from "@components/SectionHeader";
import Seo from "@components/Seo";
import MortgageCalc from "@components/sluzby/MortgageCalc";
import Wrapper from "@components/Wrapper";
import { contacts } from "@configs/contacts";
import AppLayout from "@layouts/AppLayout";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiMail, HiPhone } from "react-icons/hi";

const testimonials = [
  {
    id: 1,
    photoSrc: "/images/reference/david-hrach.jpg",
    name: "David Hrách",
    position: "Vlastní bydlení a komplexní finanční plán",
    text: "s Davidem jsme řešili hypotéku bez prokazování příjmu. Měli jsme pár schůzek, ve kterých mi mimo jiné řekl co krok za krokem udělat, aby mi ji banka dala. Asi cca po 4 měsících mi schválili přesně tolik, kolik bylo třeba. Za to jsem mu vděčný. Řešili jsme nějaké spoření na které stát přispívá a i ukládání peněz, aby neztratili svou hodnotu. Schůzky jsou vždy velmi příjemné a domluvené tak, aby čas vyhovoval vždy mně. Celkově jsem velmi spokojený klient.",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/reference/anh-tuan-nguyen.jpg",
    name: "Anh Tuan Nguyen",
    position: "Specializace",
    text: "Doporučuji ! profesionální přístup. A perfektně mi zajistil ochranu majetku před inflací.",
    class: "flex sm:translate-y-10",
  },
  {
    id: 3,
    photoSrc: "/images/testimonial.jpg",
    name: "Josef Lahodný",
    position: "Životní pojištění a rekonstrukce zděděné nemovitosti",
    text: "Výborný a spolehlivý finanční poradce. Dělá svoji práci znamenitě, skvělá komunikace, profesionalita a ochota. Určitě není typ poradce, kterého zajímá jen podepsání smlouvy. Díky preciznosti, vytrvalosti a profesionálnímu přístupu mi pomohl v získání hypotéky, abych mohl zrekonstruovat zděděný rodinný domek. Vřele doporučuji všem. Budu-li potřebovat cokoli zajistit v rámci financí, obrátím se opět sem! Člověk si občas musí nechat poradit.",
    class: "flex ",
  },
];

const Hypoteky: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="dark">
      <Seo title="Hypotéky a refinancování" description="Popisek služby" />

      {/* Hero */}
      <Hero hasWatermark>
        {/* Úvod Hero */}
        <ScrollReveal
          as={"div"}
          staggerChildren
          staggerChildrenIncrement="200"
          className="flex flex-col items-center gap-8"
        >
          <Heading level={1} size="xl" align="center" color="white">
            Hypotéky a refinancování
          </Heading>
          <p className="max-w-prose text-center text-lg text-white">
            Získáte skvělou hypotéku s nejnižším úrokem, pokud možno bez
            poplatků a s odhadem zdarma.
          </p>
          <div className="mt-8 flex flex-col gap-5 pb-28 sm:flex-row">
            <Button as="a" href="#kalkulacka">
              Výpočet splátky
            </Button>
            <Link href="/kontakt" passHref>
              <Button as="a" color="light">
                Sjednat schůzku
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        {/* Content Hero */}
        <div className="mx-auto max-w-3xl py-24 xl:py-32">
          <ScrollReveal
            animation="slide-up"
            className="mb-16 flex flex-col items-center justify-center sm:mb-28"
          >
            <Heading
              level={2}
              size="base"
              color="white"
              className="mx-auto text-center"
            >
              <span className="mr-2 text-[1.25em] text-primary">1.</span>
              Individuální přístup
            </Heading>
            <p className="mt-8 text-center text-gray-200">
              Sestavíme Vám srozumitelný hypoteční plán. Pomáháme s vymyšlením
              logistiky často u složitých případů pro naše klienty a
              podnikatele. Různé typy příjmů a účelů financování si vyžadují
              individuální přístup. Ať už jste na mateřské, chcete využít příjmy
              z obratu firmy, nebo budoucí příjem z pronájmu nemovitosti,
              oceníte možnost před-konzultace.
            </p>
          </ScrollReveal>
          <ScrollReveal
            animation="slide-up"
            className="my-16 flex flex-col items-center justify-center sm:my-28"
          >
            <Heading
              level={2}
              size="base"
              color="white"
              className="mx-auto text-center"
            >
              <span className="mr-2 text-[1.25em] text-primary">2.</span>
              Kompletní vyřízení hypotéky
            </Heading>
            <p className="mt-8 text-center text-gray-200">
              Vyřízení hypotéky je často stresující záležitostí. Jsme Vaším
              průvodcem procesu celé hypotéky. S námi je celý proces jednoduší.
              Náš specialista Vás provede celým procesem s úsměvem na rtech, od
              počáteční konzultace, až po čerpání včetně plnění následných
              podmínek. Vyhněte se zbytečnému stresu a běhání.
            </p>
          </ScrollReveal>
          <ScrollReveal
            animation="slide-up"
            className="mt-16 flex flex-col items-center justify-center sm:mt-28"
          >
            <Heading
              level={2}
              size="base"
              color="white"
              className="mx-auto text-center"
            >
              <span className="mr-2 text-[1.25em] text-primary">3.</span>
              Komplexní servis
            </Heading>
            <p className="mt-8 text-center text-gray-200">
              Pomůžeme Vám po skončení fixace s refinancováním hypotéky, nebo s
              mimořádnými splátkami a jsme Vám k dispozici pro jakékoliv dotazy.
              Cílem pro naše klienty je bezpečná hypotéka. V rámci hypotečního
              plánu získáte písemné doporučení, díky kterému budete vědět, co
              dělat ať už se bude dít na finančním trhu cokoliv. Pomůžeme se
              zajištěním příjmu včetně kvalitního pojištění nemovitosti.
            </p>
          </ScrollReveal>
        </div>

        {/* Spolupráce loga */}
        <CollabLogos variant="uvery" />
      </Hero>

      {/* Content */}
      <Wrapper as={"section"} id="kalkulacka" size="sm" paddedContent="base">
        <Heading level={2} size="lg" className="mx-auto mb-16 text-center">
          Spočítejte orientační splátku hypotéky
        </Heading>
        <MortgageCalc />
      </Wrapper>

      {/* CTA 1 */}
      <Wrapper size="lg" paddedContent="base">
        <ScrollReveal>
          <LargeImageCTA
            title="Spojte se s naším hypotečním specialistou"
            text="Získáte skvělou hypotéku s nejnižším úrokem, pokud možno bez poplatků a s odhadem zdarma."
            imageSrc="/images/meeting.jpg"
          >
            <Button
              as="a"
              href={contacts.hypoteky.emailLink}
              color="light"
              leftIcon={<HiMail />}
            >
              {contacts.hypoteky.emailLabel}
            </Button>
            <Button
              as="a"
              href={contacts.hypoteky.phoneLink}
              color="light"
              leftIcon={<HiPhone />}
            >
              {contacts.hypoteky.phoneLabel}
            </Button>
          </LargeImageCTA>
        </ScrollReveal>
      </Wrapper>

      {/* Reference */}
      <SectionHeader
        gradient="top"
        kicker="Reference"
        heading="Naši klienti o nás napsali"
        className="mt-24 xl:mt-32"
      />
      <Wrapper className="pb-20 sm:pb-28">
        <div
          className={`grid grid-cols-1 items-start gap-10 sm:grid-cols-2 xl:grid-cols-3`}
        >
          {testimonials.map((testimonial) => (
            <ScrollReveal
              animation="fade"
              duration="1200"
              key={testimonial.id}
              className={`flex-col rounded-xl bg-white p-5 shadow-xl sm:p-12 ${testimonial.class}`}
            >
              <div className="flex items-center justify-start">
                <div className="mr-5 aspect-square h-12 w-12 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.photoSrc}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    loading="lazy"
                    objectFit="cover"
                    className="aspect-square h-full w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-widest text-primary sm:text-base">
                    {testimonial.name}
                  </span>
                  <span className="text-xs tracking-wider text-muted">
                    {testimonial.position}
                  </span>
                </div>
              </div>
              <p className="mt-8 w-full text-sm text-muted">
                {testimonial.text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </Wrapper>

      {/* CTA 2 */}
      {/* Odkaz na kariéru */}
      <Wrapper size="lg" paddedContent="base">
        <ScrollReveal>
          <LargeCTA
            title="Máte otázky ohledně hypotéky? Domluvte si nezávaznou konzultaci."
            text="Domluvte si setkání s naším specialistou, kde společně probereme Vaše dotazy. Působíme po celé České republice. Můžeme to řešit osobně, po telefonu či online, nebo napište přes kontaktní formulář."
          >
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
              <Link href="/kontakt" passHref>
                <Button as="a" color="light" className="w-full">
                  Sjednat schůzku
                </Button>
              </Link>
              <Button
                as="a"
                href={contacts.hypoteky.phoneLink}
                variant="tinted"
                color="light"
                leftIcon={<HiPhone />}
                className="w-full"
              >
                {contacts.hypoteky.phoneLabel}
              </Button>
            </div>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default Hypoteky;
