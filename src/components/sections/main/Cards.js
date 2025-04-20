import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const Cards = () => {
  return (
    <div>
         <div className=" mx-auto py-8 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(120px,1fr)]">
        {/* Card 1: Large */}
        <Card
          className="col-span-1 sm:col-span-2 row-span-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        >
          <CardHeader>
            <CardTitle>Featured Item</CardTitle>
            <CardDescription>A spotlight on something important.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              This is a larger card for showcasing key content, like a hero section
              or main feature.
            </p>
          </CardContent>
          <CardFooter>
            <button className="text-sm text-blue-500 hover:underline">
              Learn More
            </button>
          </CardFooter>
        </Card>

        {/* Card 2: Small */}
        <Card
          className="col-span-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        >
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Some numbers or metrics go here.</p>
          </CardContent>
        </Card>

        {/* Card 3: Small */}
        <Card
          className="col-span-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        >
          <CardHeader>
            <CardTitle>Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Latest news or updates.</p>
          </CardContent>
        </Card>

        {/* Card 4: Wide */}
        <Card
          className="col-span-1 sm:col-span-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        >
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              A wider card for summaries, charts, or timelines.
            </p>
          </CardContent>
        </Card>

        {/* Card 5: Medium */}
        <Card
          className="col-span-1 row-span-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        >
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              A taller card for user info, bios, or settings.
            </p>
          </CardContent>
        </Card>

        {/* Card 6: Small */}
        <Card
          className="col-span-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        >
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Quick access to preferences.</p>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  )
}

export default Cards