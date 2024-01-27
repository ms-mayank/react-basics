import { useState } from 'react'
import './App.css'
import Counter from './component/Counter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Allprojects from './component/Allprojects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    
    <Routes>
      <Route
      path='/'
      element={<Allprojects/>}
      />
      <Route
      path='/counter'
      element={<Counter/>}
      />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
