import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import data from '../../../db/products.json';
import './ProductsList.css';
export default function ProductsList() {
    console.log(data);
    return (
        <>
            <h1>Todos los productos</h1>
            <div id='allCars'>
                {
                    data.map(car => {
                        return (
                            <article className='car' key={car.id}>
                                <h2 >{car.title}</h2>
                                <p>Precio: {car.price}</p>
                                {
                                    car.sold ? <p className='vendido'>Vendido</p> : <p className='disponible'>Disponible</p>
                                }
                                <Link to={`/products/${car.id}/detail`}><p className='product-detail'>Ver detalle</p></Link>
                            </article>
                        )
                    })
                }
            </div>
        </>
    )
}