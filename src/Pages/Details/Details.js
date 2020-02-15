import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import React, { Component, Fragment } from 'react';
import Image from 'react-bootstrap/Image'

export const Details = () => (
<Fragment>
<br></br>
  <br></br>
  <br></br>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://cdn.aarp.net/content/dam/aarp/auto/2017/02/1140-classic-car-safety-esp.imgcache.revcf570db4a9bb5bcf23f11618d66eb436.jpg" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    
  </Card>
  
  <Card>
    <Card.Img variant="top"/>
      <Card.Title><br></br><br></br><br></br><br></br>Ford Mustang Cobra Jet</Card.Title>
      <Card.Text>
      428 del año 1968, presentan aspectos de seguridad diferentes a los modelos modernos.
​
      </Card.Text>
    
  </Card>
  
</CardDeck> 
<br></br>
  <br></br>
  <br></br>
  <br></br>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.hemmings.com/blog/wp-content/uploads//2018/08/552691.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn1.mecum.com/auctions/fl0117/fl0117-269791/images/fl0117-269791_2@2x.jpg?1480713276000"
      alt="Third slide"
    />
​
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.motor1.com/images/mgl/36Zm6/s1/1968-ford-mustang-cobra-jet-auction.jpg"
      alt="Third slide"
    />
​
    <Carousel.Caption>
      <h3> </h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <h1></h1>
  <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://www.todomecanica.com/images/blog/2018/enero/Mercedes-300SL.jpg" />
    <Card.Body>
      <Card.Title>Mismo Año </Card.Title>
      <Card.Text>
          1967Jaguar E-Type Roadster q
        </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://assets.entrepreneur.com/content/3x2/2000/auto_clasico.jpg?width=700&crop=2:1" />
    <Card.Body>
      <Card.Title>Misma Marca</Card.Title>
      <Card.Text>
      Ford Mustang convertible 1967 rojo
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://cochesclasicosdehoy.files.wordpress.com/2013/01/ac-shelby-cobra-427.jpg" />
    <Card.Body>
      <Card.Title>Otros</Card.Title>
      <Card.Text>
    AC SHELBY COBRA 427</Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</Fragment>
);
export default Details;
