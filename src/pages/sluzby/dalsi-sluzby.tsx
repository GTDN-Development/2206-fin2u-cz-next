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
import Image from "next/image";
import Link from "next/link";
import { HiMail, HiPhone } from "react-icons/hi";

const testimonials = [
  {
    id: 3,
    photoSrc: "/images/reference/dominika.jpg",
    name: "Dominika",
    position: "osobní finance",
    text: "Na Daniela jsem dostala doporučení od své mamky. Daniel se na první schůzce představil – měl k tomu super prezentaci. Na druhé schhůzce proběhla důkladná analýza, kde jsem si vytyčila jasné cíle a priority. Na další schůzce mi Daniel navrhl takové doporučení, které naprosto odpovídalo mé představě. Zajistil odkládání na budoucí hypotéku a optimalizoval veškeré mé produkty. Na servisní schůzce přinesl manželovy koňak, o kterém se s ním bavil 10 měsíců zpět. Daniela jsem doporučila svým přátelům i rodině.",
    class: "flex ",
  },
  {
    id: 1,
    photoSrc: "/images/reference/long-dinh.jpg",
    name: "Long Dinh",
    position: "Komplexní finanční mapa",
    text: "Za mě super člověk se kterým se velice dobře mluví a velice rád Vám pomůže s vysvětlením ohledně financí nebo investování a pojištění.",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/reference/dasa.jpg",
    name: "Dáša",
    position: "osobní finance",
    text: "S Danielem jsem se sešla na základě doporučení od mé kamarádky. Narozdíl od předešlé zkušenosti s finančním poradcem mě mile překvapilo, že Daniel mi nenabízel žádné produkty, ale na základě finanční analýzy se vžil do mé situace a nabídl mi řešení na míru. S Danielem jsem si jasně uvědomila své životní cíle a dala jim jasné parametry. Jsem vděčná za tuto spolupráci.",
    class: "flex sm:translate-y-10",
  },
];

const ZajisteniRizik: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="dark">
      <Seo
        title="Komplesní služby"
        description="Vzděláváme naše klienty, přednášíme a školíme. Naše služby jsou komplexní, avšak nejčastěji s našimi klienty řešíme oblasti rizik
        příjmů a majetku, daňové poradenství včetně firemních a zaměstnaneckých výhod."
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
            Vzděláváme naše klienty, přednášíme a školíme. Naše služby jsou
            komplexní, avšak nejčastěji s našimi klienty řešíme oblasti rizik
            příjmů a majetku, daňové poradenství včetně firemních a
            zaměstnaneckých výhod.
          </p>
          <div className="mt-8 flex flex-col gap-5 pb-28 sm:flex-row">
            <Button as="a" href="#vice">
              Více informací
            </Button>
            <Link href="/kontakt" passHref>
              <Button as="a" color="light">
                Sjednat schůzku
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Hero>

      {/* Content */}
      <Wrapper id="vice" size="sm" paddedContent="base">
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
            Vám vysvětlíme, jak svět financí funguje. Představíme Vám ověřenou
            studii, jak být 3krát více bohatší díky finančnímu plánu.
          </p>
        </ScrollReveal>
      </Wrapper>

      {/* CTA 1 */}
      <Wrapper size="lg" paddedContent="base">
        <ScrollReveal>
          <LargeImageCTA
            imageSrc="/images/meeting.jpg"
            title="Spojte se s naším finančním specialistou"
            text="Získejte možnost individuální konzultace."
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
      <Wrapper size="lg" paddedContent="base">
        <ScrollReveal>
          <LargeCTA
            title="Máte otázky ohledně komplexních služeb? Domluvte si nezávaznou konzultaci."
            text="Domluvte si setkání s naším specialistou, kde společně probereme vaše dotazy. Působíme po celé České republice. Můžeme to řešit osobně, po telefonu či online, nebo napište přes kontaktní formulář."
          >
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
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
            </div>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default ZajisteniRizik;
