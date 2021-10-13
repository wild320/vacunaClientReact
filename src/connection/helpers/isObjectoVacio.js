
import React from 'react'

export const isObjectoVacio = (objeto) => {
    return Object.keys(objeto).length===0 && objeto.constructor === Object

}
