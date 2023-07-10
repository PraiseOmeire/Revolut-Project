import { FiChevronDown } from "react-icons/fi";
import { NumericFormat } from "react-number-format";

interface Props {
  value: number;
}
interface PillProps {
  activeCurrency: string;
  className: string;
}
const placeholderText = "0";

export const Pill = ({ activeCurrency }: PillProps) => {
  return (
    <>
      <div>
        <div className="flex">
          {activeCurrency} <FiChevronDown className="pt-1" />{" "}
        </div>
      </div>
    </>
  );
};

export default function InputSection({ value }: Props) {
  return (
    <div>
      <div>
        <div className="flex">
          <NumericFormat
            placeholder={placeholderText}
            value={value}
            decimalScale={2}
            className="font-regular border border-solid border-gray-400 rounded-lg pb-2 pt-2 pr-8 pl-2 mr-2 hover:violet-600"
          />
          <div className="border border-solid border-gray-700 rounded-lg pl-2 pr-4 pt-2">
            {" "}
            <Pill className="" activeCurrency={"Eur"} />
          </div>
        </div>
      </div>
    </div>
  );
}
