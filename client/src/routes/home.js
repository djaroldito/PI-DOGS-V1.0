import { getDogs, getTemperaments} from "../redux/actions";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FilterBy from "./components/filterBy";
import HomeCard from "./components/homeCard";
import NavBar from './components/navBar';
import c from '../img/c.gif'
import { getGroups } from './../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const alldogs = useSelector((state) => state.filtered);

  useEffect(() => {
    if (alldogs.length === 0) {
      dispatch(getDogs());
      dispatch(getTemperaments());
      dispatch(getGroups())
     
    }
  }, [alldogs.length, dispatch]);
 
  if (Object.values(alldogs).length === 0){
    return (
      <section>
        <NavBar />
        <FilterBy />
        <ContainerDiv>
        <img src={c} alt="henryLoad"></img>
         </ContainerDiv>
      </section>
    );
  }
  
  return (
    <section>
      <NavBar />
      <FilterBy />
      <HomeCard />
    </section>
  );
}

const ContainerDiv = styled.section`
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

export default Home;

