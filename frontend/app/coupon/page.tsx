'use client'
import { useState } from "react"
//import { Check, Copy, Film } from "lucide-react"
import Link from "next/link"

export default function Coupon() {
  const [copiedCode, setCopiedCode] = useState("")

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(""), 3000)
  }

  return (
    <div className="min-h-screen bg-blue-50 pb-10 relative overflow-hidden flex flex-col">
      {/* Theater curtain effect */}
      <div className="bg-teal-700 h-16"></div>
      <div className="bg-teal-600 h-8 transform -skew-y-3"></div>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Save Big on Movie Tickets
                </h1>
                <p className="mx-auto max-w-[700px] text-teal-500 md:text-xl dark:text-gray-400">
                  Use our exclusive coupons and promotions to enjoy your favorite movies for less.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input className="max-w-lg flex-1 border p-2 rounded" placeholder="Enter coupon code" type="text" />
                  <div
                    onClick={() => { /* Add your button click logic here */ }}
                    className="p-2 bg-blue-500 text-white rounded cursor-pointer"
                  >
                    Apply
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Available Coupons</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Coupon Cards */}
              <div className="border p-4 rounded">
                <div className="mb-2">
                  <h3 className="text-xl font-semibold">Weekend Special</h3>
                  <p className="text-sm text-gray-500">Valid for all movies on weekends</p>
                </div>
                <div className="mb-4">
                  <p className="text-2xl font-bold text-primary mb-2">20% OFF</p>
                  <div className="flex items-center justify-between">
                    <code className="relative rounded bg-gray-200 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                      WEEKEND20
                    </code>
                    <div
                      onClick={() => handleCopyCode("WEEKEND20")}
                      className="flex items-center space-x-2 border p-2 rounded cursor-pointer"
                    >
                      {copiedCode === "WEEKEND20" ? (
                        <>
                          {/*<Check className="h-4 w-4" />*/}
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                         {/* <Copy className="h-4 w-4" /> */}
                          <span>Copy</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Additional Coupon Cards */}
              <div className="border p-4 rounded">
                <div className="mb-2">
                  <h3 className="text-xl font-semibold">Family Pack</h3>
                  <p className="text-sm text-gray-500">For bookings of 4 or more tickets</p>
                </div>
                <div className="mb-4">
                  <p className="text-2xl font-bold text-primary mb-2">15% OFF</p>
                  <div className="flex items-center justify-between">
                    <code className="relative rounded bg-gray-200 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                      FAMILY15
                    </code>
                    <div
                      onClick={() => handleCopyCode("FAMILY15")}
                      className="flex items-center space-x-2 border p-2 rounded cursor-pointer"
                    >
                      {copiedCode === "FAMILY15" ? (
                        <>
                          {/*<Check className="h-4 w-4" />*/}
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                         {/* <Copy className="h-4 w-4" /> */}
                          <span>Copy</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="border p-4 rounded">
                <div className="mb-2">
                  <h3 className="text-xl font-semibold">Matinee Madness</h3>
                  <p className="text-sm text-gray-500">For all shows before 5 PM</p>
                </div>
                <div className="mb-4">
                  <p className="text-2xl font-bold text-primary mb-2">25% OFF</p>
                  <div className="flex items-center justify-between">
                    <code className="relative rounded bg-gray-200 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                      MATINEE25
                    </code>
                    <div
                      onClick={() => handleCopyCode("MATINEE25")}
                      className="flex items-center space-x-2 border p-2 rounded cursor-pointer"
                    >
                      {copiedCode === "MATINEE25" ? (
                        <>
                         {/* <Check className="h-4 w-4" /> */}
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          {/*<Copy className="h-4 w-4" />*/}
                          <span>Copy</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Special Promotions</h2>
            <div className="w-full">
              <div className="flex border-b">
                <div
                  onClick={() => { /* Add tab switching logic here */ }}
                  className="p-2 cursor-pointer"
                >
                  New Releases
                </div>
                <div
                  onClick={() => { /* Add tab switching logic here */ }}
                  className="p-2 cursor-pointer"
                >
                  Coming Soon
                </div>
              </div>
              <div className="p-4">
                {/* Replace TabsContent with conditional rendering or state management */}
                <div>
                  <div className="border p-4 rounded">
                    <div className="mb-2">
                      <h3 className="text-xl font-semibold">Opening Week Special</h3>
                      <p className="text-sm text-gray-500">Get discounts on tickets for movies in their opening week</p>
                    </div>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>10% off on all tickets for new releases</li>
                      <li>Free small popcorn with every ticket purchase</li>
                      <li>Enter code OPENWEEK10 at checkout</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="border p-4 rounded">
                    <div className="mb-2">
                      <h3 className="text-xl font-semibold">Holiday Bonanza</h3>
                      <p className="text-sm text-gray-500">Special discounts during the holiday season</p>
                    </div>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>25% off on all tickets during holiday week</li>
                      <li>Buy 2 get 1 free on select shows</li>
                      <li>Enter code HOLIDAY25 at checkout</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Decorative elements 
      <div className="absolute top-32 left-4 text-teal-200 transform -rotate-12 opacity-50">
        <Film className="w-24 h-24" />
      </div>
      <div className="absolute bottom-32 right-4 text-teal-200 transform rotate-12 opacity-50">
        <Film className="w-24 h-24" />
      </div>
      */}
    </div>
  )
}
