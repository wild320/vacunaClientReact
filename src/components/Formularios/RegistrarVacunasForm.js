import React from 'react'
import {Form} from "react-bootstrap"

function RegistrarVacunasForm() {
    
    return (      

            <Form class="container" action="#" method="post" target="_blank">
            <Form.Label for="date">fecha</Form.Label>
            <Form.Control   type="date" name="date" id="date">
                </Form.Control>

            <Form.Label for="nombrevacuna">Nombre de la vacuna</Form.Label>
            <Form.Select  name="nombrevacuna" id="nombrevacuna">
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
            </Form.Select>

            <Form.Label for="dosis">dosis</Form.Label>
            <Form.Select name="dosis" id="dosis">
                <option value="">Seleccione</option>
                <option value="1">primera</option>
                <option value="2">segunda</option>
                <option value="3">tercera</option>
                <option value="4">cuarta</option>
            </Form.Select>
            
            <Form.Control  type="submit" value="Guardar" className="mt-3"></Form.Control>
        </Form>    
      
    )
}

export default RegistrarVacunasForm
