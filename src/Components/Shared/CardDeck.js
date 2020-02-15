import React from 'react';
import {
  CardDeck,
  Card
} from 'react-bootstrap';


export const RetroCardDeck = () => (
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://http2.mlstatic.com/manija-elevador-vocho-clasico-60-73-con-concha-y-chaveta-D_NQ_NP_22978-MLM20238844917_022015-F.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://static.turbosquid.com/Preview/2015/10/10__00_50_55/Ford_Mustang_Boss_302_19690000.jpg897adf37-a2b1-482e-8b47-e3999dede9feLarge-1.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.pinimg.com/originals/fa/ba/ad/fabaadc2610498ddc697597a06a70732.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
)

export default RetroCardDeck