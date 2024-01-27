import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import data from '../../../db/products.json';
export default function ProductsList(){
    console.log(data);
    return (
        <>
        <h1>Todos los productos</h1>
        {
            data.map(car => {
                return (
                    <>
                    <h3 key={car.id}>{car.title}</h3>
                    <Link to={`/products/${car.id}/detail`}><h4>Detail</h4></Link>
                    </>
            )})
        }
        </>
    )
}