import React from 'react'

const OrderPlace = ({setOrderPlaced}) => {
  return (
    <section className='flex justify-center items-center bg-black/95 fixed inset-0 z-40'>
        <div className='bg-zinc-100 p-8 w-[400px] rounded-lg border-1 border-zinc-300'>
            <h2 className='text-3xl text-green-600 text-center font-bold'>OrderPlaced!</h2>
            <p className='text-zinc-800 my-4 text-center'>Thanks for your Purchase!</p>
            <div className='flex justify-center items-center'>

            <button className='px-6 py-3 bg-blue-600 text-white active:bg-blue-700 rounded-lg ' onClick={()=>setOrderPlaced(false)}>Close</button>
            </div>
        </div>
    </section>
  )
}

export default OrderPlace