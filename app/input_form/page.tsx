import React from 'react'
export default function InputForm() {
    async function generatearmy(data: FormData) {
        'use server';
        const formdata = await data.entries()
        console.log(formdata)
    }
  return (
    <div className='border-2 flex items-center justify-center h-screen'>
        <form className='border-2 border-black bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm' action={generatearmy}>
            <div className='mb-4'>
                <label htmlFor="" className='block text-gray-700 text-sm font-bold mb-2'>
                    TownHall
                </label>
                <select name="townhall" id="townhall" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'>
                    <option className=''>Select a townhall</option>
                    <option value="townhall_12">TownHall 12</option>
                    <option value="townhall_13">TownHall 13</option>
                </select>
            </div>
            <div className='mb-6'>
                <label htmlFor="" className='block text-gray-700 text-sm font-bold mb-2'>Armycamp capisaty</label>
                <input name='armycamp' type="number" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
            </div>
            <div className='mb-6'>
                <label htmlFor="" className='block text-gray-700 text-sm font-bold mb-2'>Type of troops</label>
                <input name='troopType' type="number" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
            </div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded'>Submit</button>

        </form>
    </div>
  )
}
