import React from 'react'
import Item from './Item.jsx'

const ItemList = ({products}) => {

    //este componente es para mapear la data
    //Key es una palabra que se utiliza al aplicar .map para ayudar a react a diferenciar cada elemento del arreglo y key estará relacionada con una única propiedad de cada elemento del arreglo
  return (
    <div className='itemlist'>
     {

products.map((product)=>(

<Item product ={product} key={product.id}/>

))

      }




    </div>

  )
}

export default ItemList