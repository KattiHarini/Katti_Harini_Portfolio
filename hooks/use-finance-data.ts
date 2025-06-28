"use client"

import { useState, useCallback } from "react"

interface Transaction {
  id: string
  description: string
  amount: number
  category: string
  type: "income" | "expense"
  date: string
}

interface Budget {
  id: string
  category: string
  limit: number
  spent: number
}

interface Goal {
  id: string
  name: string
  target: number
  current: number
  deadline: string
}

interface Stats {
  totalBalance: number
  monthlyIncome: number
  monthlyExpenses: number
  savingsRate: number
  balanceChange: number
  incomeChange: number
  expenseChange: number
  savingsChange: number
}

export function useFinanceData() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "1",
      description: "Salary",
      amount: 5200,
      category: "Salary",
      type: "income",
      date: "2024-01-01",
    },
    {
      id: "2",
      description: "Grocery Shopping",
      amount: -156,
      category: "Food & Dining",
      type: "expense",
      date: "2024-01-02",
    },
    {
      id: "3",
      description: "Gas Station",
      amount: -45,
      category: "Transportation",
      type: "expense",
      date: "2024-01-03",
    },
    {
      id: "4",
      description: "Netflix Subscription",
      amount: -15,
      category: "Entertainment",
      type: "expense",
      date: "2024-01-04",
    },
    {
      id: "5",
      description: "Freelance Project",
      amount: 800,
      category: "Freelance",
      type: "income",
      date: "2024-01-05",
    },
  ])

  const [budgets, setBudgets] = useState<Budget[]>([
    { id: "1", category: "Food & Dining", limit: 600, spent: 456 },
    { id: "2", category: "Transportation", limit: 400, spent: 234 },
    { id: "3", category: "Entertainment", limit: 200, spent: 123 },
    { id: "4", category: "Shopping", limit: 300, spent: 345 },
  ])

  const [goals, setGoals] = useState<Goal[]>([
    { id: "1", name: "Emergency Fund", target: 10000, current: 8500, deadline: "2024-12-31" },
    { id: "2", name: "Vacation", target: 5000, current: 2300, deadline: "2024-08-15" },
    { id: "3", name: "New Car", target: 25000, current: 12000, deadline: "2025-06-30" },
  ])

  const calculateStats = useCallback((): Stats => {
    const totalIncome = transactions.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0)

    const totalExpenses = Math.abs(
      transactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0),
    )

    const totalBalance = totalIncome - totalExpenses
    const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpenses) / totalIncome) * 100 : 0

    return {
      totalBalance,
      monthlyIncome: totalIncome,
      monthlyExpenses: totalExpenses,
      savingsRate: Math.round(savingsRate * 10) / 10,
      balanceChange: 2.5,
      incomeChange: 8.2,
      expenseChange: 1.2,
      savingsChange: 5.1,
    }
  }, [transactions])

  const addTransaction = useCallback((transaction: Omit<Transaction, "id">) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
    }
    setTransactions((prev) => [newTransaction, ...prev])

    // Update budget spent amount if it's an expense
    if (transaction.type === "expense") {
      setBudgets((prev) =>
        prev.map((budget) =>
          budget.category === transaction.category
            ? { ...budget, spent: budget.spent + Math.abs(transaction.amount) }
            : budget,
        ),
      )
    }
  }, [])

  const addBudget = useCallback((budget: Omit<Budget, "id" | "spent">) => {
    const newBudget: Budget = {
      ...budget,
      id: Date.now().toString(),
      spent: 0,
    }
    setBudgets((prev) => [...prev, newBudget])
  }, [])

  const addGoal = useCallback((goal: Omit<Goal, "id" | "current">) => {
    const newGoal: Goal = {
      ...goal,
      id: Date.now().toString(),
      current: 0,
    }
    setGoals((prev) => [...prev, newGoal])
  }, [])

  const updateGoal = useCallback((goalId: string, amount: number) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === goalId ? { ...goal, current: Math.min(goal.current + amount, goal.target) } : goal,
      ),
    )
  }, [])

  const deleteBudget = useCallback((budgetId: string) => {
    setBudgets((prev) => prev.filter((budget) => budget.id !== budgetId))
  }, [])

  const stats = calculateStats()

  return {
    transactions,
    budgets,
    goals,
    stats,
    addTransaction,
    addBudget,
    addGoal,
    updateGoal,
    deleteBudget,
  }
}
