'use client'

export default function Page() {
  return (
    <section className="md:px-24 w-full">
      <div className='flex flex-col gap-4 p-4 sm:p-8'>
        <h1 className='text-4xl sm:text-6xl font-bold'>RSI & Price Action</h1>
        <p className='text-sm sm:text-lg max-w-full '>
          This strategy uses the Relative Strength Index (RSI) in conjunction
          with Price Action analysis to identify overbought or oversold
          conditions. It&apos;s a popular strategy for momentum trading.
        </p>
      </div>
    </section>
  )
}
