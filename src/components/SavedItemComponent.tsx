import React from 'react'
import { useNavigate } from 'react-router-dom'; 

export default function SavedItemComponent(props: any) { 

    const navigate = useNavigate(); 

    const OpenProduct =(index: any)=> {
        localStorage.setItem('product', index) 
        navigate('/checkout') 
    }

    return (
        <div className=' w-full justify-between flex lg:flex-row flex-col my-6 lg:items-center' >
        <div className='w-auto lg:flex-row flex-col  flex' >
            <div className='lg:w-40 h-40 border' >
                <img src={props.product.item.imagesURLs[0]} className='w-full h-full object-cover object-top'  alt='' />
            </div>
            <div className='lg:ml-4 h-40 flex mt-4 lg:mt-0 flex-col' > 
                <p style={{color: '#FFFFFF', fontSize: '18px'}} className='font-Assistant-Regular ' >{props.product.item.name}</p>
                <p style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '16px'}} className='font-Assistant-Regular my-2 ' >Descriptions</p>
                <p style={{color: '#FFFFFF', fontSize: '16px'}} className='font-Assistant-Regular ' >Unit Price: €{props.product.item.price}<span style={{color: "#F09000"}} className='ml-3' >Sub Total: €{props.product.item.price}</span></p> 
                </div>
            </div>
            <div className='flex flex-col' >
                <button onClick={()=> OpenProduct(props.product.item._id)} className='lg:w-44 font-Assistant-Bold py-3 border border-white text-white' >BUY</button>
                <button style={{backgroundColor: 'rgba(255, 255, 255, 0.12)'}} className='lg:w-44 font-Assistant-Bold py-3 mt-4 text-white' >REMOVE</button>
            </div>
        </div>
    )
}
