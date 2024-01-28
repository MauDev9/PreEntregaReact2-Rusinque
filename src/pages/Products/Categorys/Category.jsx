import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import data from '../../../db/products.json'
import './Category.css';
export default function Category() {
    const { categoryId } = useParams();
    const [category, setCategory] = useState(null); // Utilizar useState correctamente

    useEffect(() => {
        // Filtrar los productos por categoryId
        const filteredCategory = data.filter(car => car.category === categoryId);
        setCategory(filteredCategory); // Utilizar la función setCategory para actualizar el estado
    }, [categoryId]);
    return (
        <div>
            <h1>{categoryId.toUpperCase()}</h1>

            {category && category.map((car) => (
                <article key={car.id} className='car'>
                    <h2>{car.title}</h2>
                    <p>{car.description}</p>
                    <p>{car.price}</p>

                    <Link to={`/products/${car.id}/detail`}><h4>Detail</h4></Link>
                </article>
            ))}

        </div>
    );
}