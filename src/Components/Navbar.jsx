import React from "react";
import  "../StyleSheet/Navbar.module.css"

import { Link } from "react-router-dom";

import RoadMaster from "../Assets/RoadMaster.gif"
import { FaSearch} from "react-icons/fa";

import { PhoneIcon} from '@chakra-ui/icons'


import { useState } from "react";

import { AiFillHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";





export default function Navbar (){

  const [signout, setSignOut] = useState(true)
  const [query, setQuery] = useState('');
 

 async function handleSearch(event) {
    event.preventDefault();
    // Perform the search
    // (Replace this with your own search functionality)
    const response = await fetch(`https://statuesque-vast-beet.glitch.me/products=${query}`);
    const data = await response.json();
    // Pass the search results as a query parameter to the products page

  }

 const handleClick = () =>{
  localStorage.removeItem('token');
  window.localStorage.setItem("user","User")
  setSignOut(!signout)
 }

 const  user = localStorage.getItem("user") || "user";
  

  return (
    <div className="whole">
      <div className="top" style={{display:"flex", justifyContent:"space-between", margin : "5px 35px 5px 35px", paddingBottom: "2px"}}>
     
    <div>
    <p> Help | Order Status </p>
    </div>

    <div>
    <p> <span style={{fontWeight :"bold"}}>Free Shipping : </span> On All U.S. Orders Above $100  </p>
    </div>

    <div>
    <p>  <PhoneIcon/> 123.456.7890</p>
    </div>

      </div>
 {/*  First Nav Bar */}
        {/* { 1st logo part  */}
        <div style={{display:"flex", justifyContent:"space-between", margin : "5px 0px 5px 0px", background:"#EFEFE1", height:"55px"}}>
        <div className="logo">
        
        <a href="/">
        <img src={RoadMaster} alt="logo_image" width={"90"}  style={{marginLeft:"45px",marginTop:"-12px" , 
background: "linear-gradient(316deg, ##D7D7D7 0%, #2e4057 74%)"}} />
        </a>
   
    </div> 

    {/* 2nd menu part  */}
   
        <div style={{ fontSize: "12px",margin:"auto" }} className="input">
          <form onSubmit={handleSearch}>
            <input
              style={{
                borderRadius: "5px 0px 0px 5px",
                width: "450px",
                fontSize: "16px",
                padding: "8px",
                borderStyle:"none",
                marginBottom:"6px"
              }}
              type="text"
              placeholder="Search by Make Modal Year,Product Type,Part Number ..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button
              style={{
                backgroundColor: "rgb(252, 198, 3)",
                borderRadius: "0px 5px 5px 0px",
                padding: "11px 12px 15px 12px",
                marginTop: "5px",
                fontSize:"15px"
              }}
              type="submit"
            >
              <FaSearch />
            </button>
          </form>
        </div>

  
    <div className="social-media" style={{ paddingTop: "10px",display:"flex",  justifyContent:"space-around", width: "400px",fontSize: "17px" ,margin:"auto",  marginBottom:"14px"}}>


<div>
              
<Link to="/login">   <p>My Account</p> </Link>                
</div>

<div>
          <Link  to="/">
        
          <p>Garage</p> 
          </Link>
        </div>

      
        <div>
          <Link to="/wishlist">
            <AiFillHeart />
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <AiOutlineShoppingCart />
          </Link>
        </div>
 
    </div>
        </div>
      
     
{/* Second Navbar */}
      <div >
        <ul id="navbar2" style={{display: "flex", justifyContent :"space-around", fontSize : "17px", fontFamily:"serif" , color:"grey", marginTop: "5px"}}>
          <li>
            <Link to="/product">Exterior</Link>
          </li>
          <li>
            <Link to="/product?category=Rings">Interior</Link>
          </li>
          <li>
            <Link to="/product?category=Earrings">Performance</Link>
          </li>
          <li>
            <Link to="/product?category=Bracelets" >Wheels & Tires</Link>
          </li>
          <li>
            <Link to="/product">Body Parts</Link>
          </li>
          <li>
            <Link to="/product?category=Mangalsutra">Repair Parts</Link>
          </li>
          <li>
            <Link to="/">Electronics</Link>
          </li>
          <li>
            <Link to="/product">Tools & Garage</Link>
          </li>
    
        </ul>
      </div>
    </div>
  );
};
