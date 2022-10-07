import Heading from "@components/Heading";
import Link from "next/link";

import { HiHome } from "react-icons/hi";

type Props = {
  className?: string;
};

// const Services = [
//   {
//     id: 1,
//     question: "Lorem ipsum",
//     answer: "Lorem ipsum",
//   },
//   {
//     id: 2,
//     question: "Lorem ipsum",
//     answer: "Lorem ipsum",
//   },
// ];

export default function Services({ className = "" }: Props) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 ${className}`}>
      <Link href="/sluzby/bez-kalkulacky">
        <a className="group col-span-1 flex origin-center flex-col gap-5 py-12 px-6 transition duration-300 hover:scale-105 hover:bg-primary md:py-16 md:px-14">
          <div className="flex items-center justify-start gap-5">
            <HiHome className="text-xl text-primary transition-colors duration-300 group-hover:text-white sm:text-3xl lg:text-4xl" />
            <Heading
              level={3}
              size="base"
              className="transition-colors duration-300 group-hover:text-white"
            >
              Bez Kalkulačky
            </Heading>
          </div>
          <p className="transition-colors duration-300 group-hover:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis ex at officiis!
          </p>
        </a>
      </Link>
      <Link href="/sluzby/bez-kalkulacky">
        <a className="group col-span-1 flex origin-center flex-col gap-5 py-12 px-6 transition duration-300 hover:scale-105 hover:bg-primary md:py-16 md:px-14">
          <div className="flex items-center justify-start gap-5">
            <HiHome className="text-xl text-primary transition-colors duration-300 group-hover:text-white sm:text-3xl lg:text-4xl" />
            <Heading
              level={3}
              size="base"
              className="transition-colors duration-300 group-hover:text-white"
            >
              Bez Kalkulačky
            </Heading>
          </div>
          <p className="transition-colors duration-300 group-hover:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis ex at officiis!
          </p>
        </a>
      </Link>
      <Link href="/sluzby/s-kalkulackou">
        <a className="group col-span-1 flex origin-center flex-col gap-5 py-12 px-6 transition duration-300 hover:scale-105 hover:bg-primary md:py-16 md:px-14">
          <div className="flex items-center justify-start gap-5">
            <HiHome className="text-xl text-primary transition-colors duration-300 group-hover:text-white sm:text-3xl lg:text-4xl" />
            <Heading
              level={3}
              size="base"
              className="transition-colors duration-300 group-hover:text-white"
            >
              S kalkulačkou
            </Heading>
          </div>
          <p className="transition-colors duration-300 group-hover:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis ex at officiis!
          </p>
        </a>
      </Link>
      <Link href="/sluzby/s-kalkulackou">
        <a className="group col-span-1 flex origin-center flex-col gap-5 py-12 px-6 transition duration-300 hover:scale-105 hover:bg-primary md:py-16 md:px-14">
          <div className="flex items-center justify-start gap-5">
            <HiHome className="text-xl text-primary transition-colors duration-300 group-hover:text-white sm:text-3xl lg:text-4xl" />
            <Heading
              level={3}
              size="base"
              className="transition-colors duration-300 group-hover:text-white"
            >
              S kalkulačkou
            </Heading>
          </div>
          <p className="transition-colors duration-300 group-hover:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis ex at officiis!
          </p>
        </a>
      </Link>
    </div>
  );
}
