import React,{Component} from "react"
import axios from "axios"

 export default class Retroaxios extends Component{
   state = {
      clientes : []
   }
   componentDidMount(){
     console.log("Componente montado");
    //  axios.get("https://retrocar1.herokuapp.com/Carros/read")
    //  .then(res => {
    //    console.log('Data de peticion: \n', res.data);
    //    this.setState({clientes:res.data});
    //  })
    //  .catch( error =>{
    //    console.log(error)
    //    console.log("error hola")
    //  })
   }

   renderLawyers(){
    return this.state.clientes.map( abogado => {
      return <h1>{abogado.carro}</h1>
    })
   }

   render() {
        return(
        <div>
            { this.renderLawyers( ) }
        </div>
        )
    }
};