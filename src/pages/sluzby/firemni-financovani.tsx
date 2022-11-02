import Button from "@components/Button";
import CollabLogos from "@components/CollabLogos";
import Heading from "@components/Heading";
import Hero from "@components/Hero";
import LargeCTA from "@components/LargeCTA";
import LargeImageCTA from "@components/LargeImageCTA";
import ScrollReveal from "@components/ScrollReveal";
import SectionHeader from "@components/SectionHeader";
import Seo from "@components/Seo";
import LoansCalc from "@components/sluzby/LoansCalc";
import Wrapper from "@components/Wrapper";
import { contacts } from "@configs/contacts";
import AppLayout from "@layouts/AppLayout";
import type { NextPage } from "next";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { HiMail, HiPhone } from "react-icons/hi";

// Účel úvěru do kalkulačky:
// Klasický neúčelový úvěr.
// Účelový podnikatelský úvěr.
// Leasing.
// Provozní úvěry.
// Kontokorentní úvěr.
// Podnikatelské kreditní karty.
// Investiční úvěry.
// Úvěry se zárukou Evropského investičního fondu.

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

const FiremniFinancovani: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="dark">
      <Seo
        title="Firemní a podnikatelské financování"
        description="Pomůžeme s financováním strategických cílů. Vypracujeme atraktivní business plán a pomůžeme s průběhem celého řešení od výběru banky po následný servis včetně zaměstnaneckých a daňového poradenství."
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
            Firemní a podnikatelské financování
          </Heading>
          <p className="max-w-prose text-center text-lg text-white">
            Pomůžeme s financováním strategických cílů. Vypracujeme atraktivní
            business plán a pomůžeme s průběhem celého řešení od výběru banky po
            následný servis včetně zaměstnaneckých a daňového poradenství.
          </p>
          <div className="mt-8 flex gap-5 pb-28">
            <Button as="a" href="kalkulacka">
              Výpočet financování
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
              Case study
            </Heading>
            <p className="mt-8 text-center text-gray-200">
              Sestavíme business plán včetně podnikatelského záměru. Analýza
              firmy je důležitá. Klient bez zpracovaného projektu může být
              zamítnut a získá negativní záznam v bankovních registrech na
              právnickou i fyzickou osobu. Nechte celý proces na nás, zpracujeme
              kompletní analýzu proveditelnosti projektu.
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
              Individuální sjednání
            </Heading>
            <p className="mt-8 text-center text-gray-200">
              Pokud má váš projekt smysl a nenašli jste řešení ve vaší bance,
              jsme schopni najít cestu k financování. Řešíme i velké projekty.
              Zajistíme komunikaci s účetním klienta s cílem připravení
              dlouhodobého plánu dle investičního záměru. Dokážeme posoudit, zda
              je projekt života schopný před podpisem žádosti v bance.
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
              Střední a velké firmy
            </Heading>
            <p className="mt-8 text-center text-gray-200">
              Specializujeme se na malé a středně velké firmy včetně
              podnikatelů, kteří chtějí, aby jejich společnost rostla. Pomůžeme
              s tvorbou nemovitostního portfolio včetně privátní business
              hypotéky na rodné číslo. Máme zkušenost s developerskými projekty
              na prodej i pronájem. Řešíme jakékoliv typy financování.
              Investiční úvěry, provozní financování, leasingy, kontokorenty,
              dotace, bankovní záruky, faktoring.
            </p>
          </ScrollReveal>
        </div>

        {/* Spolupráce loga */}
        <CollabLogos />
      </Hero>

      {/* Content */}
      <Wrapper id="kalkulacka" size="sm" paddedContent="base">
        <Heading level={2} size="lg" className="mx-auto mb-16 text-center">
          Kalkulačka pro orientační výpočet financování
        </Heading>
        <LoansCalc />
      </Wrapper>

      {/* CTA 1 */}
      <Wrapper size="lg" paddedContent="base">
        <ScrollReveal>
          <LargeImageCTA
            imageSrc="/images/meeting.jpg"
            text="Využijte naše služby, kontaktujte firemního specialistu. Pojďme si společně zavolat a získejte konkurenční výhodu pro vaši firmu."
          >
            <Button
              as="a"
              href={contacts.uvery.emailLink}
              color="light"
              leftIcon={<HiMail />}
            >
              {contacts.uvery.emailLabel}
            </Button>
            <Button
              as="a"
              href={contacts.uvery.phoneLink}
              color="light"
              leftIcon={<HiPhone />}
            >
              {contacts.uvery.phoneLabel}
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
            title="Máte otázky ohledně firemního poradenství? Domluvte si nezávaznou konzultaci."
            text="Domluvte si setkání s naším specialistou, kde společně probereme vaše dotazy. Působíme po celé České republice. Můžeme to řešit osobně, po telefonu či online, nebo napište přes kontaktní formulář."
          >
            <Link href="/kontakt" passHref>
              <Button as="a" color="light" className="w-full">
                Sjednat schůzku
              </Button>
            </Link>
            <Button
              as="a"
              href={contacts.uvery.phoneLink}
              variant="tinted"
              color="light"
              leftIcon={<HiPhone />}
              className="w-full"
            >
              {contacts.uvery.phoneLabel}
            </Button>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default FiremniFinancovani;
