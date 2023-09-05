import React from 'react'
import "./section3.css"
import RightArrow from "../../Assets/white Arrow right.svg"
import LeftArrow from "../../Assets/White arrow left.svg"
import Hand from "../../Assets/Hand.svg"
import Image from 'next/image'
import WingChair from "../../Assets/Wing Chair.svg"
import WoodenChair from "../../Assets/Wooden Chair.svg"
import DeskChair from "../../Assets/Desk chair.svg"
import Chair2 from "../../Assets/Chair2.svg"
import Sofa from "../../Assets/Sofa.svg"
import Chair3 from "../../Assets/chair3.svg"
import Chair4 from "../../Assets/Chair4.svg"
import Cart from "../../Assets/cart.svg"
import Heart from "../../Assets/heart2.svg"
import Chair5 from "../../Assets/Chair5.svg"
import Chair6 from "../../Assets/Chair6.svg"
import Chair7 from "../../Assets/Chair7.svg"
import Chair8 from "../../Assets/Chair8.svg"



const Section3 = () => {
    return (
        <>
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

            <div class="container text-center mt-5">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <div className='down position-absolute'>
                            <h4 className='text-white text-start mt-3 mx-4'>Wing Chair</h4>
                            <p className='text-white-50 text-start mx-4'>3,584 Products</p>
                        </div>
                        <Image src={WingChair} className='img-fluid' alt='chair' />
                    </div>
                    <div class="col-md-4 mb-3">
                        <div className='down position-absolute'>
                            <h4 className='text-white text-start mt-3 mx-4'>Wooden Chair</h4>
                            <p className='text-white-50 text-start mx-4'>157 Products</p>
                        </div>
                        <Image src={WoodenChair} className='img-fluid' alt='chair' />
                    </div>
                    <div class="col-md-4 mb-3">
                        <div className='down position-absolute'>
                            <h4 className='text-white text-start mt-3 mx-4'>Desk Chair</h4>
                            <p className='text-white-50 text-start mx-4'>154 Products</p>
                        </div>
                        <Image src={DeskChair} className='img-fluid' alt='chair' />
                    </div>
                </div>
            </div>

            <h3 className='text-center fw-bold mt-5'>Our Products</h3>
            <ul class="nav d-flex justify-content-center fw-bold">
                <li class="list mx-3"><a className='text-decoration-none text-black' href="#">All</a></li>
                <li class="list mx-3"><a className='text-decoration-none text-black-50' href="#">Newest</a></li>
                <li class="list mx-3"><a className='text-decoration-none text-black' href="#">Trending</a></li>
                <li class="list mx-3"><a className='text-decoration-none text-black-50' href="#">Best Sellers</a></li>
                <li class="list mx-3"><a className='text-decoration-none text-black-50' href="#">Featured</a></li>
            </ul>

            <div class="container text-center margi">
                <div className="row">
                    <div className="col-md-3">
                        <div className='post position-absolute bg-success succes text-white rounded pt-1 mt-3 mx-3'>
                            <span className=''>New</span>
                        </div>
                        <div className='position-absolute bg-white succe rounded mt-2 pt-2 end left2'>
                            <Image src={Heart} className='' alt='favourites' />
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
            </div>



            <div class="container text-center margi">
                <div className="row">
                    <div className="col-md-3">
                        <div className='post position-absolute bg-success succes text-white rounded pt-1 mt-3 mx-3'>
                            <span className=''>New</span>
                        </div>
                        <Image src={Chair5} className='img-fluid mb-2' alt='chair' />
                        <div className='d-flex newclas'>
                            <p className='text-start'>Library Stool Chair</p>
                            <div className='position-relative clas2 bg-dark-subtle rounded side mleft'>
                                <Image src={Cart} className='position-absolute top-0 end-0 mt-2 me-2' alt='cart' />
                            </div>
                        </div>
                        <h6 className='newclas text-start'>$20</h6>
                    </div>
                    <div className="col-md-3">
                        <div className='post position-absolute orange text-white rounded pt-1 mt-3 mx-3'>
                            <span className=''>Sales</span>
                        </div>
                        <Image src={Chair6} className='img-fluid mb-2' alt='chair' />
                        <div className='d-flex newclas'>
                            <p className='text-start'>Library Stool Chair</p>
                            <div className='position-relative clas2 bg-dark-subtle rounded side mleft'>
                                <Image src={Cart} className='position-absolute top-0 end-0 mt-2 me-2' alt='cart' />
                            </div>
                        </div>
                        <h6 className='newclas text-start'>$20 <span className='text-decoration-line-through text-body-secondary'>$39</span></h6>
                    </div>
                    <div className="col-md-3">
                        <Image src={Chair7} className='img-fluid mb-2' alt='chair' />
                        <div className='d-flex newclas'>
                            <p className='text-start'>Library Stool Chair</p>
                            <div className='position-relative clas2 bg-dark-subtle rounded side mleft'>
                                <Image src={Cart} className='position-absolute top-0 end-0 mt-2 me-2' alt='cart' />
                            </div>
                        </div>
                        <h6 className='newclas text-start'>$20</h6>
                    </div>
                    <div className="col-md-3">
                        <Image src={Chair8} className='img-fluid mb-2' alt='chair' />
                        <div className='d-flex newclas'>
                            <p className='text-start'>Library Stool Chair</p>
                            <div className='position-relative clas2 bg-dark-subtle rounded side mleft'>
                                <Image src={Cart} className='position-absolute top-0 end-0 mt-2 me-2' alt='cart' />
                            </div>
                        </div>
                        <h6 className='newclas text-start'>$20</h6>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Section3