import React from 'react'
import Category from './category.component'
import Form from './form.component'
import Colors from './colors.component'
import useSidebarForm from '@/hooks/useSidebarForm'

const Sidebar = () => {

  const { formData, handleChange, handleChangeColor, handleChangeCategory, handleSubmit } = useSidebarForm()

  return (
    <div className='p-8 md:w-1/4 mx-2 bg-blue-400 rounded-md h-[1200px] translate-y-[30px]'>
      <h3 className="text-white font-bold text-2xl mb-8">Category</h3>
      <Category handleChange={handleChangeCategory} title="Home & Living" />
      <Category handleChange={handleChangeCategory} title="Tech & Gadgets" />
      <Category handleChange={handleChangeCategory} title="Fashion & Apparel" />
      <Category handleChange={handleChangeCategory} title="Beauty & Personal Care" />
      <Category handleChange={handleChangeCategory} title="Toys & Kids" />
      <Category handleChange={handleChangeCategory} title="Fitness & Sports" />
      <Category handleChange={handleChangeCategory} title="Pet Supplies" />
      <Category handleChange={handleChangeCategory} title="Gifts & Accessories" />
      <Category handleChange={handleChangeCategory} title="Automotive" />
      <Category handleChange={handleChangeCategory} title="Health & Wellness" />
      <Form formData={formData} handleChange={handleChange} />
      <Colors colors={[
        '#FF0400',
        '#FFB700',
        '#00FF51',
        '#4000FF',
        '#C8FF00',
        '#FF0095',
        '#177061',
        '#A32523',
        '#615D47',
        '#2C3B35',
        '#ECFEF4',
        '#3E2222',
        '#999922',
        '#3EB522',
      ]} handleChange={handleChangeColor} />
      <button className="py-2 w-[100%] bg-blue-500 text-white font-bold hover:opacity-75 cursor-pointer">Filter</button>
    </div>
  )
}

export default Sidebar
