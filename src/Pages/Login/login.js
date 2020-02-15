import React from 'react';
import { Form, Button,Col,Row} from "react-bootstrap"
export const Login = () => (
<div>
<Form><br></br>
<p class="font-weight-bold"> <p class="text-center"> <p class="100px">Inicio de sesión</p></p></p>
  <Form.Group controlId="formBasicEmail">
    <Form.Label size= "50px">Introduce tu correo:</Form.Label>
    <Form.Control type="email" size="small" placeholder="Usuario" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Contraseña:</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    {/* <Form.Check type="checkbox" label="Check me out" /> */}
  </Form.Group>
  <Button size= "m" class="https://web.whatsapp.com/" variant="primary" type="submit">
    Enviar
  </Button><br></br><br></br>
<p class="font-weight-bold"> <p class="text-center"> <p class="100px"><p class="size:100px" >Registro</p></p></p></p>
<Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Nombre:
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Nombre" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Apellidos:
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Apellidos" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Correo:
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Correo" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Contraseña:
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Contraseña" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Nombre de usuario:
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Nombre de usuario" />
    </Col><br></br><br></br><br></br>
    <Button size="m" class="https://web.whatsapp.com/" variant="primary" type="submit">
    Registrarse
  </Button>
  </Form.Group>
</Form>
</div>
);
export default Login;
