import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

type Props = {
  income: number;
  expenses: number;
};

const ExpenseChart = ({ income, expenses }: Props) => {
  const data = [
    { name: "income", value: income },
    { name: "expenses", value: expenses },
  ];

  const COLORS = ["#16a34a", "#ef4444"];

  return (
    <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Overview</h3>

      <div className="flex gap-4 mb-4 text-sm">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 bg-green-600 rounded-full"></span>
          Income
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          Expenses
        </span>
      </div>

      <div className="w-full h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseChart;
