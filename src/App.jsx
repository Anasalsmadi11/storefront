
import Header from './Components/Header/Header'
import Categories from './Components/Categories/Categories'
import Footer from './Components/Footer/Footer'
import SimpleCart from './Components/SimpleCart/SimpleCart '
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './Components/productDetails/ProductDetails'
import {Routes,Route} from 'react-router-dom'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'

function App(props) {

  return (
    <>
      <Header/>

        <SimpleCart/>
      <Routes>  
        <Route  path='/' element={<Categories/>} />
        {/* <Route  path='/' element={<SimpleCart/>} /> */}
        <Route  path='/details/:itemId' element={<ProductDetails/>} />
        <Route  path='/cart' element={<ShoppingCart/>} />
      
      </Routes> 
      
      <Footer/>
    </>
  )
}

export default App
