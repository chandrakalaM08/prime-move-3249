import {Routes, Route} from "react-router-dom"
import Home from "../Pages/HomePage"
import Products from "../Pages/ProductsPage"
import Signup from "../Components/Signup"
import LoginPage from "../Pages/LoginPage"
import CartPage from "../Pages/CartPage"
import PaymentCheckout from "../Pages/PaymentCheckout"
import SingleProduct from "../Pages/SingleProductPage"
import PrivateRoute from "./PrivateRoute"
import PageNotFound from "../Pages/PageNotFound"
export default function AllRoutes(){
  return <>
  <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>}></Route>
      <Route path="/payment" element={<PrivateRoute><PaymentCheckout /></PrivateRoute>}></Route>
      <Route path="/products/:id" element={
        <SingleProduct />}>
      </Route>
      <Route path="/*" element={<PageNotFound/>}></Route>
  </Routes>
  </>
}