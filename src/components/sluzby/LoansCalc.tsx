import Alert from "@components/Alert";
import Button from "@components/Button";
import RangeSlider from "@components/calculator/RangeSlider";
import Input from "@components/forms/Input";
import SelectTemp from "@components/forms/SelectTemp";
import emailjs from "@emailjs/browser";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { HiX } from "react-icons/hi";

type LoansCalcProps = {
  className?: string;
};

export default function LoansCalc({ className = "" }: LoansCalcProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputData, setInputData] = useState({
    kalkulacka: "Firemní Financování",
    pujcka: 0,
    zastava: true,
    zajisteni: 0,
    splatnost: 1,
    sazba: 7,
    ucetUveru: "",
  });
  const [result, setResult] = useState<number>(0);

  function letsCalcIt() {
    let top =
      (inputData.sazba / 100 / 12) *
      Math.pow(1 + inputData.sazba / 100 / 12, 12 * inputData.splatnost);
    let bottom =
      Math.pow(1 + inputData.sazba / 100 / 12, 12 * inputData.splatnost) - 1;
    setResult(Math.round(inputData.pujcka * (top / bottom) * 100) / 100);
    setIsModalOpen(true);
  }

  function changeData(id: string, value: any) {
    setInputData((prevState) => ({ ...prevState, [id]: value }));
  }
  return (
    <div className={`personalCalc flex flex-col p-5 ${className}`}>
      <div className="mt-24">
        <div className={`mb-10 flex w-full flex-row gap-6`}>
          <button
            className={`cursor-pointer rounded-md border-2 border-none px-4 py-2 font-medium text-white ${
              inputData.zastava === true ? "bg-primary/100" : "bg-primary/60"
            }`}
            onClick={() => changeData("zastava", true)}
          >
            Se zástavou
          </button>
          <button
            className={`cursor-pointer rounded-md border-2 border-none px-4 py-2 font-medium text-white ${
              inputData.zastava === false ? "bg-primary/100" : "bg-primary/60"
            }`}
            onClick={() => changeData("zastava", false)}
          >
            Bez zástavy
          </button>
        </div>
        {inputData.zastava && (
          <RangeSlider
            changeData={changeData}
            id={"zajisteni"}
            min={0}
            max={inputData.zastava === true ? 200000000 : 50000000}
            skip={100000}
            defaultValue={inputData.zajisteni}
            title={"Hodnota Vašeho zajištění?"}
            unit={"Kč"}
          />
        )}
        {inputData.zastava !== undefined && inputData.zastava ? (
          <>
            <RangeSlider
              changeData={changeData}
              id="pujcka"
              min={0}
              max={200000000}
              skip={500000}
              defaultValue={inputData.pujcka}
              title="Kolik si chci půjčit?"
              unit="Kč"
            />
            <RangeSlider
              changeData={changeData}
              id="splatnost"
              min={1}
              max={20}
              skip={1}
              defaultValue={inputData.splatnost}
              title="Na jak dlouho si chcete půjčit?"
              unit={
                inputData.splatnost < 5
                  ? inputData.splatnost === 1
                    ? "rok"
                    : "roky"
                  : "let"
              }
            />
          </>
        ) : (
          <>
            <RangeSlider
              changeData={changeData}
              id="pujcka"
              min={0}
              max={3000000}
              skip={50000}
              defaultValue={inputData.pujcka}
              title="Kolik si chci půjčit?"
              unit="Kč"
            />
            <RangeSlider
              changeData={changeData}
              id="splatnost"
              min={1}
              max={8}
              skip={1}
              defaultValue={inputData.splatnost}
              title="Jak dlouho chcete splácet?"
              unit={
                inputData.splatnost < 5
                  ? inputData.splatnost === 1
                    ? "rok"
                    : "roky"
                  : "let"
              }
            />
          </>
        )}
        <SelectTemp
          id="ucelUveru"
          title="Účel Vašeho úvěru?"
          changeData={changeData}
          values={[
            "Klasický neúčelový úvěr",
            "Účelový podnikatelský úvěr",
            "Leasing",
            "Provozní úvěry",
            "Kontokorentní úvěr",
            "Podnikatelské kreditní karty",
            "Investiční úvěry",
            "Úvěry se zárukou Evropského investičního fondu",
          ]}
          className="mt-12"
        />
      </div>
      <div className="mt-10 flex w-full items-center justify-center">
        <Button 
          size="lg" 
          type="button"         
          isDisabled={inputData.pujcka > inputData.zajisteni ? true : false} 
          onClick={() => letsCalcIt()}
        >
          Spočítat
        </Button>
      </div>
      <Alert 
        title="Chyba!"
        text="Hodnota půjčky nesmí být vyšší než hodnota nemovitosti."
        status="error"
        variant="tinted"
        className={` mt-5  ${inputData.pujcka > inputData.zajisteni ? "block" : "hidden"}`}
      />
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
  result: any;
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
        "service_jlz369o",
        "template_w729jur",
        {
          email: email,
          phone: phone,
          kalkulacka: "Kalkulačka - " + inputData.kalkulacka,
          pujcka: "Půjčka: " + inputData.pujcka.toLocaleString() + " Kč",
          zastava:
            inputData.zastava === true
              ? "Zástava: se zástavou"
              : "Zástava: bez zástavy",
          nemovitost:
            "Nemovitost: " + inputData.zajisteni.toLocaleString() + " Kč",
          splatnost:
            inputData.splatnost < 5 && inputData.splatnost > 0
              ? inputData.splatnost === 1
                ? "Splatnost: " + inputData.splatnost + " rok"
                : "Splatnost: " + inputData.splatnost + " roky"
              : "Splatnost: " + inputData.splatnost + " let",
          sazba: "Sazba: " + inputData.sazba + " %",
          ucelUveru: "Účel úvěru: " + inputData.ucelUveru,
          druhNemovitosti: "Druh nemovitosti: " + inputData.druhNemovitosti,
          vysledek: "Vypočítaný výsledek: " + result.toLocaleString() + " Kč",
        },
        "user_2tNsUaIQSULo6wFXKZVCs"
      );
    }
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
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
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-tight text-rich xl:text-2xl"
                  >
                    Děkujeme za vyplnění dotazníku
                  </Dialog.Title>
                  <p className="mt-5 text-base">
                    Vaše výsledky můžete naleznout níže
                  </p>
                  <div className="mt-7 flex w-full flex-col gap-8">
                    <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                      <span className="">Při půjčce v hodnotě</span>
                      <span className="font-semibold text-rich">
                        {inputData.pujcka.toLocaleString()} Kč
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                      <span className="">A splatnostním období</span>
                      <span className="font-semibold text-rich">
                        {inputData.splatnost}{" "}
                        {inputData.splatnost < 5
                          ? inputData.splatnost === 1
                            ? "rok"
                            : "roky"
                          : "let"}
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                      <span>Činní měsíční splátka</span>
                      <span className="text-xl font-bold text-rich">
                        {result.toLocaleString()} Kč
                      </span>
                    </div>
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
