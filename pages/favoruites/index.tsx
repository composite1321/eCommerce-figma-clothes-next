import React from 'react'
import { GlobalComponents } from "@/components/global";
import { LandingPageComponents } from "@/components/landing-page";
import { useState } from "react";
import { AboutComponents } from '@/components/about-us';
import { ProductComponents } from '@/components/products';
import { ContactComponents } from '@/components/contact';
import { FavoruitesComponents } from '@/components/favoruites';

export default function FavoruitesPage() {

  const [variant,setVariant] = useState<number>(1)

  return (

  <React.Fragment>
    <div className='variant flex gap-h-3'>
      <div onClick={()=>setVariant(1)} className="cursor-pointer w-[100px] h-[50px] bg-neutral-900 hover:opacity-75 text-white flex justify-center items-center font-bold">Variant 1</div>
      <div onClick={()=>setVariant(2)} className="cursor-pointer w-[100px] h-[50px] bg-neutral-900 hover:opacity-75 text-white flex justify-center items-center font-bold">Variant 2</div>
      <div onClick={()=>setVariant(3)} className="cursor-pointer w-[100px] h-[50px] bg-neutral-900 hover:opacity-75 text-white flex justify-center items-center font-bold">Variant 3</div>
    </div>
   { variant === 1 &&
   <React.Fragment>
    <GlobalComponents.Layout>
      <GlobalComponents.Hero 
        img="/assets/products/hero-3.png"
        title="Customer experience"
        paragraph="Your one-stop shop for trending, high-quality products across multiple categories. From everyday essentials to unique finds, we bring you carefully selected items that combine style, function, and value."
        />
        
      <GlobalComponents.Title 
        title="Why Shop With Us"
        paragraph="Discover the benefits that make your shopping experience simple, reliable, and enjoyable from start to finish."
      />
      {Array.from({length:4}).map((i:any,index:number) => <FavoruitesComponents.Item 
                                                              key={index}
                                                              img="/assets/favoruites/img.png"  
                                                              title="Product"
                                                              price={250}
                                                          />)}
      <GlobalComponents.Title 
        title="Get in Touch"
        paragraph="We’re here to help with any questions, feedback, or support you need—reach out and our team will be happy to assist you."
        contentWidth='w-[50%]'
      />
      <LandingPageComponents.FeatureWithCircle 
          img="/assets/landing-page/variant-1/square.png"
          circleImg="/assets/landing-page/variant-1/circle.png"
          title="Driven by Quality. Focused on You. " 
          paragraph1="We created this store with a simple goal — to bring together reliable, stylish, and practical products in one place. Instead of overwhelming you with endless options, we focus on carefully selected items that meet real needs and deliver consistent quality."
          paragraph2="Our mission is to make online shopping easy, enjoyable, and trustworthy. From product selection to delivery, we prioritize your experience every step of the way, ensuring you get great value and products you can depend on."
      /> 
    
      
    </GlobalComponents.Layout>
    </React.Fragment>}
    { variant === 2 &&
   <React.Fragment>
    <GlobalComponents.Layout>
      <GlobalComponents.Hero 
        img="/assets/products/hero-3.png"
        title="Customer experience"
        paragraph="Your one-stop shop for trending, high-quality products across multiple categories. From everyday essentials to unique finds, we bring you carefully selected items that combine style, function, and value."
      />
      <LandingPageComponents.FeatureWithCircle 
          img="/assets/landing-page/variant-1/square.png"
          circleImg="/assets/landing-page/variant-1/circle.png"
            title="Driven by Quality. Focused on You. " 
          paragraph1="We created this store with a simple goal — to bring together reliable, stylish, and practical products in one place. Instead of overwhelming you with endless options, we focus on carefully selected items that meet real needs and deliver consistent quality."
          paragraph2="Our mission is to make online shopping easy, enjoyable, and trustworthy. From product selection to delivery, we prioritize your experience every step of the way, ensuring you get great value and products you can depend on."
      />
      <ProductComponents.Banner 
        img='/assets/products/variant-1/banner.png'
        title='Big Sale is Live'
        subtitle='Up to 50% off on selected items — shop now before it’s gone!'
      />
      <GlobalComponents.Title 
        title="Get in Touch"
        paragraph="We’re here to help with any questions, feedback, or support you need—reach out and our team will be happy to assist you."
        contentWidth='w-[50%]'
      />
      <ContactComponents.Form img='/assets/contact/form.png' />
      <ContactComponents.Feature 
        img1="/assets/contact/col-1.png"
        img2="/assets/contact/col-2.png"
        img3="/assets/contact/col-3.png"
        title1="Customer Support"
        title2="Order Assistance"
      />
    </GlobalComponents.Layout>
    </React.Fragment>}
    { variant === 3 &&
   <React.Fragment>
    <GlobalComponents.Layout>
      <GlobalComponents.Hero 
        img="/assets/products/hero-3.png"
        title="Customer experience"
        paragraph="Your one-stop shop for trending, high-quality products across multiple categories. From everyday essentials to unique finds, we bring you carefully selected items that combine style, function, and value."
      />
      <ContactComponents.Feature 
        img1="/assets/contact/col-1.png"
        img2="/assets/contact/col-2.png"
        img3="/assets/contact/col-3.png"
        title1="Customer Support"
        title2="Order Assistance"
      />
      <GlobalComponents.Title 
        title="Get in Touch"
        paragraph="We’re here to help with any questions, feedback, or support you need—reach out and our team will be happy to assist you."
        contentWidth='w-[50%]'
      /> 
      <ContactComponents.Form img='/assets/contact/form.png' />
      <ProductComponents.Banner 
        img='/assets/products/variant-1/banner.png'
        title='Big Sale is Live'
        subtitle='Up to 50% off on selected items — shop now before it’s gone!'
      />
      <GlobalComponents.Title 
        title="Why Shop With Us"
        paragraph="Discover the benefits that make your shopping experience simple, reliable, and enjoyable from start to finish."
      />
      <LandingPageComponents.FeatureWithCircle 
          img="/assets/landing-page/variant-1/square.png"
          circleImg="/assets/landing-page/variant-1/circle.png"
          title="Driven by Quality. Focused on You. " 
          paragraph1="We created this store with a simple goal — to bring together reliable, stylish, and practical products in one place. Instead of overwhelming you with endless options, we focus on carefully selected items that meet real needs and deliver consistent quality."
          paragraph2="Our mission is to make online shopping easy, enjoyable, and trustworthy. From product selection to delivery, we prioritize your experience every step of the way, ensuring you get great value and products you can depend on."
      />
    </GlobalComponents.Layout>
    </React.Fragment>}
  </React.Fragment>
  );
}
