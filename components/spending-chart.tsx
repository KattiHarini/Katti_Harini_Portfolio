"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Food & Dining", value: 456, color: "#3b82f6" },
  { name: "Transportation", value: 234, color: "#10b981" },
  { name: "Shopping", value: 345, color: "#f59e0b" },
  { name: "Entertainment", value: 123, color: "#ef4444" },
  { name: "Bills & Utilities", value: 567, color: "#8b5cf6" },
  { name: "Other", value: 189, color: "#6b7280" },
]

export function SpendingChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending Breakdown</CardTitle>
        <CardDescription>Category-wise expenses for this month</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Amount"]} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
