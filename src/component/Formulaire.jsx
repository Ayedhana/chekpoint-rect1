import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./FormationStyle.css";

function Formulaire() {
  return (
    <div className="formulaire">
      <h3>Inscription en ligne</h3>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="email" placeholder="Nom" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Prenom</Form.Label>
            <Form.Control type="prenom" placeholder="Prenom" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Date de naissance</Form.Label>
          <Form.Control placeholder="Date de naissance" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Diplome</Form.Label>
          <Form.Control placeholder="Diplome" />
        </Form.Group>

    

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Formation</Form.Label>
            <Form.Select defaultValue="FullStack">
              <option>FullStack</option>
              <option>Intelligence artificielle</option>
              <option>Data Scientist</option>
            </Form.Select>
          </Form.Group>

        <br/>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}



export default Formulaire;