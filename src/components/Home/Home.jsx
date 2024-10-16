import React from 'react'
import Hero from '../Hero/Hero'
import NumberCounter from '../NumberCounter/NumberCounter'
import NavbarBanner from '../Navbar/NavbarBanner'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Banner from '../Banner/Banner'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import SubjectCard from '../SubjectCard/SubjectCard'
import Testimonial from '../Testimonial/Testimonial'

const Home = () => {
    const BannerData1 = {
        image:banner1,
        tag:"Costomize with your schedule",
        title:"Personilized Professional Online Tutor On Your Schedule",
        subtitle:"School administrators are professionals who work in leadership roles within schools, and may work at the primary, secondary, or collegiate level. Some examples of school administrator positions include: Meeting with parents, Hiring and training staff, Evaluating teachers, and Overseeing an entire school district as a superintendent",
        
        }
      
        const BannerData2 = {
            image:banner2,
            tag:"Costomize with your schedule",
            title:"Personilized Professional Online Tutor On Your Schedule",
            subtitle:"School administrators are professionals who work in leadership roles within schools, and may work at the primary, secondary, or collegiate level. Some examples of school administrator positions include: Meeting with parents, Hiring and training staff, Evaluating teachers, and Overseeing an entire school district as a superintendent",
            
            
      
            }
  return (
     <main className=' overflow-x-hidden'>
      <NavbarBanner/>
      <Hero/>
      <NumberCounter/>
      <WhyChooseUs/>
      <Banner {...BannerData1}/>
      <Banner {...BannerData2} reverse={true} />
      <SubjectCard/>
      <Testimonial/>
    </main>
  )
}

export default Home