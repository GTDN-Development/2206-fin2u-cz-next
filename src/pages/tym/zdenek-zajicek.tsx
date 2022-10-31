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
import { HiMail, HiPhone } from "react-icons/hi";

const testimonials = [
  {
    id: 1,
    photoSrc: "/images/testimonial.jpg",
    name: "Jiří Dvořák",
    position: "hypotéka, konsolidace úvěrů",
    text: "Se Zdeňkem jsme společně řešili hypotéku. Byl jsem velmi překvapen, jak dokázal lehce mi dokázal pomoci k vlastnímu bydlení, které už jsem dlouho plánoval. Dostal jsem jasné informace, jak bude vše probíhat a co k tomu potřebuji. Vím, že sám bych si takové podmínky nevyjednal. Navíc mi ještě dokázal ušetřit na mých ostatních závazcích, které jsem každý měsíc platil. Super!",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/testimonial.jpg",
    name: "Jaroslav Lindner",
    position: "investování",
    text: "Z toho, co pan Zajíček předvedl jsem byl vážne mile překvapen. Pro prodeji domu jsem měl peníze a stále bydlení jsem měl zajištěné. Neměl jsem ani tušení, do čeho a jak své peníze uložit. Zhruba po týdnu jsem měl řešení na stole. O všem jsme dokázali hodiny debatovat a já neměl jediný důvod pochybovat. Nelituji. Za mě určitě palec nahoru.",
    class: "flex sm:translate-y-10",
  },
  {
    id: 3,
    photoSrc: "/images/testimonial.jpg",
    name: "Marie Bartáková",
    position: "zajištění",
    text: "Poslední dobou jsem měla vůči poradcům averzi. Léta jsme s manželem platili pojištění, mezi nimi i životní. Jednoho dne onemocněl, stal se z něj bohužel invalida a my jsme z pojistky nedostali nic. Řekla jsem, že nikdy více! Pak jsem dostala doporučení na Zdeňka. Ukázal mi, že ne každý se umí postarat. Vysvětleno do nejmenšího detailu. Měním názor.",
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
          kicker="Manažer, úvěrový specialisa"
          heading="Zdeněk Zajíček"
          caption={
            "Rád se probouzím do dalšího dne s vědomím, že to, co dělám dává mě i lidem, kteří mi důvěřují smysl a že pro ně mohu udělat maximum. Proto si zakládám na co nejprofesionálnějším přístupu a zároveň na co nejpevnějších mezilidských vztazích. Vzájemná důvěra je pro mě absolutní základ."
          }
        />

        {/* Popis + fotka */}
        <ScrollReveal
          staggerChildren
          staggerChildrenIncrement="200"
          className="grid grid-cols-1 items-center gap-10 pt-10 md:grid-cols-2 md:pt-20"
        >
          <ExportedImage
            src={"/images/poradci/zdenek-zajicek.jpg"}
            alt="Profilovka"
            width={500}
            height={400}
            loading="lazy"
            objectFit="cover"
            className="col-span-1"
          />
          <div className="col-span-1 flex flex-col gap-7">
            <p>
              Zdravím vás, jsem Zdeněk Zajíček a už to bude hezkých pár let od
              chvíle, kdy jsem začal samostatně podnikat. Vždy mě obrovsky
              naplňovala práce a jednání s lidmi.Věnuji se správě a plánování
              finančního směru svých klientů. Kromě toho, že mě tento obor živí,
              je také mým velkým koníčkem. Umím vám pomoci s veškerými
              finančními, investičními a pojistnými produkty, které jsou na
              trhu. Mám schopnost naslouchat a zároveň do naší vzájemné
              spolupráce vkládat své znalosti a zkušenosti a především klienty
              navést na tu správnou cestu. Zaměřuji se jak na podnikatele, firmy
              tak i na zaměstnance a ostatní – mých služeb proto může využít
              každý. Jsem rád, že mohu ke své práci přistupovat takto osobně,
              vkládat do ní sám sebe a nebýt jen dalším v řadě. Věřte tomu, nebo
              ne, ale i v našem oboru jsou obrovské rozdíly. Jsem tu s čímkoliv
              pro vás a vaše spokojenost je pro mě úplně nejpodstatnější.
            </p>
            <div className="flex gap-4">
              <Badge size="lg" hasDot={true}>
                Specialista pojistných rizik
              </Badge>
              <Badge size="lg" hasDot={true}>
                Úvěry
              </Badge>
            </div>
          </div>
        </ScrollReveal>

        {/* Q&A */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 pt-20 md:grid-cols-2 md:gap-y-32 md:pt-32 lg:gap-x-16">
          <Question
            number="1"
            question="Proč bych měl pracovat zrovna s  Vámi na mém  zajištění? Existují všemožné, volně dostupné srovnávače."
            answer="Takové zajištění je poměrně složitá věc. Pokud má být nastaveno tak, aby fungovalo, zabere to nějaký čas a musím zapojit mozek. Každý klient má úplně  jinou životní situaci a proto potřebuje být individuálně zajištěn. Cílem je klienta a jeho majetek zajistit tak, aby, když přijde průšvih inkasoval tolik, na  kolika jsme se domluvili. Vždy, co nejvíce, za co nejméně!"
            className="col-span-1"
          />
          <Question
            number="1"
            question="Jak řešíte financování, půjčky, hypotéky  a jiné?  Takový produkt si přece dovedu zařídit i sám."
            answer="Tím, že mám přístup ke všem finančním subjektům na trhu dokážu porovnávat nabídky a pro klienta zajistit tu, která mu bude ušitá na míru. Není v mém zájmu jednat pouze s jednou institucí. Je mi jedno, jestli peníze poskytne Petr, nebo Pavel -směrodatné je, za jakých podmínek a jak výhodně. Přidaná hodnota finančního poradce – ušetřím čas, získám to nejlepší."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Co když budu chtít ochránit své peníze, efektivně je investovat a pasivně tak vydělávat? "
            answer="Pojďme se postarat o Vaše peníze a nechme je vydělávat. Chránit je budeme pouze tehdy, budeme li s nimi pracovat. Peníze, které jen leží zpravidla svoji hodnotu ztrácí. Nic nevydělávají. V dnešní době máme obrovskou škálu možností, jak peníze ohchránit a jak je efektivním způsobem rozmnožit. Prioritním cílem je diverzifikace a nezávsilost na tom, že peníze investuji pouze do jedné komodity."
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
                <div className="mr-5 aspect-square h-12 w-12 overflow-hidden rounded-full">
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
          <LargeCTA>
            <Button
              as="a"
              href={contacts.zdenekZajicek.emailLink}
              color="light"
              leftIcon={<HiMail />}
            >
              {contacts.zdenekZajicek.emailLabel}
            </Button>
            <Button
              as="a"
              href={contacts.zdenekZajicek.phoneLink}
              color="light"
              leftIcon={<HiPhone />}
            >
              {contacts.zdenekZajicek.phoneLabel}
            </Button>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default ZdenekZajicek;
