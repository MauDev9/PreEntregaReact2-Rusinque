import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import data from '../../../db/products.json'
export default function ProductDetail(){

    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
    const productData = data.find(product => parseInt(product.id) === parseInt(id))
    setProduct(productData);
}, [id])
    
    if (!product) {
        return <div>Cargando...</div>
    }
    return(
        <>
        <h1>Detalle del producto {product.title}</h1>
        </>
    )
}