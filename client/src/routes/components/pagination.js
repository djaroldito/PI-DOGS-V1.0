import React, {} from 'react'
import  styled  from 'styled-components';

export default function Pagination({ cardPerPage, totalCards, paginate, currentPage }) {
    
  if(Math.ceil(totalCards / cardPerPage ) < currentPage ) {
    paginate(1)
  }
  //caso search -----1 / 8 = 0,125   ceil(1)  < 22 true  setea paginate en 1  y devuelve ese valor al paginate del homecard
  //otros casos-----174 / 8 = 21,75  ceil(22) < 22 false va abajo vvvvv

  const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalCards / cardPerPage ); i++){
        pageNumbers.push(i); //-----mete en este arreglo los numeros del 1 al 22 ['1','2',....'22']
    }

    return (
      <PaginationContainer>
        {pageNumbers.length >= 1 &&       
          pageNumbers?.map((item) => (
            <NumbersDiv
              key={item}
              onClick={() => paginate(item)}> {/*crea los botones, ejecuta la funcion pasando por parametro el num clikeado  */}
              {item}
            </NumbersDiv>
          ))}
      </PaginationContainer>
    );
  }
  
  const PaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: relative;
    width: 75%;
    text-align: center;
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
    `;
  
  const NumbersDiv = styled.button`
    padding: 5px;
    background-color: rgb(0,0,0,.3);
    border-radius: 50%;
    margin-right: 7px;
    cursor: pointer;
    color: white;
    width: 35px;
    height: 35px;
    text-align: center;
    &:hover {
   
   background-color: lightcyan;
   color:black;
   transition: 0.5s;
   box-shadow: 0.5px 0.5px 0.5px 0.5px lightcyan;
 border: 0.5px  lightcyan;

}
  `;