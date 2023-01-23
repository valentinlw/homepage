import styles from '@/styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [cards, setCards] = useState([
    {'front': 'tree', 'back': 'árvore'},
    {'front': 'ball', 'back': 'bola'}
  ]);

  return (
    <div className='md:container mx-auto'>
      <h1 className='text-3xl font-bold underline'>
        add card
      </h1>
      <form>
        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <div>
            <label htmlFor='front' className='mb-2 text-sm text-gray-900'>Front</label>
            <input type='text' id='front' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5' placeholder='tree'/>
          </div>
          <div>
            <label htmlFor='back' className='mb-2 text-sm text-gray-900'>Back</label>
            <input type='text' id='back' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5' placeholder='árvore'/>
          </div>
        </div>
      </form>

      <div>
        {cards.map((card) => (
          <div key={card.front} className='mb-2 flex flex-row bg-slate-100 border rounded-md p-3 divide-x'>
            <div className='basis-1/2 text-center'>{card.front}</div>
            <div className='basis-1/2 text-center'>{card.back}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
