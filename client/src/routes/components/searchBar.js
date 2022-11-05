import {  getByName } from "../../redux/actions"
import {useDispatch} from 'react-redux'
import {  useState } from "react"
import styled from "styled-components"

const SearchBar = () =>{
    
    const dispatch = useDispatch()
    const [input, setinput] = useState({
    name:''
    });
    
    const handlechange = (e) =>{
        setinput({[e.target.name]:e.target.value})
        }

    const handleClick = (e) =>{
        e.preventDefault()
            if(input.name.charAt(0) === ' ' || input.name.length === 0){
            alert('Please enter data...')
            setinput({
                name:''
            })}
            else{
            dispatch(getByName(input.name))
            setinput({
                name:''
            })}
        }

   return(
        <div>
        <Input placeholder="Enter name..."  type='text' value={input.name} name='name' onChange={handlechange}/>
        <Button onClick={handleClick} type='submit'>Search name</Button>
        </div>
    )
}

export default SearchBar


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

const Input = styled.input `
position: relative;
 padding: 10px 15px;
  
  border: none;
  border-radius: 5px;
  
  outline: none;
  transition: all 0.2s;


  color: black;

`;


  

  