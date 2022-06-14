import React from 'react'
import LoginReg from '../components/Login/LoginReg'
import NavBar from '../components/NavBar'

const LoginRegView = (props) => {
    return (
        <div>
            <NavBar searchFunction={props.searchFunction}    
            loginStatus={props.loginStatus}/>
            <LoginReg />
        </div>
    )
}

export default LoginRegView