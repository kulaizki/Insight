export default function Home() {
  return (
    <div className="flex justify-center p-4 md:p-8">
      <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-center border-4 p-4 md:p-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl md:text-6xl font-bold'>Insight</h1>
          <p className='leading-7 max-w-full md:max-w-xl text-base md:text-lg'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quae
            architecto deserunt quam. Nobis autem assumenda optio porro neque
            ex! Porro, labore ab doloribus quibusdam id nam dolor dolores
            tempore.
          </p>
        </div>
        <img className='rounded-md w-full md:w-auto' src='./maru-red.jpeg' alt='maru' />
      </div>
    </div>
  )
}