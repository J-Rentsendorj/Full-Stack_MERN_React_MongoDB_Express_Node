import React from 'react'
import Account from '../components/Account/Account'

import NavBar from '../components/NavBar'

const AccountView = (props) => {
  return (
    <div>
        <NavBar searchFunction={props.searchFunction}    
            loginStatus={props.loginStatus}/>
        <Account />
    </div>
  )
}

export default AccountView