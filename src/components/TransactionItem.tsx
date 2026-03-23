import type { Transaction } from "../types/transaction";

const TransactionItem = ({
  transaction,
  onDelete,
}: {
  transaction: Transaction;
  onDelete: (id: number) => void;
}) => {
  return (
    <div className="flex justify-between items-center bg-white hover:bg-gray-50 border border-gray-200 p-4 rounded-lg hover:shadow-md transition">
      <div>
        <p className="text-gray-900 font-medium">{transaction.title}</p>
        <p className="text-sm text-gray-500">{transaction.date}</p>
      </div>
      <p
        className={`font-semibold ${transaction.type === "income" ? "text-green-600" : "text-red-500"}`}
      >
        {transaction.type === "income" ? "+" : "-"}₦
        {transaction.amount.toLocaleString()}
      </p>
      <button
        onClick={() => onDelete(transaction.id)}
        className="text-gray-400 border border-gray-300 rounded-md p-1 hover:text-red-500 hover:border-red-500 hover:scale-105 shadow-sm hover:shadow-md transition"
      >
        ✕
      </button>
    </div>
  );
};

export default TransactionItem;
