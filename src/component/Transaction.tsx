import { rate } from "../constants/general";
import InputSection from "./InputSection";
import styles from "../styles/Transaction.module.css";

export default function Transaction() {
  return (
    <div>
      <div>
        <h4 className={styles.sales}>Sell EUR</h4>
        <p className={styles.marketOrder}>Market Order</p>
      </div>
      <div>
        <InputSection value={0} />
        <div>
          {/* <p className={styles.ratesBorder}></p> */}
          <p className={styles.inputText}>{rate}</p>
        </div>

        <InputSection value={0} />
      </div>
      <button className={styles.btn}>Sell Eur for GBP</button>
    </div>
  );
}
