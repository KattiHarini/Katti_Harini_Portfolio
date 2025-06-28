"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, PieChart, Brain, Shield, Smartphone, CreditCard, BarChart3 } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Smart Expense Tracking",
    description: "Automatically categorize and track your expenses with AI-powered insights.",
    color: "text-blue-600",
  },
  {
    icon: Target,
    title: "Goal Setting & Tracking",
    description: "Set financial goals and track your progress with visual indicators.",
    color: "text-green-600",
  },
  {
    icon: PieChart,
    title: "Budget Management",
    description: "Create and manage budgets with real-time spending alerts.",
    color: "text-purple-600",
  },
  {
    icon: Brain,
    title: "AI Financial Advisor",
    description: "Get personalized financial advice based on your spending patterns.",
    color: "text-orange-600",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your financial data is protected with enterprise-grade encryption.",
    color: "text-red-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Access your financial dashboard anywhere with our mobile-first design.",
    color: "text-indigo-600",
  },
  {
    icon: CreditCard,
    title: "Multi-Account Support",
    description: "Connect multiple bank accounts and credit cards in one place.",
    color: "text-teal-600",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Detailed reports and analytics to understand your financial health.",
    color: "text-pink-600",
  },
]

export function FeatureCards() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your finances
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Powerful features designed to help you take control of your financial life.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 ${feature.color}`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
