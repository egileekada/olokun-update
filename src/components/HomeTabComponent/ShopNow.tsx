import React from 'react' 
import Men from '../../assets/images/men.png'
import Women from '../../assets/images/women.png'
import Accessories from '../../assets/images/accessories.png'
import Home from '../../assets/images/home.png'
import { useNavigate } from 'react-router-dom'

export default function ShopNow() {

    const Array = [
        {
            name: 'MEN',
            image: Men
        },
        {
            name: 'WOMEN',
            image: Women
        },
        {
            name: 'ACCESSORIES',
            image: Accessories
        },
        {
            name: 'HOME DECOR',
            image: Home
        },
    ]
    const navigate = useNavigate();   

    const ClickHandler =(title: any, item: any)=> {
        localStorage.setItem('product-title', title)
        localStorage.setItem('product-route', item)
        navigate('/allproduct')
    }

    return (
        <div className='w-full px-3 lg:px-10 grid grid-cols-2 gap-2 lg:grid-cols-4' >
            {Array.map((item, index ) => {
                return(
                    <div key={index} className='w-full relative'>
                        <img className='w-full h-auto lg:h-540px object-cover'  src={item.image} alt={item.name} />
                        <div className='absolute flex flex-col w-full item-center bottom-14 '>
                            <p className='text-center mb-5 text-white font-Assistant-Medium' >{item.name}</p>
                            <button onClick={()=> ClickHandler(item.name, '')} className='bg-white mx-auto text-black px-4 py-2 font-Assistant-Bold '>SHOP NOW</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
