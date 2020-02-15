import React,{Component} from "react"
import axios from "axios"
import RetroCardDeck from './RetroCardDeck';
import {
  Row,
  Col
} from 'react-bootstrap';

 export default class Retroaxios extends Component{
   state = {
      cars : []
   }
   componentDidMount(){
     console.log("Componente montado");
     axios.get("https://retrocar1.herokuapp.com/Carros/read")
     .then(res => {
       console.log('Data de peticion: \n', res.data);
       this.setState({cars:res.data});
     })
     .catch( error =>{
       console.log(error)
       console.log("error hola")
     })
   }

   renderCars(){
    return this.state.cars.map( carro => {
      return (
        <Col xs={3}>
          <RetroCardDeck img={carro.img_url} carro={carro.carro} tipo={carro.tipo} country={carro.country} year={carro.year}/>
        </Col>
      )
    })
   }

   render() {
        return(
        <Row style={{display:'flex'}}>
          
              { this.renderCars( ) }
        </Row>
        )
    }
};