import React, { useEffect, useState } from 'react'

const useItem = () => {

  const [quantity,setQuantity] = useState<number>(0)
  const [inCart,setInCart] = useState<boolean>(false)


  const handleInCart = () =>{
    if(quantity > 0) setInCart(true)
    if(quantity === 0) setInCart(false)
  }

  useEffect(()=>{
    handleInCart()
  },[quantity])

  return { quantity, inCart, setQuantity }
}

export default useItem
