import React, { useState } from 'react'
import logo from "../img/logo1.jpg"
import styles from '../modules/NavBar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const NavBar = (props) => {
    const { searchFunction, loginStatus } = props
    const [searchWord, setSearchWord] = useState("")
    const [logOutState, setLogOutState] = useState("")
    const navigate = useNavigate()
    const api = `https://serpapi.com/search.json?engine=google&q=${searchWord}&api_key=e16508a17a343e33da2654476da99bbbeb97dcd0eb55d8e714c961c69446116f`
    const submitHandler = (e) => {
        e.preventDefault()
        searchFunction(api)
    }

    const loginHandler = (e) => {
        props.setLoginState()
    }

    const logOutFunction = () => {
        axios.delete("http://localhost:8000/api/users/logout", {withCredentials: true})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            <header>
                <img style={{ height: "60px" }} src={logo} alt="logo" />
                <nav>
                    <ul className={styles.nav_area}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/browse">Browse</a></li>
                        <li><a href="/account">Account</a></li>
                        <li>
                            <form onSubmit={submitHandler}>
                                <input className={styles.search_bar} type="text" onChange={(e) => setSearchWord(e.target.value.replace(/\s/g, '*'))}></input>
                                <button>SEARCH</button>
                            </form>
                        </li>
                    </ul>
                </nav>
                <Link to={"/login"} className={styles.btn_area}>Login
                    <button onClick={(e) => logOutFunction(e)} className={styles.logout}>logout</button></Link>
            </header>
        </div>
    )
}

export default NavBar