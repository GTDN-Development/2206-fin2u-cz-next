import Button from "@components/Button";
import CollabLogos from "@components/CollabLogos";
import Heading from "@components/Heading";
import Hero from "@components/Hero";
import LargeCTA from "@components/LargeCTA";
import LargeImageCTA from "@components/LargeImageCTA";
import ScrollReveal from "@components/ScrollReveal";
import SectionHeader from "@components/SectionHeader";
import Seo from "@components/Seo";
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

const ZajisteniRizik: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="dark">
      <Seo
        title="Komplesní služby"
        description="Vaše peníze můžou pracovat stejně jako vy. Co kdyby vás živily, až to nebudete chtít dělat sami?
"
      />

      {/* Hero */}
      <Hero>
        <ScrollReveal
          as={"div"}
          staggerChildren
          staggerChildrenIncrement="200"
          className="flex flex-col items-center gap-8"
        >
          <Heading level={1} size="xl" align="center" color="white">
            Komplexní služby
          </Heading>
          <p className="max-w-prose text-center text-lg text-white">
            Vaše peníze můžou pracovat stejně jako vy. Co kdyby vás živily, až
            to nebudete chtít dělat sami?
          </p>
          <div className="mt-8 flex gap-5 pb-28">
            <Link href="/financni-nezavislost/#kalkulacka">
              <Button as="a" href="#kalkulacka">
                Výpočet renty
              </Button>
            </Link>
            <Link href="/kontakt" passHref>
              <Button as="a" color="light">
                Sjednat schůzku
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Hero>

      {/* Content */}
      <Wrapper size="sm" paddedContent="base">
        <ScrollReveal
          animation="slide-up"
          className="mb-16 flex flex-col items-center justify-center sm:mb-28"
        >
          <Heading level={2} size="base" className="mx-auto text-center">
            <span className="mr-2 text-[1.25em] text-primary">1.</span>
            Řízení a zajištění rizik
          </Heading>
          <p className="mt-8 text-center">
            Bavíme se o rizicích komplexně. Řešíme krizový plán. Ten dává jasné
            instrukce, co má být s celou řadou věcí po Vaší smrti. Zabýváme se
            dědictvím. Diskutujeme o chodu firmy, zastupitelnosti a jejím dalším
            pokračování. Řešíme pojištění jako koncept a to, zda jej vůbec
            potřebujeme. Jdeme tedy riziko po riziku a rozebíráme, počítáme a
            hodnotíme, jak k němu přistoupit, a co zajistit pomocí pojišťoven. A
            co zvládneme řešit sami.
          </p>
        </ScrollReveal>
        <ScrollReveal
          animation="slide-up"
          className="my-16 flex flex-col items-center justify-center sm:my-28"
        >
          <Heading level={2} size="base" className="mx-auto text-center">
            <span className="mr-2 text-[1.25em] text-primary">2.</span>
            Daňové poradenství
          </Heading>
          <p className="mt-8 text-center">
            S řadou našich klientů řešíme i daňové poradenství nejen v rámci
            firmy. Spolupracujeme s daňovým poradcem, se kterým pro klienty
            připravujeme daňová přiznání či vedeme účetnictví nebo daňovou
            evidenci. Pomůžeme Vám také se založením firmy včetně notářských a
            advokátních služeb.
          </p>
        </ScrollReveal>
        <ScrollReveal
          animation="slide-up"
          className="mt-16 flex flex-col items-center justify-center sm:mt-28"
        >
          <Heading level={2} size="base" className="mx-auto text-center">
            <span className="mr-2 text-[1.25em] text-primary">3.</span>
            Vzdělání a workshopy
          </Heading>
          <p className="mt-8 text-center">
            Vzděláváme naše klienty. Mnoho lidí chce mít v penězích jasno, ale
            neví, kde začít. Pořádáme semináře na téma finanční svobody, kde si
            můžete osvěžit praktické znalosti v této oblasti. Na našem semináři
            vám vysvětlíme, jak svět financí funguje. Představíme vám ověřenou
            studii, jak být 3x bohatší díky finančnímu plánu.
          </p>
        </ScrollReveal>
      </Wrapper>

      {/* CTA 1 */}
      <Wrapper size="lg" paddedContent="base">
        <ScrollReveal>
          <LargeImageCTA
            imageSrc="/images/meeting.jpg"
            text="Spojte se s naším finančním specialistou. Získejte možnost individuální konzultace."
          >
            <Button
              as="a"
              href={contacts.rizika.emailLink}
              color="light"
              leftIcon={<HiMail />}
            >
              {contacts.rizika.emailLabel}
            </Button>
            <Button
              as="a"
              href={contacts.rizika.phoneLink}
              color="light"
              leftIcon={<HiPhone />}
            >
              {contacts.rizika.phoneLabel}
            </Button>
          </LargeImageCTA>
        </ScrollReveal>
      </Wrapper>

      {/* Spolupráce loga */}
      <Wrapper>
        <CollabLogos variant="pojisteni" headingColor="primary" />
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
            title="Máte otázky ohledně komplexních služeb? Domluvte si nezávaznou konzultaci."
            text="Domluvte si setkání s naším specialistou, kde společně probereme vaše dotazy. Působíme po celé České republice. Můžeme to řešit osobně, po telefonu či online, nebo napište přes kontaktní formulář."
          >
            <Link href="/kontakt" passHref>
              <Button as="a" color="light" className="w-full">
                Sjednat schůzku
              </Button>
            </Link>
            <Button
              as="a"
              href={contacts.rizika.phoneLink}
              variant="tinted"
              color="light"
              leftIcon={<HiPhone />}
              className="w-full"
            >
              {contacts.rizika.phoneLabel}
            </Button>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default ZajisteniRizik;
