type StatCardProps = {
  title: string;
  amount: string;
  textColor: string;
  borderColor: string;
};

const StatCard = ({ title, amount, textColor, borderColor }: StatCardProps) => {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg border-t-4 ${borderColor} transition`}
    >
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className={`text-2xl font-semibold mt-2 ${textColor}`}>{amount}</h3>
    </div>
  );
};

export default StatCard;
