import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import React from 'react'
import Information from '../components/CheckOutComponent/Information'
import Payment from '../components/CheckOutComponent/Payment'
import Shipping from '../components/CheckOutComponent/Shipping'
import OrderMessage from '../components/modals/OrderMessage'
import Navbar from '../components/Navbar'
// import Image from '../assets/images/Accessories4.png'
import { useNavigate } from 'react-router-dom'
import { IUser, UserContext } from '../context/UserContext'

export default function CheckoutScreen() {

    const navigate = useNavigate();  
    const [tab, setTab] = React.useState(0)
    const [show, setShow] = React.useState(false) 
    const [loading, setLoading] = React.useState(false); 
    const [product, setProduct] = React.useState([] as any)
    const userContext: IUser = React.useContext(UserContext); 
 
    React.useEffect(() => { 
        const product = localStorage.getItem('product')
        userContext.setTab('Checkout')
        if(!product){
            navigate('/')
        }
        fetch(`https://olokun-api.herokuapp.com/items/${localStorage.getItem('product')}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => { 
            setProduct(data)  
            const t1 = setTimeout(() => { 
                clearTimeout(t1);
                setLoading(true)
            }, 3000); 
        })
        .catch((error) => {
            console.error('Error:', error);
        });  
    },[])

    const ClickHandler =(item: any)=> {
        setTab(item)
        userContext.setTab('Home')
    }

    return (
        <div className='w-full h-screen overflow-x-hidden '>
            {/* <div className='w-full' >
                <Navbar />
            </div> */}
            <div className='w-full flex flex-col-reverse lg:flex-row' >
                <div className='w-full py-8 lg:py-16 px-6 lg:px-12' > 
                    <div className=' flex items-center' >
                        <p onClick={()=> setTab(0)} style={tab === 0 ? {color: '#192F5D', fontSize: '14px'}:{color: '#9DA6B8', fontSize: '14px'}} className='font-Assistant-Medium mr-4 cursor-pointer' >Information</p>
                        <svg className=' cursor-pointer' onClick={()=> setTab(0)} width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 15L8 8L1 0.999999" stroke={tab ===0 ? "#192F5D":"#9DA6B8"} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p onClick={()=> setTab(1)} style={tab === 1 ? {color: '#192F5D', fontSize: '14px'}:{color: '#9DA6B8', fontSize: '14px'}} className='font-Assistant-Medium mx-4 cursor-pointer' >Shipping</p>
                        <svg className='cursor-pointer' onClick={()=> setTab(1)} width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 15L8 8L1 0.999999" stroke={tab ===1 ? "#192F5D":"#9DA6B8"} stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p onClick={()=> setTab(2)} style={tab === 2 ? {color: '#192F5D', fontSize: '14px'}:{color: '#9DA6B8', fontSize: '14px'}} className='font-Assistant-Medium mx-4 cursor-pointer' >Payment</p>
                    </div>
                    {tab === 0 ?
                        <Information close={setTab} />
                            :tab === 1 ? <Shipping close={setTab} />
                                :tab === 2 ? <Payment value={product} close={setShow} /> 
                    :null}
                </div>
                <div style={{backgroundColor: '#00081B'}} className='w-full py-8 lg:py-16 px-6 lg:px-12' >
                    <div className='w-full flex items-center py-10' >
                        {!loading ?
                            <div className='w-full h-full justify-center items-center flex py-6' > 
                                <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                    <g transform="translate(80,50)">
                                        <g transform="rotate(0)">
                                            <circle cx="0" cy="0" r="6" fill="#FFF" fill-opacity="1">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.4861111111111111s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.4861111111111111s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(71.21320343559643,71.21320343559643)">
                                        <g transform="rotate(45)">
                                            <circle cx="0" cy="0" r="6" fill="#FFF" fill-opacity="0.875">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.41666666666666663s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.41666666666666663s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(50,80)">
                                        <g transform="rotate(90)">
                                            <circle cx="0" cy="0" r="6" fill="#FFF" fill-opacity="0.75">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.3472222222222222s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.3472222222222222s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(28.786796564403577,71.21320343559643)">
                                        <g transform="rotate(135)">
                                            <circle cx="0" cy="0" r="6" fill="#FFF" fill-opacity="0.625">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.2777777777777778s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.2777777777777778s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(20,50.00000000000001)">
                                        <g transform="rotate(180)">
                                            <circle cx="0" cy="0" r="6" fill="#FFF" fill-opacity="0.5">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.20833333333333331s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.20833333333333331s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(28.78679656440357,28.786796564403577)">
                                        <g transform="rotate(225)">
                                            <circle cx="0" cy="0" r="6" fill="#FFF" fill-opacity="0.375">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.1388888888888889s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.1388888888888889s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(49.99999999999999,20)">
                                        <g transform="rotate(270)">
                                            <circle cx="0" cy="0" r="6" fill="#FFF" fill-opacity="0.25">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.06944444444444445s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.06944444444444445s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(71.21320343559643,28.78679656440357)">
                                        <g transform="rotate(315)">
                                            <circle cx="0" cy="0" r="6" fill="#FFF" fill-opacity="0.125">
                                                <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
                                            </circle>
                                        </g>
                                    </g> 
                                </svg>
                            </div>
                        :
                            <> 
                                <div className='w-40 h-40 border relative' > 
                                    <div className=' border rounded-full p-1 absolute flex justify-center items-center -top-6 -right-10 w-8 h-8' >
                                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Assistant-Regular' >1</p>  
                                    </div>
                                    <img src={product.imagesURLs[0]} className='h-full w-full object-cover object-top'  alt='' />
                                </div>
                                <div className='ml-4 flex flex-col ' > 
                                    <p style={{color: '#FFFFFF', fontSize: '18px'}} className='font-Assistant-Regular ' >{product.name}</p> 
                                    <p style={{color: '#F09000', fontSize: '16px'}} className='font-Assistant-Regular ' >€{product.price}</p>  
                                </div>
                            </>
                        }
                    </div>
                    <div className='flex w-full font-Assistant-Regular py-10 border-t'>
                        <Input fontSize='sm' placeholder='Gift card or Discount code' size='lg' backgroundColor='rgba(255, 255, 255, 0.06)' borderRadius='0px' />
                        <button style={{backgroundColor: 'rgba(255, 255, 255, 0.06)'}} className='px-10 py-3 font-Assistant-Bold text-white' >Apply</button>
                    </div>
                    <div className=' w-full font-Assistant-Regular py-8 border-t'>
                        <div className='w-full flex py-2 justify-between items-center' > 
                            <p style={{color: '#FFFFFF', fontSize: '14px'}} className='font-Assistant-Regular ' >Sub Total</p> 
                            <p style={{color: '#FFFFFF', fontSize: '14px'}} className='font-Assistant-Regular ' >€{product.price}</p> 
                        </div>
                        <div className='w-full flex py-2 justify-between items-center' > 
                            <p style={{color: '#FFFFFF', fontSize: '14px'}} className='font-Assistant-Regular ' >Shopping fee</p> 
                            <p style={{color: '#FFFFFF', fontSize: '14px'}} className='font-Assistant-Regular ' >€35.00</p> 
                        </div>
                    </div>
                    <div className=' w-full font-Assistant-Regular py-8 border-t'>
                        <div className='w-full flex py-2 justify-between items-center' > 
                            <p style={{color: '#FFFFFF', fontSize: '14px'}} className='font-Assistant-Bold ' >Total</p> 
                            <p style={{color: '#FFFFFF', fontSize: '20px'}} className='font-Assistant-Regular ' >€{(product.price +59).toFixed(2)}</p> 
                        </div> 
                    </div>
                </div>
            </div>
            {show ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none">
                            <OrderMessage close={ClickHandler} />
                        </div> 
                        <div className="opacity-25 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) 
            :null}
        </div>
    )
}
