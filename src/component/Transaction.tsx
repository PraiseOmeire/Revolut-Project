import { currencies, rate } from "../constants/general";
import InputSection from "./InputSection";

export default function Transaction() {
  return (
    <div className="ml-5 mb-5">
      <div className="mb-2">
        <h4>Sell EUR</h4>
        <p>Market Order</p>
      </div>
      <div>
        <InputSection value={0} />
        <div className="border-l-4 ml-5 pt-3 pb-3">
          <p>{rate}</p>
        </div>

        <InputSection value={0} />
      </div>

      {/* <button>
        `Sell ${sendCurr} for ${receiveCurr}`
      </button> */}
      <button className="border border-solid border-indigo-800 mt-5 ml-10 pr-5 pl-5 rounded-lg hover:bg-violet-600">
        Sell Eur for GBP
      </button>
    </div>
  );
}
