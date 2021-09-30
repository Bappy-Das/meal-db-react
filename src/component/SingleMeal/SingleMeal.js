import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const SingleMeal = (props) => {
    const { strMeal, strCategory, strArea, strInstructions, strMealThumb } = props.meal
    return (

        <Card>
            <Card.Header><h1>{strMeal}</h1>
            </Card.Header>
            <Row className="align-items-center justify-content-center">
                <Col className="text-center">
                    <Card.Img className="img-fluid p-5 " variant="top" src={strMealThumb} />
                    {/* <Card.Title>Meal Name : {strMeal}</Card.Title> */}
                    <p>Category : {strCategory}</p>
                    <p>Area : {strArea}</p>
                </Col>
                <Col>

                    <Card.Body className="p-4 ">
                        <Card.Text>
                            {strInstructions}
                        </Card.Text>

                    </Card.Body>
                    {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                </Col>
            </Row>
        </Card>
    );
};

export default SingleMeal;