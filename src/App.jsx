
import Header from './Components/Header/Header'
import Categories from './Components/Categories/Categories'
import Footer from './Components/Footer/Footer'
import SimpleCart from './Components/SimpleCart/SimpleCart '
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {



  return (
    <>
      <Header/>
      <SimpleCart/>
      <Categories/>
      <Footer/>
    </>
  )
}

export default App
