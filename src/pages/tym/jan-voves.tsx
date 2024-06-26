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
    photoSrc: "/images/reference/veronika-kynclova.jpg",
    name: "Veronika Kynčlová",
    position: "Investice a životní pojištění",
    text: "S Honzou řeším zajištění své budoucnosti a možnosti investování. Pro klidný spánek tyto možnosti doporučuji všem.",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/reference/krystof-kraus.jpg",
    name: "Kryštof Kraus",
    position: "Investice",
    text: "Určitě moc doporučuji, Honza ví o čem mluví, každá schůzka je velmi příjemná a vše moc hezky vysvětlí",
    class: "flex sm:translate-y-10",
  },
  {
    id: 3,
    photoSrc: "/images/reference/josef-minarik.jpg",
    name: "Josef Minařík",
    position: "Kompletní finanční plán",
    text: "Výborná spolupráce, všechno pečlivě vysvětlí, zajímá se o klienty a ví o čem mluví. Nemůžu být spokojenější ",
    class: "flex ",
  },
];

const JanVoves: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="light">
      <Seo title="Jan Voves" description="Obchodní konzultant" />

      {/* Služby */}
      <Wrapper paddedContent="lg">
        {/* Úvod */}
        <SectionHeader
          gradient="right"
          kicker="Obchodní konzultant"
          heading="Jan Voves"
          caption={
            "Co kdyby Vás vaše peníze živily, až to nebudete chtít dělat Vy sami. Přemýšleli jste někdy o finanční nezávislosti?"
          }
        />

        {/* Popis + fotka */}
        <ScrollReveal
          staggerChildren
          staggerChildrenIncrement="200"
          className="grid grid-cols-1 items-center gap-10 pt-10 md:grid-cols-2 md:pt-20"
        >
          <Image
            src={"/images/poradci/jan-voves.jpg"}
            alt="Profilovka"
            width={500}
            height={400}
            loading="lazy"
            objectFit="cover"
            className="col-span-1"
          />
          <div className="col-span-1 flex flex-col gap-7">
            <p>
              Ve financích se pohybuji už pár let a mám za sebou desítky
              spokojených klientů. Práce tohoto typu mě velice baví a rád
              pomáhám lidem si plnit jejich sny. S klienty nejčastěji řeším
              investice, hypotéky a pojištění. Vždy mi udělá radost spokojený
              klient, který si plní jeho sny díky naší spolupráci.
            </p>
            <div className="flex gap-4">
              <Badge size="lg" hasDot={true}>
                Osobní finance
              </Badge>
              <Badge size="lg" hasDot={true}>
                Investice
              </Badge>
              <Badge size="lg" hasDot={true}>
                Hypotéky
              </Badge>
            </div>
          </div>
        </ScrollReveal>

        {/* Q&A */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 pt-20 md:grid-cols-2 md:gap-y-32 md:pt-32 lg:gap-x-16">
          <Question
            number="1"
            question="Proč bych měl mít finanční plán?"
            answer="Finanční plán vám velice ulehčí a nastíní cestu za vašimi sny a zajistí vám pocit bezpečí. Budete díky němu motivovaný si plnit své sny a žít na maximum."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Proč spolupracovat se mnou?"
            answer="Mám bohaté zkušenosti z trhu. Jsem mladý a motivovaný se v tomto oboru zlepšovat a vzdělávat každým dnem. Ještě se mi nikdy nestalo, že by klient byl s mou prací nespokojený a navíc jsem Vám k dispozici každý den v týdnu, ve dne i v noci."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Jsou zde nějaká rizika?"
            answer="S klienty se v rámci naší spolupráce bavíme i o zajištění všech možných rizik. Můj hlavní cíl je bezpečí a pohodlí klienta."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Jak dlouho trvá poradenský proces?"
            answer="Já rozděluji proces do 3 schůzek, které dohromady trvají okolo 3 hodin. Následně, když je se mnou klient spokojený, dojde k podpisu. Poté následuje můj každoroční servis a naše dlouhodobá spolupráce."
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
                href={contacts.janVoves.emailLink}
                variant="tinted"
                color="light"
                size="sm"
                leftIcon={<HiMail />}
              >
                {contacts.janVoves.emailLabel}
              </Button>
              <Button
                as="a"
                href={contacts.janVoves.phoneLink}
                variant="tinted"
                color="light"
                size="sm"
                leftIcon={<HiPhone />}
              >
                {contacts.janVoves.phoneLabel}
              </Button>
            </div>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default JanVoves;
