import FooterSection from '@/app/components/footer/Footer';
import Header from '@/app/components/header/header';
import HeroSection from '@/app/components/HeroSection/hero';
import Navbar from '@/app/components/Navbar/navbar';
import NavbarTwo from '@/app/components/Navbar2/nav2';
import Section2 from '@/app/components/Section2/section';
import Section3 from '@/app/components/Section3/section3';
import Testimonial from '@/app/components/Testimonials/Testimonial';
import Script from 'next/script';
import React from 'react'


const MainPage = () => {
  return (
    <div>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
      <Header />
      <Navbar />
      <NavbarTwo/>
      <HeroSection/>
      <Section2/>
      <Section3/>
      <Testimonial/>
    <FooterSection/>

    </div>



  )
}

export default MainPage;