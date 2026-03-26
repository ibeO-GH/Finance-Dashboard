import StatCard from "../components/StatCard";
import type { Transaction } from "../types/transaction";
import TransactionItem from "../components/TransactionItem";
import { useState, useEffect } from "react";
import AddTransaction from "../components/AddTransaction";
import ExpenseChart from "../components/ExpenseChart";

const Dashboard = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleAdd = (tx: Transaction) => {
    setTransactions((prev) => [tx, ...prev]);
  };

  const handleDelete = (id: number) => {
    setTransactions((prev) => prev.filter((tx) => tx.id !== id));
  };

  const income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const expenses = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const balance = income - expenses;

  const [filter, setFilter] = useState<"all" | "income" | "expense">("all");

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((tx) => tx.type === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#eef2f7] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111827] flex flex-col justify-between text-white p-6">
        <div>
          <h1 className="text-2xl font-bold tracking-light mb-10">FinTrack</h1>

          <nav className="space-y-3">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition"
            >
              Transactions
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition"
            >
              Analytics
            </a>
          </nav>
        </div>
        <div className="text-xs text-gray-400">
          <p>Personal Finance Tracker</p>
          <p className="mt-1">&copy; {new Date().getFullYear()}</p>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            title="Total Balance"
            amount={`₦${balance.toLocaleString()}`}
            textColor="text-gray-900"
            borderColor="border-blue-500"
          />
          <StatCard
            title="Income"
            amount={`₦${income.toLocaleString()}`}
            textColor="text-green-600"
            borderColor="border-green-500"
          />
          <StatCard
            title="Expenses"
            amount={`₦${expenses.toLocaleString()}`}
            textColor="text-red-500"
            borderColor="border-red-500"
          />
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ExpenseChart income={income} expenses={expenses} />
          <AddTransaction onAdd={handleAdd} />
          <div className="bg-white/80 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Recent Transactions
            </h3>

            <div className="flex gap-4 mb-4">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-1 rounded-full text-sm shadow-sm hover:shadow-md hover:scale-105 transition ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"}`}
              >
                All
              </button>

              <button
                onClick={() => setFilter("income")}
                className={`px-4 py-1 rounded-full text-sm shadow-sm hover:shadow-md hover:scale-105 transition ${
                  filter === "income"
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                Income
              </button>

              <button
                onClick={() => setFilter("expense")}
                className={`px-4 py-1 rounded-full text-sm shadow-sm hover:shadow-md hover:scale-105 transition ${
                  filter === "expense"
                    ? "bg-red-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                Expenses
              </button>
            </div>

            <div className="space-y-4">
              {filteredTransactions.length === 0 ? (
                <div className="text-center py-8 border border-dashed border-ggray-200 rounded-xl bgg-white/50">
                  <p className="text-gray-500 text-sm">No transactions yet.</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Add your first transaction to see it here
                  </p>
                </div>
              ) : (
                filteredTransactions.map((tx) => (
                  <TransactionItem
                    key={tx.id}
                    transaction={tx}
                    onDelete={handleDelete}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
