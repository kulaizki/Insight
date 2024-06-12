'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className='flex justify-center p-4 md:p-8'>
      <div className='flex flex-col items-center gap-4 border-4 p-4 md:flex-row md:gap-8 md:p-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl font-bold md:text-6xl'>Insight</h1>
          <p className='max-w-full text-base leading-7 md:max-w-xl md:text-lg'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quae
            architecto deserunt quam. Nobis autem assumenda optio porro neque
            ex! Porro, labore ab doloribus quibusdam id nam dolor dolores
            tempore.
          </p>
          <Button>
            <Link href='./dashboard'>Go to Dashboard</Link>
          </Button>
        </div>
        <img src='./maru-red.jpeg' alt='' />
      </div>
    </div>
  )
}
