import React from 'react'
import Candy from './Candy';


const candies = [
  { id: 1, name: "Snickers", description: "Peanuts, caramel, nougat, and milk chocolate", price: 1.99 },
  { id: 2, name: "Kit Kat", description: "Wafers and milk chocolate", price: 1.49 },
  { id: 3, name: "Reese's Peanut Butter Cups", description: "Chocolate and peanut butter", price: 1.29 },
  { id: 4, name: "M&M's", description: "Milk chocolate and candy shell", price: 0.99 },
  { id: 5, name: "Twix", description: "Cookie, caramel, and milk chocolate", price: 1.39 },
  { id: 6, name: "Skittles", description: "Fruit-flavored candy shell with a chewy center", price: 0.79 },
  { id: 7, name: "Starburst", description: "Fruit-flavored chewy candy", price: 0.89 },
  { id: 8, name: "Milky Way", description: "Nougat, caramel, and milk chocolate", price: 1.59 },
  { id: 9, name: "Nerds", description: "Tiny, crunchy, fruit-flavored candy", price: 0.69 },
  { id: 10, name: "Sour Patch Kids", description: "Sour then sweet gummy candy", price: 1.09 },
  { id: 11, name: "Swedish Fish", description: "Chewy fruit-flavored candy", price: 0.99 },
  { id: 12, name: "Jolly Rancher", description: "Hard candy with fruity flavors", price: 0.49 },
  { id: 13, name: "Butterfinger", description: "Crispety, crunchety, peanut-buttery candy bar", price: 1.79 },
  { id: 14, name: "Hershey's Chocolate Bar", description: "Milk chocolate", price: 1.19 },
  { id: 15, name: "Almond Joy", description: "Coconut, almonds, and milk chocolate", price: 1.69 },
  { id: 16, name: "Baby Ruth", description: "Peanuts, caramel, nougat, and chocolate", price: 1.89 },
  { id: 17, name: "3 Musketeers", description: "Whipped nougat covered in milk chocolate", price: 1.49 },
  { id: 18, name: "Gummy Bears", description: "Chewy, fruit-flavored gummies", price: 0.99 },
  { id: 19, name: "Tootsie Roll", description: "Chewy, chocolate-flavored candy", price: 0.49 },
  { id: 20, name: "Airheads", description: "Chewy, fruit-flavored candy", price: 0.79 },
];




const candyList = () => {
  
 const candiesData=candies.map((candy)=>(
    <Candy key={candy.id} id={candy.id} name={candy.name} description={candy.description} price={candy.price} />
 ))

  return (
    <div style={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
    {candiesData}
    </div>
  )
}

export default candyList