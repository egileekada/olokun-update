import React from 'react' 
import { useNavigate } from 'react-router';

export default function SlideShowCollection(props: any) { 

    const navigate = useNavigate();   
    const ref: any = React.useRef(null);  

    const scroll = (scrolloffset : any ) =>{
        ref.current.focus()
        ref.current.scrollLeft += scrolloffset 
    };     

    const OpenProduct =(index: any)=> {
        localStorage.setItem('product', index) 
        navigate('/product') 
    } 
    
    return (
        <div className='w-full flex items-center relative px-10 lg:px-24' >  
            {!props.collection ?
                <div onClick={() => scroll(-200)} style={{border: '1px solid #192F5D'}} className='w-8 h-8 lg:w-12 lg:h-12 absolute left-4 cursor-pointer flex items-center justify-center' >
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1L1 8L8 15" stroke="#192F5D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            :null} 
            <div className='w-full flex flex-row overflow-x-auto scroll_event ' ref={ref} >  
                {props.item.map((item:any, index:any ) => {
                    return(
                        <div key={index} className='w-auto mx-4  py-6'>
                            <div onClick={()=> OpenProduct(item._id)}  key={index} className='w-56 cursor-pointer  '>
                                <img className='lg:w-72 h-40 w-full lg:h-203px object-cover'  src={item.imagesURLs[0]} alt={item.name} />
                                <div className=' flex flex-col w-full item-center mt-6 '>
                                    <p style={{color: '#675E82', fontSize: '20px'}} className='text-center text-white font-Assistant-Medium' >{item.name}</p>
                                    <p style={{color: '#F09000', fontSize: '16px'}} className='text-center text-white font-Assistant-Medium' >{item.amount}</p> 
                                </div>
                            </div>
                            {/* {props.option ?  
                                <div className='w-full flex justify-center items-center mb-6 mt-10' >
                                    <div onClick={()=> ClickHandler(1, index)} style={option === 1 && index === position ? {borderColor: '#192F5D'}: {borderColor: 'transparent'}} className='cursor-pointer p-1 border rounded-full mx-2' >
                                        <img src={Option1} alt='option' className=' w-6 h-6 rounded-full' />
                                    </div>
                                    <div onClick={()=> ClickHandler(2, index)} style={option === 2 && index === position ? {borderColor: '#192F5D'}: {borderColor: 'transparent'}} className='cursor-pointer p-1 border rounded-full mx-2' >
                                        <img src={Option2} alt='option' className=' w-6 h-6 rounded-full' />
                                    </div>
                                    <div onClick={()=> ClickHandler(3, index)} style={option === 3 && index === position ? {borderColor: '#192F5D'}: {borderColor: 'transparent'}} className='cursor-pointer p-1 border rounded-full mx-2' >
                                        <img src={Option3} alt='option' className=' w-6 h-6 rounded-full' />
                                    </div>
                                </div>
                            :null} */}
                        </div>
                    )
                })}  
            </div> 
            {!props.collection ?
                <div onClick={() => scroll(200)} style={{border: '1px solid #192F5D'}} className='w-8 h-8 lg:w-12 lg:h-12  absolute right-4 cursor-pointer  cursor-pointer flex items-center justify-center' >
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 15L8 8L1 0.999999" stroke="#192F5D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            :null}
        </div>
    )
}
