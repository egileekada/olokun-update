import React from 'react'
import { useNavigate } from 'react-router';
// import Option1 from '../assets/images/option1.png'
// import Option2 from '../assets/images/option2.png'
// import Option3 from '../assets/images/option3.png'

export default function Collections(props: any) { 

    const navigate = useNavigate(); 
    // const [option, setOption] = React.useState(0)
    // const [position, setPosition] = React.useState(0)
    const [Items, setItem] = React.useState([] as any) 
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch(`https://olokun-api.herokuapp.com/items?${props.array}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => { 
            setItem(data)   
            setLoading(true) 
        })
        .catch((error) => {
            console.error('Error:', error);
        });  
    },[props.array])

    // const ClickHandler =(value: any, index: any)=> { 
    //     if(option === value) { 
    //         setOption(0)
    //     } else {
    //         setOption(value)
    //     }
    //     setPosition(index)
    // }  

    const OpenProduct =(index: any)=> {
        localStorage.setItem('product', index) 
        navigate('/product') 
    }

    const loader = ['1', '2', '3', '4']
    
    return (
        <div className='w-full flex items-center px-4 lg:px-8' > 
            {!props.collection ?
                <div style={{border: '1px solid #192F5D'}} className='w-12 h-12 cursor-pointer flex items-center justify-center' >
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1L1 8L8 15" stroke="#192F5D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            :null}
            <div className='w-full flex flex-col justify-center' > 
                {props.featured ? 
                    <p style={{ color: '#192F5D'}} className='font-Assistant-Medium lg:text-xl text-center' >Featured Collections</p>
                :null}
                <p style={{ color: '#192F5D'}} className='font-Assistant-Bold mt-1 text-xl lg:text-3xl text-center' >{props.title}</p>
                
                {!loading ?  
                    <div className='w-full px-2 h-auto lg:h-203px lg:px-10 grid grid-cols-2 gap-1 lg:grid-cols-4 my-10' > 
                        {loader.map((item: any)=> {
                            return(
                                <svg key={item} className='mx-auto my-auto' xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                    <g transform="translate(80,50)">
                                        <g transform="rotate(0)">
                                            <circle cx="0" cy="0" r="6" fill="#02081b" fill-opacity="1">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.4861111111111111s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.4861111111111111s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(71.21320343559643,71.21320343559643)">
                                        <g transform="rotate(45)">
                                            <circle cx="0" cy="0" r="6" fill="#02081b" fill-opacity="0.875">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.41666666666666663s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.41666666666666663s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(50,80)">
                                        <g transform="rotate(90)">
                                            <circle cx="0" cy="0" r="6" fill="#02081b" fill-opacity="0.75">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.3472222222222222s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.3472222222222222s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(28.786796564403577,71.21320343559643)">
                                        <g transform="rotate(135)">
                                            <circle cx="0" cy="0" r="6" fill="#02081b" fill-opacity="0.625">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.2777777777777778s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.2777777777777778s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(20,50.00000000000001)">
                                        <g transform="rotate(180)">
                                            <circle cx="0" cy="0" r="6" fill="#02081b" fill-opacity="0.5">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.20833333333333331s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.20833333333333331s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(28.78679656440357,28.786796564403577)">
                                        <g transform="rotate(225)">
                                            <circle cx="0" cy="0" r="6" fill="#02081b" fill-opacity="0.375">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.1388888888888889s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.1388888888888889s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(49.99999999999999,20)">
                                        <g transform="rotate(270)">
                                            <circle cx="0" cy="0" r="6" fill="#02081b" fill-opacity="0.25">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.06944444444444445s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.06944444444444445s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(71.21320343559643,28.78679656440357)">
                                        <g transform="rotate(315)">
                                            <circle cx="0" cy="0" r="6" fill="#02081b" fill-opacity="0.125">
                                                <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
                                            </circle>
                                        </g>
                                    </g> 
                                </svg>
                            )
                        })}
                    </div>
                : 
                    <div className='w-full px-2 lg:px-10 grid grid-cols-2 gap-1 lg:gap-2 mt-4 lg:grid-cols-4' >  
                        {Items.map((item:any, index:any ) => {
                            return(
                                <div key={index} className='w-full py-6'>
                                    <div onClick={()=> OpenProduct(item._id)}  key={index} className='w-full cursor-pointer  '>
                                        <img className='w-full h-40 lg:h-203px object-cover object-top'  src={item.imagesURLs[0]} alt={item.name} />
                                        <div className=' flex flex-col w-full item-center mt-6 '>
                                            <p style={{color: '#675E82'}} className='text-center  lg:text-xl text-white font-Assistant-Medium' >{item.name}</p>
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
                }
            </div>
            {!props.collection ?
                <div style={{border: '1px solid #192F5D'}} className='w-12 h-12 cursor-pointer flex items-center justify-center' >
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 15L8 8L1 0.999999" stroke="#192F5D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            :null}
        </div>
    )
}
