import Badge from "@components/Badge";
import Button from "@components/Button";
import LargeCTA from "@components/LargeCTA";
import ScrollReveal from "@components/ScrollReveal";
import SectionHeader from "@components/SectionHeader";
import Seo from "@components/Seo";
import Question from "@components/tym/Question";
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
    photoSrc: "/images/testimonial.jpg",
    name: "Jan C.",
    position: "majetek",
    text: "Milan vyniká pozitivním přístupem, jasným vysvětlováním složitých pojmů a schopností vtáhnout do debaty. Díky tomu se cítíte pohodlně a máte jistotu, že vše pochopíte. Je skvělý v navazování kontaktu a vytváření příjemné atmosféry, což podporuje otevřenou komunikaci. Profesionální a přátelský přístup dává pocit, že máte skutečného partnera na své straně. Jsem opravdu rád, že jsem začal s Milanem spolupracovat a tvořit svůj majetek do budoucna.",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/testimonial.jpg",
    name: " Michal P.",
    position: "finance",
    text: "S Milanem Sinkulem jsem měl tu čest spolupracovat na plánování své finanční nezávislosti a revizi stávajících pojistných produktů. Jeho přístup byl naprosto profesionální a přátelský, vše mi jasně vysvětlil a pomohl mi pochopit, jaké kroky je potřeba udělat, abych dosáhl svých finančních cílů. Milan se nejen zaměřil na zlepšení mých pojistných produktů, ale také mi pomohl nastavit dlouhodobý plán, který mě posune blíže k finanční stabilitě. Jsem mu vděčný za jeho odborné poradenství a přístup, díky kterému mám nyní větší jistotu v oblasti svých financí.",
    class: "flex sm:translate-y-10",
  },
  {
    id: 3,
    photoSrc: "/images/testimonial.jpg",
    name: "Ivana S. ",
    position: "pojištění",
    text: "S Milanem Sinkulem jsem spolupracovala na zajištění životní a úrazové pojistky pro svého nezletilého syna. Milan mi vše trpělivě vysvětlil, odpověděl na všechny moje dotazy a pomohl mi vybrat to nejlepší pojištění, které odpovídá našim potřebám. Jeho přístup byl nejen odborný, ale i velmi empatický, což mi dalo pocit, že se opravdu stará o blaho mého dítěte. Díky jeho pomoci mám teď větší klid a jistotu, že je syn finančně chráněný. Jsem mu velmi vděčná za jeho pomoc a doporučuji jeho služby každému, kdo hledá spolehlivého a profesionálního poradce.",
    class: "flex ",
  },
];

const ZdenekZajicek: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="light">
      <Seo title="Milan Sinkule " description="Manažer, úvěrový specialisa" />

      {/* Služby */}
      <Wrapper paddedContent="lg">
        {/* Úvod */}
        <SectionHeader
          gradient="left"
          kicker="finanční poradce. "
          heading="Milan Sinkule"
          caption={
            "Rád se probouzím do dalšího dne s vědomím, že to, co dělám dává mě i lidem, kteří mi důvěřují smysl a že pro ně mohu udělat maximum. Proto si zakládám na co nejprofesionálnějším přístupu a zároveň na co nejpevnějších mezilidských vztazích. Vzájemná důvěra je pro mě naprostý základ."
          }
        />

        {/* Popis + fotka */}
        <ScrollReveal
          staggerChildren
          staggerChildrenIncrement="200"
          className="grid grid-cols-1 items-center gap-10 pt-10 md:grid-cols-2 md:pt-20"
        >
          <Image
            src={"/images/poradci/milan-sinkule.jpg"}
            alt="Profilovka"
            width={500}
            height={400}
            loading="lazy"
            objectFit="cover"
            className="col-span-1"
          />
          <div className="col-span-1 flex flex-col gap-7">
            <p>
              Dobrý den, jmenuji se Milan Sinkule a jsem finanční poradce. Práce
              a interakce s lidmi mě vždy naplňovaly. V současnosti se
              specializuji na správu a plánování finančních záležitostí pro své
              klienty. Tento obor není pouze mou profesí, ale i vášní, která mě
              stále motivuje.
            </p>
            <p>
              Rád vám pomohu s širokou škálou finančních, investičních a
              pojistných produktů, které jsou dostupné na trhu. Mým cílem je
              naslouchat vašim potřebám a zároveň do spolupráce přinášet své
              odborné znalosti a zkušenosti. Společně najdeme nejvhodnější
              řešení pro vaši finanční situaci.
            </p>
            <p>
              Mojí cílovou skupinou jsou jak jednotlivci, tak podnikatelé a
              firmy – mé služby jsou dostupné pro každého, kdo je potřebuje.
              Jsem vděčný, že mohu přistupovat ke své práci osobně, s opravdovým
              zaujetím a nejsem pouze dalším poskytovatelem služeb. Věřte mi, že
              i v tomto oboru jsou značné rozdíly, a pro mě je nejdůležitější,
              abyste byli s mými službami skutečně spokojeni.
            </p>
            <div className="flex gap-4">
              <Badge size="lg" hasDot={true}>
                Osobní přístup
              </Badge>
              <Badge size="lg" hasDot={true}>
                Profesionální zkušenosti
              </Badge>
            </div>
          </div>
        </ScrollReveal>

        {/* Q&A */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 pt-20 md:grid-cols-2 md:gap-y-32 md:pt-32 lg:gap-x-16">
          <Question
            number="1"
            question="S čím mi můžete jako finanční poradce pomoci?"
            answer="Pomohu vám se správou a plánováním vašich financí, ať už jde o investice, pojištění nebo jiné finanční produkty. Společně najdeme nejlepší řešení, které bude odpovídat vašim potřebám a zajistí vaši finanční stabilitu."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Pro koho jsou vaše služby určeny?"
            answer="Mé služby jsou dostupné jak pro jednotlivce, tak pro podnikatele a firmy. Každý, kdo chce zlepšit svou finanční situaci, najít optimální řešení nebo se poradit o možnostech na trhu, se na mě může obrátit."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Co vás odlišuje od ostatních finančních poradců?"
            answer="Ke každému klientovi přistupuji osobně a s opravdovým zaujetím. Nejde mi jen o poskytnutí služby, ale o dlouhodobou spolupráci založenou na důvěře a spokojenosti. Věřím, že právě individuální přístup a odborné znalosti dělají v tomto oboru velký rozdíl."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Proč je důležité mít finanční plán?"
            answer="Finanční plán vám pomůže efektivně spravovat vaše finance, nastavit si jasné cíle a najít nejvhodnější strategie k jejich dosažení. Díky správnému plánování můžete lépe chránit svůj majetek, zajistit si stabilní budoucnost a vyhnout se finančním problémům."
            className="col-span-1"
          />
        </div>
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

      {/* CTA */}
      <Wrapper size="lg" paddedContent="base">
        <ScrollReveal>
          <LargeCTA
            title="ZAUJALA TĚ NAŠE PREZENTACE?"
            text="Fin2u je finanční portál a online konzultant, který Vám pomůže na cestě k Vašim strategickým
             cílům. Pokračuj dále přes výběr."
          >
            <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
              <Link href="/kontakt" passHref>
                <Button as="a" color="light" size="sm">
                  Sjednat schůzku
                </Button>
              </Link>
              <Button
                as="a"
                href={contacts.zdenekZajicek.emailLink}
                variant="tinted"
                color="light"
                size="sm"
                leftIcon={<HiMail />}
              >
                {contacts.zdenekZajicek.emailLabel}
              </Button>
              <Button
                as="a"
                href={contacts.zdenekZajicek.phoneLink}
                variant="tinted"
                color="light"
                size="sm"
                leftIcon={<HiPhone />}
              >
                {contacts.zdenekZajicek.phoneLabel}
              </Button>
            </div>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default ZdenekZajicek;
