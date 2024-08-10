import React from 'react'
import Tab from '@/components/home/Tab'

const page = () => {
  return (
    <div className='flex flex-col'>
        <div className='title flex justify-center items-center tracking-widest font-bold m-2'>
            <span className='text-4xl'>TALSTATUS</span>
            <span>reputazione</span>
        </div>

        <div className='action my-16 border rounded-lg p-2 m-2'>
         <Tab></Tab>
        </div>
    </div>
  )
}

export default page