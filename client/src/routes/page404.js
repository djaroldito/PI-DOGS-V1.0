import React from 'react'
import page404 from '../img/llorando.gif'
import NavBar from './components/navBar'

const Page404 = () => {
  return (
    <div>
      <NavBar />
        <h2>404 NOT FOUND</h2>
      <img src={page404} alt='doghenry' />
    </div>
  )
}

export default Page404
