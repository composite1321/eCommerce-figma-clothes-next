import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer hero-bg pt-2'>
      <div className="footer-inner-wrapper px-[150px] py-[50px] footer-bg flex justify-between items-center">
        <div className="footer-col w-[100%]">
          <Image src="/assets/logo-big.png" alt="logo" width={300} height={300}/>
          <div className="footer-form mt-[50px]">
            <form action="">
              <div className="footer-form-field w-[400px] rounded-full footer-field-bg">
                <input className='w-[100%] font-bold text-white px-4 py-4 bg-transparent outline-none boder-0' type="email" name="email" placeholder='Enter Email Address'/>
              </div>
              <button className="footer-submit-bg cursor-pointer hover:opacity-75 font-bold w-[400px] p-4 text-white rounded-full my-2">Send</button>
            </form>
          </div>
          <div className="footer-address mt-[30px]">
              <p className="text-md font-bold text-white">Houston Road 36</p>
              <p className="text-md font-bold text-white">Seattle 201-22214</p>
              <p className="text-md font-bold text-white">profile@company.com</p>
          </div>
        </div>
        <div className="footer-col mt-[50px] flex flex-wrap gap-32">
          <div className="footer-links w-1/6">
            <h3 className="font-bold text-white text-xl">Shop</h3>
            <Link className='block hover:opacity-75 underline text-white mt-4' href="#">All Products</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">New Arrivals</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Best Sellers</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Discounts</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Gift Cards</Link>
          </div>
          <div className="footer-links w-1/6">
            <h3 className="font-bold text-white text-xl">Information</h3>
            <Link className='block hover:opacity-75 underline text-white mt-4' href="#">About Us</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Contact Us</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">FAQ</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Shipping Policy</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Returns & Refunds</Link>
          </div>
          <div className="footer-links w-1/6">
            <h3 className="font-bold text-white text-xl">Service</h3>
            <Link className='block hover:opacity-75 underline text-white' href="#">Order Tracking</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Support Center</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Payment Methods</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Terms & Conditions</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Privacy Policy</Link>
          </div>
          <div className="footer-links w-1/6">
            <h3 className="font-bold text-white text-xl">Follow Us</h3>
            <Link className='block hover:opacity-75 underline text-white mt-4' href="#">Instagram</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Facebook</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">TikTok</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Twitter (X)</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Newsletter Signup</Link>
          </div>
          <div className="footer-links w-1/6">
            <h3 className="font-bold text-white text-xl">Products</h3>
            <Link className='block hover:opacity-75 underline text-white mt-4' href="#">Featured Items</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Trending Now</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Collections</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Limited Edition</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Bundles</Link>
          </div>
          <div className="footer-links w-1/6">
            <h3 className="font-bold text-white text-xl">Orders</h3>
            <Link className='block hover:opacity-75 underline text-white' href="#">My Account</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Order History</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Track Order</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Shipping Info</Link>
            <Link className='block hover:opacity-75 underline text-white' href="#">Returns</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
