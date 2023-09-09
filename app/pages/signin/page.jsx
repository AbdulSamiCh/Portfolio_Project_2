"use client"
import React from 'react'
import ArrowRight from "../../../app/Assets/ArrowRight.svg"
import Image from 'next/image';
import Logo from "../../Assets/Logo.svg"
import Facebook from "../../Assets/Facebook.svg"
import Twitter from "../../Assets/Twitter.svg"
import Instagram from "../../Assets/Instagram.svg"
import Pinterest from "../../Assets/Pinterest.svg"
import Youtube from "../../Assets/YouTube.svg"
import Master from "../../Assets/Master.svg"
import PayPal from "../../Assets/Paypal.svg"
import Express from "../../Assets/American Express.svg"
import Visa from "../../Assets/Visa.svg"
import "./media.css"
import { useState } from "react";

const Signin = () => {

const [userEmail, setUserEmail] = useState("");
    const [userEmailMessage, setuserEmailMessage] = useState("This is required field");
    const [showUserEmailError, setShowUserEmailError] = useState(false);

    const [userPassword, setUserPassword] = useState("");
    const [userPasswordMessage, setUserPasswordMessage] = useState("This is required field");
    const [showUserPasswordError, setShowUserPasswordError] = useState(false);

    const userEmailHandler = (e) => {
      setUserEmail(e.target.value);
      if (userEmail !== "") {
        setuserEmailMessage("You are doing good");
      }
    };

    const userPasswordHandler = (e) => {
      setUserPassword(e.target.value);
      if (userPassword !== "") {
        setUserPasswordMessage("You are doing good");
      }
    };

    const formSubmitHandler = (e) => {
      e.preventDefault();

      if (userEmail === "") {
        setShowUserEmailError(true);
      }
      if (userPassword === "") {
        setShowUserPasswordError(true);
      }
    };


  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="justify-content-center row">
          <div className="col-md-2"></div>
          <div className="card style border-0 shadow p-3 mb-5 bg-body-tertiary rounded mt-5 col-md-8">
            <div className="card-body">
              <form onSubmit={formSubmitHandler}>
                <h1 className="fw-bold text-center mt-3 mb-4">Sign In</h1>
                <input
                  className="form-control-lg col-12 col-md-12 mt-3 blu"
                  type="email"
                  placeholder="Email"
                  value={userEmail}
                  onChange={userEmailHandler}
                />
                {showUserEmailError && (
                  <p
                    className={`${
                      userEmailMessage === "You are doing good"
                        ? "text-success"
                        : "text-danger"
                    } fw-bold`}
                  >
                    {userEmailMessage}
                  </p>
                )}
                <input
                  className="form-control-lg col-12 col-md-12 mt-4 blu"
                  type="password"
                  placeholder="Password"
                  value={userPassword}
                      onChange={userPasswordHandler}
                />
                {showUserPasswordError && (
                      <p
                        className={`${
                          userPasswordMessage === "You are doing good"
                            ? "text-success"
                            : "text-danger"
                        } fw-bold`}
                      >
                        {userPasswordMessage}
                      </p>
                    )}
                <input type="checkbox" className="mx-1 mt-2" />
                <span className="mx-2 text-black-50">Remember Me</span>
                <span className="fw-semibold position-absolute end-0 me-5 text-info">
                  Forget Password
                </span>
                <div className="d-grid gap-2 mt-3 mx-auto">
                  <button
                    type="submit"
                    className="btn btn-info text-white fw-bolder"
                  >
                    Sign In <Image src={ArrowRight} className="mx-2" />{" "}
                  </button>
                  <p className="text-center mt-3 fw-semibold">
                    Don’t have account?
                    <a href="#" className="text-decoration-none">
                      <span className="text-info"> Sign Up</span>
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

        <hr />
        <div className="container">
          <div className="row mt-5 media">
            <div className="col-md-4 mb-3">
              <Image src={Logo} alt="" />
              <p className="text-body-tertiary mt-3">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                Cras egestas purus </p>
              <div className="d-flex">
                <a href="#"><Image src={Facebook} className="mx-3" /></a>
                <a href="#"><Image src={Twitter} className="mx-3" /></a>
                <a href="#"><Image src={Instagram} className="mx-3" /></a>
                <a href="#"><Image src={Pinterest} className="mx-3" /></a>
                <a href="#"><Image src={Youtube} className="mx-3" /></a>
              </div>
            </div>

            <div className="col-md-2 mb-3">
              <div className="">
                <h5 className="text-black-50 fw-bold">Category</h5>
                <a href="#" className="text-decoration-none text-black"><p>Sofa</p></a>
                <a href="#" className="text-decoration-none text-black"><p>Armchair</p></a>
                <a href="#" className="text-decoration-none text-black"><p>Wing Chair</p></a>
                <a href="#" className="text-decoration-undeline text-info"><p>Desk Chair</p></a>
                <a href="#" className="text-decoration-none text-black"><p>wooden Chair</p></a>
                <a href="#" className="text-decoration-none text-black"><p>Park Bench</p></a>
              </div>

            </div>
            <div className="col-md-2 mb-3">
              <h5 className="text-black-50 fw-bold">Support</h5>
              <a href="#" className="text-decoration-none text-black"><p>Help & Support</p></a>
              <a href="#" className="text-decoration-none text-black"><p>Terms & Conditions</p></a>
              <a href="#" className="text-decoration-none text-black"><p>Privacy Policy</p></a>
              <a href="#" className="text-decoration-none text-black"><p>Help</p></a>
            </div>

            <div className="col-md-4">
              <div className="">
                <h5 className="text-black-50 fw-bold">Newsletter</h5>
                <input type="email" className="ps-3 rounded border border-2" placeholder="Your email" />
                <button type="button" className="btn mx-1 mb-1 bg-info text-white">Subscribe</button>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="">
            <p className="text-body-tertiary">@ 2021 - Blogy - Designed & Develop by <span className="text-black"> Zakirsoft</span></p>
          </div>
          <div className="d-flex justify-content-end">
            <Image src={Master} className="mx-2" />
            <Image src={PayPal} className="mx-2" />
            <Image src={Express} className="mx-2" />
            <Image src={Visa} className="mx-2" />
          </div>
        </div>
        <br />


        

      </>
    )
  }

 export default Signin;
