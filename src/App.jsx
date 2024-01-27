
import './App.css'
import Counter from './component/Counter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Allprojects from './component/Allprojects'
import Bgcolor from './component/Bgcolor'

function App() {

  return (
    <BrowserRouter>
    
    <Routes>
      <Route
      path='/'
      element={<Allprojects/>}
      />
      <Route
      path='counter'
      element={<Counter/>}
      />
      <Route
      path='bgcolor'
      element={<Bgcolor/>}
      />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
