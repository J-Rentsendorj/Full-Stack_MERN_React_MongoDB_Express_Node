import React from 'react'
import styles from "../../modules/ListProducts.module.css"


const ListProducts = (props) => {
    const { products, training} = props
    return (
        <div className={styles.browse}>
            <div id={styles.main_content}>
                <div className={styles.body_box}>
                    <div className={styles.item_list}>
                        {
                            products ? 
                            products.organic_results.map((product, index) => {
                                return (
                                    <div key={index}>
                                        <h2 style={{color: "white"}}>Product: {product.title}<h3> <a style={{color: "red", fontSize: 30}} href={product.link}>{product.link}</a></h3></h2>
                                    </div>
                                )
                            })
                            : null
                        }
                        {  
                            training ?
                            training.organic_results.map((program, index) =>{
                                return(
                                    <div key={index}>
                                        <h2 style={{color: "white"}}>Program: {program.title}<h3> <a style={{color: "red", fontSize: 30}} href={program.link}>{program.link}</a></h3></h2>
                                    </div>
                                )
                            })
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListProducts