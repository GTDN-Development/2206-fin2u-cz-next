import Heading from "@components/Heading";
import Seo from "@components/Seo";
import ServisniOrganizace from "@components/servisniOrganizace";
import Wrapper from "@components/Wrapper";
import AppLayout from "@layouts/AppLayout";
import type { NextPage } from "next";

const servisniOrganizace: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="light">
      <Seo title="Spolupráce se servisní organizací" description="" />
      <Wrapper className="pt-24 md:pb-16 md:pt-36">
        <Heading
          level={1}
          size="2xl"
          font="display"
          className="pt-20 md:pt-32"
          color="primary"
          align="center"
        >
          Spolupráce se servisní organizací
        </Heading>
      </Wrapper>
      <Wrapper size="sm" className="pt-24 pb-40">
        <ServisniOrganizace />
      </Wrapper>
    </AppLayout>
  );
};

export default servisniOrganizace;
