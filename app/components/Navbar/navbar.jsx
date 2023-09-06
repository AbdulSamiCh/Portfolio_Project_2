import React from 'react'
import Image from 'next/image';
import Logo from "../../Assets/Logo.svg"
import Link from 'next/link';
import "./navbar.css"
import Search from "../../Assets/search.svg"
import Cart from "../../Assets/Buy.svg"
import Like from "../../Assets/Heart 1.svg"
import Account from "../../Assets/Profile.svg"


const Navbar = () => {

  return (
    <div>
      <nav className="container-fluid color navbar navbar-expand-lg p-2 text-dark bg-opacity-10">
        <div className="container">
          <div className='col-3'>
            <Image src={Logo} className='mt-1' alt='logo' /></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='inpu'>
              <input type="text" name="" id="" placeholder='Search here...' className='none px-3 mx-2' />
              <Image src={Search} className='marg mx-4' alt='search' />
            </div>

            <div className='point col-6'>
              <div className='d-flex justify-content-end mx-4'>
                <div className='bg-white d-flex width'><Image src={Cart} alt='cart' className='mt-3 mx-2' />
                  <p className='mt-3 mx-2'>Cart</p>
                  <span className="badge colou rounded-circle pt-2 mx-2 mt-3">2</span>
                </div>

                <div className='mx-3 bg-white py-3 px-3 width'>
                  <a href="#"><Image src={Like} className='' alt='favourites' /></a>
                </div>
                <div className='mx-2 bg-white py-3 px-3 width'>
                 <Link href="pages/signin"> <Image src={Account} alt='Account/Signin' /> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
