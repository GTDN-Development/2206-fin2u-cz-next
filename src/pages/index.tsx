import Button from "@components/Button";
import CollabLogos from "@components/CollabLogos";
import Heading from "@components/Heading";
import Hero from "@components/Hero";
import Services from "@components/home/Services";
import Team from "@components/home/Team";
import Testimonials from "@components/home/Testimonials";
import Kicker from "@components/Kicker";
import LargeCTA from "@components/LargeCTA";
import ScrollReveal from "@components/ScrollReveal";
import SectionHeader from "@components/SectionHeader";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import AppLayout from "@layouts/AppLayout";
import type { NextPage } from "next";
import ExportedImage from "next-image-export-optimizer";

// To Do
// Counter komponent
// Team - hover na kartách
// Scroll animace

const Home: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="dark">
      <Seo title="Finanční poradenství na míru" description="" />
      {/* Hero */}
      <Hero hasWatermark={true}>
        <ScrollReveal
          staggerChildren
          staggerChildrenIncrement="200"
          className="flex flex-col items-center gap-8"
        >
          <Heading level={1} size="xl" align="center" color="white">
            Lorem ipsum dolor sit amet
          </Heading>
          <p className="max-w-prose text-center text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque
            ipsam, nulla similique voluptatibus laboriosam voluptatem accusamus
            ducimus.
          </p>
          <div className="mt-8 flex gap-5">
            <Button>Call to action</Button>
            <Button color="light">Call to action</Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay="600" className="my-48">
          <ExportedImage
            src="/images/team.jpg"
            alt="Náš tým"
            width={1920}
            height={1080}
            loading="eager"
            objectFit="cover"
            className="aspect-video w-full bg-slate-500"
          />
        </ScrollReveal>

        <CollabLogos />
      </Hero>

      {/* Služby */}
      <Wrapper paddedContent="base">
        <SectionHeader
          gradient="top"
          kicker="Nabízené služby"
          heading="Lorem ipsum dolor"
          caption={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam vitae at vero explicabo perferendis rerum tempore, qui ipsa ratione incidunt."
          }
        />
        <Services />
      </Wrapper>

      {/* Tým */}
      <Wrapper paddedContent="base">
        <SectionHeader
          gradient="left"
          kicker="Náš tým"
          heading="Lorem ipsum dolor"
          caption={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam vitae at vero explicabo perferendis rerum tempore, qui ipsa ratione incidunt."
          }
        />
        <Team />
      </Wrapper>

      {/* Reference */}
      <SectionHeader
        gradient="top"
        kicker="Reference"
        heading="Naši klienti o nás napsali"
        className="mt-24 xl:mt-32"
      />
      <div className="relative z-0 w-screen">
        <Wrapper className="pb-20 sm:pb-28">
          <Testimonials />
        </Wrapper>
        <div className="absolute bottom-0 left-0 -z-10">
          <ExportedImage
            src={"/images/testimonials-bg.png"}
            alt="Spokojený klient"
            width={640}
            height={640}
            loading="lazy"
            objectFit="cover"
            className=""
          />
        </div>
      </div>

      {/* Counter */}
      {/* About us */}
      <Wrapper paddedContent="base">
        <div className="flex flex-col items-center justify-center">
          <Kicker className="text-center text-primary">O nás</Kicker>
          <Heading level={2} size="lg" className="mt-5" align="center">
            Lorem ipsum dolor sit amet
          </Heading>
        </div>
        <ScrollReveal
          staggerChildren
          className="grid grid-cols-1 items-center gap-10 pt-10 md:grid-cols-2 md:pt-20"
        >
          <ExportedImage
            src={"/images/team.jpg"}
            alt="Spokojený klient"
            width={500}
            height={400}
            loading="lazy"
            objectFit="cover"
            className="col-span-1"
          />
          <div className="col-span-1 flex flex-col gap-7">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              vero voluptatem obcaecati, suscipit nulla dolores iste itaque
              tempora. Placeat libero, nulla reiciendis necessitatibus eveniet
              alias eaque rerum quas dolores facilis, in perspiciatis. Adipisci
              ad pariatur, deleniti fugiat ipsa officiis culpa a sunt magnam
              excepturi magni quo eos, praesentium numquam distinctio?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              vero voluptatem obcaecati, suscipit nulla dolores iste itaque
              tempora. Placeat libero, nulla reiciendis necessitatibus eveniet
              alias.
            </p>
          </div>
        </ScrollReveal>
      </Wrapper>

      {/* CTA */}
      <Wrapper size="lg" paddedContent="base">
        <ScrollReveal>
          <LargeCTA>
            <Button color="light">Call to action</Button>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default Home;
