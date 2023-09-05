import React from 'react'
import "./hero.css"
import Chair from "../../Assets/Product Image.svg"
import Image from 'next/image'
import Arrow from "../../Assets/Right 24px.svg"
import LeftArrow from "../../Assets/Right  (1).svg"
import RightArrow from "../../Assets/Right 24px (1).svg"
import Tracker from "../../Assets/Tracker.svg"
import Box from "../../Assets/box.svg"
import Truck from "../../Assets/delivery-truck.svg"
import Hours from "../../Assets/24-hours.svg"
import Shield from "../../Assets/shield.svg"

const HeroSection = () => {
    return (
        <>
            <div className='backcol container-fluid'>
                <div class="row">
                    <div className='col-md-2 displyNone'>
                        <div className='circle position-relative top-50 start-50 translate-middle'>
                            <Image src={LeftArrow} className='mt-2 mx-2 ' alt='arrow' />
                        </div>
                    </div>
                    <div class="col-md-4 mt-4">
                        <div className='position-relative top-50 start-50 translate-middle'>
                            <h5 className='mt-5'>Welcome to chairy</h5>
                            <h2 className='text-start fw-bolder'>Best Furniture Collection for your Interior.</h2>
                            <button type="button" className="btn mt-3 btcol text-white btn-lg">Shop Now <Image src={Arrow} className='mx-2' alt='arrow' /> </button>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div className='bgimg'>
                            <Image src={Chair} className='img-fluid position-relative top-0 end-0' alt='chair' />
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='circle position-relative top-50 start-50 translate-middle displyNone'>
                            <Image src={RightArrow} className='mt-2 mx-2' alt='arrow' />
                        </div>
                    </div>
                    <Image src={Tracker} className='' alt='tracker' />
                </div><br /><br />
            </div>
            <div class="container card shadow p-3 mb-5 bg-body-tertiary rounded border-0 position-relative top-100 start-0">
                <div class="card-body">
                    <div className='row'>
                        <div className='col-md-3 col-sm-6 d-flex mt-2'>
                            <Image src={Box} className='img-fluid' alt='box' />
                            <div className='ms-3 mt-3'>    <h6 className='fw-bold'>Discount</h6>
                                <span className=''>Every week new sales</span>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 d-flex mt-2'>
                            <Image src={Truck} className='img-fluid' alt='truck' />
                            <div className='ms-3 mt-3'><h6 className='fw-bold'>Free Delivery</h6>
                                <span className=''>100% Free for all orders</span>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 d-flex mt-2'>
                            <Image src={Hours} className='img-fluid' alt='time' />
                            <div className='ms-3 mt-3'><h6 className='fw-bold'>Great Support 24/7</h6>
                                <span className=''>We care your experiences</span>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 d-flex mt-2'>
                            <Image src={Shield} className='img-fluid' alt='shield' />
                            <div className='ms-3 mt-3'><h6 className='fw-bold'>secure Payment</h6>
                                <span className=''>100% Secure Payment Method</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HeroSection