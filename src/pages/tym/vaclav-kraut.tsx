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
    photoSrc: "/images/testimonial.jpg",
    name: "Josef Lahodný",
    position: "Životní pojištění a rekonstrukce zděděné nemovitosti",
    text: "Výborný a spolehlivý finanční poradce. Dělá svoji práci znamenitě, skvělá komunikace, profesionalita a ochota. Určitě není typ poradce, kterého zajímá jen podepsání smlouvy. Díky preciznosti, vytrvalosti a profesionálnímu přístupu mi pomohl v získání hypotéky, abych mohl zrekonstruovat zděděný rodinný domek. Vřele doporučuji všem. Budu-li potřebovat cokoli zajistit v rámci financí, obrátím se opět sem! Člověk si občas musí nechat poradit.",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/reference/marie-lahodna.jpg",
    name: "Marie Lahodná",
    position: "Investice",
    text: "Investiční poradenství, které je transparentní, diskrétní a důvěryhodné a jehož cílem je ochrana vašeho majetku. Na spolupráci si nejvíce cením vysoké profesionality, transparentnosti, flexibility a jasných argumentů při návrzích na změnu portfolia, které reagují na měnící se podmínky finančního trhu. Pokud hledáte poradce, který nabízí služby západního světa, tak tohle je jasná volba. Z vlastní zkušenosti doporučuji!",
    class: "flex sm:translate-y-10",
  },
  {
    id: 3,
    photoSrc: "/images/reference/hana-hlavonova.jpg",
    name: "Hana Hlavoňová",
    position: "Investice",
    text: "Vašek mi pomohl s investicí se zajímavým výnosem. Pravidelně osobně kontroluje, jestli je vše v pořádku a nikdy není problém zavolat s jakýmkoliv dotazem. Doporučuji a těším se na další spolupráci.",
    class: "flex",
  },
];

const VaclavKraut: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="light">
      <Seo title="Václav Kraut" description="Investiční poradce" />

      {/* Služby */}
      <Wrapper paddedContent="lg">
        {/* Úvod */}
        <SectionHeader
          gradient="left"
          kicker="Investiční poradce"
          heading="Václav Kraut"
          caption={
            "Mým heslem je profesionální a otevřený přístup na prvním místě. S každým svým klientem si buduji vztah, jelikož si vážím jejich důvěry, kterou ve mě vkládají a dělám vždy vše, co je v mých silách, abych je nezklamal."
          }
        />

        {/* Popis + fotka */}
        <ScrollReveal
          staggerChildren
          staggerChildrenIncrement="200"
          className="grid grid-cols-1 items-center gap-10 pt-10 md:grid-cols-2 md:pt-20"
        >
          <ExportedImage
            src={"/images/poradci/vaclav-kraut.jpg"}
            alt="Profilovka"
            width={500}
            height={400}
            loading="lazy"
            objectFit="cover"
            className="col-span-1"
          />
          <div className="col-span-1 flex flex-col gap-7">
            <p>
              Jmenuji se Václav a v podnikání se pohybuji již 9 let. Investování
              jako takové mne zajímá již od střední školy, věnuji se mu naplno
              poslední 3 roky a rozhodl jsem se své portfolio rozšířit i o další
              finanční produkty jako jsou úvěry a pojištění. Mým heslem je
              profesionální a otevřený přístup na prvním místě, s každým svým
              klientem si buduji vztah, jelikož si vážím jejich důvěry, kterou
              ve mě vkládají a dělám vždy vše, co je v mých silách, abych je
              nezklamal. Zaměřuji se také na správu firemního majetku a firemní
              financování, jelikož jsem v minulosti sám poznal jaké to je řídit
              firmu a jak může externí kapitál pomoci růstu firmy.
            </p>
            <div className="flex gap-4">
              <Badge size="lg" hasDot={true}>
                Investice
              </Badge>
              <Badge size="lg" hasDot={true}>
                Klientská péče
              </Badge>
            </div>
          </div>
        </ScrollReveal>

        {/* Q&A */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 pt-20 md:grid-cols-2 md:gap-y-32 md:pt-32 lg:gap-x-16">
          <Question
            number="1"
            question="Investování"
            answer="Investování je nejčastější téma které s klienty řeším. Každému klientovi řeším jeho portfolio individuálně, dle jeho přání a cílů. I v dnešní komplikované situaci se lidem vždy snažím vysvětlit proč je důležité začít investovat co nejdříve a nečekat na perfektní příležitost."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Firemní financování"
            answer="Každý podnikatel ví, že využití bankovního kapitálu mu může pomoci rapidně zrychlit růst jeho podniku, ať už jde o nákup materiálu, strojů či provoz další pobočky. Všechny tyto a další věci dokáži s klientem prodiskutovat a najít nejlepší způsob, jak daných kroků dosáhnout."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Komplexní plán na míru"
            answer="S každým klientem, ať už se jedná o studenta, rodinu, podnikatele či majitele malé nebo velké firmy, řeším jeho potřeby a cíle individuálně."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Ušetření času"
            answer="Schůzky řeším osobně, online či telefonicky. Uvědomuji si totiž, že klientův čas je to nejcennější co má a je potřeba, aby ho využíval efektivně. Veškerou komunikaci s bankou, pojišťovnou či investiční společností vyřeším za Vás."
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
                href={contacts.vaclavKraut.emailLink}
                variant="tinted"
                color="light"
                size="sm"
                leftIcon={<HiMail />}
              >
                {contacts.zdenekZajicek.emailLabel}
              </Button>
              <Button
                as="a"
                href={contacts.vaclavKraut.phoneLink}
                variant="tinted"
                color="light"
                size="sm"
                leftIcon={<HiPhone />}
              >
                {contacts.vaclavKraut.phoneLabel}
              </Button>
            </div>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default VaclavKraut;
