import { Link } from "react-router-dom"
import styled from "styled-components"

const LandingPage = () =>{
   return( 
   <BodyPage>
    <Link to='/home'  >
    Please, Bark !!!
    </Link>
    </BodyPage>
)
}

const BodyPage = styled.div`
background-image: url(https://images.unsplash.com/photo-1598134493179-51332e56807f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80);
  background-position: 30% 75%; 
  /* background-image: url(http://m.gettywallpapers.com/wp-content/uploads/2020/11/Dogs-Wallpaper-Desktop.jpg); */
  background-attachment: fixed;
  height: 650px;
  width: 100%;

  a{
    color: black;
    background-color: rgb(0,0,0,0.3);
    text-decoration: none;
    font-size: 35px;
    padding: 15px 25px;
    border-radius: 10px;
    position: relative;
    top: 400px;
    left: 150px;
    border: 2px solid black;
  }
`

export default LandingPage