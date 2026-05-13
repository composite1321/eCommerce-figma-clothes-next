import { GlobalComponents } from '@/components/global'
import { LandingPageComponents } from '@/components/landing-page'
import { ProductComponents } from '@/components/products'
import Banner from '@/components/products/banner.compoent'
import React, { useState } from 'react'

const ProductsPage = () => {

  const [variant,setVariant] = useState<number>(1)

  return (
    <div>
      <React.Fragment>
        <div className='variant flex gap-h-3'>
            <div onClick={()=>setVariant(1)} className="cursor-pointer w-[100px] h-[50px] bg-neutral-900 hover:opacity-75 text-white flex justify-center items-center font-bold">Variant 1</div>
            <div onClick={()=>setVariant(2)} className="cursor-pointer w-[100px] h-[50px] bg-neutral-900 hover:opacity-75 text-white flex justify-center items-center font-bold">Variant 2</div>
            <div onClick={()=>setVariant(3)} className="cursor-pointer w-[100px] h-[50px] bg-neutral-900 hover:opacity-75 text-white flex justify-center items-center font-bold">Variant 3</div>
        </div>    
        {variant === 1 &&
        <React.Fragment> 
          <GlobalComponents.Layout>
            <GlobalComponents.Hero 
              img="/assets/products/hero-1.png"
              title="Customer experience"
              paragraph="Your one-stop shop for trending, high-quality products across multiple categories. From everyday essentials to unique finds, we bring you carefully selected items that combine style, function, and value."
            />
            <GlobalComponents.Title
              title="Everything You Need, One Place"
              paragraph="Discover trending products, everyday essentials, and unique finds curated just for you."
            />
            <div className="products-items flex justify-center items-start flex-wrap">
              {Array.from({length:10}).map((p,i) => {
                if(i % 3 === 0) return <ProductComponents.Item key={i} img="/assets/products/variant-1/product-1.png" />
                if(i % 2 === 0) return <ProductComponents.Item key={i} img="/assets/products/variant-1/product-2.png" />
                if(i % 1 === 0) return <ProductComponents.Item key={i} img="/assets/products/variant-1/product-3.png" />
              })}
            </div>
            <GlobalComponents.Title
              title="Shop Smarter. Live Better"
              paragraph="Explore high-quality products designed to simplify your life and elevate your everyday."
            />  
            <ProductComponents.Carousel images={[
              `/assets/products/variant-1/carousel-1.png`,
              `/assets/products/variant-1/carousel-2.png`,
              `/assets/products/variant-1/carousel-3.png`,
              `/assets/products/variant-1/carousel-4.png`
            ]} />
            <ProductComponents.Carousel images={[
              `/assets/products/variant-1/carousel-1.png`,
              `/assets/products/variant-1/carousel-2.png`,
              `/assets/products/variant-1/carousel-3.png`,
              `/assets/products/variant-1/carousel-4.png`
            ]} />
            <ProductComponents.Banner img='/assets/products/variant-1/banner.png' />
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
            <LandingPageComponents.Cards />
            <LandingPageComponents.FeatureCollection
              title="Our Collection"
              subtitle="Explore Favoruites"
            />
          </GlobalComponents.Layout>  
      </React.Fragment>}
      {variant === 2 &&
      <React.Fragment>
        <GlobalComponents.Layout>
            <GlobalComponents.Hero 
              img="/assets/products/hero-2.png"
              title="Customer experience"
              paragraph="Your one-stop shop for trending, high-quality products across multiple categories. From everyday essentials to unique finds, we bring you carefully selected items that combine style, function, and value."
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
            <ProductComponents.Banner img='/assets/products/variant-1/banner-2.png' />
            <GlobalComponents.Title 
              title="Shop Smarter. Live Better"
              paragraph="Explore high-quality products designed to simplify your life and elevate your everyday."
            />
            <div className="products-items flex justify-center items-start flex-wrap">
              {Array.from({length:10}).map((p,i) => {
                if(i % 3 === 0) return <ProductComponents.Item key={i} img="/assets/products/variant-1/product-1.png" />
                if(i % 2 === 0) return <ProductComponents.Item key={i} img="/assets/products/variant-1/product-2.png" />
                if(i % 1 === 0) return <ProductComponents.Item key={i} img="/assets/products/variant-1/product-3.png" />
              })}
            </div>
            <ProductComponents.Banner img='/assets/products/variant-1/banner.png' />
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
          </GlobalComponents.Layout>  
      </React.Fragment>}
      {variant === 3 &&
      <React.Fragment>
        <GlobalComponents.Layout>
            <GlobalComponents.Hero 
              img="/assets/products/hero-3.png"
              title="Customer experience"
              paragraph="Your one-stop shop for trending, high-quality products across multiple categories. From everyday essentials to unique finds, we bring you carefully selected items that combine style, function, and value."
            />
            <GlobalComponents.Title 
              title="Everything You Need, One Place"
              paragraph="Discover trending products, everyday essentials, and unique finds curated just for you."
            />
            <div className="products-items-with-sidebar flex justify-between items-start">
              <ProductComponents.SidebarComponents.Sidebar />
              <div className="products-items md:w-3/4 flex justify-center items-start flex-wrap">
                {Array.from({length:10}).map((p,i) => {
                  if(i % 3 === 0) return <ProductComponents.Item margin1fix='-translate-x-[50px]' margin2fix='ml-8' key={i} img="/assets/products/variant-1/product-1.png" />
                  if(i % 2 === 0) return <ProductComponents.Item margin1fix='-translate-x-[50px]' margin2fix='ml-8' key={i} img="/assets/products/variant-1/product-2.png" />
                  if(i % 1 === 0) return <ProductComponents.Item margin1fix='-translate-x-[50px]' margin2fix='ml-8' key={i} img="/assets/products/variant-1/product-3.png" />
                })}
              </div>
            </div>
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
            <ProductComponents.Carousel images={[
              `/assets/products/variant-1/carousel-1.png`,
              `/assets/products/variant-1/carousel-2.png`,
              `/assets/products/variant-1/carousel-3.png`,
              `/assets/products/variant-1/carousel-4.png`
            ]} />
            <ProductComponents.Banner img='/assets/products/variant-1/banner.png' />
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
          </GlobalComponents.Layout>  
      </React.Fragment>}
      </React.Fragment>
    </div>
  )
}

export default ProductsPage
