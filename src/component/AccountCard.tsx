import styles from "../styles/Accountcard.module.css";

interface Props {
  currencyName: string;
  currencyAbrev: string;
  amount: number;
}
export default function AccountCard({
  currencyName,
  currencyAbrev,
  amount,
}: Props) {
  return (
    <div>
      <div className={styles.card}>
        <h1 className={styles.currName}>{currencyName}</h1>
        <h3 className={styles.currAbrev}>{currencyAbrev}</h3>
        <h2 className={styles.amount}>${amount}</h2>
      </div>
    </div>
  );
}
