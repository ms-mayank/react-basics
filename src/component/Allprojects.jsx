import React from 'react'
import { Link } from 'react-router-dom'

const Allprojects = () => {
  return (
    <>
      <div>
        <Link className='text-white p-2 font-bold bg-green-500 rounded' to={'/counter'}>Go to Counter</Link>
        <br/>
      </div>
      <div>
        <Link className='text-white p-2 m-4 font-bold bg-green-500 rounded' to={'/bgcolor'}>Go to Bgcolor</Link>
      </div>
    </>
  )
}

export default Allprojects