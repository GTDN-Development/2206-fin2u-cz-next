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
    photoSrc: "/images/reference/jan-javurek.jpg",
    name: "Jan Javůrek",
    position: "Specializace",
    text: "Doporučuji! profesionální přístup a trpělivost. Velmi mi pomohl s mými investicemi a finančním plánem.",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/reference/antu-nguyen.jpg",
    name: "Antu Nguyen",
    position: "Specializace",
    text: "Trung je člověk který, udržuje moje emoce na uzdě a díky tomu se snažím v rámci investic přemýšlet dlouhodobě. Občas zavolá a řekne, ted je dobrý čas nakoupit, zvaž to! Mohu jen doporučit!",
    class: "flex sm:translate-y-10",
  },
  {
    id: 3,
    photoSrc: "/images/reference/anh-tuan-nguyen.jpg",
    name: "Anh Tuan Nguyen",
    position: "Specializace",
    text: "Doporučuji ! profesionální přístup. A perfektně mi zajistil ochranu majetku před inflací.",
    class: "flex ",
  },
];

const DucTrungNguyen: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="light">
      <Seo title="Duc Trung Nguyen" description="Ředitel pro vzdělání" />

      {/* Služby */}
      <Wrapper paddedContent="lg">
        {/* Úvod */}
        <SectionHeader
          gradient="left"
          kicker="Ředitel pro vzdělání"
          heading="Duc Trung Nguyen, EFA"
          caption={"Krásný dobrý den přátelé, jmenuji se Nguyen Duc Trung, EFA (Čung) společně s Davidem Šimanou jsme založili projektu Fin2u."}
        />

        {/* Popis + fotka */}
        <ScrollReveal
          staggerChildren
          staggerChildrenIncrement="200"
          className="grid grid-cols-1 items-center gap-10 pt-10 md:grid-cols-2 md:pt-20"
        >
          <ExportedImage
            src={"/images/poradci/duc-trung-nguyen.jpg"}
            alt="Profilovka"
            width={500}
            height={400}
            loading="lazy"
            objectFit="cover"
            className="col-span-1"
          />
          <div className="col-span-1 flex flex-col gap-7">
            <p>
              V oblasti finančního a investičního poradenství pro bonitní klientelu se pohybujeme
              od roku 2016. Máme bohaté zkušenosti s tvorbou finančních plánu a komplexního
              poradenství pro zajištění pasivního příjmu klientůu
            </p>
            <p>
              Od roku 2018 vlastníme certifikát EFA jeden z nejprestižnějších certifikátů ve
              finančním plánováním a investičním poradenství v Evropě s akreditací u Čnb.
            </p>
            <div className="flex gap-4">
              <Badge size="lg" hasDot={true}>
                Vzdělávání
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
            question="Co je naším cílem?"
            answer="Cílem a posláním je pomoci co nejvíce lidem k finanční nezávislosti. A hledáme a
            rozvíjíme nové talenty ve finančním poradenství. Máme přes deset let zkušeností v
            oboru."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Komu můžu pomoci?"
            answer="Jako lektor ve financí jsem vzdělal a pomohl přes 600 finančních poradcům a
            pomohl jsem kolegům se přípravou a úspěšným složením jednoho z
            nejprestižnější titulů PFP ( poradce finančního plánování ). Takže zaručuji, že Vám
            dokážu předat know how ze světa financí, abyste se stali tím nejlepším
            obchodníkem a manažerem v tomto oboru."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Jaká je tvá vize?"
            answer="Jsem finančním poradcem, který poskytuje každému svému klientovi nejvyšší standard
            služeb. Jsem upřímný a ke svým klientům otevřený, protože věřím v celoživotní vztah s těmito klienty
            a myslím si, že mí klienti musí slyšet pravdu, i když to někdy může být proti mým krátkodobým
            ekonomickým zájmům."
            className="col-span-1"
          />
          <Question
            number="1"
            question="Konkurenční výhoda?"
            answer="Jsem se svými klienty nejen v dobách snadných, ale především jsem jim oporou v dobách obtížných
            - věřím tomu, že právě v těchto dobách je tato moje pomoc naprosto rozhodující a klíčová."
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
            <Button
              as="a"
              href="/kontakt"
              color="light"
            >
             Sjednat schůzku
            </Button>
            <Button
              as="a"
              href={contacts.ducTrungNguyen.emailLink}
              color="light"
              leftIcon={<HiMail />}
            >
              {contacts.ducTrungNguyen.emailLabel}
            </Button>
            <Button
              as="a"
              href={contacts.ducTrungNguyen.phoneLink}
              color="light"
              leftIcon={<HiPhone />}
            >
              {contacts.ducTrungNguyen.phoneLabel}
            </Button>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default DucTrungNguyen;
