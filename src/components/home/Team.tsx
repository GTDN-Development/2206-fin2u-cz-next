import Heading from "@components/Heading";
import ScrollReveal from "@components/ScrollReveal";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

type Props = {
  className?: string;
};

const team = [
  {
    id: 1,
    linkHref: "/tym/david",
    photoSrc: "/images/team-member.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
  },
  {
    id: 2,
    linkHref: "/tym/david",
    photoSrc: "/images/team-member.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
  },
  {
    id: 3,
    linkHref: "/tym/david",
    photoSrc: "/images/team-member.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
  },
  {
    id: 4,
    linkHref: "/tym/david",
    photoSrc: "/images/team-member.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
  },
  {
    id: 5,
    linkHref: "/tym/david",
    photoSrc: "/images/team-member.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
  },
];

export default function Services({ className = "" }: Props) {
  return (
    <div
      className={`team-cards-shifted grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 sm:gap-y-20 ${className}`}
    >
      {team.map((member) => (
        <Link href={member.linkHref} key={member.id}>
          <ScrollReveal
            as={"a"}
            animation="fade"
            className="team-card-transition group flex cursor-pointer flex-col bg-white hover:shadow-2xl"
          >
            <div className="aspect-[16/10] w-full">
              <ExportedImage
                src={member.photoSrc}
                alt={member.name}
                width={800}
                height={500}
                loading="lazy"
                objectFit="cover"
                className="aspect-[16/10] h-full w-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center py-6 sm:py-12">
              <Heading
                level={3}
                size="base"
                className="transition-colors duration-300"
              >
                {member.name}
              </Heading>
              <span className="mt-1.5 text-sm tracking-wider text-muted">
                {member.position}
              </span>
              <div className="mt-2.5 font-semibold tracking-wider text-muted transition-colors duration-200 group-hover:text-primary sm:text-lg">
                Zjistit více &#8594;
              </div>
            </div>
          </ScrollReveal>
        </Link>
      ))}
    </div>
  );
}
