import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import data from '../../../db/products.json'
import './Category.css';
import img from '../../../assets/products/gorra.jpeg'
import imgs from '../../../assets/products/gorra.jpeg'
export default function Category() {
    const { categoryId } = useParams();
    const [category, setCategory] = useState(null); // Utilizar useState correctamente

    useEffect(() => {
        // Filtrar los productos por categoryId
        const filteredCategory = data.filter(product => product.category === categoryId);
        setCategory(filteredCategory); // Utilizar la función setCategory para actualizar el estado
    }, [categoryId]);

    return (
        <div>
            <h1>{categoryId.toUpperCase()}</h1>

            {category && category.map((product) => (
                <article key={product.id} className='product-card'>
                    <h2>{product.title}</h2>
                    <img src={`../../../assets/products/${product.img}`} alt="" /> 
                    <p>{product.description}</p>
                    <p>{product.price}</p>

                    <Link to={`/products/${product.id}/detail`}><h4>Detail</h4></Link>
                </article>
            ))}

        </div>
    );
}