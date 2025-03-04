import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UploadTextData from './components/UploadTextData'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <UploadTextData/> */}
     <Navbar/>
    </>
  )
}

export default App
