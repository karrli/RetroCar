import React from 'react';
import {
  Card
} from 'react-bootstrap';


export const RetroCardDeck = (props) => (
  <Card>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.carro}</Card.Title>
      <Card.Text>
        {props.tipo}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{props.year}</small>
    </Card.Footer>
  </Card>
)

export default RetroCardDeck