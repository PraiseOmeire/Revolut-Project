import AccountCard from "./component/AccountCard";
import Transaction from "./component/Transfer";
import styles from "./styles/App.module.css";

function App() {
  return (
    <>
      <h1 className={styles.header}>Revolut</h1>
      <div className={styles.app}>
        <div>
          <div className={styles.cards}>
            <AccountCard currencyName="Euro" currencyAbrev="Eur" amount={300} />
            <AccountCard
              currencyName="Dollar"
              currencyAbrev="USD"
              amount={300}
            />
            <AccountCard
              currencyName="Pounds"
              currencyAbrev="GBP"
              amount={300}
            />
          </div>
          <div className="mt-3 mb-5 ml-3 mr-3 ">
            <hr className={styles.hr}></hr>
          </div>
          <div>
            <Transaction />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
