import ScrollReveal from "@components/ScrollReveal";
import ExportedImage from "next-image-export-optimizer";
// import Link from "next/link";

type Props = {
  className?: string;
};

const testimonialsArray = [
  // Column 1
  [
    {
      photoSrc: "/images/reference/filip-zimanzl.jpg",
      name: "Filip Zimanzl",
      position: "Investiční plán",
      text: "David je nejen skvělý investiční poradce, ale také skvělý člověk, co vždy rád pomůže a vyhoví vašim potřebám! Pokud potřebujete ve světě financí poradit, David je člověk číslo jedna na koho se obrátit!",
    },
    {
      photoSrc: "/images/reference/david-hrach.jpg",
      name: "David Hrách",
      position: "Vlastní bydlení a komplexní finanční plán",
      text: "s Davidem jsme řešili hypotéku bez prokazování příjmu. Měli jsme pár schůzek, ve kterých mi mimo jiné řekl co krok za krokem udělat, aby mi ji banka dala. Asi cca po 4 měsících mi schválili přesně tolik, kolik bylo třeba. Za to jsem mu vděčný. Řešili jsme nějaké spoření na které stát přispívá a i ukládání peněz, aby neztratili svou hodnotu. Schůzky jsou vždy velmi příjemné a domluvené tak, aby čas vyhovoval vždy mně. Celkově jsem velmi spokojený klient.",
    },
    {
      photoSrc: "/images/reference/long-dinh.jpg",
      name: "Long Dinh",
      position: "Komplexní finanční mapa",
      text: "Za mě super člověk se kterým se velice dobře mluví a velice rád Vám pomůže s vysvětlením ohledně financí nebo investování a pojištění.",
    },
    {
      photoSrc: "/images/reference/jan-javurek.jpg",
      name: "Jan Javůrek",
      position: "Specializace",
      text: "Doporučuji! Profesionální přístup a trpělivost. Velmi mi pomohl s mými investicemi a finančním plánem.",
    },
  ],

  // Column 2
  [
    {
      photoSrc: "/images/reference/antu-nguyen.jpg",
      name: "Antu Nguyen",
      position: "Specializace",
      text: "Trung je člověk který, udržuje moje emoce na uzdě a díky tomu se snažím v rámci investic přemýšlet dlouhodobě. Občas zavolá a řekne, ted je dobrý čas nakoupit, zvaž to! Mohu jen doporučit!",
    },
    {
      photoSrc: "/images/reference/anh-tuan-nguyen.jpg",
      name: "Anh Tuan Nguyen",
      position: "Specializace",
      text: "Doporučuji ! profesionální přístup. A perfektně mi zajistil ochranu majetku před inflací.",
    },
    {
      photoSrc: "/images/reference/dasa.jpg",
      name: "Dáša",
      position: "osobní finance",
      text: "S Danielem jsem se sešla na základě doporučení od mé kamarádky. Narozdíl od předešlé zkušenosti s finančním poradcem mě mile překvapilo, že Daniel mi nenabízel žádné produkty, ale na základě finanční analýzy se vžil do mé situace a nabídl mi řešení na míru. S Danielem jsem si jasně uvědomila své životní cíle a dala jim jasné parametry. Jsem vděčná za tuto spolupráci.",
    },
    {
      photoSrc: "/images/reference/dominika.jpg",
      name: "Dominika",
      position: "osobní finance",
      text: "Na Daniela jsem dostala doporučení od své mamky. Daniel se na první schůzce představil – měl k tomu super prezentaci. Na druhé schhůzce proběhla důkladná analýza, kde jsem si vytyčila jasné cíle a priority. Na další schůzce mi Daniel navrhl takové doporučení, které naprosto odpovídalo mé představě. Zajistil odkládání na budoucí hypotéku a optimalizoval veškeré mé produkty. Na servisní schůzce přinesl manželovy koňak, o kterém se s ním bavil 10 měsíců zpět. Daniela jsem doporučila svým přátelům i rodině.",
    },
  ],

  // Column 3
  [
    {
      photoSrc: "/images/reference/filip.jpg",
      name: "Filip",
      position: "osobní finance",
      text: "Daniela jsem oslvovil díky doslechu od svého bratra. Potřeboval jsem se svými úsporami překonat inflaci. Daniel mi však vysvětlil, že je třeba kompletní analýza, aby mi mohl dát řešení přímo na míru. Při auditu aktuálních produktů mi doporučil jejich optimalizaci a navíc porážíme inflaci. Jsem naprosto spokojený a spolupráce si vážím.",
    },
    {
      photoSrc: "/images/testimonial.jpg",
      name: "Josef Lahodný",
      position: "Životní pojištění a rekonstrukce zděděné nemovitosti",
      text: "Výborný a spolehlivý finanční poradce. Dělá svoji práci znamenitě, skvělá komunikace, profesionalita a ochota. Určitě není typ poradce, kterého zajímá jen podepsání smlouvy. Díky preciznosti, vytrvalosti a profesionálnímu přístupu mi pomohl v získání hypotéky, abych mohl zrekonstruovat zděděný rodinný domek. Vřele doporučuji všem. Budu-li potřebovat cokoli zajistit v rámci financí, obrátím se opět sem! Člověk si občas musí nechat poradit.",
    },
    {
      photoSrc: "/images/reference/marie-lahodna.jpg",
      name: "Marie Lahodná",
      position: "Investice",
      text: "Investiční poradenství, které je transparentní, diskrétní a důvěryhodné a jehož cílem je ochrana vašeho majetku. Na spolupráci si nejvíce cením vysoké profesionality, transparentnosti, flexibility a jasných argumentů při návrzích na změnu portfolia, které reagují na měnící se podmínky finančního trhu. Pokud hledáte poradce, který nabízí služby západního světa, tak tohle je jasná volba. Z vlastní zkušenosti doporučuji!",
    },
    {
      photoSrc: "/images/reference/hana-hlavonova.jpg",
      name: "Hana Hlavoňová",
      position: "Investice",
      text: "Vašek mi pomohl s investicí se zajímavým výnosem. Pravidelně osobně kontroluje, jestli je vše v pořádku a nikdy není problém zavolat s jakýmkoliv dotazem. Doporučuji a těším se na další spolupráci.",
    },
  ],
];

type TestimonialCardProps = {
  src: string;
  name: string;
  position: string;
  content: string;
};

export function TestimonialCard({
  src = "/images/testimonial.jpg",
  name = "Jméno Příjmení",
  position = "pozice",
  content = "Lorem ipsum dolor sit amet",
}: TestimonialCardProps) {
  return (
    <ScrollReveal
      as={"ul"}
      animation="fade"
      duration="1200"
      className={`flex flex-col rounded-xl bg-white p-5 shadow-xl sm:p-12`}
    >
      <div className="flex items-center justify-start">
        <div className="mr-5 aspect-square h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <ExportedImage
            src={src}
            alt={name}
            width={100}
            height={100}
            loading="lazy"
            objectFit="cover"
            className="aspect-square h-full w-full"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-widest text-primary sm:text-base">
            {name}
          </span>
          <span className="text-xs tracking-wider text-muted">{position}</span>
        </div>
      </div>
      <p className="mt-8 w-full text-sm text-muted">{content}</p>
    </ScrollReveal>
  );
}

export default function Testimonials({ className = "" }: Props) {
  return (
    <div
      className={`grid grid-cols-1 items-start gap-10 sm:grid-cols-2 xl:grid-cols-3 ${className}`}
    >
      {testimonialsArray.map((column, i) => (
        <ul
          key={i}
          className={`
              space-y-8
              ${i === 1 ? "hidden sm:block sm:translate-y-12" : ""}
              ${i === 2 ? "hidden xl:block" : ""}`}
        >
          {column.map((testimonial, i) => (
            <TestimonialCard
              key={i}
              src={testimonial.photoSrc}
              name={testimonial.name}
              position={testimonial.position}
              content={testimonial.text}
            />
          ))}
        </ul>
      ))}
      {/* {testimonials.map((testimonial, i) => (
        <ScrollReveal
          animation="fade"
          duration="1200"
          key={i}
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
          <p className="mt-8 w-full text-sm text-muted">{testimonial.text}</p>
        </ScrollReveal>
      ))} */}
    </div>
  );
}
