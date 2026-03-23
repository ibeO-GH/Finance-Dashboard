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
      className="bg-white border border-gray-200 p-5 rounded-xl hover:scale-105 transition space-y-5"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Add Transaction
      </h3>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Name
      </label>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Amount
      </label>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value as "income" | "expense")}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

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
