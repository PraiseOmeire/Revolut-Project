import { FiChevronDown } from "react-icons/fi";
import { NumericFormat } from "react-number-format";
import styles from "../styles/inputSection.module.css";

interface Props {
  value: number;
}
interface PillProps {
  activeCurrency: string;
  className: string;
}
const placeholderText = "0";

export const Pill = ({ activeCurrency }: PillProps) => {
  // const tradedCurrencies = Object.values(currencies);

  return (
    <>
      <div>
        {activeCurrency} <FiChevronDown className="pt-1" />{" "}
      </div>
    </>
  );
};

export default function InputSection({ value }: Props) {
  return (
    <div>
      <div>
        <div className={styles.inputDiv}>
          <NumericFormat
            placeholder={placeholderText}
            value={value}
            decimalScale={2}
            className={styles.inputCard}
          />
          <div className="border border-solid border-gray-700 rounded-lg pl-2 pr-4 pt-2">
            {" "}
            <Pill className={styles.pill} activeCurrency={"Eur"} />
          </div>
        </div>
      </div>
    </div>
  );
}
