import React from 'react'
import ListProducts from '../components/ProductComponents/ListProducts'
import NavBar from '../components/NavBar'

const Products = (props) => {
    return (
        <div>
            <NavBar searchFunction={props.searchFunction}/>
            <ListProducts products={props.products}
            equipment={props.equipment}
            training={props.training}
            />
        </div>
    )
}

export default Products