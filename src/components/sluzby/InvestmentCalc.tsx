import Alert from "@components/Alert";
import Button from "@components/Button";
import RangeSlider from "@components/calculator/RangeSlider";
import Input from "@components/forms/Input";
import emailjs from "@emailjs/browser";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { HiX } from "react-icons/hi";

type InvestmentCalcProps = {
  className?: string;
};

export default function InvestmentCalc({
  className = "",
}: InvestmentCalcProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputData, setInputData] = useState({
    kalkulacka: "Investiční",
    renta: 0,
    cerpatZa: 0,
    investovat: 0,
    urok: 7,
    odklad: 0,
  });
  const [result, setResult] = useState<number>(0);

  function letsCalcIt() {
    let rentYears = inputData.cerpatZa;
    let alreadyInvested = inputData.investovat;
    let annualInterestRate = inputData.urok / 100;
    let assumedAnnualInterestRate = 4 / 100;
    let mih = rentYears * 12;
    let futureInvestment = (inputData.renta * 12) / assumedAnnualInterestRate;
    let ir = annualInterestRate / 12;
    let q = Math.pow(1 + annualInterestRate / 12, mih);
    let monthlyInvestment =
      -(ir * (-1 * futureInvestment + q * alreadyInvested)) / (-1 + q);

    setResult(Math.ceil(monthlyInvestment));
    setIsModalOpen(true);
  }

  function changeData(id: string, value: number) {
    setInputData((prevState) => ({ ...prevState, [id]: value }));
  }
  return (
    <div className={`personalCalc flex flex-col py-5 ${className}`}>
      <div className="mt-24">
        <RangeSlider
          changeData={changeData}
          id="renta"
          min={5000}
          max={100000}
          step={5000}
          defaultValue={inputData.renta}
          title="Jak velkou měsíční rentu chcete?"
          unit="Kč"
        />
        <RangeSlider
          changeData={changeData}
          id={"cerpatZa"}
          min={1}
          max={30}
          step={1}
          defaultValue={inputData.cerpatZa}
          title={"Za kolik let chcete peníze čerpat?"}
          unit={
            inputData.cerpatZa < 5
              ? inputData.cerpatZa === 1
                ? "rok"
                : "roky"
              : "let"
          }
        />
        <RangeSlider
          changeData={changeData}
          id="investovat"
          min={0}
          max={10000000}
          step={50000}
          defaultValue={inputData.investovat}
          title="Kolik už jste investovali?"
          unit={"Kč"}
        />
        <RangeSlider
          changeData={changeData}
          id="odklad"
          min={500}
          max={100000}
          step={500}
          defaultValue={inputData.odklad}
          title="Kolik můžete měsíčně odkládat?"
          unit={"Kč / měsíc"}
        />
      </div>
      <div className="mt-10 flex w-full items-center justify-center">
        <Button size="lg" type="button" onClick={() => letsCalcIt()}>
          Spočítat
        </Button>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        inputData={inputData}
        result={result}
      />
    </div>
  );
}
type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: any;
  inputData: any;
  result: number;
};

function Modal({ isModalOpen, setIsModalOpen, inputData, result }: ModalProps) {
  const [isOpen, setIsOpen] = useState(Boolean);
  const [email, setEmail] = useState(String);
  const [phone, setPhone] = useState(Number);
  const [allVerified, setAllVerified] = useState(Boolean);
  const [allAlert, setAllAlert] = useState(Boolean);

  useEffect(() => {
    setIsOpen(isModalOpen);
  }, [isModalOpen]);

  function verifyAll() {
    if (
      /^([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(
        email
      ) &&
      /\d{9}/.test(phone.toString())
    ) {
      setAllVerified(true);
      sendEmail();
    } else {
      setAllAlert(true);
      setTimeout(() => {
        setAllAlert(false);
      }, 2500);
    }

    function sendEmail() {
      emailjs.send(
        "service_zvy683n",
        "template_w729jur",
        {
          email: email,
          phone: phone,
          kalkulacka: "Kalkulačka - " + inputData.kalkulacka,
          pujcka: "Renta: " + inputData.renta.toLocaleString() + " Kč",
          cerpatZa:
            inputData.cerpatZa < 5
              ? inputData.cerpatZa === 1
                ? "Čerpat za: " + inputData.cerpatZa + " rok"
                : "Čerpat za: " + inputData.cerpatZa + " roky"
              : "Čerpat za: " + inputData.cerpatZa + " let",
          sazba: "Úrok: " + inputData.urok + " %",
          odklad: "Možný odklad: " + inputData.odklad + " Kč / měsíčně",
          investovat:
            "Současně investováno: " +
            inputData.investovat.toLocaleString() +
            " Kč",
          vysledek:
            "Musí měsíčně investovat: " + result.toLocaleString() + " Kč",
        },
        "peXEQ-b1oFp3uAQvI"
      );
    }
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[1000]"
        onClose={() => setIsModalOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {!allVerified ? (
                <Dialog.Panel className="flex w-full max-w-xl transform flex-col overflow-hidden rounded-2xl bg-white px-8 py-10 text-left align-middle shadow-xl transition-all">
                  <button
                    className="ml-auto flex h-10 w-10 items-center justify-center rounded-md text-rich transition-opacity duration-150 hover:opacity-60"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <HiX className="text-2xl" />
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-tight text-rich xl:text-2xl"
                  >
                    Zadejte údaje pro ověření
                  </Dialog.Title>
                  <p className="mt-5 text-base">
                    Pro zobrazení vašich výsledků zadejte Vaší e-mailovou adresu
                    a telefonní číslo.
                  </p>
                  <p className="text-red-500">
                    {allAlert && "Prosím zadejte platný email a číslo!"}
                  </p>
                  <div className="mt-16 flex flex-col gap-5">
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      isRequired
                      label="Váš e-mail"
                      onChange={(e: any) => setEmail(e.target.value)}
                    />
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      isRequired
                      label="Váše telefonní číslo"
                      onChange={(e: any) => setPhone(e.target.value)}
                    />
                    <Button type="button" onClick={() => verifyAll()}>
                      Odeslat!
                    </Button>
                  </div>
                </Dialog.Panel>
              ) : (
                <Dialog.Panel className="flex w-full max-w-xl transform flex-col overflow-hidden rounded-2xl bg-white px-8 py-10 text-left align-middle shadow-xl transition-all">
                  <button
                    className="ml-auto flex h-10 w-10 items-center justify-center rounded-md text-rich transition-opacity duration-150 hover:opacity-60"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <HiX className="text-2xl" />
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-tight text-rich xl:text-2xl"
                  >
                    Děkujeme za použití naší kalkulačky!
                  </Dialog.Title>
                  <p className="mt-5 text-base">
                    Tyto výsledky jsou pouze orientační. Pro přesnou kalkulaci
                    na míru{" "}
                    <Link href={"/kontakt"}>
                      <a className="c-link-3-a text-primary outline-none focus-visible:ring-4 focus-visible:ring-primary/70">
                        nás kontaktujte.
                      </a>
                    </Link>
                  </p>
                  <div className="mt-7 flex w-full flex-col gap-8">
                    <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                      <span>Hodnota renty</span>
                      <span className="font-semibold text-rich">
                        {inputData.renta.toLocaleString()} Kč / měsíc
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                      <span>Doba investování</span>
                      <span className="font-semibold text-rich">
                        {inputData.cerpatZa}{" "}
                        {inputData.cerpatZa < 5
                          ? inputData.cerpatZa === 1
                            ? "rok"
                            : "roky"
                          : "let"}
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                      <span>Musíte měsíčně investovat</span>
                      <span className="text-xl font-bold text-rich">
                        {result.toLocaleString()} Kč
                      </span>
                    </div>
                    {result <= inputData.odklad ? (
                      <Alert
                        variant="tinted"
                        status="success"
                        hasIcon={false}
                        isDismissable={false}
                        title="Výborně!"
                        text="Můžete měsíčně odkládat dostatek prostředků na to, abyste mohli pobírat vámi zvolenou rentu."
                        className="my-6"
                      />
                    ) : (
                      <Alert
                        variant="tinted"
                        status="error"
                        hasIcon={false}
                        isDismissable={false}
                        title="To nám nevychází."
                        text="Bohužel, abyste mohli pobírat požadovanou rentu, budete muset investovat delší dobu, nebo pravidelně odkládat větší částku."
                        className="my-6"
                      />
                    )}
                  </div>
                </Dialog.Panel>
              )}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
