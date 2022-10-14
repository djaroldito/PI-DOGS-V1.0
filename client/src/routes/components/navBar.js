import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {
  return (
  <header>
    <NavContainer>
     <NavLink to='/'> <Title>
      Henry Dogs PI
    </Title></NavLink>
   
    <Routediv>
    <NavLink to='/home'>HOME</NavLink>
    <NavLink to='/createDog'>CREATE DOG</NavLink>
    <NavLink to='/about'>ABOUT</NavLink>
    </Routediv>
    </NavContainer>
  </header>
)
}

const Title = styled.h1`
height: 70px;
margin-top: 0;
padding: 5px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
color: white;
font-size: 30px
`
const NavContainer = styled.nav`
height: 50px;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 1200px;
margin-left: auto;
margin-right: auto;

input{
margin-top: auto;
margin-bottom: auto;
}
`
const Routediv = styled.div`
width: 60%;
justify-content: space-between;
text-align: end;
margin-top: auto;
margin-bottom: auto;
a{
margin-left: 10px;
text-decoration: none;
color: white;
font-size: bold;
/* background-color: red; */
border: 1px solid black;
padding: 5px 20px;
border-radius: 5px;
&:hover {
   
   background-color: black;
   transition: 0.5s;
   color:white;
   /* box-shadow: 1px 1px 1px 1px lightcyan; */
 border: 1px  lightcyan;
}
&:before{
  color:white;
  transition: 0.5em;
}
}
`

export default NavBar
