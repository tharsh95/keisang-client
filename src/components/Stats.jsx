import React from 'react'
import { boxConfig } from '../boxConfig'
import Box from './Box'

const Stats = () => {
  return (
    <>
    <div>
        <h1 className='font-semibold'>Recent Gathered Data 04/01/2024</h1>
        <div className='flex  gap-8 p-2 justify-center'>
            {boxConfig?.map(el => <Box key={el.id} label={el.label} value={el.value}/>)}
        </div>
    </div>
    </>
  )
}

export default Stats