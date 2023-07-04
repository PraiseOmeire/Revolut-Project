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
      <div className="border-solid border-2 rounded-md ml-5 mt-5 mr-10 mb-5 px-10 py-5 border-indigo-500">
        <h1>{currencyName}</h1>
        <h3>{currencyAbrev}</h3>
        <h2>${amount}</h2>
      </div>
    </div>
  );
}
