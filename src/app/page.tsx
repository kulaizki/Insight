'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className='flex justify-center p-4 md:p-8'>
      <div className='flex flex-col items-center gap-8 md:flex-row md:gap-8 md:p-8'>
        <div className='flex flex-col gap-8'>
          <h1 className='text-4xl font-bold md:text-6xl'>Trade with Insight</h1>
          <p className='max-w-full font-light text-base leading-7 md:max-w-xl md:text-lg'>
            Choose your own strategies and journalize your trades with ease
          </p>
          <Button>
            <Link
              href='https://www.tradingview.com/chart/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Go to TradingView
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
