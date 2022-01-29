import React from 'react';
import AllNewProducts from '../NewArrivalsComponent/AllNewProducts';

export default function NewArrivals() { 

    return (
        <div className='w-full' >
            {/* <div style={{border:'2px solid #F1F1F1'}} className='w-full' >
                <div onClick={()=> setShow(prev => !prev)} style={{borderColor: '#F1F1F1'}} className='flex cursor-pointer items-center justify-center w-32 py-2 cursor-pointer border-l-2 ml-auto' >
                    <p style={{color: '#192F5D', fontSize: '16px'}} className='text-center font-Assistant-Medium' >Sort</p>  
                    <div className='ml-2' > 
                        {!show 
                            ? 
                                <svg  width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 1.5L6 6.5L1 1.5" stroke="#192F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            :
                                <svg width="12" height="8" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.375 5.75L6 1.375L1.625 5.75" stroke="#192F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg> 
                        }
                    </div>
                </div>
            </div> */}
            <div className='w-full'>
                <AllNewProducts title='All New Arrival' />
            </div>
        </div>
    );
}
