'use client'

export default function Page() {
  return (
    <section className="md:px-24">
      <div className='flex flex-col gap-4 p-4 sm:p-8'>
        <h1 className='text-4xl sm:text-6xl font-bold'>Pivot & EMA</h1>
        <p className='text-sm sm:text-lg max-w-full '>
          This strategy uses Pivot Points and Exponential Moving Average (EMA)
          to determine market trends and potential reversal points. It&apos;s
          suitable for both swing and day trading.
        </p>
      </div>
    </section>
  )
}
