import Image from "next/image";
import Logo from "../../assets/Logo.svg"
import "./footer.css"
import Facebook from "../../Assets/Facebook.svg"
import Twitter from "../../Assets/Twitter.svg"
import Instagram from "../../Assets/Instagram.svg"
import Pinterest from "../../Assets/Pinterest.svg"
import Youtube from "../../Assets/YouTube.svg"
import Master from "../../Assets/Master.svg"
import PayPal from "../../Assets/Paypal.svg"
import Express from "../../Assets/American Express.svg"
import Visa from "../../Assets/Visa.svg"





const FooterSection = () => {
    return (
        <>
            <div className="container ">
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
                            <input type="email" className="ps-3 py-2 rounded border border-2" placeholder="Your email" />
                            <button type="button" className="btn mx-1 py-2 mb-1 bg-info text-white">Subscribe</button>
                            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="">
                    <p className="text-body-tertiary">@ 2021 - Blogy - Designed & Develop by <span className="text-black"> Zakirsoft</span></p>
                </div>
                <div className="d-flex justify-content-end">
                    <Image src={Master} className="mx-2"/>
                    <Image src={PayPal} className="mx-2"/>
                    <Image src={Express} className="mx-2"/>
                    <Image src={Visa} className="mx-2"/>
                </div>
            </div>
        </>
    )

};
export default FooterSection