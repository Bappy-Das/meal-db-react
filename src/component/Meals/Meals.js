import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meals = (props) => {
    const { idMeal, strMeal, strInstructions, strMealThumb } = props.meals
    return (
        <div className="">
            <Col>
                <Card>
                    <Card.Img className="img-fluid p-2 " variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions.slice(0, 350)}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {/* <a href="/"></a> */}
                        <Link to={`/meal/${idMeal}`}>See More</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Meals;