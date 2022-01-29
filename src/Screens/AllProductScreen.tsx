import React from 'react'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function AllProductScreen() {
 
    const [show, setShow] = React.useState(false)

    return ( 
        <div className='w-full h-full overflow-x-hidden '>
            {/* <div className='w-full' >
                <Navbar />
            </div> */}
            <div style={{border:'2px solid #F1F1F1'}} className='w-full' >
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
            </div>
            <div className='w-full flex flex-col items-center my-14 mt-20'>
                <p style={{fontSize: '32px', color: '#192F5D'}} className='font-Assistant-Bold mt-1 text-center' >{localStorage.getItem('product-title')}</p>
                <Collections title='ALL'  collection={true} option={true} array={localStorage.getItem('product-route')} /> 
            </div> 
            <div className='w-full' >
                <Footer />
            </div>
        </div>
    )
}
