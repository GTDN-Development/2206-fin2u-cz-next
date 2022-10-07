import Button from "@components/Button";
import SocialLinks from "@components/SocialLinks";
import { ctaMenu } from "@configs/routes";
import { HiPhone } from "react-icons/hi";

type NavbarAdditionalLinksOptions = {
  className?: string;
};

export default function NavbarAdditionalLinks({
  className = "",
}: NavbarAdditionalLinksOptions) {
  return (
    <div
      className={`flex items-center gap-x-6 md:gap-x-10 2xl:gap-x-16 ${className}`}
    >
      <SocialLinks className="hidden lg:block" />
      <Button
        as="a"
        href={ctaMenu[0].link}
        target="blank"
        rel="noopener noreferrer"
        size="sm"
        leftIcon={<HiPhone />}
        className="hidden sm:inline-flex"
      >
        +420 123 456 789
      </Button>
    </div>
  );
}
