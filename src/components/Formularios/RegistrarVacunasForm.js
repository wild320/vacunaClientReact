import React from 'react'
import { Form, Row, Col, Button, Container } from "react-bootstrap";

function RegistrarVacunasForm() {
  return (
    <Container >
      <Form >
        <Row>
          <Col md="6" xs="12">
            <Form.Group controlId="Nombrevacuna">
              <Form.Label>Nombre vacuna</Form.Label>
              <Form.Control as="select" type="select">
                <option value="">Seleccione</option>
                <option value="1">Tuberculosis BCG</option>
                <option value="2">Hepatitis B</option>
                <option value="3">Polio </option>
                <option value="4">PENTAVALENTE</option>
                <option value="5">Rotavirus</option>
                <option value="6">Neumococo</option>
                <option value="7">Polio</option>
                <option value="8">Influenza</option>
                <option value="9">Sarampión rubeola paperas</option>
                <option value="10">Fiebre amarilla</option>
                <option value="11">Hepatitis A</option>
                <option value="12">Difteria-Tosferina-Tétano</option>
                <option value="13">Covid-19</option>
              </Form.Control>

            </Form.Group>
          </Col>
          <Col md="6" xs="12">
            <Form.Group controlId="Dosis">
              <Form.Label>Dosis</Form.Label>
              <Form.Control type="number" min="0" max="4" />


            </Form.Group>
          </Col>
          <Row>
            <Col md="6" xs="12">
              <Form.Group className="margen-t margen-b" controlId="fecha">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date"></Form.Control>
              </Form.Group>
            </Col>

            <Col md="6" xs="12">
            <div className="d-grid gap-2 mt-4">
              <Button type="submit" variant="outline-primary"  >Guardar</Button>
              </div>
            </Col>
          </Row>
       </Row>

      </Form>
    </Container>

  )
}

export default RegistrarVacunasForm
