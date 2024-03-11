import React, { useCallback, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const navigate = useNavigate();
    let [product,setProduct] = useState({
        name:'',
        price:0,
        quantity:0,
        imgUrl:'https://source.unsplash.com/random'
    });
    let handleChange = useCallback((e) => {
        const {name, value} = e.target;
        setProduct((old) => ({
            ...old,
            [name] :value,
        }));
    }, [product]);
    
    let addProduct = (e) => {
        e.preventDefault();
        axios.post("http://localhost:2000/products" , product)
        .then((res) => console.log(res))
        .catch(err => console.log(err));
        setProduct({name:'',price:0,quantity:0});
        navigate('/products');
    }

    return ( 
        <div>
            <h1>Add New Product</h1>
            <form action="" onSubmit={addProduct}>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" placeholder="Name" name="name" value={product.name} onChange={handleChange}/>
                    <label htmlFor="floatingInput">Product Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" placeholder="Image" name="imgUrl" value={product.imgUrl} onChange={handleChange}/>
                    <label htmlFor="floatingInput">Product Image</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" placeholder="Price" name="price" value={product.price} onChange={handleChange}/>
                    <label htmlFor="floatingInput">Product Price</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" placeholder="Quantity" name="quantity" value={product.quantity} onChange={handleChange}/>
                    <label htmlFor="floatingInput">Product Quantity</label>
                </div>
                <button className="btn btn-dark">Submit</button>
            </form>
        </div>   
    );
}

export default AddProduct;