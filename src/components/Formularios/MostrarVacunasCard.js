import React from 'react'
import { Table } from 'react-bootstrap'


function MostrarVacunasCard() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Vacuna</th>
          <th scope="col">Dosis</th>
          <th scope="col">Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Neumococo</td>
          <td>1 dosis</td>
          <td>15-09-2021</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Polio</td>
          <td>1 dosis</td>
          <td>16-09-2021</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Hepatitis</td>
          <td>1 dosis</td>
          <td>16-09-2021</td>
        </tr>
      </tbody>
  
</Table>
    )
}

export default MostrarVacunasCard

