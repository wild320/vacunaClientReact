import React from 'react'
import { Form, Table, Button,InputGroup } from 'react-bootstrap'


export default  function DbAdministracionTable() {
    return (
        <div> 
        <Table class="table table-sm table-info">
        <thead>
            <tr>
                <th>Identificacion </th>
                <th>Nombre</th>
                <th>Estado Vanunas</th>
                <th>Ir a...</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>10263548</td>
                <td>Luisa Valencia</td>
                <td>Cumple</td>
                <td><a href="/">Mostrar Vacunas</a></td>
            </tr>
            <tr>
                <td>10363699</td>
                <td>Oscar Gomez</td>
                <td>No Cumple</td>
                <td><a href="/">Mostrar Vacunas</a></td>
            </tr>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>

            </tr>
        </tbody>
        <tfoot>
            <td></td>
            <td>Total ingresados:</td>
            <td>2</td>
        </tfoot>
    </Table> 
        </div>,
         <div>
         <Form action="cosulta vacunados" method="POST">
          <Form.Label for="identificacion">Identificación: </Form.Label>
          <InputGroup type="text" id="identificacion"></InputGroup>          
          <Form.Label for="nombre">Nombre: </Form.Label>
          <InputGroup type="text" id="nombre"></InputGroup>          
          <Button type="button"> Consultar</Button>
          </Form>
      </div> 
        
      
    )
}
  

