import React from 'react'

const CardsSkeleton = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="aspect-square relative rounded-lg overflow-hidden">
          <div className="w-full h-full animate-pulse bg-muted"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 w-3/4 animate-pulse bg-muted rounded"></div>
          <div className="h-4 w-1/2 animate-pulse bg-muted rounded"></div>
        </div>
        <div className="h-9 w-full animate-pulse bg-muted rounded-md mt-auto"></div>
      </div>

    </div>
  )
}

export default CardsSkeleton