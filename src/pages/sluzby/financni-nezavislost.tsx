import Button from "@components/Button";
import CollabLogos from "@components/CollabLogos";
import Heading from "@components/Heading";
import Hero from "@components/Hero";
import LargeCTA from "@components/LargeCTA";
import LargeImageCTA from "@components/LargeImageCTA";
import ScrollReveal from "@components/ScrollReveal";
import SectionHeader from "@components/SectionHeader";
import Seo from "@components/Seo";
import InvestmentCalc from "@components/sluzby/InvestmentCalc";
import Wrapper from "@components/Wrapper";
import { contacts } from "@configs/contacts";
import AppLayout from "@layouts/AppLayout";
import type { NextPage } from "next";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { HiMail, HiPhone } from "react-icons/hi";

const testimonials = [
  {
    id: 1,
    photoSrc: "/images/testimonial.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/testimonial.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "flex sm:translate-y-10",
  },
  {
    id: 3,
    photoSrc: "/images/testimonial.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "flex ",
  },
];

const FinancniNezavislost: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="dark">
      <Seo
        title="Finanční nezávislost"
        description="Vaše peníze můžou pracovat stejně jako vy. Co kdyby vás živily, až to nebudete chtít dělat sami?"
      />

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
            Finanční nezávislost
          </Heading>
          <p className="max-w-prose text-center text-lg text-white">
            Vaše peníze můžou pracovat stejně jako vy. Co kdyby vás živily, až
            to nebudete chtít dělat sami?
          </p>
          <div className="mt-8 flex gap-5 pb-28">
            <Button as="a" href="#kalkulacka">
              Výpočet renty
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
              Investiční plán
            </Heading>
            <p className="mt-8 text-center text-gray-200">
              Sestavíme vám investiční plán, který váš majetek ochrání před
              zbytečnými riziky, dlouhodobě bude porážet inflaci a provede vás
              bezpečně každou složitou situací. Naplánujte své strategické
              finanční cíle a my budeme silným partnerem při jejich realizaci.
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
              Investiční strategie
            </Heading>
            <p className="mt-8 text-center text-gray-200">
              Vytvořte majetek, ze kterého můžete čerpat pasivní příjem a být
              finančně nezávislí. Používáte osvědčenou strategii, kde pomalu a
              postupně nakupujete podíly ve stovkách reálných firem, které
              prosperují desítky let. Zpracujeme investiční strategii, která vám
              přinese finanční nezávislost a nekonečnou rentu.
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
              Wealth management
            </Heading>
            <p className="mt-8 text-center text-gray-200">
              Investiční poradenství a wealth management je naše klíčová oblast,
              naše doména, která v sobě “schovává” kompletní správu majetku jako
              celku. Víte přesně, co se s vašimi penězi děje a proč. Dbáme na
              důslednou diverzifikaci majetku jako celku.
            </p>
          </ScrollReveal>
        </div>

        {/* Spolupráce loga */}
        <CollabLogos variant="investice" />
      </Hero>

      {/* Content */}
      <Wrapper as="section" id="kalkulacka" size="sm" paddedContent="base">
        <Heading level={2} size="lg" className="mx-auto mb-16 text-center">
          Kalkulačka finanční nezávislosti, kolik peněz musím investovat?
        </Heading>
        <InvestmentCalc />
      </Wrapper>

      {/* CTA 1 */}
      <Wrapper size="lg" paddedContent="base">
        <ScrollReveal>
          <LargeImageCTA
            imageSrc="/images/meeting.jpg"
            text="Dokáže i vaše portfolio s přehledem porážet inflaci a přitom vám vyplácet pravidelnou rentu? Pojďme si společně zavolat. To nám dá příležitost se vzájemně poznat a zjistit, jestli spolu můžeme spolupracovat."
          >
            <Button
              as="a"
              href={contacts.investice.emailLink}
              color="light"
              leftIcon={<HiMail />}
            >
              {contacts.investice.emailLabel}
            </Button>
            <Button
              as="a"
              href={contacts.investice.phoneLink}
              color="light"
              leftIcon={<HiPhone />}
            >
              {contacts.investice.phoneLabel}
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
                  <ExportedImage
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
      <Wrapper size="lg" paddedContent="base">
        <ScrollReveal>
          <LargeCTA
            title="Máte otázky ohledně investování? Domluvte si nezávaznou konzultaci."
            text="Domluvte si setkání s naším specialistou, kde společně probereme vaše dotazy. Působíme po celé České republice. Můžeme to řešit osobně, po telefonu či online, nebo napište přes kontaktní formulář."
          >
            <Link href="/kontakt" passHref>
              <Button as="a" color="light" className="w-full">
                Sjednat schůzku
              </Button>
            </Link>
            <Button
              as="a"
              href={contacts.investice.phoneLink}
              variant="tinted"
              color="light"
              leftIcon={<HiPhone />}
              className="w-full"
            >
              {contacts.investice.phoneLabel}
            </Button>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default FinancniNezavislost;
