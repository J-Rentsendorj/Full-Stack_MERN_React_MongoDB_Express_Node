import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styles from "../../modules/ListProducts.module.css"


const BrowseAll = () => {
  const [fitnessEqp, setFitnessEqp] = useState()
  const [workoutTraining, setWorkoutTraining] = useState()
  const [supplements, setSupplements] = useState()
  const [wApparel, setWApparel] = useState()
  const [GymGear, setGymGear] = useState()
  const [mApparel, setMApparel] = useState()

  useEffect(() => {
    axios.get(`https://serpapi.com/search.json?engine=google&q=Gym+Gear&api_key=e16508a17a343e33da2654476da99bbbeb97dcd0eb55d8e714c961c69446116f`)
      .then(res => {
        setFitnessEqp(res.data)
        console.log("FitnessEqp", res)
      })
      .catch(err => console.log(err))
    axios.get(`https://serpapi.com/search.json?engine=google&q=Workout+training&api_key=e16508a17a343e33da2654476da99bbbeb97dcd0eb55d8e714c961c69446116f`)
      .then(res => {
        setWorkoutTraining(res.data)
        console.log("WorkoutTraining", res)
      })
      .catch(err => console.log(err))
    axios.get(`https://serpapi.com/search.json?engine=google&q=supplements&api_key=e16508a17a343e33da2654476da99bbbeb97dcd0eb55d8e714c961c69446116f`)
      .then(res => {
        setSupplements(res.data)
        console.log("Supplements", res)
      })
      .catch(err => console.log(err))
    axios.get(`https://serpapi.com/search.json?engine=google&q=womans+apparel&api_key=e16508a17a343e33da2654476da99bbbeb97dcd0eb55d8e714c961c69446116f`)
      .then(res => {
        setWApparel(res.data)
        console.log("Womans Apparel", res)
      })
      .catch(err => console.log(err))
    axios.get(`https://serpapi.com/search.json?engine=google&q=Gym+Gear&api_key=e16508a17a343e33da2654476da99bbbeb97dcd0eb55d8e714c961c69446116f`)
      .then(res => {
        setGymGear(res.data)
        console.log("Gym Gear", res)
      })
      .catch(err => console.log(err))
    axios.get(`https://serpapi.com/search.json?engine=google&q=mens+apparel&api_key=e16508a17a343e33da2654476da99bbbeb97dcd0eb55d8e714c961c69446116f`)
      .then(res => {
        setMApparel(res.data)
        console.log("Mens Apparel", res)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className={styles.browse}>
      <div id={styles.main_content}>
        <div className={styles.body_box}>
          <div className={styles.item_list}>
            <h1 style={{ fontSize: '50px', color: 'red' }}>Fitness Equipment!</h1>

            {
              fitnessEqp ?
                fitnessEqp.organic_results.map((product, index) => {
                  return (
                    <div key={index}>
                      <p style={{ fontSize: "30px" }}>{index + 1}: {product.title}</p>
                    </div>
                  )
                }) : null
            }
            <h1 style={{ fontSize: '50px', color: 'red' }}>Workout Training!</h1>
            {
              workoutTraining ?
                workoutTraining.organic_results.map((product, index) => {
                  return (
                    <div key={index}>
                      <p style={{ fontSize: "30px" }}>{index + 1}: {product.title}</p>
                    </div>
                  )
                }) : null
            }
            <h1 style={{ fontSize: '50px', color: 'red' }}>Supplements!</h1>
            {
              supplements ?
                supplements.organic_results.map((product, index) => {
                  return (
                    <div key={index}>
                      <p style={{ fontSize: "30px" }}>{index + 1}: {product.title}</p>
                    </div>
                  )
                }) : null
            }
            <h1 style={{ fontSize: '50px', color: 'red' }}>Women's Apparel!</h1>
            {
              wApparel ?
                wApparel.organic_results.map((product, index) => {
                  return (
                    <div key={index}>
                      <p style={{ fontSize: "30px" }}>{index + 1}: {product.title}</p>
                    </div>
                  )
                }) : null
            }
            <h1 style={{ fontSize: '50px', color: 'red' }}>Gym Gear!</h1>
            {
              GymGear ?
                GymGear.organic_results.map((product, index) => {
                  return (
                    <div key={index}>
                      <p style={{ fontSize: "30px" }}>{index + 1}: {product.title}</p>
                    </div>
                  )
                }) : null
            }
            <h1 style={{ fontSize: '50px', color: 'red' }}>Men's Apparel!</h1>
            {
              mApparel ?
                mApparel.organic_results.map((product, index) => {
                  return (
                    <div key={index}>
                      <p style={{ fontSize: "30px" }}>{index + 1}: {product.title}</p>
                    </div>
                  )
                }) : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowseAll