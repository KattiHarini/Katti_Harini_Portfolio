"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "FinanceAI has completely transformed how I manage my money. The AI insights are incredibly accurate and have helped me save over $500 per month.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The budget tracking features are amazing. I love how it automatically categorizes my expenses and sends me alerts when I'm overspending.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Setting and tracking financial goals has never been easier. I've already reached my emergency fund goal 3 months ahead of schedule!",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Freelancer",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "As a freelancer with irregular income, FinanceAI helps me plan better and manage cash flow. The insights are invaluable.",
    rating: 5,
  },
  {
    name: "Lisa Park",
    role: "Small Business Owner",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "The multi-account support is perfect for managing both personal and business finances. Highly recommend!",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Student",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Even as a student with limited income, FinanceAI helps me make the most of my money and build good financial habits.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Loved by thousands of users</h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our users have to say about their experience with FinanceAI.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
