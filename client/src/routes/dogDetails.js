import { useEffect, React } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDetail, clean } from "../redux/actions"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components";
import NavBar from "./components/navBar";
import FilterBy from "./components/filterBy";
import c from '../img/c.gif'

const DogDetail = () =>{
    const dispatch = useDispatch()
    const {idRaza} = useParams()
    
    useEffect(() => {
      dispatch(getDetail(idRaza));
      return ()=> dispatch(clean())
    }, [dispatch, idRaza]);
    
    const detail = useSelector(state => state.dogDetail)

    if (Object.values(detail).length === 0) { //me devuelve los valores de las propiedades del obj en forma de array
     
      return (
        <section>
          <NavBar />
          <FilterBy />
          <ContainerDiv1>
        <img src={c} alt="henryLoad"></img>
         </ContainerDiv1>
        </section>
      );
    }


    return(
    <>
    <NavBar />        
    <Details>
        <ContainerDiv>
            <h2>{detail.name}</h2>            
            <img src={detail.image} alt={detail.name}/>
            {detail.temperaments?<p> <b>Temperaments: </b>{detail.temperaments}.</p>: null}
            {detail.breed_group?<p> <b>Groups: </b>{detail.breed_group}.</p>: null}
            <p><b>Height: </b>{detail.height} metric</p>
            <p><b>Weight: </b>{detail.weight} KG.</p>
            <p><b>Life Span: </b>{detail.life_span}</p>
            <Link to="/home">
            <button>Volver</button></Link>
        </ContainerDiv>
    </Details>
    </>
    )
}

const ContainerDiv1 = styled.section`
height: 180px;
width:380px;
border-radius: 30%;
display: flex;
margin-top:6%;
flex-direction: column;
text-align: center;
////background-color: rgb(0,0,0,.7);
border-radius: 10px;
//border: 1px solid black;
//box-shadow: 4px 3px 0 0 rgb(27, 29, 29,.5);
`

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
box-shadow: 4px 3px 0 0 rgb(27, 29, 29,.5);


img{
  width: 600px;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

button{
  text-align: center;
  padding: 10px 25px;
  width: 25%;
  background-color: rgb(159, 43, 43);
  color: whitesmoke;
  border-radius: 10px;
  margin-bottom: 25px;
  cursor: pointer;
}

p{
  margin-top: 3px;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
}

`

export default DogDetail