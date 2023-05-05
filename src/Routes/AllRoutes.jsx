import {Routes, Route} from "react-router-dom"
import Home from "../Pages/HomePage"
import Products from "../Pages/ProductsPage"
export default function AllRoutes(){
  return <>
  <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products/>}></Route>
  </Routes>
  </>
}