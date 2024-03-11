
import React from 'react';
import { Link } from 'react-router-dom';

function Product ({ product, deleteProduct }) {

    return ( 
        <div className="card col-3 p-0 mx-5" style={{minHeight:'330px'}}>
            <img className="card-img-top w-100" src={product.imgUrl} alt='' style={{height:'250px'}}/>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <div className="row">
                    <p className="col-3">{product.price}$</p>
                </div>

                <div className="row">
                    <p className="col-6">{product.quantity > 0 ? <span>In stock</span> :  <span className="text-danger">Out of stock</span>}</p>
                </div>
                <button className='btn btn-danger btn-sm' onClick={() => {deleteProduct(product.id)}}>Delete</button>
                <Link className="btn btn-dark btn-sm mx-3" to={`/products/edit/${product.id}`}>Edit</Link>
                <Link className="btn btn-dark btn-sm mx-3" to={`/products/${product.id}`}>Show More</Link>
            </div>
        </div>
    );
}

export default Product ;