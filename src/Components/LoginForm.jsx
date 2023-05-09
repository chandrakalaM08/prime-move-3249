import React from 'react';

import { useState, useContext } from "react"
import {useNavigate,Navigate} from "react-router-dom"
import { AuthContext } from '../Auth/AuthContext';

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Text,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

function Login() {

     const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    const {login,isAuth,setUserName,setAuth} = useContext(AuthContext)

    if (isAuth) {
      return <Navigate to="/"/>
    }

    async function handleLogin() {
      try {
          let loginsuccess = false
            let res = await fetch(`https://sparkling-fabulous-grandiflora.glitch.me/users`)
        
        res = await res.json()
          console.log("inside try", res,)
          res.filter((user) => {
            if (user.email === email && user.password === password) {
              login(user.token)
              loginsuccess = true
              setUserName(user.first_name + " " + user.last_name)
               
               console.log("login done")
            }
          })
        
        if (loginsuccess === true) {
          navigate("/cart")
        }
        else {
          alert("Wrong Credentials!")
        }
        
        
        } catch (error) {
          console.log("error is", error)
          alert("User Not Found")
        }
       
}

  
  

    function handleSubmit(e) {
      e.preventDefault()
      console.log("yaay")
        handleLogin()
        console.log("in handleSubmit", isAuth)
        if (isAuth) {
            console.log("isAuth inside login page", isAuth)
           
        }
    }



  return (
    <Container maxW='container.2xl' bg={"linear-gradient(90deg, rgba(248, 249, 241, 1) 0%, rgba(226, 239, 241, 1) 100%)"} marginTop={"-30px"} marginBottom={"-130px"}>

      <Flex justify='center' align='center' h='100vh'>
        <Box>


          <Box  my='5' mx='auto' borderRadius='md' maxW='500px' p='5' d='flex' flexDir='column' style={{backgroundColor:"rgb(239, 239, 225)"}} >
            <Heading as='h2' fontWeight='bold' mb='2' textAlign='center' >
              Sign in
            </Heading>
            <Text color='gray.300' mb='3' textAlign='center'>
              Please enter your login and password!
            </Text>
<form onSubmit={handleSubmit}>
            <FormControl mb='4'>
              <FormLabel>Email address</FormLabel>
                <Input type='email' size='lg' onChange={(e) => { setEmail(e.target.value); console.log(e.target.value)}}/>
            </FormControl>

            <FormControl mb='4'>
              <FormLabel>Password</FormLabel>
                <Input type='password' size='lg' onChange={(e) => { setPassword(e.target.value); console.log(e.target.value)}} />
            </FormControl>

            <Checkbox mb='4' colorScheme='teal'>
              Remember password
            </Checkbox>

            <Input bg='rgb(252, 198, 3)' size='lg' mb='2' w='100%' type='submit' cursor={"pointer"}/>
              
              </form>
<Divider/>
          

          </Box>

          <Link to="/signup">
  <Button colorScheme='yellow' size='lg' mb='4' w='100%'>
            {/* <Icon as={FacebookIcon} mr='2' /> */}
            
              Don't have an account ? Click to Sign up !
            </Button>
          </Link>
        
        </Box>
      </Flex>
  
    </Container>
  );
}

export default Login;
