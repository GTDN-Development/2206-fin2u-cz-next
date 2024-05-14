import Button from "@components/Button";
import Heading from "@components/Heading";
import Hero from "@components/Hero";
import Kicker from "@components/Kicker";
import LargeCTA from "@components/LargeCTA";
import ScrollReveal from "@components/ScrollReveal";
import SectionHeader from "@components/SectionHeader";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import BrandsCarousel from "@components/home/BrandsCarousel";
import Services from "@components/home/Services";
import Team from "@components/home/Team";
import Testimonials from "@components/home/Testimonials";
import AppLayout from "@layouts/AppLayout";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { HiArrowDown } from "react-icons/hi";

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

// To Do
// Integrace typeform -> Hotovo
// Socky FB, IG, LinkedIN - X -> Doplnit finální odkazy
// Kontakt - zprovoznit kontaktní formulář - Hotovo
// Zprovoznit kalkulačky
// Spojit Davidovi všechny emaily do jednoho, aby měl přehled
// Přidat do menu "kariéra" - hotovo
// Loga spolupracujících firem: Mainpage všechny, carousel
// Loga hypotéky: banky
// Firemní úvěry loga stejná jako na hypotéky
// Loga Investic: Investiční společnosti
// Loga zajištění rizik - pojišťovny

// Textace Služby Hypotéky a refinancování - kalkulačka, chybí textace
// Textace Služby Firemní a podnikatelské financování - kalkulačka, chybí textace
// Textace Služby Finanční nezávislost - kalkulačka, chybí textace
// Textace Služby Zajištění rizik - bez kalkulačky, chybí textace

const Home: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="dark">
      <Seo title="Finanční poradenství na míru" description="" />
      {/* Hero */}
      <Hero hasWatermark={true}>
        <ScrollReveal
          staggerChildren
          staggerChildrenIncrement="200"
          className="flex flex-col items-center gap-8"
        >
          <Heading level={1} size="xl" align="center" color="white">
            Propojujeme know-how zkušených odborníků s technologiemi.
          </Heading>
          <p className="max-w-prose text-center text-lg text-white">
            Fin2u je finanční portál a online konzultant, který Vám pomůže k
            vlastnímu bydlení a finanční nezávislosti.
          </p>
          <div className="mt-8 flex w-full max-w-lg flex-col gap-5 sm:flex-row">
            <Button
              as="a"
              href="#sluzby"
              rightIcon={<HiArrowDown />}
              className="w-full"
            >
              Co umíme
            </Button>
            <Link href="/kariera" passHref>
              <Button as="a" color="light" variant="tinted" className="w-full">
                Pracovní příležitost
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay="600" className="my-48">
          <Image
            src="/images/cely-tym.jpg"
            alt="Náš tým"
            width={1920}
            height={1080}
            loading="eager"
            objectFit="cover"
            className="isolate aspect-video w-full overflow-hidden rounded-xl bg-slate-500"
          />
        </ScrollReveal>

        {/* Carousel s logama */}
        <div className="flex w-full flex-col items-center justify-center gap-20 py-20">
          <ScrollReveal>
            <Heading
              level={2}
              size="base"
              color="white"
              className="text-center"
            >
              Spolupracujeme
            </Heading>
          </ScrollReveal>
          <BrandsCarousel companies={companies} />
        </div>
      </Hero>

      {/* Služby */}
      <Wrapper as="section" id="sluzby" paddedContent="base">
        <SectionHeader
          gradient="top"
          kicker="Nabízené služby"
          heading="SPRÁVNÉ PLÁNOVÁNÍ JE KLÍČEM K VAŠIM CÍLŮM"
          caption={"Vyberte si oblast, o které se chcete dozvědět více"}
        />
        <Services />
      </Wrapper>

      {/* Tým */}
      <Wrapper as={"section"} id="tym" paddedContent="base">
        <SectionHeader
          gradient="left"
          kicker="Náš tým specialistů"
          heading="Vyber si svého konzultanta"
          caption={
            "Naši konzultanti jsou odborníci na firemní a rodinné finance, svým klientům pomáháme lépe finančně plánovat a dosahovat strategických cílů."
          }
        />
        <Team />
      </Wrapper>

      {/* Reference */}
      <SectionHeader
        as={"section"}
        id="reference"
        gradient="top"
        kicker="Reference"
        heading="NAŠI KLIENTI O NÁS NAPSALI"
        className="mt-24 xl:mt-32"
      />
      <div className="relative z-0 w-screen">
        <Wrapper className="pb-20 sm:pb-28">
          <Testimonials />
        </Wrapper>
        <div className="absolute bottom-0 left-0 -z-10">
          <Image
            src={"/images/testimonials-bg.png"}
            alt="Spokojený klient"
            width={640}
            height={640}
            loading="lazy"
            objectFit="cover"
            className=""
          />
        </div>
      </div>

      {/* Counter */}
      <Wrapper
        paddedContent="sm"
        className="grid grid-cols-2 items-start gap-x-6 gap-y-12 md:grid-cols-3"
      >
        <CountUp
          start={0}
          end={537}
          delay={0}
          duration={4}
          useEasing
          enableScrollSpy
          scrollSpyOnce
        >
          {({ countUpRef }) => (
            <ScrollReveal className="col-span-1 flex flex-col items-center justify-center gap-1">
              <span
                ref={countUpRef}
                className="block text-4xl font-bold text-primary sm:text-6xl lg:text-8xl"
              />
              <span className="block font-medium uppercase tracking-wider">
                Klientů
              </span>
            </ScrollReveal>
          )}
        </CountUp>
        <CountUp
          start={0}
          end={539}
          delay={0}
          duration={4}
          useEasing
          enableScrollSpy
          scrollSpyOnce
        >
          {({ countUpRef }) => (
            <ScrollReveal className="col-span-1 flex flex-col items-center justify-center gap-1">
              <span
                ref={countUpRef}
                className="block text-4xl font-bold text-primary sm:text-6xl lg:text-8xl"
              />
              <span className="block text-center font-medium uppercase tracking-wider">
                milionů v úvěrech
              </span>
            </ScrollReveal>
          )}
        </CountUp>
        <CountUp
          start={0}
          end={239}
          delay={0}
          duration={4}
          useEasing
          enableScrollSpy
          scrollSpyOnce
        >
          {({ countUpRef }) => (
            <ScrollReveal className="col-span-1 flex flex-col items-center justify-center gap-1">
              <span
                ref={countUpRef}
                className="block text-4xl font-bold text-primary sm:text-6xl lg:text-8xl"
              />
              <span className="block text-center font-medium uppercase tracking-wider">
                milionů v poradenském mandátu
              </span>
            </ScrollReveal>
          )}
        </CountUp>
      </Wrapper>

      {/* About us */}
      <Wrapper paddedContent="base">
        <div className="flex flex-col items-center justify-center">
          <Kicker className="text-center text-primary">O nás</Kicker>
          <Heading level={2} size="lg" className="mt-5" align="center">
            POZNEJTE TÝM FIN2U
          </Heading>
        </div>
        <ScrollReveal
          staggerChildren
          className="grid grid-cols-1 items-center gap-10 pt-10 md:grid-cols-2 md:pt-20"
        >
          <Image
            src={"/images/cely-tym.jpg"}
            alt="Spokojený klient"
            width={500}
            height={400}
            loading="lazy"
            objectFit="cover"
            className="col-span-1"
          />
          <div className="col-span-1 flex flex-col gap-7">
            <p>
              Proč Fin2u? Je to jednoduché, finance pro tebe, osobně – online,
              transparentně. Díky kvalitnímu vzdělání vycházející z metodiky
              EFPA a dlouholetých zkušeností jsme splustili exluzní projekt.
            </p>
            <p>
              Fin2U představuje moderní pohled na zkostnatělý finanční trh v
              České republice. Využití technologií nám umožňuje rychlejší
              propojení s kliety, díky tomu máte vždy jasné a přesné informace.
            </p>
            <p>Propojujeme know-how zkušených odborníků s technologiemi.</p>
            <Heading level={3} size={"sm"}>
              Jsme o krok napřed. Jsme nezávislí. Jsme online.
            </Heading>
          </div>
        </ScrollReveal>
      </Wrapper>

      {/* CTA */}
      <Wrapper size="lg" paddedContent="base">
        <ScrollReveal>
          <LargeCTA
            title="Zaujala Vás naše prezentace?"
            text="Kliknutím na následující odkazy se můžete přesunout dál"
          >
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
              <Link href="/kontakt" passHref>
                <Button color="light" className="w-full">
                  Sjednat schůžku
                </Button>
              </Link>
              <Link href="/kariera" passHref>
                <Button color="light" variant="tinted" className="w-full">
                  Kariéra
                </Button>
              </Link>
            </div>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default Home;
