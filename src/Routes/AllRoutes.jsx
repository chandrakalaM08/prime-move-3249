import {Routes, Route} from "react-router-dom"
import Home from "../Pages/HomePage"
import Products from "../Pages/ProductsPage"
import Signup from "../Components/Signup"
import LoginPage from "../Pages/LoginPage"
import CartPage from "../Pages/CartPage"
export default function AllRoutes(){
  return <>
  <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/cart" element={<CartPage/>}></Route>
  </Routes>
  </>
}