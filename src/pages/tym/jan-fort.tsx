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
    name: "Člověk 1",
    position: "hypotéka, konsolidace úvěrů",
    text: "Moc ti dekuji za vstrícné jednání a vysvëtlení vseho potrebného, supr prístup a komunikace i nalezení spolecného resení",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/testimonial.jpg",
    name: "Lucka P.",
    position: "pojištění",
    text: "Ahoj Honzo, chtela bych Ti moc podekovat za sjednání autopojisténí na míru. Dekuji Ti za tvúj cas a skvelé vystupování a ochotu se mnou vse postupne projít a vysvétlit mi co jsem potrebovala vedet. Dekuji za vysvetlení kazdé polozky na pojistce, k doporucení co je pro me vhodné. Chtela bych také podekovat za srovnání pojistek od rüzných pojistoven a vybraní pro me nejvhodnejsí pojistky. Moc ráda vyuziji i nadále tvých dalsích znalostí ohledne pojistèní. Ráda bych s tebou stejným zpüsobem prosla a uzavrela pojistku na nemovitost, domácnost a pojistèní odpovédnosti. Jsem s Tvým jednáním a znalostmi velmi spokojená a uz se nebojím, ze bych pri uzavírání pojistky nècemu nerozumela. Dēkuji Lucka",
    class: "flex sm:translate-y-10",
  },
  {
    id: 3,
    photoSrc: "/images/testimonial.jpg",
    name: "človek 2 ",
    position: "finanční plán",
    text: "Honzi, musím ríct ze jsem byla velmi spokojena s tvým financním plánem, vse opravdu popsané a oznacené tak Ze tomu clovek rozumel, samozrejme i si to skvele vysvetlovat ze jsem to pochopila na první dobrou. Jsem nad míru spokojena ze pokud bych do budoucna chtela do néceho financovat mohu se obrátit na tebe a ty se o to postarás. Jen tak dál Honzi..",
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
          kicker="Specialista na úvěry a investice"
          heading="Jan Fořt "
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
            src={"/images/poradci/jan-fort.jpg"}
            alt="Profilovka"
            width={500}
            height={400}
            loading="lazy"
            objectFit="cover"
            className="col-span-1"
          />
          <div className="col-span-1 flex flex-col gap-7">
            <p>
              Zdravím Vás, jmenuji se Jan Fořt a pomáhám lidem cítit se jistěji
              ve financích a zlepšit jejich životní úroveň. Díky upřímnému a
              přátelskému přístupu vždy najdeme správné řešení. Specializuji se
              na investice, pojištění a jejich kontroly, ale také Vám pomohu s
              hypotékami, úvěry a spořením. Mým cílem je uskutečnit Vaše sny,
              zajistit Vaše bezpečí a stabilitu..
            </p>
            <p>
              Proč spolupracovat se mnou? Mám velkou vášeň pro finance a
              neustále se vzdělávám. Z osobní zkušenosti vím, jak těžké může být
              pracovat s financemi, a chci Vám pomoci k lepšímu a bezstarostnému
              životu. Sestavím pro Vás finanční plán, který Vám ukáže správnou
              cestu, a zajistím, že vše bude přehledné, snadno pochopitelné a
              odpovídající Vašim potřebám.
            </p>
            <div className="flex gap-4">
              <Badge size="lg" hasDot={true}>
                Finanční jistota
              </Badge>
              <Badge size="lg" hasDot={true}>
                Individuální přístup
              </Badge>
            </div>
          </div>
        </ScrollReveal>

        {/* Q&A */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 pt-20 md:grid-cols-2 md:gap-y-32 md:pt-32 lg:gap-x-16">
          <Question
            number="1"
            question="Proč bych měl spolupracovat právě s Vámi?"
            answer="Jsem zapálený pro oblast financí a neustále se vzdělávám. Mám osobní zkušenosti, které mi pomáhají lépe porozumět potřebám klientů, a jsem připraven vám pomoci dosáhnout finanční stability. Můžete se spolehnout na profesionální přístup a individuální řešení, která vám přinesou klid."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Jak mi může finanční plán pomoci dosáhnout mých cílů?"
            answer="Finanční plán, který společně sestavíme, vám poskytne jasnou cestu k dosažení vašich cílů. Máte 3x větší šanci uspět než běžní občané. Plán zahrnuje spoření, investice, pojištění a další důležité oblasti, abyste měli stabilní a bezpečnou finanční budoucnost."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Co všechno zahrnuje finanční plán a proč je pro mě důležitý?"
            answer="Finanční plán funguje podobně jako tréninkový plán ve fitku – ukáže vám, jak efektivně pracovat s vašimi financemi. Zahrnuje spoření na důchod, pojištění, investice a další důležité oblasti, které vám pomohou zlepšit vaši finanční situaci a dosáhnout vašich cílů. Plán bude podrobně vysvětlen a přehledně zpracován, aby byl snadno pochopitelný."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Co to vlastně je takový finanční plán, jak vypadá, co obsahuje a co  mi přinese?"
            answer="Finanční plán je souhrn momentální a plánované budoucí finanční situace klienta. Vychází z důkladné analýzy a navrhnutí jasně daného řešení. Jasně stanovíme, kde přicházíme o peníze, co naopak děláme dobře a jaké jsou naše cíle. Poté naplánujeme cestu, která by k jejich splnění měla vést. Musíme naprosto přesně vědět, co, kdy, a jak dělat a plánu se držet."
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

export default ZdenekZajicek;
