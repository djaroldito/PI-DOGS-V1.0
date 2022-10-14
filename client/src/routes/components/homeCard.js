import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Pagination from "./pagination";
import { chargeAll } from "../../redux/actions";

const HomeCard = () => {
  const filtered = useSelector((state) => state.filtered);
  const Dispatch = useDispatch()
  // const  = useSelector (state => state.filtered)    
  const [currentPage, setCurrentPage] = useState(1)
  const [cardPerPage] = useState(8)

  //* indices de la paginación:
  const indexOfLastCard = currentPage * cardPerPage
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  // indexOfLastCard ---->1 * 8 = 8
  // indexOfFirstCard---->8-8= 0
  //slice(0,8) muestra el arreglo en el BOTON PAGINA 1 de la tarjeta 0-7 

  //-------AL MODIFICAR EL CURRENTPAGE A TRAVES DEL SETCURRENTPAGE-A TRAVES DEL PAGINATE--
  //QUE LO PASO POR PROPS A PAGINATION Y EN PAGINATION ASIGNANDOLE UN ONCLICK A TODOS LOS NUMEROS
  //GENERADOS POR UN FOR SACADO DE LA FORMULA totalCards / cardPerPage AHI DEVUELVO EL NUMERO
  //DE PAGINA CLICKEADO POR EL USUARIO DENTRO DE CURRENT PAGE PARA USARLO EN IDEXOFLASTCARD DE MANERA 
  //QUE LA FORMULA PARA EL CASO DE LA PAGINA DOS ME QUED E ASI:
  //indexOfLastCard ---->2 * 8 = 16
  // indexOfFirstCard---->16-8= 8
   //slice(8,16) muestra el arreglo en el BOTON PAGINA 2 recorrido de la tarjeta 8-15 
  var currentCards //"cards" que se deben mostrar en la pantalla
  // en caso de que al buscar un juego en particular no encuentra ninguno
  if(typeof filtered === 'string'){
      currentCards = filtered
    
  }else {
      currentCards = filtered.slice(indexOfFirstCard, indexOfLastCard) //uso los indices para "fraccionar que dogs muestro"
    // slice(0,8) muestra el arreglo en el primer recorrido de la tarjeta 0-7 
  } 

  const paginate = (numeroPagina) => {  //aca recibe el num clikeado gracias al onclick del pagination y setea dicho num en currentpage
    setCurrentPage(numeroPagina) //------para poder usarlo en las formulas de index y saber cortar el arreglo dende corresponda segun la pagina.
  }



  return (
    <main>
      <Pagination
        cardPerPage={cardPerPage}
        totalCards={filtered.length}
        paginate={paginate}
        currentPage={currentPage}
      />
        {/* <Button onClick={()=> Dispatch(chargeAll())}  >LOAD ALL DOGS...</Button> */}
      <CardsContainer>
          {currentCards.map((item) => (
          <CardDiv key={item.id}>
           
            <Name>{item.name}</Name>
            <ImgDiv>
              <img src={item.image} alt={item.name} />
            </ImgDiv>
            {item.temperaments ? (
              <p>
                <b>Temperaments: </b>
                {item.temperaments.join(', ')}.
              </p>
            ) : null}
             {item.breed_group? <p> <b>Group: </b>{item.breed_group}.</p>: null}
             {/* {item.breed_group ? 
              <p>
                <b>Groups: </b>
                {item.breed_group}.
              </p>
             : null} */}
              <p>
                <b>weight: </b>
              {item.weight} KG
            </p>
            <Link to={`/dogs/${item.id}`}>DETAIL</Link>
          </CardDiv>
        ))}
      </CardsContainer>
      <Pagination
        cardPerPage={cardPerPage}
        totalCards={filtered.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </main>
  );
};



const CardsContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  
 
`;
const Name = styled.h3`
  margin-top: 0px;
  width: 100%;
  height: 40px;
`;

export const ImgDiv = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    vertical-align: top;
    border-radius: 5px;
  }
`;

export const CardDiv = styled.div`
  border-radius: 10px;
  border: lightcyan 1px solid;
  margin-top: 15px;
  width: 20%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  text-align: center;
  padding: 15px;
  background-color: rgb(197, 199, 199, 0.75);
  &:hover {
   
   background-color: lightcyan;
   transition: 0.5s;
   box-shadow: 2px 2px 2px 2px lightcyan;
    border: 5px solid lightcyan ;
 
 
}
 
 
  /* :hover {
    
  } */

  p {
    margin-top: 5px;
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: white;
    padding: 7px 15px;
    background-color: rgb(14, 53, 46);
    border-radius: 5px;
    cursor: pointer;
    margin-top: auto;
    box-shadow: 3px 2px 0 0 black;
  }
`;



export default HomeCard;