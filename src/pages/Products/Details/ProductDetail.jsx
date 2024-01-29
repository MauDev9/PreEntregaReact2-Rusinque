import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import data from '../../../db/products.json';
import './Details.css';

export default function ProductDetail() {

    const { id } = useParams();
    const [product, setproduct] = useState(null);

    useEffect(() => {
        const productData = data.find(product => parseInt(product.id) === parseInt(id))
        setproduct(productData);
    }, [id])

    if (!product) {
        return <div>productgando...</div>
    }

    return (
        <article className='product-card'>
            <h2>Detalle de {product.title}</h2>
            <p>{product.model}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>Categoria: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
            {
                product.sold ? <p className='vendido'>Vendido</p> : <p className='disponible'>Disponible</p>
            }

        </article>
    )
}