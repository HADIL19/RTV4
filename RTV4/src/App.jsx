import React from 'react'

const App = () => {
  return (
    <div className='bg-deepblue container'>
      <h1 className='text-5xl font-bold text-white'>Hello, Tailwind CSS!</h1>
      <button className='bg-amber text-purple-500 border-4 text-2xl font-bold mt-12 px-6 py-2 rounded '>Click me!</button>
      <input type='texte' placeholder='Enter your name' className='bg-white text-lg text-amber boder-2 p-4 rounded ml-4 outline-0' />
    </div>
  ) 
}

export default App