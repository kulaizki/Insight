'use client'

export default function Page() {
  return (
    <section>
      <div className='flex flex-col gap-4 p-8'>
        <h1 className='text-6xl font-bold'>Pivot & EMA</h1>
        <p className='text-lg'>
          This strategy uses Pivot Points and Exponential Moving Average (EMA)
          to determine market trends and potential reversal points. It's
          suitable for both swing and day trading.
        </p>
      </div>
    </section>
  )
}
