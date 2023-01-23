import { useState } from 'react'
import { prisma } from '../lib/prisma';

export const getServerSideProps = async () => {
  const ogCards = await prisma.card.findMany()
  return { props: { ogCards } }
}

export default function Learn({ ogCards }) {
  const [cards, setCards] = useState([...ogCards])
  const [hidden, setHidden] = useState(true)

    const handleNext = (difficulty: Number) => {
      setCards(([first, ...rest]) => [...rest, first])
    }

    return (
      <div className='md:container mx-auto'>
        <h1 className='text-3xl font-bold underline mb-10'>learn</h1>
        <div className='max-w-[50%] m-auto'>
          <div className=' divide-y divide-slate-500 border border-slate-500 bg-slate-100 rounded-md p-5 text-xl space-x-1 text-center'>
            <div className='pb-3'>
              <h2 className='text-slate-400'>What does</h2>
              <h2 className=''>{cards[0].front}</h2>
              <h2 className='text-slate-400'>mean?</h2>
            </div>
            <div className='pt-3'>
              <h2 className={hidden ? ' invisible': ''}>{cards[0].back}</h2>
            </div>
          </div>
          {hidden && <div className='my-5'>
            <button className='block m-auto text-white bg-blue-700 hover:bg-blue-800 h-fit font-medium rounded-lg text-sm px-5 py-2.5' onClick={(e) => {setHidden(false)}}>reveal</button>
          </div>}
          {!hidden && <div className='my-5'>
            <div className='flex justify-around'>
              <button className='font-medium bg-blue-700 rounded-lg text-sm px-5 py-2.5 w-max' onClick={(e)=> handleNext(1)}>1</button>
              <button className='font-medium bg-blue-700 rounded-lg text-sm px-5 py-2.5 w-max' onClick={(e)=> handleNext(2)}>2</button>
              <button className='font-medium bg-blue-700 rounded-lg text-sm px-5 py-2.5 w-max' onClick={(e)=> handleNext(3)}>3</button>
              <button className='font-medium bg-blue-700 rounded-lg text-sm px-5 py-2.5 w-max' onClick={(e)=> handleNext(4)}>4</button>
            </div>
          </div>}
        </div>
      </div>
    )
}