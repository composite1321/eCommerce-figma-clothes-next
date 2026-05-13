import React from 'react'
import { GlobalComponents } from "@/components/global";
import { LandingPageComponents } from "@/components/landing-page";
import { useState } from "react";
import { AboutComponents } from '@/components/about-us';
import { ProductComponents } from '@/components/products';

export default function AboutUsPage() {

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
        img="/assets/products/hero-1.png"
        title="Customer experience"
        paragraph="Your one-stop shop for trending, high-quality products across multiple categories. From everyday essentials to unique finds, we bring you carefully selected items that combine style, function, and value."
        />
      <GlobalComponents.Title 
        title="About Us"
        paragraph="You Trusted Place for Everyday Finds"
        contentWidth="w-[50%]"
      /> 
      <AboutComponents.TriangleFeature 
        img='/assets/about-us/feature.png'
        title="Meaningful Connections"
        paragraphs={[
          `At the heart of everything we do is a simple belief: great ideas have the power to bring people together and create lasting impact. Our journey began with a vision to make a difference—not just by delivering products or services, but by building experiences that truly resonate. Over time, we’ve grown into a team driven by curiosity, creativity, and a commitment to excellence in every detail. `,
          `We pride ourselves on staying true to our values while continuously evolving to meet the needs of a changing world. Whether we’re collaborating with clients, supporting our community, or exploring new possibilities, our focus remains the same—creating meaningful connections and delivering results that matter.`
        ]}
      /> 
      <ProductComponents.Banner 
        img='/assets/products/variant-1/banner.png'
        title='Big Sale is Live'
        subtitle='Up to 50% off on selected items — shop now before it’s gone!'
      />
    
      <AboutComponents.CardComponents.Cards />
      <GlobalComponents.Title 
        title="Why Shop With Us"
        paragraph="Discover the benefits that make your shopping experience simple, reliable, and enjoyable from start to finish."
      />
      <AboutComponents.MultipleFeature 
          img1="/assets/about-us/col-1.png"
          img2="/assets/about-us/col-2.png"
          img3="/assets/about-us/col-3.png"
          img4="/assets/about-us/col-4.png"
          img5="/assets/about-us/col-5.png"
          img6="/assets/about-us/col-6.png"
          img7="/assets/about-us/col-7.png"
          vectorImg="/assets/about-us/vector-img.png"
      />
      <AboutComponents.ThreeFeature img='/assets/about-us/feature-three.png'/>
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
        img="/assets/products/hero-1.png"
        title="Customer experience"
        paragraph="Your one-stop shop for trending, high-quality products across multiple categories. From everyday essentials to unique finds, we bring you carefully selected items that combine style, function, and value."
        />
      <GlobalComponents.Title 
        title="About Us"
        paragraph="You Trusted Place for Everyday Finds"
        contentWidth="w-[50%]"
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
        title="Explore Our Collection"
        paragraph="Browse a curated selection of products designed to fit your style, needs, and everyday life."
      />
      <AboutComponents.MultipleFeature 
          img1="/assets/about-us/col-1.png"
          img2="/assets/about-us/col-2.png"
          img3="/assets/about-us/col-3.png"
          img4="/assets/about-us/col-4.png"
          img5="/assets/about-us/col-5.png"
          img6="/assets/about-us/col-6.png"
          img7="/assets/about-us/col-7.png"
          vectorImg="/assets/about-us/vector-img.png"
      /> 
      <GlobalComponents.Title 
        title="Why Shop With Us"
        paragraph="Discover the benefits that make your shopping experience simple, reliable, and enjoyable from start to finish."
      />
      <AboutComponents.CardComponents.Cards />
      <GlobalComponents.Title 
        title="Start Your Journey With Us"
        paragraph="Join thousands of happy customers and discover products you’ll love, backed by service you can trust."
      />
      <AboutComponents.TriangleFeature 
        img='/assets/about-us/feature.png'
        title="Meaningful Connections"
        paragraphs={[
          `At the heart of everything we do is a simple belief: great ideas have the power to bring people together and create lasting impact. Our journey began with a vision to make a difference—not just by delivering products or services, but by building experiences that truly resonate. Over time, we’ve grown into a team driven by curiosity, creativity, and a commitment to excellence in every detail. `,
          `We pride ourselves on staying true to our values while continuously evolving to meet the needs of a changing world. Whether we’re collaborating with clients, supporting our community, or exploring new possibilities, our focus remains the same—creating meaningful connections and delivering results that matter.`
        ]}
      /> 
      <AboutComponents.ThreeFeature img='/assets/about-us/feature-three.png'/>
    </GlobalComponents.Layout>
    </React.Fragment>}
    { variant === 3 &&
   <React.Fragment>
    <GlobalComponents.Layout>
      <GlobalComponents.Hero 
        img="/assets/products/hero-1.png"
        title="Customer experience"
        paragraph="Your one-stop shop for trending, high-quality products across multiple categories. From everyday essentials to unique finds, we bring you carefully selected items that combine style, function, and value."
        />
      <GlobalComponents.Title 
        title="About Us"
        paragraph="You Trusted Place for Everyday Finds"
        contentWidth="w-[50%]"
      /> 
      <LandingPageComponents.FeatureWithCircle 
          img="/assets/landing-page/variant-1/square.png"
          circleImg="/assets/landing-page/variant-1/circle.png"
          title="Driven by Quality. Focused on You. "
          paragraph1="We created this store with a simple goal — to bring together reliable, stylish, and practical products in one place. Instead of overwhelming you with endless options, we focus on carefully selected items that meet real needs and deliver consistent quality."
          paragraph2="Our mission is to make online shopping easy, enjoyable, and trustworthy. From product selection to delivery, we prioritize your experience every step of the way, ensuring you get great value and products you can depend on."
      />
      <GlobalComponents.Title 
        title="Why Shop With Us"
        paragraph="Discover the benefits that make your shopping experience simple, reliable, and enjoyable from start to finish."
      />
      <AboutComponents.CardComponents.Cards />
      <GlobalComponents.Title 
        title="Explore Our Collection"
        paragraph="Browse a curated selection of products designed to fit your style, needs, and everyday life."
      />
      <AboutComponents.MultipleFeature 
          img1="/assets/about-us/col-1.png"
          img2="/assets/about-us/col-2.png"
          img3="/assets/about-us/col-3.png"
          img4="/assets/about-us/col-4.png"
          img5="/assets/about-us/col-5.png"
          img6="/assets/about-us/col-6.png"
          img7="/assets/about-us/col-7.png"
          vectorImg="/assets/about-us/vector-img.png"
      /> 
      <ProductComponents.Banner 
        img='/assets/products/variant-1/banner.png'
        title='Big Sale is Live'
          subtitle='Up to 50% off on selected items — shop now before it’s gone!'
      />
      <GlobalComponents.Title 
        title="Start Your Journey With Us"
        paragraph="Join thousands of happy customers and discover products you’ll love, backed by service you can trust."
      />
      <AboutComponents.TriangleFeature 
        img='/assets/about-us/feature.png'
        title="Meaningful Connections"
        paragraphs={[
          `At the heart of everything we do is a simple belief: great ideas have the power to bring people together and create lasting impact. Our journey began with a vision to make a difference—not just by delivering products or services, but by building experiences that truly resonate. Over time, we’ve grown into a team driven by curiosity, creativity, and a commitment to excellence in every detail. `,
          `We pride ourselves on staying true to our values while continuously evolving to meet the needs of a changing world. Whether we’re collaborating with clients, supporting our community, or exploring new possibilities, our focus remains the same—creating meaningful connections and delivering results that matter.`
        ]}
      /> 
      <AboutComponents.ThreeFeature img='/assets/about-us/feature-three.png'/>
    </GlobalComponents.Layout>
    </React.Fragment>}
  </React.Fragment>
  );
}
