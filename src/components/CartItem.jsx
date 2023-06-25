import React from 'react'
import { Button } from 'react-bootstrap'

const CartItem = (props) => {
  return (
   <li>
     <div>
        <h2>{props.name}</h2>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <span>{props.price}</span>
            <span>x {props.amount}</span>
        </div>
    </div>
    <div className='d-flex gap-2 align-items-center'>
        <Button onClick={props.onRemove} style={{width:'50px'}}>-</Button>
        <Button onClick={props.onAdd} style={{width:'50px'}}>+</Button>
    </div>
   </li>
  )
}

export default CartItem