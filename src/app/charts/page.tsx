'use client'

import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets'

export default function Page() {
  return (
    <section className='md:px-24'>
      <div className='flex flex-col gap-4 p-4 sm:p-8'>
        <h1 className='text-4xl font-bold sm:text-6xl'>Charts</h1>
        <div className='mt-4 h-96'>
          <AdvancedRealTimeChart theme='dark' autosize></AdvancedRealTimeChart>
        </div>
      </div>
    </section>
  )
}
