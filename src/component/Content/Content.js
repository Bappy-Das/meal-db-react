import React from 'react';
import './Content.css'
import { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup, Row } from 'react-bootstrap';
import Meals from '../Meals/Meals';


const Content = () => {
    const [searchText, setSearchText] = useState([]);
    const [meals, setMeals] = useState([]);


    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText]);

    const HandleSearch = event => {
        const getInputText = event.target.value;
        setSearchText(getInputText)

    }
    return (
        <div>
            {/* <input onChange={HandleSearch} placeholder="search by name" type="text" /> */}
            <InputGroup className="m-3 w-50 mx-auto">
                <FormControl
                    onChange={HandleSearch}
                    placeholder="Search Meal"
                    aria-label="Search Meals Name"
                    aria-describedby="basic-addon2"
                />

                <InputGroup.Text id="basic-addon2">Search Meal</InputGroup.Text>
            </InputGroup>

            {
                <Row xs={1} md={3} className="g-4 m-4">
                    {
                        meals.map(meal => <Meals
                            key={meals.idMeal}
                            meals={meal}></Meals>)
                    }
                </Row>
            }
        </div>
    );
};

export default Content;