import React from 'react'
import GymSetup from "../../img/home-gym-setup.jpg"
import training from "../../img/training.jpg"
import Alpha from "../../img/alpha-brain.jpg"
import women from "../../img/womens.jpg"
import gear from "../../img/gymgear.jpg"
import men from "../../img/mens.jpg"
import styles from '../../modules/NavBar.module.css'
import { Link } from 'react-router-dom'



const MainBody = (props) => {
    const {searchOne, searchTwo} = props

    const equipmentHandler = (e) =>{
        e.preventDefault()
        searchOne("Gym Gear")
    }
    const trainingHandler = (e) =>{
        e.preventDefault()
        searchTwo("Workout training")
    }
    const supplmentHandler = (e) =>{
        e.preventDefault()
        searchTwo("supplments")
    }
    const wapparel = (e) =>{
        e.preventDefault()
        searchTwo("womans apparel")
    }
    const gymGear = (e) =>{
        e.preventDefault()
        searchOne("Gym Gear")
    }
    const mapparel = (e) =>{
        e.preventDefault()
        searchTwo("mens apparel")
    }
    return (
        <div>
            <div className={styles.body_title}><h3 style={{ color: "white" }}>Gym Bois' Deals</h3></div>
            <div className={styles.row}>
                <div className={styles.image}>
                    <img className={styles.img} src={GymSetup} alt="gymsetup" />
                    <div className={styles.details}>
                        <h2>Fitness Equipment</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className={styles.more}>
                            <Link to={"/products"} className={styles.read_more} onClick={(e) => equipmentHandler(e)}>View <span>Deals</span></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <img className={styles.img2} src={training} alt="training" />
                    <div className={styles.details}>
                        <h2>Training Programs</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className={styles.more}>
                            <Link to={"#"} className={styles.read_more} onClick={(e) => trainingHandler(e)}>View <span>Deals</span></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <img className={styles.img3} src={Alpha} alt="alpha" />
                    <div className={styles.details}>
                        <h2>Supplements</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className={styles.more}>
                            <Link to={"#"} className={styles.read_more} onClick={(e) => supplmentHandler(e)}>View <span>Deals</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.image}>
                    <img className={styles.img4} src={women} alt="women" />
                    <div className={styles.details}>
                        <h2>Women's Apparel</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className={styles.more}>
                            <Link to={"#"} className={styles.read_more} onClick={(e) => wapparel(e)}>View <span>Deals</span></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <img className={styles.img5} src={gear} alt="gymgear" />
                    <div className={styles.details}>
                        <h2>GYM GEAR</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className={styles.more}>
                            <Link to={"#"} className={styles.read_more} onClick={(e) => gymGear(e)}>View <span>Deals</span></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <img className={styles.img6} src={men} alt="" />
                    <div className={styles.details}>
                        <h2>Men's Apparel</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className={styles.more}>
                            <Link to={"#"} className={styles.read_more} onClick={(e) => mapparel(e)}>View <span>Deals</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom_box}>
                <a href="/affiliatePage" className={styles.btn_area}>Become an affiliate</a>
                <a href="/contact" className={styles.btn_area}>Contact Us</a>
                <a href="/login" className={styles.btn_area}>Register </a>
            </div>
        </div>
    )
}

export default MainBody