import { useState } from 'react'

export default function Home() {
  const [cards, setCards] = useState([
    {front: 'tree', back: 'árvore'},
    {front: 'ball', back: 'bola'}
  ]);

  const [frontInput, setFrontInput] = useState("");
  const [backInput, setBackInput] = useState(""); 

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setCards([...cards, {front: frontInput, back: backInput}])
    setFrontInput("")
    setBackInput("")
  }

  return (
    <div className='md:container mx-auto'>
      <h1 className='text-3xl font-bold underline mb-10'>
        add card
      </h1>
      <form className='mb-10'>
        <div className='inline-flex items-end b-6 w-full space-x-10'>
          <div className='flex-grow'>
            <label htmlFor='front' className='mb-2 text-sm text-gray-900'>Front</label>
            <input type='text' id='front' value={frontInput} onChange={(e) => setFrontInput(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5' placeholder='tree'/>
          </div>
          <div className='flex-grow'>
            <label htmlFor='back' className='mb-2 text-sm text-gray-900'>Back</label>
            <input type='text' id='back' value={backInput} onChange={(e) => setBackInput(e.target.value)}className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5' placeholder='árvore'/>
          </div>
          <button type="submit" onClick={(e) => handleAdd(e)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 h-fit focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">add</button>
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
