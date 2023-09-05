import React from 'react'
import "./section.css"
import Zapier from "../../Assets/Zapier.svg"
import Image from 'next/image'
import Logo2 from "../../Assets/Logo 2.svg"
import Logo3 from "../../Assets/Logo 3.svg"
import Logo4 from "../../Assets/Logo 4.svg"
import Logo5 from "../../Assets/Logo 5.svg"
import Logo6 from "../../Assets/Logo 7.svg"
import Logo7 from "../../Assets/Logo 8.svg"
import RightArrow from "../../Assets/white Arrow right.svg"
import LeftArrow from "../../Assets/White arrow left.svg"
import Hand from "../../Assets/Hand.svg"
import Chair2 from "../../Assets/Chair2.svg"
import Sofa from "../../Assets/Sofa.svg"
import Chair3 from "../../Assets/chair3.svg"
import Chair4 from "../../Assets/Chair4.svg"
import Heart2 from "../../Assets/Heart 1.svg"
import Cart from "../../Assets/cart.svg"


const Section2 = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex'>
                        <div className=' mt-4'>
                            <Image src={Zapier} className='img-fluid' alt='logo' />
                        </div>
                        <div className='col-md-2 mt-2 ms-4'>
                            <Image src={Logo2} className='img-fluid' alt='logo' />
                        </div>
                        <div className='col-md-2'>
                            <Image src={Logo3} className='img-fluid' alt='logo' />
                        </div>
                        <div className='col-md-2 mt-4'>
                            <Image src={Logo4} className='img-fluid' alt='logo' />
                        </div>
                        <div className='col-md-2 mt-3'>
                            <Image src={Logo5} className='img-fluid' alt='logo' />
                        </div>
                        <div className='col-md-2 mt-3'>
                            <Image src={Logo6} className='img-fluid' alt='logo' />
                        </div>
                        <div className='col-md-1 mt-4'>
                            <Image src={Logo7} className='img-fluid' alt='logo' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-2 margbo'>
                <h2 className='fw-bold'>Featured Products</h2>
                <div className='position-relative'>
                    <Image src={RightArrow} className='bg1 position-absolute top-0 end-0' alt='arrow' />
                </div>
                <div className='position-relative'>
                    <Image src={LeftArrow} className='bg2 position-absolute top-0 end-0' alt='arrow' />
                    <Image src={Hand} className='bg2 mt-4 position-absolute top-0 end-0' alt='hand' />
                </div>
            </div>

            <div class="container text-center margi">
                <div className="row">
                    <div className="col-md-3">
                        <div className='post position-absolute bg-success succes text-white rounded pt-1 mt-3 mx-3'>
                            <span className=''>New</span>
                        </div>
                        <div className='position-absolute bg-white succe rounded mt-2 pt-2 end left2'>
                            <Image src={Heart2} className='' alt='favourites' />
                        </div>
                        <Image src={Chair2} className='img-fluid mb-2' alt='chair' />
                        <div className='d-flex newclas'>
                            <p className='text-start text-info'>Library Stool Chair</p>
                            <div className='position-relative clas2 bg-info rounded side mleft'>
                                <Image src={Cart} className='position-absolute top-0 end-0 mt-2 me-2' alt='cart' />
                            </div>
                        </div>
                        <h6 className='newclas text-start'>$20</h6>
                    </div>
                    <div className="col-md-3">
                        <div className='post position-absolute orange text-white rounded pt-1 mt-3 mx-3'>
                            <span className=''>Sales</span>
                        </div>
                        <Image src={Sofa} className='img-fluid mb-2' alt='chair' />
                        <div className='d-flex newclas'>
                            <p className='text-start'>Library Stool Chair</p>
                            <div className='position-relative clas2 bg-dark-subtle rounded side mleft'>
                                <Image src={Cart} className='position-absolute top-0 end-0 mt-2 me-2' alt='cart' />
                            </div>
                        </div>
                        <h6 className='newclas text-start'>$20 <span className='text-decoration-line-through text-body-secondary'>$39</span></h6>
                    </div>
                    <div className="col-md-3">
                        <Image src={Chair3} className='img-fluid mb-2' alt='chair' />
                        <div className='d-flex newclas'>
                            <p className='text-start'>Library Stool Chair</p>
                            <div className='position-relative clas2 bg-dark-subtle rounded side mleft'>
                                <Image src={Cart} className='position-absolute top-0 end-0 mt-2 me-2' alt='cart' />
                            </div>
                        </div>
                        <h6 className='newclas text-start'>$20</h6>
                    </div>
                    <div className="col-md-3">
                        <Image src={Chair4} className='img-fluid mb-2' alt='chair' />
                        <div className='d-flex newclas'>
                            <p className='text-start'>Library Stool Chair</p>
                            <div className='position-relative clas2 bg-dark-subtle rounded side mleft'>
                                <Image src={Cart} className='position-absolute top-0 end-0 mt-2 me-2' alt='cart' />
                            </div>
                        </div>
                        <h6 className='newclas text-start'>$20</h6>
                    </div>
                </div>

                 {/* <div className='container mt-2'>
                <h2 className='fw-bold'>Featured Products</h2>
                <div className='position-relative'>
                    <Image src={RightArrow} className='bg1 position-absolute top-0 end-0' alt='arrow' />
                </div>
                <div className='position-relative'>
                    <Image src={LeftArrow} className='bg2 position-absolute top-0 end-0' alt='arrow' />
                    <Image src={Hand} className='bg2 mt-4 position-absolute top-0 end-0' alt='hand' />
                </div>
            </div> */}
            </div>


        </>

    )
}

export default Section2