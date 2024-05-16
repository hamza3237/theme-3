import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const BannerSlider = () => {
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '700px'
    }
    const slideImages = [
        {
            url: 'https://fresh-theme-smooth.myshopify.com/cdn/shop/files/Group_84_1500x.png?v=1647349751',
            title: 'Freshly roasted from bean to bottle',
            subtitle: 'Inspirational blends crafted by our coffee masters'
        },
        {
            url: 'https://fresh-theme-smooth.myshopify.com/cdn/shop/files/Group_81_1500x.png?v=1647008655',
            title: 'Organic coffee from  the farm',
            subtitle: 'The most exceptional  cup in the world...'
        },

    ];
    return (
        <div className='h-full w-full '>



            <div className=" w-full">
                <Slide>
                    {slideImages.map((item, index) => (
                        <div key={index}>
                            <div className="h-[200px]" style={{ ...divStyle, 'backgroundImage': `url(${item.url})` }}>
                                <div className='text-white gap-4   px-4 md:px-0 flex flex-col items-start'>
                                    <div className='text-5xl'>{item.title}</div>
                                    <div>{item.subtitle}</div>
                                    <button className='bg-button h-10 px-6 mt-6'>Shop now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>


        </div>
    )
}

export default BannerSlider