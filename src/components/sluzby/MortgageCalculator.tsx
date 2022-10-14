import RangeSlider from "@components/calculator/RangeSlider";

type Props = {
  className?: string;
};

export default function MortgageCalculator({ className = "" }: Props) {
  return (
    <div className={`flex flex-col p-5 ${className}`}>
      <div className="mt-24">
        <RangeSlider
          changeData={changeData}
          id={"susenek"}
          min={0}
          max={500}
          skip={10}
          title={"Lorem ipsum dolor?"}
          unit={"Lorem"}
        />
        <RangeSlider
          changeData={changeData}
          id={"rohliku"}
          min={0}
          max={150}
          skip={25}
          title={"Lorem ipsum dolor?"}
          unit={"Lorem"}
        />
      </div>
      {/* <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="mx-auto w-fit rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Odeslat!
      </button> */}
      <div className="mt-5 flex w-full items-center justify-center">
        <Button type="button" onClick={() => setIsModalOpen(true)}>
          Spočítat
        </Button>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        inputData={inputData}
      />
    </div>
  );
}
