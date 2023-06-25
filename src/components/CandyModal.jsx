import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { CandyContext } from '../store/candy-context';
import CartItem from './CartItem';


const CandyModal = (props) => {
  const cartCtx=useContext(CandyContext)
  const totalAmount=`₹ ${cartCtx.totalAmount.toFixed(2)}`
  const hasItems=cartCtx.items.length>0
  
  const removeItem=(id)=>{

  }

  const addItem=(item)=>{
    
  }
  const cartItems = (<ul>
    {cartCtx.items.map((item)=>(
      <CartItem key={item.id} id={item.id} name={item.name} price={item.price} amount={item.amount}
       onRemove={removeItem.bind(null,item.id)} onAdd={addItem.bind(null,item)}/>
    ))}
    </ul>)
  
  return (
    <>
      <Modal show={true}>
        {cartItems}
        <div className=''>
        <h3 className=''>Total amount</h3>
        <p className=''>{totalAmount}</p>
        </div>
        <div className=''>
            <button onClick={props.onClose}>close</button>
            {hasItems && <button>order</button>}
        </div>
    </Modal>
    </>
  );
};

export default CandyModal;
