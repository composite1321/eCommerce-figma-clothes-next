import React, { useState } from 'react'

interface FormDataState {
    minPrice:number;
    maxPrice:number;
    color:string;
    category:string;
}

const useSidebarForm = () => {
   
  const [formData,setFormData] = useState<FormDataState>({
    minPrice:0,
    maxPrice:0,
    color:'',
    category:''
  })

  const handleChange = (e:any) =>{
    setFormData((prevState:FormDataState) => ({
        ...prevState,
        [e.target.name]:e.target.value
    }))
  }

  const handleChangeColor = (color:string) =>{
    setFormData((prevState:FormDataState) => ({
        ...prevState,
        color:color
    }))
  }

  const handleChangeCategory = (category:string) =>{
    setFormData((prevState:FormDataState) => ({
        ...prevState,
        category:category
    }))
  }

  const handleSubmit = () =>{

  }

  return {
    formData,
    handleChange,
    handleChangeColor,
    handleChangeCategory,
    handleSubmit
  }
}

export default useSidebarForm
