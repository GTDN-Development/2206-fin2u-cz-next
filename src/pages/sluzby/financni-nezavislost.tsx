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
    photoSrc: "/images/reference/hana-hlavonova.jpg",
    name: "Hana Hlavoňová",
    position: "Investice",
    text: "Vašek mi pomohl s investicí se zajímavým výnosem. Pravidelně osobně kontroluje, jestli je vše v pořádku a nikdy není problém zavolat s jakýmkoliv dotazem. Doporučuji a těším se na další spolupráci.",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/reference/marie-lahodna.jpg",
    name: "Marie Lahodná",
    position: "Investice",
    text: "Investiční poradenství, které je transparentní, diskrétní a důvěryhodné a jehož cílem je ochrana vašeho majetku. Na spolupráci si nejvíce cením vysoké profesionality, transparentnosti, flexibility a jasných argumentů při návrzích na změnu portfolia, které reagují na měnící se podmínky finančního trhu. Pokud hledáte poradce, který nabízí služby západního světa, tak tohle je jasná volba. Z vlastní zkušenosti doporučuji!",
    class: "flex sm:translate-y-10",
  },
  {
    id: 3,
    photoSrc: "/images/reference/filip-zimanzl.jpg",
    name: "Filip Zimanzl",
    position: "Investiční plán",
    text: "David je nejen skvělý investiční poradce, ale také skvělý člověk, co vždy rád pomůže a vyhoví vašim potřebám! Pokud potřebujete ve světě financí poradit, David je člověk číslo jedna na koho se obrátit!",
    class: "flex ",
  },
];

const FinancniNezavislost: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="dark">
      <Seo
        title="Finanční nezávislost"
        description="Vaše peníze můžou pracovat stejně jako Vy. Co kdyby Vás živily, až to nebudete chtít dělat sami?"
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
            Wealth management
          </Heading>
          <p className="max-w-prose text-center text-lg text-white">
            Vaše peníze můžou pracovat stejně jako vy. Co kdyby vás živily, až
            to nebudete chtít dělat sami?
          </p>
          <div className="mt-8 flex flex-col gap-5 pb-28 sm:flex-row">
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
              Sestavíme pro Vás investiční plán, který Váš majetek ochrání před
              zbytečnými riziky, dlouhodobě bude porážet inflaci a provede Vás
              bezpečně každou složitou situací. Vykročte na cestě k rentě díky
              dlouhodobému investiční plánu. Vytvořte si portfolio, ze kterého
              budeme moci čerpat rentu. Naplánujte si svou cestu k finanční
              nezávislosti a my budeme silným partnerem při její realizaci.
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
              Investujte jako dolarový milionáři. Vytvořte majetek, ze kterého
              můžete čerpat pasivní příjem a být finančně nezávislí. Používáte
              osvědčenou strategii, kde pomalu a postupně nakupujete podíly ve
              stovkách reálných firem, které prosperují desítky let. Vytváříme
              investiční strategie na míru od pravidelné investice 25 000 Kč
              měsíčně a 1 mil CZK jednorázově.
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
              Wealth Management je vhodný zejména pro klienty, kteří potřebují
              vyřešit správu či předání rozsáhlejšího majetku v rámci rodiny,
              prodej nebo koupi firmy, optimalizovat daňové zatížení či
              zabezpečit a ochránit svůj majetek pro budoucí generace. Tyto
              činnosti jsou zajišťovány ve spolupráci se třetími stranami.
              Službu poskytujeme klientům, jejichž spravované prostředky
              přesahují 25 milionů Kč.
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
            title="Spojte se s naším investičním specialistou"
            text="Dokáže i Vaše portfolio s přehledem porážet inflaci a přitom Vám vyplácet pravidelnou rentu? Pojďme si společně zavolat. To nám dá příležitost se vzájemně poznat a zjistit, jestli spolu můžeme spolupracovat."
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
              key={testimonial.name}
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
            text="Domluvte si setkání s naším specialistou, kde společně probereme Vaše dotazy.
            Působíme po celé České republice. Můžeme to řešit osobně, po telefonu či online, nebo napište přes
            kontaktní formulář."
          >
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
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
            </div>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default FinancniNezavislost;
