import type { Transaction } from "../types/transaction";

const TransactionItem = ({
  transaction,
  onDelete,
}: {
  transaction: Transaction;
  onDelete: (id: number) => void;
}) => {
  return (
    <div className="flex justify-between items-center bg-white/80 backdrop-blur-md border border-white/40 p-4 rounded-xl shadow-sm hover:shadow-md transition duration-200">
      <div>
        <p className="text-gray-900 font-medium text-sm">{transaction.title}</p>
        <p className="text-xs text-gray-400 mt-1">{transaction.date}</p>
      </div>
      <div className="flex items-center gap-4">
        <p
          className={`font-semibold text-sm ${transaction.type === "income" ? "text-green-600" : "text-red-500"}`}
        >
          {transaction.type === "income" ? "+" : "-"}₦
          {transaction.amount.toLocaleString()}
        </p>
        <button
          onClick={() => onDelete(transaction.id)}
          className="text-gray-400 hover:text-red-500 transition hover:scale-110"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default TransactionItem;
