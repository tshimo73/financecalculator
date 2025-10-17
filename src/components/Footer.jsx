import React from 'react'

export default function Footer() {

  const currYear = new Date().getFullYear()

  return (
    <footer className='bg-gray-100 p-4 bottom-0 text-sm'>
      &copy; 2025 - {currYear} Tshimologo Moeng at <a href='https://www.tshimologomoeng.co.za' target='_blank' className='text-purple-500'>His Portfolio</a>
    </footer>
  )
}
