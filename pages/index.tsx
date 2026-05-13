import React from 'react'
import { GlobalComponents } from "@/components/global";
import { LandingPageComponents } from "@/components/landing-page";
import { useState } from "react";

export default function LandingPage() {

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
        img="/assets/landing-page/variant-1/hero.png"
        title="Customer experience"
        paragraph="Your one-stop shop for trending, high-quality products across multiple categories. From everyday essentials to unique finds, we bring you carefully selected items that combine style, function, and value."
        />
      <GlobalComponents.Title 
        title="Everything You Need, One Place"
        paragraph="Everything You Need, One Place"
        />
      <LandingPageComponents.IntroFeature 
        img1="/assets/landing-page/variant-1/feature-1.png"
        img2="/assets/landing-page/variant-1/feature-2.png"
        img3="/assets/landing-page/variant-1/feature-3.png"
        img4="/assets/landing-page/variant-1/feature-4.png"
        />
      <LandingPageComponents.FeatureCollection
        title="Our Collection"
        subtitle="Explore Favoruites"
        />
      <LandingPageComponents.Cards />
      <GlobalComponents.Title
        title="Shop Smarter. Live Better"
        paragraph="Explore high-quality products designed to simplify your life and elevate your everyday."
        />
      <LandingPageComponents.Gallery />
      <LandingPageComponents.FeatureBig
        img="/assets/landing-page/variant-1/feature-big.png"
        title="Designed for Quality. Built for Everyday"
        paragraphs={[
          `We carefully select every product to ensure it meets high standards of quality, functionality, and style. Our collection is constantly updated with trending and practical items that fit seamlessly into your daily routine, helping you save time and make smarter choices.`,
          `From fast shipping to secure checkout, every part of your shopping experience is designed with you in mind. We focus on reliability, value, and customer satisfaction—so you can shop with confidence and enjoy products that truly deliver.`
        ]}
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
        title="What Our Customers Say"
        paragraph="Real feedback from people who love our products"
        />
      <LandingPageComponents.Comments />
    </GlobalComponents.Layout>
    </React.Fragment>}
    { variant === 2 &&
   <React.Fragment>
    <GlobalComponents.Layout>
      <GlobalComponents.Hero 
        img="/assets/landing-page/variant-1/hero.png"
        title="Customer experience"
        paragraph="Your one-stop shop for trending, high-quality products across multiple categories. From everyday essentials to unique finds, we bring you carefully selected items that combine style, function, and value."
      />
      <GlobalComponents.Title 
        title="Everything You Need, One Place"
        paragraph="Everything You Need, One Place"
      />
      <LandingPageComponents.Cards />
      <LandingPageComponents.FeatureCollection
        title="Our Collection"
        subtitle="Explore Favoruites"
      />
      <LandingPageComponents.IntroFeature 
        img1="/assets/landing-page/variant-1/feature-1.png"
        img2="/assets/landing-page/variant-1/feature-2.png"
        img3="/assets/landing-page/variant-1/feature-3.png"
        img4="/assets/landing-page/variant-1/feature-4.png"
      />
      <GlobalComponents.Title
        title="Shop Smarter. Live Better"
        paragraph="Explore high-quality products designed to simplify your life and elevate your everyday."
      />
      <LandingPageComponents.FeatureBig
        img="/assets/landing-page/variant-1/feature-big.png"
        title="Designed for Quality. Built for Everyday"
        paragraphs={[
          `We carefully select every product to ensure it meets high standards of quality, functionality, and style. Our collection is constantly updated with trending and practical items that fit seamlessly into your daily routine, helping you save time and make smarter choices.`,
          `From fast shipping to secure checkout, every part of your shopping experience is designed with you in mind. We focus on reliability, value, and customer satisfaction—so you can shop with confidence and enjoy products that truly deliver.`
        ]}
      />
      <GlobalComponents.Title 
        title="About Us"
        paragraph="You Trusted Place for Everyday Finds"
        contentWidth="w-[50%]"
      />
      <LandingPageComponents.Gallery />
      <GlobalComponents.Title 
        title="What Our Customers Say"
        paragraph="Real feedback from people who love our products"
        />
      <LandingPageComponents.Comments />
      <LandingPageComponents.FeatureWithCircle 
        img="/assets/landing-page/variant-1/square.png"
        circleImg="/assets/landing-page/variant-1/circle.png"
        title="Driven by Quality. Focused on You. "
        paragraph1="We created this store with a simple goal — to bring together reliable, stylish, and practical products in one place. Instead of overwhelming you with endless options, we focus on carefully selected items that meet real needs and deliver consistent quality."
        paragraph2="Our mission is to make online shopping easy, enjoyable, and trustworthy. From product selection to delivery, we prioritize your experience every step of the way, ensuring you get great value and products you can depend on."
      />
    </GlobalComponents.Layout>
    </React.Fragment>}
    { variant === 3 &&
   <React.Fragment>
    <GlobalComponents.Layout>
      <GlobalComponents.Hero 
        img="/assets/landing-page/variant-1/hero.png"
        title="Customer experience"
        paragraph="Your one-stop shop for trending, high-quality products across multiple categories. From everyday essentials to unique finds, we bring you carefully selected items that combine style, function, and value."
        />
      <GlobalComponents.Title 
        title="Everything You Need, One Place"
        paragraph="Everything You Need, One Place"
      />
      <LandingPageComponents.FeatureBig
        img="/assets/landing-page/variant-1/feature-big.png"
        title="Designed for Quality. Built for Everyday"
        paragraphs={[
          `We carefully select every product to ensure it meets high standards of quality, functionality, and style. Our collection is constantly updated with trending and practical items that fit seamlessly into your daily routine, helping you save time and make smarter choices.`,
          `From fast shipping to secure checkout, every part of your shopping experience is designed with you in mind. We focus on reliability, value, and customer satisfaction—so you can shop with confidence and enjoy products that truly deliver.`
        ]}
      />
      <LandingPageComponents.Cards />
      <GlobalComponents.Title
        title="Shop Smarter. Live Better"
        paragraph="Explore high-quality products designed to simplify your life and elevate your everyday."
      />
      <LandingPageComponents.Gallery />
      <GlobalComponents.Title 
        title="About Us"
        paragraph="You Trusted Place for Everyday Finds"
        contentWidth="w-[50%]"
      />
      <LandingPageComponents.IntroFeature 
        img1="/assets/landing-page/variant-1/feature-1.png"
        img2="/assets/landing-page/variant-1/feature-2.png"
        img3="/assets/landing-page/variant-1/feature-3.png"
        img4="/assets/landing-page/variant-1/feature-4.png"
        />
      <LandingPageComponents.FeatureCollection
        title="Our Collection"
        subtitle="Explore Favoruites"
      />
      <LandingPageComponents.FeatureWithCircle 
        img="/assets/landing-page/variant-1/square.png"
        circleImg="/assets/landing-page/variant-1/circle.png"
        title="Driven by Quality. Focused on You. "
        paragraph1="We created this store with a simple goal — to bring together reliable, stylish, and practical products in one place. Instead of overwhelming you with endless options, we focus on carefully selected items that meet real needs and deliver consistent quality."
        paragraph2="Our mission is to make online shopping easy, enjoyable, and trustworthy. From product selection to delivery, we prioritize your experience every step of the way, ensuring you get great value and products you can depend on."
        />
      <GlobalComponents.Title 
        title="What Our Customers Say"
        paragraph="Real feedback from people who love our products"
        />
      <LandingPageComponents.Comments />
    </GlobalComponents.Layout>
    </React.Fragment>}
  </React.Fragment>
  );
}
