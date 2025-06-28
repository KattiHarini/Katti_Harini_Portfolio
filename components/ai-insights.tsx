"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react"

const insights = [
  {
    icon: TrendingUp,
    type: "Opportunity",
    title: "Increase Savings Rate",
    description: "You could save an additional $200/month by reducing dining out expenses.",
    impact: "High",
    color: "text-green-600",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    icon: AlertTriangle,
    type: "Warning",
    title: "Budget Overspend",
    description: "Your shopping budget is 15% over limit this month.",
    impact: "Medium",
    color: "text-orange-600",
    badgeColor: "bg-orange-100 text-orange-800",
  },
  {
    icon: Lightbulb,
    type: "Tip",
    title: "Investment Opportunity",
    description: "Consider investing your emergency fund surplus in a high-yield savings account.",
    impact: "Low",
    color: "text-blue-600",
    badgeColor: "bg-blue-100 text-blue-800",
  },
]

export function AIInsights() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center mb-4">
            <Brain className="h-8 w-8 text-purple-600 mr-2" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">AI-Powered Insights</h2>
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Get personalized financial advice and insights powered by machine learning.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {insights.map((insight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 ${insight.color}`}
                    >
                      <insight.icon className="h-5 w-5" />
                    </div>
                    <Badge className={insight.badgeColor}>{insight.impact} Impact</Badge>
                  </div>
                  <CardTitle className="text-lg">{insight.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">{insight.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{insight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <Brain className="h-12 w-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Financial Assistant</h3>
                <p className="text-gray-600 mb-4">
                  Our AI analyzes your spending patterns, income trends, and financial goals to provide personalized
                  recommendations that help you make better financial decisions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-purple-600">Pattern Recognition</div>
                    <div className="text-gray-600">Identifies spending trends</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-purple-600">Predictive Analytics</div>
                    <div className="text-gray-600">Forecasts future expenses</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-purple-600">Goal Optimization</div>
                    <div className="text-gray-600">Suggests goal adjustments</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
