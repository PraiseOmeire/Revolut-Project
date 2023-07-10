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
      <div className="border-solid border-2 rounded-lg ml-5 mt-5 mr-10 mb-5 pl-2 pr-20 border-indigo-300">
        <h1>{currencyName}</h1>
        <h3 className="text-sm text-gray-600">{currencyAbrev}</h3>
        <h2>${amount}</h2>
      </div>
    </div>
  );
}
