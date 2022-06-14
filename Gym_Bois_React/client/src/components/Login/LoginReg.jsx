import React, { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import styles from '../../modules/LoginReg.module.css'
import { useEffect } from 'react'


const Main = (props) => {

    const { loginStatus } = props
    
    const [registerState, setRegisterState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errorState, setErrorState] = useState({})

    const navigate = useNavigate()

    const [password, setPassword] = useState("");

    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        setRegisterState({
            ...registerState,
            [e.target.name]: e.target.value
        })
        if (e.target.value != registerState.password) {
            setConfirmPasswordError("Password Does Not Match");
        } else {
            setConfirmPasswordError("");
        }
    }



    const [loginState, setLoginState] = useState({
        email: "",
        password: ""
    })

    const getAllUsers = () => {
        axios.get("http://localhost:8000/api/users", { withCredentials: true })
            .then(res => console.log(res))
            .catch(err => {
                console.log(err)
                if (err.response.status === 401) {
                    console.log("UNAUTHORIZED", err)
                }
                else if (err.response.status === 400) {
                    console.log("BAD REQUEST")
                }
            })
    }

    const registerSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/users/register", registerState, { withCredentials: true })
            .then(res => navigate('/account/' + res.data._id))
            .catch(err => {
                console.log(err.response.data)
                const { errors } = err.response.data;
                console.log(errors)
                const errObj = {}

                for (const [key, value] of Object.entries(errors)) {
                    console.log(errors[key])
                    errObj[key] = value;
                }
                setErrorState(errObj)
            })
    }
    const [userInfo, setUserInfo] = useState("")
    const loginSubmit = e => {
        const loggedUser={useState}
        e.preventDefault()
        axios.post("http://localhost:8000/api/users/login", loginState, { withCredentials: true })
            .then(res => {
                axios.get("http://localhost:8000/api/user/login", loggedUser)
                    .then(res => {
                        console.log(res.data._id)
                        setUserInfo(res.data._id)
                        navigate('/account/' + res.data._id)})
                    .cath(err => console.log(err))
            })
            .catch(err => console.log(err))
        console.log(loginState, "hello")
    }

    const registerChangeHandler = e => {
        setRegisterState({
            ...registerState,
            [e.target.name]: e.target.value
        })
    }

    const loginChangeHandler = e => {
        setLoginState({
            ...loginState,
            [e.target.name]: e.target.value,
        })

    }
    return (
        <div className={styles.container}>
            <div className={styles.register}>
                <h1>Register</h1>
                <form className={styles.top} onSubmit={registerSubmit}>
                    <p className={styles.firstName}>
                        First Name:
                        <input name="firstName" type="text" onChange={registerChangeHandler} />
                        {(errorState.firstName) ? <small>Please Enter First Name</small> : null}
                    </p>
                    <p className={styles.lastName}>
                        Last Name:
                        <input name="lastName" type="text" onChange={registerChangeHandler} />
                        {(errorState.lastName) ? <small>Please Enter Last Name</small> : null}
                    </p>
                    <p className={styles.email}>
                        Email:
                        <input name="email" type="text" onChange={registerChangeHandler} />
                        {(errorState.email) ? <small>Please Enter Email</small> : null}
                        {(errorState.duplicate) ? <small style={{ color: 'red' }} className="ml-1-text-danger font-weight-bold">EMAIL ALREADY EXISTS </small> : null}
                    </p>
                    <p className={styles.password}>
                        Password:
                        <input name="password" type="password" onChange={registerChangeHandler} />
                        {(errorState.password) ? <small>Please Enter Password</small> : null}
                    </p>
                    <p className={styles.confirmPassword}>
                        Confirm Password:
                        <input name="confirmPassword" type="password" onChange={(e) => handleConfirmPassword(e)} />
                        {confirmPasswordError ? <p style={{ color: 'red' }}>{confirmPasswordError}</p> : ''}

                    </p>
                    <button>Register</button>

                </form >
            </div>
            <div className={styles.login}>
                <h1>Login</h1>
                <form onSubmit={loginSubmit} >
                    <p className={styles.email}>
                        Email:
                        <input name="email" type="text" onChange={loginChangeHandler} />
                    </p>
                    <p className={styles.password}>
                        Password:
                        <input name="password" type="password" onChange={loginChangeHandler} />
                    </p>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form >
            </div>
        </div>
    )
}

export default Main