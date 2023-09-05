import React from 'react'
import "./nav2.css"
import Menu from "../../Assets/Menu.svg"
import Image from 'next/image'

const NavbarTwo = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="mt-3">
                        <button className="btn border-secondary-subtle fw-semibold text-black">
                            <Image src={Menu} className='mb-1' alt='menu' />
                            <span className="me-2 px-3">All Categories</span>
                        </button>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mt-3 mx-5 col-8">
                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page" href="#"><span className='colo fw-bold'>Home</span></a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">Product</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">Pages</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        <div className='mt-4 pt-1'>
                            <p className='fw-bold'><span className='text-secondary'>Contact:</span>(808) 555-0111</p>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default NavbarTwo