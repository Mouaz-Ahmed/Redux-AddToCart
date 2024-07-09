import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from './store/cartSlice'

const Product = (props) => {
    const dispatch = useDispatch();
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.data.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.data.category}</h5>
                <p className="card-text">{props.data.description}</p>
                <button onClick={() => dispatch(addProduct(props.data))} className="btn btn-primary ">Add to Cart</button>
            </div>
        </div>
    )
}

export default Product




