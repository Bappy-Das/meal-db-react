import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import SingleMeal from '../SingleMeal/SingleMeal';

const Meal = () => {
    const { mealID } = useParams();
    const [mealInfo, setMealInfo] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
            .then(res => res.json())
            .then(data => setMealInfo(data.meals))
    }, [mealID])
    return (
        <Container>
            <div className="m-5">
                {/* <h1>This is Single Meal {mealInfo.idMeal}</h1> */}
                {
                    mealInfo.map(meal => <SingleMeal meal={meal}></SingleMeal>)
                }

            </div>
        </Container>
    );
};

export default Meal;