import React from 'react'
import "./Testimonial.css"
import RightArrow from "../../Assets/white Arrow right.svg"
import LeftArrow from "../../Assets/White arrow left.svg"
import Image from 'next/image'
import Hand from "../../Assets/Hand.svg"
import CircleImage from "../../Assets/Circle Image.svg"
import Quotes from "../../Assets/Double Quotes.svg"
import CircleImage2 from "../../Assets/Circle Image2.svg"
import Chair2 from "../../Assets/Chair2.svg"
import Sofa from "../../Assets/Sofa.svg"
import Chair3 from "../../Assets/chair3.svg"
import Chair4 from "../../Assets/Chair4.svg"
import Cart from "../../Assets/cart.svg"
import Heart from "../../Assets/heart2.svg"


const Testimonial = () => {
    return (
        <>
            <div className='colobg mt-5 mb-5'>
                <div className='container py-5'>
                    <span className='fw-bold font'>What client says about us</span>
                    <div className='float-end position-relative '>
                        <Image src={LeftArrow} className='bg2' />
                        <Image src={RightArrow} className='bg1' />
                        <Image src={Hand} className='bg2 position-absolute top-0 start-0  mt-4 ms-3' />
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body position-relative">
                                    <p className="card-text text-start p-3 border-start border-info">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“</p>
                                    <div className='d-flex'>
                                        <Image src={CircleImage} className='position-relative' alt='pic' />
                                        <div>
                                            <h6 className='text-start mx-3 mt-2'>Kristin Watson</h6>
                                            <span className='text-start text-body-tertiary d-flex mx-3 mt-2'>Fashion Designer</span>
                                        </div>
                                        <Image src={Quotes} className='final' />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body position-relative">
                                    <p className="card-text text-start p-3 border-start border-info">Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit, quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac, eleifend luctus leo. Ut ac imperdiet velit. Aliquam semper ex in volutpat rutrum. </p>
                                    <div className='d-flex mtop'>
                                        <Image src={CircleImage2} className='position-relative' alt='pic' />
                                        <div>
                                            <h6 className='text-start mx-3 mt-2'>Esther Howard</h6>
                                            <span className='text-start text-body-tertiary d-flex mx-3 mt-2'>Fashion Designer</span>
                                        </div>
                                        <Image src={Quotes} className='final' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='container mt-2 margbo'>
                <h2 className='fw-bold'>Recently Added</h2>
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
            <br /><br />
<hr />

        </>
    )
}

export default Testimonial