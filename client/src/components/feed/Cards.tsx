import React from "react";
import { Button, Card } from "react-bootstrap";
import { IFoodDb } from "../../interface/IFoodDb";
//
export const Cards = ({ id, resname, dishname, image, stars }: IFoodDb) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={ image } />
      <Card.Body>
        <Card.Title>{resname}</Card.Title>
        <Card.Text>{dishname}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
