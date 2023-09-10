import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import Categories from './Components/Categories/Categories'
import Footer from './Components/Footer/Footer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Categories/>
      <Footer/>
    </>
  )
}

export default App
