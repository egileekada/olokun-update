import React from 'react'  
import { useNavigate } from 'react-router-dom';
import Collections from '../Collections'

export default function AllProductCollection() {   

    const navigate = useNavigate(); 

    const ClickHandler =(title: any, item: any)=> {
        localStorage.setItem('product-title', title)
        localStorage.setItem('product-route', item)
        navigate('/allproduct')
    }

    return (
        <div>             
            <div className='pb-8 w-full' >
                {/* Men Product */}
                <div className='w-full flex flex-col items-center my-14 mt-20'>
                    <Collections title='MEN’S JEWELLERY' collection={true} featured={true} option={true} array='category=chains&limit=4' />
                    <button onClick={()=> ClickHandler('MEN’S JEWELLERY','')} style={{backgroundColor: '#192F5D'}} className=' mx-auto text-white px-8 mt-8 rounded-md py-2 font-Assistant-Bold '>SHOP ALL</button>
                </div>
                {/* Women Product */}
                <div className='w-full flex flex-col items-center my-14 mt-20'>
                    <Collections title='WOMEN’S JEWELLERY' collection={true}  featured={true} option={true} array='category=bracelet&limit=4' />
                    <button onClick={()=> ClickHandler('WOMEN’S JEWELLERY','')} style={{backgroundColor: '#192F5D'}} className=' mx-auto text-white px-8 mt-8 rounded-md py-2 font-Assistant-Bold '>SHOP ALL</button>
                </div>
                {/* ACCESSORIES */}
                <div className='w-full flex flex-col items-center my-14 mt-20'>
                    <Collections title='ACCESSORIES' collection={true} featured={true} array='limit=4' />
                    <button onClick={()=> ClickHandler('ACCESSORIES','')} style={{backgroundColor: '#192F5D'}} className=' mx-auto text-white px-8 mt-8 rounded-md py-2 font-Assistant-Bold '>SHOP ALL</button>
                </div>
                {/* ACCESSORIES */}
                <div className='w-full flex flex-col items-center my-14 mt-20'>
                    <Collections title='HOME DECORATION' collection={true}  featured={true} array='limit=4' />
                    <button onClick={()=> ClickHandler('HOME DECORATION','')} style={{backgroundColor: '#192F5D'}} className=' mx-auto text-white px-8 mt-8 rounded-md py-2 font-Assistant-Bold '>SHOP ALL</button>
                </div> 
            </div> 
        </div>
    )
}
