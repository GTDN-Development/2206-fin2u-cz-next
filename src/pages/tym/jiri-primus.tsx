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
    photoSrc: "/images/reference/lukas-froster.jpeg",
    name: "Lukáš Forster ",
    position: "Finanční plánování ",
    text: "Pan Primus, je profík na svém místě pomohl mi s úvěrem pro podnikatele a  navíc mi výhodněji a levněji pojistil služební auta. Doporučuji ",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/reference/jiri-sali.png",
    name: "Jiří Sali",
    position: "Finanční plánování ",
    text: "S panem Primusem jsme řešili komplikované refinancování hypotéky, což bohužel nebylo v silách mého původního poradce. Pan Primus našel řešení, jak hypotéku nastavit podle mých představ. Společně jsme také optimalizovali pojištění nemovitosti a vozidla. Má přátelský a osobní přístup. Mohu ho doporučit.",
    class: "flex sm:translate-y-10",
  },
  {
    id: 3,
    photoSrc: "/images/reference/iva-martanova.jpg",
    name: "Iva Martanova ",
    position: "Finanční plánování",
    text: "Jiří Primus mi skvěle pomohl s investicemi, životním pojištěním, pojištěním aut a optimalizací důchodového připojištění pro vyšší výnosy. Oceňuji jeho profesionální přístup, jasné vysvětlení a hledání nejlepších řešení. Mohu ho jedině doporučit!",
    class: "flex ",
  },
];

const ZdenekZajicek: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="light">
      <Seo title="Zdeněk Zajíček" description="Manažer, úvěrový specialisa" />

      {/* Služby */}
      <Wrapper paddedContent="lg">
        {/* Úvod */}
        <SectionHeader
          gradient="left"
          kicker="investiční specialista"
          heading="jiří Primus"
          caption={
            "Jsem Jiří Primus a pomáhám lidem chytře spravovat finance. Ve světě financí se pohybuji již dva roky a mým cílem je pomoci vám dosáhnout finanční stability a růstu. Ať už řešíte investice, budování rezerv nebo efektivní finanční"
          }
        />

        {/* Popis + fotka */}
        <ScrollReveal
          staggerChildren
          staggerChildrenIncrement="200"
          className="grid grid-cols-1 items-center gap-10 pt-10 md:grid-cols-2 md:pt-20"
        >
          <Image
            src={"/images/poradci/jiri-primus.jpg"}
            alt="Profilovka"
            width={500}
            height={400}
            loading="lazy"
            objectFit="cover"
            className="col-span-1"
          />
          <div className="col-span-1 flex flex-col gap-7">
            <p>
              Ve světě financí se vyznám a vím, jak zajistit, aby vaše peníze
              pracovaly pro vás. Spolupracuji s jednotlivci, podnikateli i
              manažery, kteří hledají efektivní řešení pro správu majetku,
              plánování budoucnosti a ochranu finančních zdrojů. Každý klient má
              jiné cíle – někdo chce zajistit svou rodinu, jiný buduje firmu
              nebo přemýšlí o rentě. Pomohu vám sestavit strategii na míru, ať
              už jde o financování bydlení, investice nebo optimalizaci příjmů.
            </p>
            <p>
              Využívám osvědčené metody a moderní finanční nástroje, abyste měli
              jistotu správných rozhodnutí. Přemýšlíte, jak nejlépe spravovat
              své finance? Pojďme se pobavit o možnostech, které vám přinesou
              stabilitu, růst a klidnější budoucnost.
            </p>
            <div className="flex gap-4">
              <Badge size="lg" hasDot={true}>
                Expertní znalosti
              </Badge>
              <Badge size="lg" hasDot={true}>
                Individuální strategie
              </Badge>
            </div>
          </div>
        </ScrollReveal>

        {/* Q&A */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 pt-20 md:grid-cols-2 md:gap-y-32 md:pt-32 lg:gap-x-16">
          <Question
            number="1"
            question="Jak nastavit finanční plán podle vašich potřeb?"
            answer="Pomohu vám nastavit finanční strategii, která odpovídá vašim cílům a životní situaci. Ať už řešíte financování bydlení, zajištění rodiny, budoucnost vašich dětí nebo plánujete bezstarostný důchod, společně najdeme to nejlepší řešení, které vám přinese stabilitu a klid do budoucna."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Firemní & business plánování "
            answer="Pomáhám podnikatelům s financováním jejich strategických cílů a s optimalizací  finančních toků. Spolu s odborníky hledáme šitá řešení pro firmy všech velikostí. "
            className="col-span-1"
          />
          <Question
            number="1"
            question="Investiční poradenství  "
            answer="Hledáte způsob, jak efektivně investovat a zajistit si finanční nezávislost? Pomohu vám sestavit stabilní investiční portfolio s dlouhodobým výnosem.  "
            className="col-span-1"
          />
          <Question
            number="1"
            question="Podporuji růst a rozvoj talentů"
            answer="Věřím, že úspěch nevzniká náhodou – je výsledkem správných rozhodnutí, vedení a neustálého  rozvoje. Pomáhám lidem objevit jejich potenciál, najít nové příležitosti a růst jak profesně, tak  finančně. 
Ať už začínáte svou cestu, nebo už v oboru působíte, rád s vámi proberu možnosti spolupráce.  Vyplňte krátký dotazník ZDE a společně najdeme cestu, která odpovídá vašim zkušenostem i  cílům. "
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
