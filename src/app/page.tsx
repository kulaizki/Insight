export default function Home() {
  return (
    <div className="flex justify-center">
      <div className='flex gap-8 items-center border-4 p-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-6xl font-bold'>Insight</h1>
          <p className='max-w-xl text-lg'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quae
            architecto deserunt quam. Nobis autem assumenda optio porro neque
            ex! Porro, labore ab doloribus quibusdam id nam dolor dolores
            tempore.
          </p>
        </div>
        <img className='rounded-md' src='./maru-red.jpeg' alt='maru' />
      </div>
    </div>
  )
}
