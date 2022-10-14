import React from 'react'
import NavBar from './components/navBar';
import styled from 'styled-components';

const about = () => {
  return (
    
    <div>
      <NavBar />
      <Details>
      <ContainerDiv>
      <h1>Creado Por ARIEL MONTI </h1>
     <br />
     <h2> SOY HENRY!!!!</h2>
      <br />
      <h3>Octubre 2022</h3>
      
     
      </ContainerDiv>
      </Details>
    </div>
  )
}

const Details = styled.div`
height: 100vh;
padding-top: 50px;
color: whitesmoke;

`

const ContainerDiv = styled.section`
height: auto;
width: 600px;
display: flex;
flex-direction: column;
text-align: center;
background-color: rgb(0,0,0,.7);
border-radius: 10px;
border: 1px solid black;
box-shadow: 4px 3px 0 0 rgb(27, 29, 29,.5);`

export default about
