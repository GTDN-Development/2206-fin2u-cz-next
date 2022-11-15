import Heading from '@components/Heading';
import ScrollReveal from '@components/ScrollReveal';

type Props = {
  number: number;
  title: string;
  text: string;
}

export default function Benefit({number, title, text}: Props) {
  return (
    <ScrollReveal
      as="li"
      >
      <Heading
        level={3}
        size="base"
        className="mx-auto text-center mb-5"
      >
        <span className="text-primary">{number}.</span> {title}
      </Heading>
      <p>
        {text}
      </p>
    </ScrollReveal>
  )
}