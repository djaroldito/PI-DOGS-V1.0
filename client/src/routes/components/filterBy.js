import React from 'react'
import { getByTemperaments, filterBy, chargeAll, orderBy,getBygroup } from "../../redux/actions";
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SearchBar from './searchBar';

const FilterBy = () => {
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments);
    const breed_group = useSelector(state => state.breed_group)

   
    const handleSelect = (e) => {      
        dispatch(getByTemperaments(e.target.value));
      e.target.value = 'default'
        };
  
    const handleSelect2 =(e)=>{
      dispatch(orderBy(e.target.value))
      e.target.value = 'default'
        }

        const handleSelect3=(e)=>{
          dispatch(getBygroup(e.target.value))
          e.target.value = 'default'
        }

    return (
      <section>
        <SelectDiv>
          <Select onChange={handleSelect} name="" id="">
            <option value="default">FILTER BY...</option>
          
            <optgroup label="TEMPERAMENTS...">
              {temperaments &&
                temperaments.map((el) => (
                  <option key={el.name} value={el.name}>
                    {el.name}
                  </option>
                ))}
            </optgroup>
            </Select>


             <Select onChange={handleSelect2} name="" id="">
            <option value="default">ORDER BY...</option>
            <optgroup label="Weight">
              <option value="asc">Max to Min</option>
              <option value="desc">Min to Max</option>
            </optgroup>
            <optgroup label="Alphabetic">
              <option value="A-Z">A - Z</option>
              <option value="Z-A">Z - A</option>
            </optgroup>
          </Select>

          <Select onChange={handleSelect3}>
       <option value='default'>GROUPS</option>
       <optgroup label='GROUPS....'>
          {breed_group &&
          breed_group.map((el)=>(
            <option key={el} value={el}>
              {el}
            </option>
            
          ))}

        </optgroup>

      </Select>
         
          <SearchDiv>
            <SearchBar />
          </SearchDiv>
          <Buttons>
            <Button value="TODOS" onClick={() => dispatch(chargeAll())}>
              ALL
            </Button>
            <Button value="DB" onClick={() => dispatch(filterBy("DB"))}>
              DATABASE
            </Button>
            <Button value="API" onClick={() => dispatch(filterBy("API"))}>
              API
            </Button>
          </Buttons>
        </SelectDiv>
      </section>
    );
  };

  const Select = styled.select `
position: relative;
 padding: 10px 15px;
  
  border: none;
  border-radius: 5px;
  background-color: #d4d4d4;
  outline: none;
  transition: all 0.2s;


  color: black;
  &:hover {
   
   background-color: lightcyan;
   transition: 0.5s;
   box-shadow: 1px 1px 1px 1px lightcyan;
 border: 1px  lightcyan;
}

`;


  
  const SelectDiv = styled.div`
    width: 100%;
    display: flex;
    margin-top: 25px;
    margin-left: auto;
    margin-right: auto;
    select {
      margin-right: 10px;
    }
    
  `;
  
  const Buttons = styled.div`
    position: relative;
    justify-content: end;
    text-align: end;
    width: 35%;
    margin-right: 5px;
    button{
      margin-left: 10px;
      
    }
  `

const Button = styled.button `
position: relative;
 padding: 10px 15px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;
display: inline-flex;
background: #d4d4d4;
  color: black;
  &:hover {
   
      background-color: lightcyan;
      transition: 0.5s;
      box-shadow: 1px 1px 1px 1px lightcyan;
    border: 1px  lightcyan;
   }

`;


  
  const SearchDiv = styled.div`
    width: 40%;
    text-align: center;
   
  `;
  
  export default FilterBy;