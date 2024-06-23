'use client'

export default async function Page() {
  return (
    <section>
      <div className='flex flex-col gap-4 p-8'>
        <h1 className='text-6xl font-bold'>RSI & Price Action</h1>
        <p className='text-lg'>
          This strategy uses the Relative Strength Index (RSI) in conjunction
          with Price Action analysis to identify overbought or oversold
          conditions. It's a popular strategy for momentum trading.
        </p>
      </div>
    </section>
  )
}
