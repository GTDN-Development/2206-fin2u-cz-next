import Button from "@components/Button";
import Heading from "@components/Heading";
import Hero from "@components/Hero";
import Benefit from "@components/kariera/Benefit";
import LargeImageCTA from "@components/LargeImageCTA";
import ScrollReveal from "@components/ScrollReveal";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import AppLayout from "@layouts/AppLayout";
import type { NextPage } from "next";
import Link from "next/link";
import { HiMail } from "react-icons/hi";

const Carrier: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="dark">
      <Seo title="Kariéra" description="Přidej se do týmu fin2u" />

      {/* Hero */}
      <Hero hasWatermark>
        <ScrollReveal
          as={"div"}
          staggerChildren
          staggerChildrenIncrement="200"
          className="flex flex-col items-center gap-8"
        >
          <Heading level={1} size="xl" align="center" color="white">
            OJEDINĚLÁ PRACOVNÍ PŘÍLEŽITOST
          </Heading>
          <p className="max-w-prose text-center text-lg text-white">
            Máš zkušenosti s komunikací a zájem pracovat na sobě!? Toto je
            příležitost, jak posunout svou kariéru na vyšší úroveň. Nejsme druh
            korporátní společnosti, kde má každý krok jasně stanovená pravidla.
            Rádi měníme zajeté postupy. Máte zájem o bližší informace? Vyplňte
            pracovní dotazník a následně zašlete svůj životopis a motivační
            dopis na e-mail: info@fin2u.cz
          </p>
          <div className="mt-8 flex gap-5 pb-28">
            <Link href="/kariera-test" passHref>
              <Button>Pracovní dotazník</Button>
            </Link>
            <Button as="a" href="#vice-informaci" color="light">
              Zjistit více
            </Button>
          </div>
        </ScrollReveal>
      </Hero>

      {/* Content */}

      <Wrapper as="section" size="sm" paddedContent="sm">
        <ScrollReveal>
          <Heading
            level={2}
            size="lg"
            className="mx-auto mb-16 text-center sm:mb-24"
          >
            PRO KOHO JE TATO NABÍDKA URČENA?
          </Heading>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-center">
            Uvítáme začínající i pokročilé obchodníky, přesuň svou kariéru do
            jednoho z nejlépe hodnocených sektorů. V mé obchodní skupině jsou
            dveře otevřené pro studenty vysokých škol a budoucí absolventy
            střední školy. Vyměňte brigádu za start podnikání. Hlavním kritériem
            je maturitní vzdělání a čistý rejstřík trestů.
          </p>
        </ScrollReveal>
      </Wrapper>
      <Wrapper as="section" id="vice-informaci" size="sm" paddedContent="sm">
        <ScrollReveal>
          <Heading
            level={2}
            size="lg"
            className="mx-auto mb-16 text-center sm:mb-24"
          >
            Co od nás můžeš získat?
          </Heading>
        </ScrollReveal>
        <ul className="flex flex-col gap-10 sm:gap-20">
          <Benefit
            number={1}
            title="SCHŮZKY S KLIENTY"
            text="Pokročilí systém pro akvizici klientů zastřešuje platforma Fin2u. Schůzky domluvené
          telefonním centrem na předem domluvený čas ve tvém diáři. Získejte možnost plánovat
          svůj čas díky flexibilní pracovní době s klienty."
          />
          <Benefit
            number={2}
            title="SILNÉ ZÁZEMÍ"
            text="Silné zázemí od bývalého partnera (finance, právní stabilita, telefonní centrum,
          přátelská centrála). Zázemí a portfolio nejprestižnějších finanční institucí nejen v ČR, ale také ve
          světě, jako je například BlackRock a Vanguard."
          />
          <Benefit
            number={3}
            title="INDIVIDUÁLNÍ PODMÍNKY"
            text="Nadstandardní podmínky pro Fin.poradce - možné všechny typy spolupráce ( MLM,
          hypo.specialsiti, i pro zaměstnance pojišťoven a pod..) Individuální nastavení při přechodu
          z konkurence - umíme zajistí individuální finančí bonusy"
          />
          <Benefit
            number={4}
            title="NADSTANDARTNÍ VZDĚLÁNÍ"
            text="Nadstandardní vzdělání pro komunikaci s bonitními klienty vyházející z metodiky EFPA pomáhá
          uzavřít milionové obchody.Protože naši klienti jsou podnikatelé a majitelé firem v ČR a komunikovat
          s nimi vyžaduje precizní obchodní znalosti."
          />
          <Benefit
            number={5}
            title="POMOC SE ZAPRACOVÁNÍM"
            text="Ze začátku Ti pomůže Đức Trung EFA - ředitel pro vzdělání, který za poslední 3 roky pomohl
          zainvestovat klientům více než 200 000 000 Kč a má více jak 4leté zkušenosti s budováním vztahů s
          majiteli firem."
          />
          <Benefit
            number={6}
            title="AKREDITOVANÉ CERTIFIKACE"
            text="Lokální licence pro práci na finančním trhu - akreditované zkoušky u ČNB. Získej Evropské prestižní
          certifikace pro finanční plánování."
          />
          <Benefit
            number={7}
            title="RŮSTOVÉHO PROSTŘEDÍ"
            text="Příležitost být u vzniku nové entity, nový team, rostoucí prostředí, naslouchání, diskutujeme,
          individuálně umíme vše. Individuální bonus do 50.000 Kč pro nové spolupracovníky."
          />
        </ul>
      </Wrapper>

      <Wrapper as="section" size="sm" paddedContent="sm">
        <ScrollReveal>
          <Heading
            level={2}
            size="lg"
            className="mx-auto mb-16 text-center sm:mb-32"
          >
            Benefity které nabízíme
          </Heading>
        </ScrollReveal>
        <ScrollReveal
          animation="slide-up"
          className="mb-16 flex flex-col items-center justify-center sm:mb-28"
        >
          <Heading level={3} size="sm" className="mx-auto mb-6 text-center">
            👉Proč?
          </Heading>
          <p className="mx-auto text-center">
            Protože naši klienti jsou podnikatelé a majitelé firem v ČR a
            komunikovat s nimi vyžaduje precizní obchodní znalosti.
          </p>
        </ScrollReveal>
        <ScrollReveal
          animation="slide-up"
          className="mb-16 flex flex-col items-center justify-center sm:mb-28"
        >
          <Heading level={3} size="sm" className="mx-auto mb-6 text-center">
            👉Jak je můžeš získat?
          </Heading>
          <p className="mx-auto text-center">
            Ze začátku Ti pomůže Đức Trung EFA – ředite pro vzdělání, který za
            poslední 3 roky pomohl zainvestovat klientům více než 200 000 000 Kč
            a má více jak 5leté zkušenosti s budováním vztahů s majiteli firem.
          </p>
        </ScrollReveal>
        <ScrollReveal
          animation="slide-up"
          className="mb-16 flex flex-col items-center justify-center sm:mb-28"
        >
          <Heading level={3} size="sm" className="mx-auto mb-6 text-center">
            👉Pro koho je tato nabídka určena?
          </Heading>
          <p className="mx-auto mb-4 text-center">
            Uvítáme začínající i pokročilé obchodníky, přesuň svou kariéru do
            jednoho z nejlépe hodnocených sektorů.
          </p>
          <p className="mx-auto text-center">
            V mé obchodní skupině jsou dveře otevřené pro studenty vysokých škol
            a budoucí absolventy střední školy.. Vyměnte brigádu za start
            podnikání.
          </p>
        </ScrollReveal>
        <ScrollReveal
          animation="slide-up"
          className="mb-16 flex flex-col items-center justify-center sm:mb-28"
        >
          <Heading level={3} size="sm" className="mx-auto mb-6 text-center">
            👉Proč by ses měl právě Ty o tuto pozici ucházet?
          </Heading>
          <p className="mx-auto mb-4 text-center">
            Pokročilí systém pro akvizici klientů zastřešuje platforma Fin2u.
          </p>
          <p className="mx-auto mb-4 text-center">
            Schůzky zajištěné callcentrem.
          </p>
          <p className="mx-auto mb-4 text-center">
            Nadstandardní vzdělání pro komunikaci s bonitními klienty vyházející
            z metodiky EFPA pomáhá uzavřít milionové obchody.
          </p>
          <p className="mx-auto mb-4 text-center">
            Zázemí a portfolio nejprestižnějších finanční institucí nejen v ČR,
            ale také ve světě, jako je například BlackRock a Vanguard.
          </p>
          <p className="mx-auto mb-4 text-center">
            Individuální bonus do 50.000 Kč pro nové spolupracovníky
          </p>
          <p className="mx-auto mb-4 text-center">
            Loklální licence pro práci na finančním trhu - akreditované zkoušky
            u ČNB
          </p>
          <p className="mx-auto mb-4 text-center">
            Získej Evropské prestižní certifikace pro finanční plánování.
          </p>
        </ScrollReveal>
      </Wrapper>

      {/* CTA */}
      <Wrapper size="lg" paddedContent="sm" className="mb-20">
        <ScrollReveal>
          <LargeImageCTA
            title="Co teď? Klikni na odkaz níže"
            text="Věříš, že jsi správný kandidát? No, to teprve uvidíme. Klikni na odkaz níže a pokračuj dále."
          >
            <Link href="/kariera-test">
              <Button as="a" color="light" leftIcon={<HiMail />}>
                Pracovní dotazník
              </Button>
            </Link>
          </LargeImageCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default Carrier;
