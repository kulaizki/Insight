'use client'

import { Table } from '@/components/ui/table'

export default async function Page() {
  return (
    <section className="md:px-24 w-full">
      <div className='flex flex-col gap-4 p-4 sm:p-8'>
        <h1 className='text-4xl sm:text-6xl font-bold'>Journal</h1>
        <p className='text-sm sm:text-lg max-w-full '>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quae
          architecto deserunt quam. Nobis autem assumenda optio porro neque ex!
          Porro, labore ab doloribus quibusdam id nam dolor dolores tempore.
        </p>
        {/* table will include trade history */}
        <Table />
      </div>
    </section>
  )
}
