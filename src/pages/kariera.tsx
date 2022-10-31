import Button from "@components/Button";
import Heading from "@components/Heading";
import Hero from "@components/Hero";
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
            Přidej se k nám do týmu
          </Heading>
          <p className="max-w-prose text-center text-lg text-white">
            Máš zkušenosti s komunikací a zájem pracovat na sobě!? Toto je
            příležitost, jak posunout svou kariéru na vyšší level. Nejsme druh
            korporátu, kde má každý krok jasně stanovená pravidla. Rádi měníme
            zajeté postupy. Staň se součástí mého obchodního teamu Plzeň | Praha
            |Brno.Pokud máte zájem o práci v našem týmu, zašlete svůj životopis
            a motivační dopis na e-mail: infofin2U.cz
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
        <ScrollReveal
          as="ul"
          animation="slide-up"
          className="mb-16 flex list-decimal flex-col items-center justify-center space-y-8 text-center text-xl font-medium leading-normal marker:font-bold marker:text-primary sm:mb-28"
        >
          <li>Callcentrum</li>
          <li>
            Být u vzniku nové entity, nový team, rostoucí prostředí,
            naslouchání, diskutujeme, individuálně umíme vše
          </li>
          <li>
            Silné zázemí od bývalého partnera, (finance, právní stabillita,
            callcentrum…)
          </li>
          <li>Přátelská centrála</li>
          <li>
            Nadstandardní podmínky pro Fin.poradce - možné všechny typy
            spolupráce ( MLM, poolová sekce, hypo.specialsiti, premium)
          </li>
          <li>
            Individuální nastavení připechodu z konkurence- umíme zajistí
            budgety
          </li>
          <li>
            Snažím se rekrutovat především sám na sebe - vztahy, pojď do mého
            teamu, pomůžu ti, já to za tebe udělám
          </li>
        </ScrollReveal>
      </Wrapper>

      <Wrapper as="section" id="vice-informaci" size="sm" paddedContent="sm">
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
            title="Co teď? Klikni na odkaz níže a vyplň náš obchodní test!"
            text="Věříš, že jsi správný kandidát? No to teprve uvidíme. Klikni na odkaz níže a pokračuj dále."
          >
            <Link href="/kariera-test">
              <Button as="a" color="light" leftIcon={<HiMail />}>
                Přidej se k nám do týmu
              </Button>
            </Link>
          </LargeImageCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default Carrier;
