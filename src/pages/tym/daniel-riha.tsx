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
    photoSrc: "/images/reference/dasa.jpg",
    name: "Dáša",
    position: "osobní finance",
    text: "S Danielem jsem se sešla na základě doporučení od mé kamarádky. Narozdíl od předešlé zkušenosti s finančním poradcem mě mile překvapilo, že Daniel mi nenabízel žádné produkty, ale na základě finanční analýzy se vžil do mé situace a nabídl mi řešení na míru. S Danielem jsem si jasně uvědomila své životní cíle a dala jim jasné parametry. Jsem vděčná za tuto spolupráci.",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/reference/dominika.jpg",
    name: "Dominika",
    position: "osobní finance",
    text: "Na Daniela jsem dostala doporučení od své mamky. Daniel se na první schůzce představil - měl k tomu super prezentaci. Na druhé schůzce proběhla důkladná analýza, kde jsem si vytyčila jasné cíle a priority. Na další schůzce mi Daniel navrhl takové doporučení, které naprosto odpovídalo mé představě. Zajistil odkládání na budoucí hypotéku a optimalizoval veškeré mé produkty. Na servisní schůzce přinesl manželovy koňak, o kterém se s ním bavil 10 měsíců zpět. Daniela jsem doporučila svým přátelům i rodině.",
    class: "flex sm:translate-y-10",
  },
  {
    id: 3,
    photoSrc: "/images/reference/filip.jpg",
    name: "Filip",
    position: "osobní finance",
    text: "Daniela jsem oslovil díky doslechu od svého bratra. Potřeboval jsem se svými úsporami překonat inflaci. Daniel mi však vysvětlil, že je třeba kompletní analýza, aby mi mohl dát řešení přímo na míru. Při auditu aktuálních produktů mi doporučil jejich optimalizaci a navíc porážíme inflaci. Jsem naprosto spokojený a spolupráce si vážím.",
    class: "flex",
  },
];

const DanielRiha: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="light">
      <Seo title="Daniel Říha" description="Investiční poradce, Analytik" />

      {/* Služby */}
      <Wrapper paddedContent="lg">
        {/* Úvod */}
        <SectionHeader
          gradient="left"
          kicker="Investiční poradce, Analytik"
          heading="Daniel Říha"
          caption="Ve financích se pohybuji již 3 rokem. Je to moje práce, ale zároveň koníček. Investování s přidanou hodnotou a zdravým selským rozumem. S klienty řeším dlouhodobé i krátkodobé cíle. Největší zadostiučinění je vidět spokojeného klienta, který dosáhl svých cílů díky plánu, který jsme spolu vytvořili."
        />

        {/* Popis + fotka */}
        <ScrollReveal
          staggerChildren
          staggerChildrenIncrement="200"
          className="grid grid-cols-1 items-center gap-10 pt-10 md:grid-cols-2 md:pt-20"
        >
          <Image
            src={"/images/poradci/daniel-riha.jpg"}
            alt="Daniel Říha"
            width={500}
            height={400}
            loading="lazy"
            objectFit="cover"
            className="col-span-1"
          />
          <div className="col-span-1 flex flex-col gap-7">
            <p>
              S klienty se zaměřuji především na investice. Nebo-li dlouhodobé
              budování a ochrana majetku. Samozřejmě jsou s tím spjaté další
              činnosti jako je zajištění nemovitosti, vyřízení úvěrů. Ke
              klientům vždy přistupuji s maximální precizností. Základem
              spokojeného klienta je každoročně obnovovaný plán, který je pro
              klienta vždy na míru. Často spolupracuji s firmami, kde má moje
              práce obrovský dosah. Práce s lidmi si nesmírně vážím a naplňuje
              mě.
            </p>
            <div className="flex gap-4">
              <Badge size="lg" hasDot={true}>
                Investice
              </Badge>
              <Badge size="lg" hasDot={true}>
                Zahraniční klientela
              </Badge>
              <Badge size="lg" hasDot={true}>
                Osobní finance
              </Badge>
            </div>
          </div>
        </ScrollReveal>

        {/* Q&A */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 pt-20 md:grid-cols-2 md:gap-y-32 md:pt-32 lg:gap-x-16">
          <Question
            number="1"
            question="Jakým způsobem zhodnocuju volné finanční prostředky?"
            answer="Klienti se na mně nejčastěji obrací s žádostí na správné zhodnocování volných finančních prostředků. Mým cílem je vybrat strategii na míru klienta, snížit riziko, ale zároveň zvýšit výnos. To je možné při správné diverzifikaci ať měnové, tak produktové."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Proč plánovat?"
            answer="Klientům zajišťuji každý rok nový plán, aby mohli dosáhnout jak svých krátkodobých, tak především svých dlouhodobých cílů, které vyžadují více prostředků. V plánování vidí klienti největší přidanou hodnotu. Vše vidí podrobně rozepsané a ví, co pro své cíle udělat, aby jich dosáhli."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Je zajištění důležité?"
            answer="Zajišťuji klienty před nenadálými událostmi. Může se jednat o zajištění nemovitostí, odpovědnosti, ale také úrazů. Zde dokáži klientům ušetřit nemalé prostředky, které mohou využít jinde."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Spolupracujete i s právnickými osobami?"
            answer="Ano mezi mé klienty patří i právnické osoby. Vlastníci výrobních hal, činžovních domů, ale i firem, kde zajišťuji benefity pro zaměstnance."
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
                href={contacts.danielRiha.emailLink}
                variant="tinted"
                color="light"
                size="sm"
                leftIcon={<HiMail />}
              >
                {contacts.danielRiha.emailLabel}
              </Button>
              <Button
                as="a"
                href={contacts.danielRiha.phoneLink}
                variant="tinted"
                color="light"
                size="sm"
                leftIcon={<HiPhone />}
              >
                {contacts.danielRiha.phoneLabel}
              </Button>
            </div>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default DanielRiha;
