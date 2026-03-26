type StatCardProps = {
  title: string;
  amount: string;
  textColor: string;
  borderColor: string;
};

const StatCard = ({ title, amount, textColor, borderColor }: StatCardProps) => {
  return (
    <div
      className={`bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300 border-t-4 ${borderColor}`}
    >
      <p className="text-gray-500 text-xs uppercase tracking-wide">{title}</p>
      <h3 className={`text-3xl font-bold mt-2 ${textColor}`}>{amount}</h3>
    </div>
  );
};

export default StatCard;
