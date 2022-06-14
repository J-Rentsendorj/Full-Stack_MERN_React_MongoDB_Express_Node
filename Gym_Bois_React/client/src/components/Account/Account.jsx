import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from "react-router-dom"
import styles from '../../modules/Account.module.css'

const Account = (props) => {

  const [user, setUser] = useState({})

  const { user_id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    console.log("useEffect?")
    axios
      .get("http://localhost:8000/api/users/" + user_id)
      .then(res => {
        setUser(res.data)
        console.log(res.data, "res.data")
      })
      .catch(err => console.log(err))
  }, []);

  const deleteHandler = (user_id) => {
    axios
      .delete("http://localhost:8000/api/users/" + user_id)
      .then(res => navigate("/"))
      .catch(err => console.log(err))
  }
  return (
  <div className={styles.body_title}>
      <div className={styles.welcome}>
        {
          (user) ?
          <h1>Welcome to Gym Bois' {user.firstName} {user.lastName}!</h1>
          : null
        }
      </div>
      <div className={styles.bio}>
        <p>Jinn Rentsendorj and Eric Molina proudly present Gym Bois an ecommerce platform
          to find you the best deals on all Gym related gear.</p>
        <p className={styles.soon}>Comming Soon!</p>
      </div>
      <div className={styles.delete}>
        <button onClick={(e) => deleteHandler(user._id)}>Delete Account</button>
      </div>
      
  </div>
  )
}

export default Account