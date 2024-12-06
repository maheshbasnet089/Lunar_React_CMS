import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LearningTailwind from './LearningTailwind'
import Home from './pages/Home'
import Single from './pages/Single'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<Single />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
