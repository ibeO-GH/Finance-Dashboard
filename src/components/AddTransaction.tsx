import { useState } from "react";
import type { Transaction } from "../types/transaction";

type Props = {
  onAdd: (tx: Transaction) => void;
};

const AddTransaction = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "expense">("income");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !amount) return;

    const newTransaction: Transaction = {
      id: Date.now(),
      title,
      amount: Number(amount),
      type,
      date: new Date().toISOString().split("T")[0],
    };

    onAdd(newTransaction);

    setTitle("");
    setAmount("");
    setType("income");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-sm hover:shadow-md transition space-y-5"
    >
      <h3 className="text-lg font-semibold text-gray-900">Add Transaction</h3>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">
          Title
        </label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-200 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">
          Amount (₦)
        </label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-gray-200 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">
          Type
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as "income" | "expense")}
          className="w-full border border-gray-200 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 shadow-sm hover:shadow-md transition"
      >
        Add
      </button>
    </form>
  );
};

export default AddTransaction;
