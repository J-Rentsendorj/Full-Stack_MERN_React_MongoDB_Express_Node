import React from 'react'
import Browse from '../components/Browse/Browse'
import NavBar from '../components/NavBar'


const BrowseView = (props) => {
  return (
    <div>
        <NavBar searchFunction={props.searchFunction}    
        loginStatus={props.loginStatus}/>
        <Browse />
    </div>
  )
}

export default BrowseView