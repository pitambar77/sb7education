import React from 'react'
import Slider from 'react-slick'

const TeestimonialData=[
    {
        id:1,
        name:"Jony sins",
        text:"THE CONCEPTS OF THIS INSTITUTION IS KNOWN FOR – • Modern Infrastructure • Interactive and Project learning • Experienced faculties available for 24*7 • Well- ...",
        img:"https://www.investopedia.com/thmb/XJDLdvCuNbcWk_EVZzXx84ae82c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg",
        delay:0.2
    },
    {
        id:2,
        name:"Jony sins",
        text:"THE CONCEPTS OF THIS INSTITUTION IS KNOWN FOR – • Modern Infrastructure • Interactive and Project learning • Experienced faculties available for 24*7 • Well- ...",
        img:"https://www.investopedia.com/thmb/XJDLdvCuNbcWk_EVZzXx84ae82c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg",
        delay:0.5
    },
    {
        id:3,
        name:"Jony sins",
        text:"THE CONCEPTS OF THIS INSTITUTION IS KNOWN FOR – • Modern Infrastructure • Interactive and Project learning • Experienced faculties available for 24*7 • Well- ...",
        img:"https://www.investopedia.com/thmb/XJDLdvCuNbcWk_EVZzXx84ae82c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg",
        delay:0.8
    },
    {
        id:4,
        name:"Jony sins",
        text:"THE CONCEPTS OF THIS INSTITUTION IS KNOWN FOR – • Modern Infrastructure • Interactive and Project learning • Experienced faculties available for 24*7 • Well- ...",
        img:"https://www.investopedia.com/thmb/XJDLdvCuNbcWk_EVZzXx84ae82c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg",
        delay:1.1
    },
    {
        id:5,
        name:"Jony sins",
        text:"THE CONCEPTS OF THIS INSTITUTION IS KNOWN FOR – • Modern Infrastructure • Interactive and Project learning • Experienced faculties available for 24*7 • Well- ...",
        img:"https://www.investopedia.com/thmb/XJDLdvCuNbcWk_EVZzXx84ae82c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg",
        delay:1.4
    },
    {
        id:6,
        name:"Jony sins",
        text:"THE CONCEPTS OF THIS INSTITUTION IS KNOWN FOR – • Modern Infrastructure • Interactive and Project learning • Experienced faculties available for 24*7 • Well- ...",
        img:"https://www.investopedia.com/thmb/XJDLdvCuNbcWk_EVZzXx84ae82c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg",
        delay:0.2
    }
]

const Testimonial = () => {

    const setting = {
        dots:true,
        arrow:false,
        infinite:true,
        speed:500,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint:10000,
                setting:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:true,
                },
            },
            {
                breakpoint:1024,
                setting:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlide:2,
                }
            },
            {
                breakpoint:640,
                setting:{
                    slidesToShow:1,
                    slidesToScroll:1,
                
                }
            }
        ]
    }

  return (
    <div className=' py-14 mb-10'>
        <div className=' container'>
            {/* header section */}
            <div className=' space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6'>
                <h1 className=' uppercase font-semibold text-orange-600' >
                    Our Testimonials
                </h1>
                <p className=' font-semibold text-3xl'>
                    What Our Students Say About Us
                </p>
            </div>
            {/* card sections */}
            <div >
                <Slider {...setting} >
                    {
                        TeestimonialData.map((item)=>{
                            return (
                                <div key={item.id}  >
                                    <div className=' flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10'>
                                        {/* upper section */}
                                        <div className=' flex justify-start items-center gap-5'>
                                            <img src={item.img} alt="image" className=' w-16 h-16 rounded-full' />
                                            <div>
                                                <p className=' text-xl font-bold text-black/80'>{item.name}</p>
                                                <p>{item.name}</p>
                                            </div>
                                        </div>
                                        {/* bottom section */}
                                        <div className=' py-6 space-y-4'>
                                            <p className=' text-sm text-gray-500'>
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonial