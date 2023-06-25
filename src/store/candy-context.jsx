import React from "react"

export const CandyContext = React.createContext(
    {
        items:[],
        totalAmount:0,
        addItem:(item)=>{},
        removeItem:(id)=>{}
    }
)

