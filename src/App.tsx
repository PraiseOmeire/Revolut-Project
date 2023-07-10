import AccountCard from "./component/AccountCard";
import Transaction from "./component/Transaction";
import "./index.css";

function App() {
  return (
    <>
      <h1 className=" flex place-content-center text-3xl font-bold mb-5 mt-10 text-600">
        Revolut
      </h1>
      <div className="flex place-content-center">
        <div className="border border-solid border-indigo-600 pr-12 pl-10">
          <div className="grid grid-cols-2 ">
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
          <div className="mt-3 mb-5 ml-5 mr-5 ">
            <hr className="border-black-700"></hr>
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
