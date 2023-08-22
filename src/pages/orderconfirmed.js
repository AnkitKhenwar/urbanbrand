import React from "react";
import { useState,useEffect } from "react";
const orderconfirmed = () => {
  const [number, setnumber] = useState()
  
  useEffect(()=>{
    setnumber(Math.floor(Math.random()*100)+267184128)
}, [])
  return (
    
    <h1 className="font-bold text-4xl ">
      Your Order is Confirmed With Order Id {number}
    </h1>
  );
};

export default orderconfirmed;
