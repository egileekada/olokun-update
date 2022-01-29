import React from 'react'

export default function ImageSlide(props: any) {

    const [index, setIndex] = React.useState(0) 

    const Next =()=> {
        let value = index+1 
        if(value < props.image.length){
            setIndex(value) 
        }
    }

    const Previous =()=> { 
        let value = index-1
        if(value > -1){ 
            setIndex(value) 
        }
    }  

    return (
        <div className='w-full'>
            <div className='flex items-center' > 
                <div className='lg:mr-8' >
                    {props.image.map((item: any, i: any) => {  
                        return( 
                            <div onClick={()=> setIndex(i)}  key={item} className={i === index ? 'w-3 h-3 bg-olokun cursor-pointer my-4 hidden lg:flex rounded-full' : 'w-3 h-3 bg-white cursor-pointer border border-olokun my-4 hidden lg:flex rounded-full'} />
                        )
                    })}
                    {/* <div className='w-3 h-3 bg-olokun my-4 rounded-full' />
                    <div className='w-3 h-3 bg-white border border-olokun my-4 rounded-full' />
                    <div className='w-3 h-3 bg-white border border-olokun my-4 rounded-full' /> */}
                </div>
                <div className='w-full lg:h-80 flex justify-center bg-white' >
                    <img src={props.image[index]} className='w-full h-64 lg:h-80 bg-white lg:px-8 object-cover lg:object-contain object-top' alt='product' />
                </div>
            </div>
            <div className='w-full flex items-center lg:mt-0 mt-8 py-4 lg:pl-12 lg:pr-2' > 
                <div onClick={()=> Previous()} style={{border: '1px solid #192F5D'}} className='w-6 h-6 cursor-pointer hidden lg:flex items-center justify-center' >
                    <svg width="7" height="14" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1L1 8L8 15" stroke="#192F5D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className='w-full  overflow-x-auto flex justify-center' >  
                    {props.image.map((item: any, i: any) => {
                        return( 
                            <div onClick={()=> setIndex(i)} key={i} className={i=== index ? 'w-32 h-32 mx-2 bg-blue-200 cursor-pointer border border-olokun opacity-60': 'w-32 h-32 cursor-pointer mx-2'} >
                                <img src={item} alt={item} className=' object-cover w-full h-full ' />
                            </div>
                        )
                    })} 
                </div>
                <div onClick={()=> Next()} style={{border: '1px solid #192F5D'}} className='w-6 h-6 cursor-pointer hidden lg:flex items-center justify-center' >
                    <svg width="7" height="14" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 15L8 8L1 0.999999" stroke="#192F5D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
