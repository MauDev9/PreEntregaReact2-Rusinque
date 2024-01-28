import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import data from '../../../db/products.json';
import './Details.css';

export default function ProductDetail() {

    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        const carData = data.find(car => parseInt(car.id) === parseInt(id))
        setCar(carData);
    }, [id])

    if (!car) {
        return <div>Cargando...</div>
    }
    return (
        <article className='car'>
            <h2>Detalle de {car.title}</h2>
            <p>{car.model}</p>
            <p>{car.price}</p>
            <p>{car.description}</p>
            <p>Categoria: {car.category.charAt(0).toUpperCase() + car.category.slice(1)}</p>
            {
                car.sold ? <p className='vendido'>Vendido</p> : <p className='disponible'>Disponible</p>
            }

        </article>
    )
}