import React from 'react'
import './header.css'
import Tick from "../../Assets/tickMark.svg"
import Image from 'next/image'
import Alert from "../../Assets/alert.svg"

const Header = () => {
  return (
    <div className='bg container-fluid'>
      <div className='row'>
        <div className='col-md-8 col-sm-8'>
          <div className='d-flex mt-2 mx-5 px-5'>
            <Image src={Tick} className='mt-1 mx-2' alt='tickMark' />
            <p className='text-white'>Free shipping on all orders over $50</p>
          </div>
        </div>
        <div className='col-md-4 col-sm-4 d-flex mt-2'>
          <ul class="breadcrumb">
            <li class="breadcrumb-item text-white"><select className='border-0 text-white clas' name="" id="">
              <option value="1">Eng</option>
            </select>
            </li>
            <li class="breadcrumb-item active text-white" aria-current="page"><a className='text-white text-decoration-none' href="#">Library</a></li>
            <li class="breadcrumb-item active text-white" aria-current="page"><a className='text-white text-decoration-none' href="#"><Image src={Alert} className='img-fluid ms-2 mx-1 mb-1' alt='Help' />Need Help</a></li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Header;