import Button from "@components/Button";
import CollabLogos from "@components/CollabLogos";
import Heading from "@components/Heading";
import Hero from "@components/Hero";
import Services from "@components/home/Services";
import Team from "@components/home/Team";
import Testimonials from "@components/home/Testimonials";
import Kicker from "@components/Kicker";
import LargeCTA from "@components/LargeCTA";
import ScrollReveal from "@components/ScrollReveal";
import SectionHeader from "@components/SectionHeader";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import AppLayout from "@layouts/AppLayout";
import type { NextPage } from "next";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import CountUp from "react-countup";
import { HiArrowDown } from "react-icons/hi";

// To Do
// Integrace typeform -> Hotovo
// Socky FB, IG, LinkedIN - X -> Doplnit finální odkazy
// Kontakt - zprovoznit kontaktní formulář
// Textace Daniel Říha - X - Chybí otázky
// Textace David Šimana
// Textace Čung
// Textace Václav Kraut
// Textace Jan Voves
// Textace Zdeněk Zajíček
// Textace Služby Hypotéky a refinancování - kalkulačka
// Textace Služby Firemní a podnikatelské financování - kalkulačka
// Textace Služby Finanční nezávislost - kalkulačka
// Textace Služby Zajištění rizik - bez kalkulačky

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
            Ptal se vás Váš bankéř, na to kdy chcete být finančně nezávislý?
          </Heading>
          <p className="max-w-prose text-center text-lg text-white">
            Řešíte rozvoj rozvoj firmy, financování bydlení, či ochranu majetku?
            na cestě k finanční svobodě, jsme tu pro Vás!
          </p>
          <div className="mt-8 flex gap-5">
            <Button as="a" href="#sluzby" rightIcon={<HiArrowDown />}>
              Co umíme
            </Button>
            <Link href="/kariera">
              <Button as="a" color="light">
                Pracovní příležitost
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay="600" className="my-48">
          <ExportedImage
            src="/images/cely-tym.jpg"
            alt="Náš tým"
            width={1920}
            height={1080}
            loading="eager"
            objectFit="cover"
            className="aspect-video w-full bg-slate-500"
          />
        </ScrollReveal>

        <CollabLogos />
      </Hero>

      {/* Služby */}
      <Wrapper as="section" id="sluzby" paddedContent="base">
        <SectionHeader
          gradient="top"
          kicker="Nabízené služby"
          heading="Správné plánování je klíčem k Vaším cílům?"
          caption={"Vyberte oblast produtku, který Vás právě zajímá"}
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
        heading="Naši klienti o nás napsali"
        className="mt-24 xl:mt-32"
      />
      <div className="relative z-0 w-screen">
        <Wrapper className="pb-20 sm:pb-28">
          <Testimonials />
        </Wrapper>
        <div className="absolute bottom-0 left-0 -z-10">
          <ExportedImage
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
        className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4"
      >
        <CountUp
          start={0}
          end={167}
          delay={0}
          duration={4}
          useEasing
          enableScrollSpy
          scrollSpyOnce
          scrollSpyDelay={200}
        >
          {({ countUpRef }) => (
            <ScrollReveal className="col-span-1 flex flex-col items-center justify-center gap-1">
              <span
                ref={countUpRef}
                className="block text-4xl font-bold text-primary sm:text-6xl lg:text-8xl"
              />
              <span className="block font-medium uppercase tracking-wider">
                Lorem ipsum
              </span>
            </ScrollReveal>
          )}
        </CountUp>
        <CountUp
          start={0}
          end={24}
          delay={0}
          duration={4}
          useEasing
          enableScrollSpy
          scrollSpyOnce
          scrollSpyDelay={200}
        >
          {({ countUpRef }) => (
            <ScrollReveal className="col-span-1 flex flex-col items-center justify-center gap-1">
              <span
                ref={countUpRef}
                className="block text-4xl font-bold text-primary sm:text-6xl lg:text-8xl"
              />
              <span className="block font-medium uppercase tracking-wider">
                Lorem ipsum
              </span>
            </ScrollReveal>
          )}
        </CountUp>
        <CountUp
          start={0}
          end={76}
          delay={0}
          duration={4}
          useEasing
          enableScrollSpy
          scrollSpyOnce
          scrollSpyDelay={200}
        >
          {({ countUpRef }) => (
            <ScrollReveal className="col-span-1 flex flex-col items-center justify-center gap-1">
              <span
                ref={countUpRef}
                className="block text-4xl font-bold text-primary sm:text-6xl lg:text-8xl"
              />
              <span className="block font-medium uppercase tracking-wider">
                Lorem ipsum
              </span>
            </ScrollReveal>
          )}
        </CountUp>
        <CountUp
          start={0}
          end={194}
          delay={0}
          duration={4}
          useEasing
          enableScrollSpy
          scrollSpyOnce
          scrollSpyDelay={200}
        >
          {({ countUpRef }) => (
            <ScrollReveal className="col-span-1 flex flex-col items-center justify-center gap-1">
              <span
                ref={countUpRef}
                className="block text-4xl font-bold text-primary sm:text-6xl lg:text-8xl"
              />
              <span className="block font-medium uppercase tracking-wider">
                Lorem ipsum
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
            poznejte tým fin2u
          </Heading>
        </div>
        <ScrollReveal
          staggerChildren
          className="grid grid-cols-1 items-center gap-10 pt-10 md:grid-cols-2 md:pt-20"
        >
          <ExportedImage
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
              Fin2U představuje moderní pohled nad zkostňatělý finanční trh v
              České republice. Využítí technologií nám umožnuje rychlejší
              propojení s klietny, máte vždy jasné a přesné informace.
            </p>
          </div>
        </ScrollReveal>
      </Wrapper>

      {/* CTA */}
      <Wrapper size="lg" paddedContent="base">
        <ScrollReveal>
          <LargeCTA>
            <Button color="light">Call to action</Button>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default Home;
