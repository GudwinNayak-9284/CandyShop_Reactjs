import React, { useContext } from 'react'
import { Card,Button } from 'react-bootstrap'
import { CandyContext } from '../store/candy-context'

const Candy = (props) => {
  const cartCtx=useContext(CandyContext)

  const addToCart = (amount) =>{
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      description:props.description,
      price:props.price,
      amount:amount
    })
  }
  return (
    <Card style={{ width: '18rem',height:'15rem',margin:'20px' }}>
     <Card.Body className='text-center'>
       <Card.Title>{props.name}</Card.Title>
       <Card.Subtitle>{props.description}</Card.Subtitle>
       <Card.Text>{props.price}</Card.Text>
       <Button variant="primary" className='m-2' onClick={()=>addToCart(1)}>Buy 1</Button>
       <Button variant="info" className='m-2' onClick={()=>addToCart(2)}>Buy 2</Button>
       <Button variant="secondary" className='m-2' onClick={()=>addToCart(3)}>Buy 3</Button>
     </Card.Body>
    </Card>
  )
}

export default Candy