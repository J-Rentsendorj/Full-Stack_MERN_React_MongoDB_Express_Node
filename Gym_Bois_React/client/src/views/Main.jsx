import React from 'react'
import MainBody from '../components/MainComponents/MainBody'
import NavBar from '../components/NavBar'

const Main = (props) => {
    
    return (
        <div>
            <NavBar searchFunction={props.searchFunction}    
            loginStatus={props.loginStatus}
            />
            <MainBody searchOne={props.searchOne} searchTwo={props.searchTwo}/>
        </div>
    )
}

export default Main