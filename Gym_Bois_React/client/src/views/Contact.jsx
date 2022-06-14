import React from 'react'
import NavBar from '../components/NavBar'
import ContactUs from '../components/ContactPage/ContactUs'

const Contact = (props) => {
  return (
    <div>
        <NavBar searchFunction={props.searchFunction}    
        loginStatus={props.loginStatus}/>
        <ContactUs />
    </div>
  )
}

export default Contact