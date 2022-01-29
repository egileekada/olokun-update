import React from 'react'
import { useNavigate } from 'react-router';

export default function OrderMessage(props: any) {

    const navigate = useNavigate(); 

    const CloseHandler =()=> {
        props.close(false)
        navigate('/')
    }

    return (
        <div className='lg:w-668px w-full bg-white'>
            <div className='w-full flex' >
                <div onClick={()=> CloseHandler()} style={{backgroundColor:'#192F5D'}} className=' px-6 py-2 flex items-center cursor-pointer ml-auto ' >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.00003 6L11 11M1 1L6.00003 6L1 1ZM6.00003 6L11 1L6.00003 6ZM6.00003 6L1 11L6.00003 6Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p style={{color: '#FFFFFF', fontSize: '14px'}} className='font-Assistant-Medium text-center ml-3 ' >Close</p>
                </div>
            </div>
            <div className=' w-full py-12 pb-20 flex flex-col items-center justify-center px-6' >
                <div style={{backgroundColor:'#25AE88'}} className='w-32 h-32 flex justify-center items-center rounded-full' >
                    <svg width="62" height="43" viewBox="0 0 62 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M60.1199 1.59961L24.2799 41.9196L1.87988 23.9996" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </div>
                <p style={{color: '#192F5D', fontSize: '20px'}} className='font-Assistant-Medium mt-3 ' >ORDER PLACED</p>
                <p style={{color: '#192F5D', fontSize: '16px'}} className='font-Assistant-Regular w-80 text-center mt-2 ' >You have successfully placed your order, olokun team wil reach out to you soon</p>
            </div>
        </div>
    )
}
