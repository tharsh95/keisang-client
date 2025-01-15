import { ChevronDown } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div>
        <div className='w-full h-[69px] bg-[#404041] flex justify-between items-center'>
            <div className='m-8 flex items-center gap-4'>
                <div className='rounded-full  p-6 border border-[#ff9a26]'></div>
                <p className='text-white font-semibold'>Admin Console</p>
                <p className='rounded-2xl bg-white p-1 text-xs'>ADMIN VIEW</p>
            </div>
            <div className='m-8 flex items-center gap-4'>
              <p className='rounded-full bg-[#ff9a26] p-4'></p> 
              <p className='text-white'>Support</p>
              <div className='rounded-xl bg-[#252626] p-4 flex items-center gap-2'>
                <p className='rounded-full bg-white w-6 h-6'></p>
                <p className='text-white'>Jane</p>
            <ChevronDown color='#ff9a26' />

              </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Navbar