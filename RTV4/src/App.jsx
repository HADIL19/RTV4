import React from 'react'

const App = () => {
  return ( 
    <div className='bg-deepblue container'>
      <h1 className='text-5xl font-bold text-white'>Hello, Tailwind CSS!</h1>
      <button className='bg-amber text-purple-500 border-4 text-2xl font-bold mt-12 px-6 py-2 rounded  animate-pulse'>Click me!</button>
      <input type='texte' placeholder='Enter your name' className='bg-white text-lg text-amber boder-2 p-4 rounded ml-4 outline-0' />
      <div className='grid grid-cols-3 @max-md:grid-cols-1/* grid-cols-1 @sm:grid-cols-2 /*ki ndano fenetre yb9a yban kolsh malgre nsagroha  @lg:grid-cols-4 gap-4'>
    
    <div className='@container border p-4  '>
     <div className='flex  gap-4'>
        <div className='bg-blue-500 h-40 w-64'> </div> 
        <div className='bg-green-500 h-40 w-64 @min-md:lx-hidden'> </div> 
        <div className='bg-red-500 h-40 w-64'> </div> 

    </div> </div>

  <div className='bg-blue-500 h-96 w-96 flex items-center justifu-center text-white text-4xl fon-boold transform-style-3d transform hover:scale-150 hover:translate-z-20 transition-transform duration-300'>3D Box</div>
</div>

<div className='bg-linear-45 from-blue-500 to-green-500 p-8 rounded text-2xl
font-bold text-white'> angeled gradient</div>
<div className='min-h-screen flex items-center justify-center bg-gray-100'>
  <div className='size-64 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600'></div>
   <div className='bg-radial from-yellow-500 to-red-500 h-64 w-64 rounded-full'>
    </div> 
  </div>
</div>
  ) 
}

export default App