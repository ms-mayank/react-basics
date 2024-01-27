import {Link} from 'react-router-dom'
import {useState} from 'react'

const Bgcolor = () => {
const [color, setColor] = useState('olive')
  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor: color}}>
        <Link className='btn' to={'/'}>Back</Link>
      <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2 '>
      <div className=' flex flex-wrap justify-center gap-3 shadow-lg inset-x-0 px-2 '>
        <button style={{backgroundColor: 'red'}} onClick={()=> setColor('red')}>Red</button>
        <button style={{backgroundColor: 'green'}} onClick={()=> setColor('green')}>Green</button>
        <button style={{backgroundColor: 'blue'}} onClick={()=> setColor('blue')}>Blue</button>
        </div>

        
      </div>
    </div>
  )
}

export default Bgcolor
