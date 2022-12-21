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
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { HiMail, HiPhone } from "react-icons/hi";

const testimonials = [
  {
    id: 1,
    photoSrc: "/images/reference/filip-zimanzl.jpg",
    name: "Filip Zimanzl",
    position: "Investiční plán",
    text: "David je nejen skvělý investiční poradce, ale také skvělý člověk, co vždy rád pomůže a vyhoví vašim potřebám! Pokud potřebujete ve světě financí poradit, David je člověk číslo jedna na koho se obrátit!",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/reference/david-hrach.jpg",
    name: "David Hrách",
    position: "Vlastní bydlení a komplexní finanční plán",
    text: "z Davidem jsme řešili hypotéku bez prokazování příjmu. Měli jsme pár schůzek, ve kterých mi mimo jiné řekl co krok za krokem udělat, aby mi ji banka dala. Asi cca po 4 měsících mi schválili přesně tolik, kolik bylo třeba. Za to jsem mu vděčný. Řešili jsme nějaké spoření na které stát přispívá a i ukládání peněz, aby neztratili svou hodnotu. Schůzky jsou vždy velmi příjemné a domluvené tak, aby čas vyhovoval vždy mně. Celkově jsem velmi spokojený klient.",
    class: "flex sm:translate-y-10",
  },
  {
    id: 3,
    photoSrc: "/images/reference/long-dinh.jpg",
    name: "Long Dinh",
    position: "Komplexní finanční mapa",
    text: "Za mě super člověk se kterým se velice dobře mluví a velice rád Vám pomůže s vysvětlením ohledně financí nebo investování a pojištění.",
    class: "flex",
  },
];

const DavidSimana: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="light">
      <Seo title="David Šimana" description="CEO, Hypoteční specialista" />

      {/* Služby */}
      <Wrapper paddedContent="lg">
        {/* Úvod */}
        <SectionHeader
          gradient="left"
          kicker="CEO, Hypoteční specialista"
          heading="David Šimana"
          caption={
            "Krásný dobrý den přátelé, jmenuji se David Šimana a jsem zakladatelem projektu Fin2u. Aktivně vedu obchodní team a podílím se na řízení celého projektu. S klienty se setkáváme při řešení komplexních plánů."
          }
        />

        {/* Popis + fotka */}
        <ScrollReveal
          staggerChildren
          staggerChildrenIncrement="200"
          className="grid grid-cols-1 items-center gap-10 pt-10 md:grid-cols-2 md:pt-20"
        >
          <ExportedImage
            src={"/images/poradci/david-simana.jpg"}
            alt="Profilovka"
            width={500}
            height={400}
            loading="lazy"
            objectFit="cover"
            className="col-span-1"
          />
          <div className="col-span-1 flex flex-col gap-7">
            <p>Proč právě Fin2u? Je to jednoduché, finance pro Vás.</p>
            <p>
              Projekt vznikl díky kvalitnímu zázemí na finančním trhu s
              připojením zkušeností z oblasti online světa ve spolupráci s Duc
              Trung Nguyen, EFA.
            </p>
            <p>
              Aktivně spolupracujeme s podnikateli a zaměstnanci ve středním
              managementu. Staráme se o jejich majetek komplexně v duchu
              strategie wealth-protection, často businessově propojuji své
              klienty a hledám nové příležitosti. Pomáhám s vymyšlením logiky
              často složitých případů. Řešíme často alternativní příjmy pro
              podnikatele. Efektivní využití obratu firmy (podíl na zisku,
              budoucí příjmy, a pod…) Ohýbáme metodiky bank pro prospěch našich
              klientů.
            </p>
            <p>
              Začínáte přemýšlet nad rentou, prodáváte firmu nebo jste zdědili
              majetek v řádech milionů korun a chcete jej chránit? Používáme
              osvědčenou strategii, při které pomalu a postupně nakupujeme
              podíly ve stovkách reálných firem, které prosperují desítky let.
            </p>
            <p>
              Klienti často přicházejí s potřebou řešit své strategické finanční
              cíle, avšak nemají rozumného konzultanta pro jejich řešení.
            </p>
            <div className="flex gap-4">
              <Badge size="lg" hasDot={true}>
                Hypotéky
              </Badge>
              <Badge size="lg" hasDot={true}>
                Firemní klientela
              </Badge>
              <Badge size="lg" hasDot={true}>
                Investice
              </Badge>
            </div>
          </div>
        </ScrollReveal>

        {/* Q&A */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 pt-20 md:grid-cols-2 md:gap-y-32 md:pt-32 lg:gap-x-16">
          <Question
            number="1"
            question="Rodinné a osobní finance."
            answer="Získejte finanční plán pro splnění strategických cílů, jako je bydlení, rozjezd podnikání, či prostředky na studia dětí, dědictví a prodej firmy. Sestavím srozumitelný plán na míru, který vychází z metodiky EFPA a pomáhá lidem na cestě k finanční svobodě. Co kdyby vás živili Vaše peníze, až to nebudete chtít dělat sami?"
            className="col-span-1"
          />
          <Question
            number="2"
            question="Firemní a business plánování"
            answer="Stojím na straně firem a podnikatelů. Pomáhám s financováním strategických cílů. Nechte vymýšlení logistiky celého procesu na mně. Ve spolupráci s daňovým architektem zajistíme konkurenční výhodu pro Vaši firmu, včetně start-up projektů, zaměstnanecké a daňové výhody."
            className="col-span-1"
          />
          <Question
            number="3"
            question="Investiční poradenství"
            answer="Mým cílem je vybudovat portfolio, které vám doživotně bude generovat nekonečnou rentu. Držíme se toho, co funguje desítky let. Využijte strategii kde pomalu a postupně nakupujete podíly ve stovkách reálných firem, které prosperují desítky let. Ptal se Vás Váš bankéř na to, zda chcete být finančně nezávislý?"
            className="col-span-1"
          />
          <ScrollReveal className={`col-span-1 flex flex-col gap-2`}>
            <div className="flex w-full items-center justify-start gap-3 pb-2">
              <span className="sr-only block shrink-0 grow-0 text-xl font-semibold text-primary md:text-2xl">
                Q4
              </span>
              <span className="block text-lg font-semibold leading-tight text-rich md:text-xl">
                Vytvářím růstové prostředí
              </span>
            </div>
            <div className="rounded-lg bg-gray-100 p-4">
              <p>
                Nejsem jen podnikatel, investor a manažer. Vytvářím růstové
                prostředí. Chci své okolí vést, motivovat a budovat. Rozvíjím a
                hledám nové talenty. Ať už začínáte, nebo jste člověk z branže,
                vyplňte{" "}
                <Link href={"/kariera"} passHref>
                  <a className="c-link-3-a text-primary">dotazník ZDE</a>
                </Link>{" "}
                a my se Vám ozveme s nabídkou odpovídající Vašim aktuálním
                zkušenostem.
              </p>
            </div>
          </ScrollReveal>
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
                href={contacts.davidSimana.emailLink}
                variant="tinted"
                color="light"
                size="sm"
                leftIcon={<HiMail />}
              >
                {contacts.davidSimana.emailLabel}
              </Button>
              <Button
                as="a"
                href={contacts.davidSimana.phoneLink}
                variant="tinted"
                color="light"
                size="sm"
                leftIcon={<HiPhone />}
              >
                {contacts.davidSimana.phoneLabel}
              </Button>
            </div>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default DavidSimana;
