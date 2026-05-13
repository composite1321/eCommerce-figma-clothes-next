import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='nav px-12 md:flex md:justify-between md:items-center md:h-[60px] shadow shadow-lg shadow-neutral-100'>
      <div className="nav-links flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/sale">Sale</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about-us">About Us</Link>
      </div>
      <div className="nav-icons flex gap-5">
        <Image src="/assets/fb.png" alt='icon' width={30} height={30} />
        <Image src="/assets/fav.png" alt='icon' width={30} height={30} />
        <Image src="/assets/cart.png" alt='icon' width={30} height={30} />
      </div>
    </div>
  )
}

export default Nav
