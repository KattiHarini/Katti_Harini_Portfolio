"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Target,
  CreditCard,
  Plus,
  Download,
  Filter,
  MoreHorizontal,
} from "lucide-react"
import { AddTransactionModal } from "@/components/add-transaction-modal"
import { AddGoalModal } from "@/components/add-goal-modal"
import { AddBudgetModal } from "@/components/add-budget-modal"
import { TransactionChart } from "@/components/transaction-chart"
import { SpendingChart } from "@/components/spending-chart"
import { useFinanceData } from "@/hooks/use-finance-data"

export default function DashboardPage() {
  const [showTransactionModal, setShowTransactionModal] = useState(false)
  const [showGoalModal, setShowGoalModal] = useState(false)
  const [showBudgetModal, setShowBudgetModal] = useState(false)

  const { stats, transactions, budgets, goals, addTransaction, addBudget, addGoal, updateGoal, deleteBudget } =
    useFinanceData()

  const handleExportData = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Financial Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's your financial overview.</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" onClick={handleExportData}>
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button onClick={() => setShowTransactionModal(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Transaction
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Total Balance</CardTitle>
              <DollarSign className="h-4 w-4 opacity-90" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.totalBalance.toLocaleString()}</div>
              <p className="text-xs opacity-90">
                <TrendingUp className="inline h-3 w-3 mr-1" />+{stats.balanceChange}% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Monthly Income</CardTitle>
              <TrendingUp className="h-4 w-4 opacity-90" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.monthlyIncome.toLocaleString()}</div>
              <p className="text-xs opacity-90">
                <TrendingUp className="inline h-3 w-3 mr-1" />+{stats.incomeChange}% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Monthly Expenses</CardTitle>
              <CreditCard className="h-4 w-4 opacity-90" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stats.monthlyExpenses.toLocaleString()}</div>
              <p className="text-xs opacity-90">
                <TrendingDown className="inline h-3 w-3 mr-1" />-{stats.expenseChange}% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">Savings Rate</CardTitle>
              <Target className="h-4 w-4 opacity-90" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.savingsRate}%</div>
              <p className="text-xs opacity-90">
                <TrendingUp className="inline h-3 w-3 mr-1" />+{stats.savingsChange}% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="budgets">Budgets</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TransactionChart />
              <SpendingChart />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Transactions */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Your latest financial activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactions.slice(0, 5).map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{transaction.description}</div>
                          <div className="text-sm text-gray-500">{transaction.category}</div>
                        </div>
                        <div
                          className={`font-medium ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}
                        >
                          {transaction.type === "income" ? "+" : "-"}${Math.abs(transaction.amount).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Budget Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Budget Overview</CardTitle>
                  <CardDescription>Your spending vs budget for this month</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {budgets.map((budget) => (
                    <div key={budget.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{budget.category}</span>
                        <span className="text-sm text-muted-foreground">
                          ${budget.spent.toLocaleString()} / ${budget.limit.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={(budget.spent / budget.limit) * 100} className="h-2" />
                      {budget.spent > budget.limit && (
                        <Badge variant="destructive" className="text-xs">
                          Over Budget
                        </Badge>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>All Transactions</CardTitle>
                    <CardDescription>Complete transaction history</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button onClick={() => setShowTransactionModal(true)}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Transaction
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium">{transaction.description}</div>
                        <div className="text-sm text-gray-500">
                          {transaction.category} • {new Date(transaction.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div
                          className={`font-medium ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}
                        >
                          {transaction.type === "income" ? "+" : "-"}${Math.abs(transaction.amount).toLocaleString()}
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="budgets" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Budget Management</CardTitle>
                    <CardDescription>Create and manage your spending budgets</CardDescription>
                  </div>
                  <Button onClick={() => setShowBudgetModal(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Budget
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {budgets.map((budget) => (
                    <Card key={budget.id}>
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg">{budget.category}</CardTitle>
                          <Button variant="ghost" size="sm" onClick={() => deleteBudget(budget.id)}>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between text-sm">
                            <span>Spent: ${budget.spent.toLocaleString()}</span>
                            <span>Limit: ${budget.limit.toLocaleString()}</span>
                          </div>
                          <Progress value={(budget.spent / budget.limit) * 100} className="h-3" />
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>{Math.round((budget.spent / budget.limit) * 100)}% used</span>
                            <span>${(budget.limit - budget.spent).toLocaleString()} remaining</span>
                          </div>
                          {budget.spent > budget.limit && (
                            <Badge variant="destructive">
                              Over Budget by ${(budget.spent - budget.limit).toLocaleString()}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Financial Goals</CardTitle>
                    <CardDescription>Track your progress towards financial milestones</CardDescription>
                  </div>
                  <Button onClick={() => setShowGoalModal(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Set Goal
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {goals.map((goal) => (
                    <Card key={goal.id}>
                      <CardHeader>
                        <CardTitle className="text-lg">{goal.name}</CardTitle>
                        <CardDescription>Target: ${goal.target.toLocaleString()}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between text-sm">
                            <span>Current: ${goal.current.toLocaleString()}</span>
                            <span>{Math.round((goal.current / goal.target) * 100)}%</span>
                          </div>
                          <Progress value={(goal.current / goal.target) * 100} className="h-3" />
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>${(goal.target - goal.current).toLocaleString()} remaining</span>
                            <span>Due: {new Date(goal.deadline).toLocaleDateString()}</span>
                          </div>
                          <Button size="sm" className="w-full" onClick={() => updateGoal(goal.id, 100)}>
                            Add $100
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modals */}
      <AddTransactionModal open={showTransactionModal} onOpenChange={setShowTransactionModal} onAdd={addTransaction} />
      <AddGoalModal open={showGoalModal} onOpenChange={setShowGoalModal} onAdd={addGoal} />
      <AddBudgetModal open={showBudgetModal} onOpenChange={setShowBudgetModal} onAdd={addBudget} />
    </div>
  )
}
