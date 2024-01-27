import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Counter = () => {
  const [count, setCount] = useState(1);
  
  const incCount =()=>{
    /*
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    // Only ^^ increases the count by one, does not matter the times function called.
    BUT--->
    */
  //  Pass the call back function and then it will start working every functon.
   setCount( prevCount => prevCount +1)
   setCount( prevCount => prevCount +1)
   setCount( prevCount => prevCount +1)
  //  once ^^ increase fun called value get jumps to +3 
  }
  const decCount =()=>{
    setCount(count - 1)
  }
  return (
    <div>
      <Link className='btn' to={'/'}>Back</Link>
      <h1> Basic Project: Counter</h1>
      <h2>counter App with current count as:</h2>
      <button onClick={incCount}>Add</button>
      <h1>{count}</h1>
      <button onClick={decCount}>Decrease</button>
    </div>
  )
}

export default Counter