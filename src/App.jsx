import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LearningTailwind from './LearningTailwind'
import Home from './pages/Home'
import Single from './pages/Single'
import AddBlog from './pages/AddBlog'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<Single />} />
      <Route path='/create' element={<AddBlog />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
