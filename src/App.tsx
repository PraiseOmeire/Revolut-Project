import AccountCard from "./component/AccountCard";
import "./index.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-5 mt-10 text-600">Revolut</h1>

      <div className="justify-items-center border-solid ml-20 mr-20 border-2 border-indigo-400 gap-2">
        <div className="grid grid-cols-2 ">
          <AccountCard currencyName="Euro" currencyAbrev="Eur" amount={300} />
          <AccountCard currencyName="Dollar" currencyAbrev="USD" amount={300} />
          <AccountCard currencyName="Pounds" currencyAbrev="GBP" amount={300} />
        </div>

        <hr className="mt-10 mb-10 ml-10 mr-10 border-red-500"></hr>
      </div>
    </>
  );
}

export default App;
