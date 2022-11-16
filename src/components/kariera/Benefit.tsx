import Heading from "@components/Heading";
import ScrollReveal from "@components/ScrollReveal";

type Props = {
  number: number;
  title: string;
  text: string;
};

export default function Benefit({ number, title, text }: Props) {
  return (
    <ScrollReveal as="li">
      <Heading
        level={3}
        size="base"
        align="center"
        className="mx-auto mb-10 text-center"
      >
        <span className="text-primary">{number}.</span> {title}
      </Heading>
      <p className="text-center">{text}</p>
    </ScrollReveal>
  );
}
