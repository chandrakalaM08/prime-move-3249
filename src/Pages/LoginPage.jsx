import Login from "../Components/LoginForm";
import {Box} from "@chakra-ui/react"
import Signup from "../Components/Signup";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



export default function LoginPage() {
  return <Box>
    <Navbar/>
    <Login />
    <Footer/>
  </Box>
}