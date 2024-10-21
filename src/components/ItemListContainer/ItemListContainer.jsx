import React from 'react'
import { useState, useEffect } from 'react'
import "../NavBar/navbar.scss"
import { getProducts } from '../../data/data.js'
import ItemList from './ItemList.jsx'
import "./itemlistcontainer.css"

const ItemListContainer = ({saludo}) => {
  const [products, setProducts]=useState([])//se coloca el arreglo vacio porque será el valor inicial del arreglo de productos
//recuerda setProducts es una variable de estado
//Cuando usamos una variable de estado se está obligando al componente a que actualice

useEffect(()=>{

  getProducts()
.then((data)=>{

  setProducts(data)

})
.catch((error)=>{console.log(error)})
.finally(()=>{console.log("finalizó la promesa")})


},[])



  return (
    <div className='itemlistcontainer' >
      <h1 >{saludo}</h1>
<ItemList products={products}/>
      
      </div>
  )
}

export default ItemListContainer