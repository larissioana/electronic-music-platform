import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import ExclusiveCuts from './pages/exclusiveCuts/ExclusiveCuts'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exclusive-cuts" element={<ExclusiveCuts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
