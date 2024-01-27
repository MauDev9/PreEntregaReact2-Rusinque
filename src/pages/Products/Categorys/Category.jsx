import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import data from '../../../db/products.json'
export default function ProductDetail(){
    const {id} = useParams();
    const [category, setCategory] = useState(null);

    useEffect(() => {
    const categoryData = data.find(category => category.category === id)
    setCategory(categoryData);
}, [id])
    
    console.log('====================================');
    console.log(category);
    console.log('====================================');
  
    return(
        <>
        <h1>Todas las {category}</h1>
        </>
    )
}