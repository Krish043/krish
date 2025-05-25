// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Code, Calendar, Brain, Trophy } from "lucide-react"
// import { useEffect, useState } from "react"

// // Hook to animate count-up
// function useCountUp(target: number, totalDuration = 1200) {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     let current = 0
//     const steps = Math.min(target, 60)
//     const stepTime = totalDuration / steps
//     const increment = Math.ceil(target / steps)

//     const interval = setInterval(() => {
//       current += increment
//       if (current >= target) {
//         current = target
//         clearInterval(interval)
//       }
//       setCount(current)
//     }, stepTime)

//     return () => clearInterval(interval)
//   }, [target, totalDuration])

//   return count
// }

// export function QuickStats() {
//   const values = [
//     { icon: <Code className="h-8 w-8 text-blue-600" />, value: 13, label: "Projects Deployed", description: "Across MERN, Next.js, Flask & more" },
//     { icon: <Calendar className="h-8 w-8 text-green-600" />, value: 2, label: "Years of Experience", description: "Internships and freelance work" },
//     { icon: <Brain className="h-8 w-8 text-purple-600" />, value: 350, label: "Problems Solved", description: "LeetCode, Codeforces, (5⭐)HackerRank " },
//     { icon: <Trophy className="h-8 w-8 text-yellow-600" />, value: 5, label: "Hackathons Participated", description: "Won 2 first prizes including HackNUthon" },
//   ]

//   // ✅ Call hooks outside loops
//   const counts = values.map((stat) => useCountUp(stat.value))

//   return (
//     <section className="py-20 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {values.map((stat, index) => (
//             <Card key={index} className="text-center hover:shadow-lg transition-shadow">
//               <CardContent className="p-6">
//                 <div className="flex justify-center mb-4">{stat.icon}</div>
//                 <h3 className="text-3xl font-bold mb-2">{counts[index]}+</h3>
//                 <p className="font-medium mb-1">{stat.label}</p>
//                 <p className="text-sm text-muted-foreground">{stat.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Calendar, Brain, Trophy } from "lucide-react"
import { useEffect, useState } from "react"

export function QuickStats() {
  const stats = [
    { icon: <Code className="h-8 w-8 text-blue-600" />, value: 13, label: "Projects Deployed", description: "Across MERN, Next.js, Flask & more" },
    { icon: <Calendar className="h-8 w-8 text-green-600" />, value: 2, label: "Years of Experience", description: "Internships and freelance work" },
    { icon: <Brain className="h-8 w-8 text-purple-600" />, value: 350, label: "Problems Solved", description: "LeetCode, Codeforces, (5⭐)HackerRank " },
    { icon: <Trophy className="h-8 w-8 text-yellow-600" />, value: 5, label: "Hackathons Participated", description: "Won 2 first prizes including HackNUthon" },
  ]

  // Initialize state for all counters
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const animations = stats.map((stat, index) => {
      let current = 0
      const steps = Math.min(stat.value, 60)
      const stepTime = 1200 / steps
      const increment = Math.ceil(stat.value / steps)

      const interval = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(interval)
        }
        setCounts(prev => {
          const newCounts = [...prev]
          newCounts[index] = current
          return newCounts
        })
      }, stepTime)

      return interval
    })

    return () => animations.forEach(interval => clearInterval(interval))
  }, [])

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{counts[index]}+</h3>
                <p className="font-medium mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}