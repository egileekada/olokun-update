import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ImageSlide from '../components/ProductComponent/ImageSlide'
import Option1 from '../assets/images/option1.png'
import Option2 from '../assets/images/option2.png'
import Option3 from '../assets/images/option3.png'
import WomenProduct from '../assets/images/OtherProduct.png'
import Collections from '../components/Collections'
import { useNavigate } from 'react-router-dom' 
import { IUser, UserContext } from '../context/UserContext'
import OtherProducts from '../components/ProductComponent/OtherProducts'

export default function ProductScreen() {
 
    // let Product: any = JSON.parse(localStorage.getItem('product')+'')  
    const lengths = ['18', '20', '22', '24', '26']
    const [length, setLenght] = React.useState(-1)
    const [option, setOption] = React.useState(0)
    const [product, setProduct] = React.useState([] as any)
    const [item, setItem] = React.useState(1)
    const [show, setShow] = React.useState(0)
    const [modal, setShowModal] = React.useState(0) 
    const userContext: IUser = React.useContext(UserContext);
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate(); 
    const data = JSON. parse(localStorage. getItem("cart") as any)


    const LengthOption =(index: any)=> {
        if(length === index){
            setLenght(-1)
        }else{
            setLenght(index) 
        }
    }    

    React.useEffect(() => {
        setLoading(false)
        const product = localStorage.getItem('product')
        if(!product){
            navigate('/')
        }

        userContext.setCartData(data)

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
    },[localStorage.getItem('product')])


    const RemoveItem =()=> {
        if(item <= 1){
            setItem(1)
        }else{
            setItem(item-1) 
        }
    }  
    
    const ClickHandler =(index: any)=> { 
        if(userContext.cartData === null ){ 
            setShowModal(1);
            let clone =[index]
            userContext.setCartData(clone)
            localStorage. setItem("cart", JSON.stringify(clone))
        } else {

            if(!userContext.cartData.includes(index)){ 

                setShowModal(1);
                let clone = [...userContext.cartData, index]
                userContext.setCartData(clone)
                localStorage. setItem("cart", JSON.stringify(clone))
            }
            else{  
                setShowModal(2);
            }
        }
        const t1 = setTimeout(() => { 
            // Router.push('/dashboard'); 
            setShowModal(0);
            clearTimeout(t1);
        }, 2000); 

    }

    return (
        <div className='w-full h-full  overflow-x-hidden '>
            {/* <div className='w-full' >
                <Navbar />
            </div> */}
            <div className='w-full relative pb-10 ' > 
            {modal === 1 ? 
                <div className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed top-24 inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-green-400 px-4 py-2 flex justify-center mt-2 items-center ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Assistant-Medium' >Item Added To Cart</p>
                    </div>
                </div>
            :null}
            {modal === 2 ?  
                <div className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed top-24 inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-red-500 px-4 py-2 flex justify-center items-center mt-2 ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Assistant-Medium' >Item Is In Cart</p>
                    </div>
                </div>
            :null}
                <div className='w-full mt-16 px-6 lg:px-10 flex lg:flex-row flex-col' >
                    <div className='w-full' >
                        {!loading ? 
                            <div className='w-full h-full justify-center items-center flex py-6 bg-white' > 
                                <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
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
                            </div>
                        :
                            <ImageSlide image={product.imagesURLs} />
                        }
                    </div>
                    <div className='w-full flex flex-col lg:mt-0 mt-8 lg:ml-12' >
                        <p style={{color: '#192F5D', fontSize: '16px'}} className='font-Assistant-Medium' >OLOKUN</p>
                        <p style={{color: '#192F5D', fontSize: '20px'}} className='font-Assistant-Medium' >{product.name}</p>
                        <div className='flex items-center mt-3' >
                            <p style={{color: '#F09000', fontSize: '16px'}} className='font-Assistant-Medium' >€{product.price}</p>
                            {/* <p style={{color: '#192F5D', fontSize: '16px'}} className='font-Assistant-Medium ml-3' > $12300</p> */}
                        </div>
                        <div className='flex lg:flex-row flex-col mt-3 lg:items-center' >
                            <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium' >Chain Lenght:</p>
                            <div className='lg:ml-3 lg:mt-0 mt-3 w-full lg:w-auto grid grid-cols-4 gap-3 lg:grid-cols-5' >
                                {lengths.map((item: any, index: any)=> {
                                    return( 
                                        <div onClick={()=> LengthOption(index)} key={index} className={length === index ? 'border border-olokun py-2 w-14 flex mx-2 justify-center cursor-pointer' : 'border border-inactive py-2 w-14 flex mx-2 justify-center cursor-pointer' } >
                                            <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium' >{item}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='flex mt-3 items-center' >
                            <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium' >Color:</p>
                            <div className='ml-3 flex' >
                                <div onClick={()=> setOption(1)} style={option === 1 ? {borderColor: '#192F5D'}: {borderColor: 'transparent'}} className='cursor-pointer p-1 border rounded-full mx-2' >
                                    <img src={Option1} alt='option' className=' w-6 h-6 rounded-full' />
                                </div>
                                <div onClick={()=> setOption(2)} style={option === 2 ? {borderColor: '#192F5D'}: {borderColor: 'transparent'}} className='cursor-pointer p-1 border rounded-full mx-2' >
                                    <img src={Option2} alt='option' className=' w-6 h-6 rounded-full' />
                                </div>
                                <div onClick={()=> setOption(3)} style={option === 3 ? {borderColor: '#192F5D'}: {borderColor: 'transparent'}} className='cursor-pointer p-1 border rounded-full mx-2' >
                                    <img src={Option3} alt='option' className=' w-6 h-6 rounded-full' />
                                </div>
                            </div>
                        </div>
                        <div className=' lg:w-64 flex items-center border border-inactive mt-3' >
                            <div onClick={()=> RemoveItem()} className= 'border-r border-inactive py-2 w-full flex justify-center cursor-pointer' >
                                <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 1H7H1" stroke="#192F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className= 'border-r border-inactive py-2 w-full flex justify-center cursor-pointer' >
                                <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium' >{item}</p>
                            </div>
                            <div onClick={()=> setItem(item+1)} className= ' py-2 w-full flex justify-center cursor-pointer' >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 7V13M7 1V7V1ZM7 7H13H7ZM7 7H1H7Z" stroke="#192F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <button onClick={()=> ClickHandler(product._id)} style={{color: '#192F5D'}} className=' lg:w-80 mt-4 border border-inactive rounded-md py-2 font-Assistant-Bold '>ADD TO CART</button>
                        <button onClick={()=> navigate('/checkout')} style={{backgroundColor: '#192F5D'}} className=' lg:w-80 text-white px-8 mt-4 rounded-md py-2 font-Assistant-Bold '>BUY NOW</button>
                        <div className='flex items-center mt-4' >
                            <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium' >SHARE</p>
                            <div className='ml-4 flex items-center' >
                                <svg className='cursor-pointer mx-4 ' width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5628 0.00458002L8.78554 0C5.66544 0 3.64903 2.12509 3.64903 5.41423V7.91055H0.856622C0.615322 7.91055 0.419922 8.1115 0.419922 8.35937V11.9763C0.419922 12.2241 0.615552 12.4249 0.856622 12.4249H3.64903V21.5514C3.64903 21.7993 3.84443 22 4.08574 22H7.72904C7.97034 22 8.16574 21.799 8.16574 21.5514V12.4249H11.4307C11.672 12.4249 11.8674 12.2241 11.8674 11.9763L11.8687 8.35937C11.8687 8.24036 11.8226 8.12638 11.7408 8.04215C11.6591 7.95793 11.5477 7.91055 11.4318 7.91055H8.16574V5.79439C8.16574 4.77727 8.40164 4.26094 9.69154 4.26094L11.5624 4.26025C11.8034 4.26025 11.9988 4.0593 11.9988 3.81166V0.45317C11.9988 0.20576 11.8037 0.00504002 11.5628 0.00458002Z" fill="#192F5D"/>
                                </svg>
                                <svg className='cursor-pointer mx-4' width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.5 2.77258C20.7271 3.10051 19.8978 3.32291 19.0264 3.42221C19.9161 2.91205 20.5972 2.10287 20.92 1.14164C20.0854 1.61407 19.1642 1.95712 18.1826 2.14309C17.3966 1.34019 16.2785 0.840088 15.0384 0.840088C12.6593 0.840088 10.7303 2.68715 10.7303 4.96394C10.7303 5.28685 10.7683 5.60223 10.8418 5.90382C7.26201 5.73165 4.08768 4.08941 1.96314 1.59397C1.59176 2.20213 1.38049 2.91077 1.38049 3.66721C1.38049 5.09839 2.14161 6.36117 3.2964 7.09999C2.5904 7.07739 1.92639 6.8914 1.34508 6.58229V6.63381C1.34508 8.63169 2.83056 10.299 4.80024 10.6785C4.43936 10.7715 4.05882 10.823 3.66514 10.823C3.38696 10.823 3.11794 10.7966 2.85417 10.7464C3.40267 12.3861 4.99315 13.5785 6.87756 13.6112C5.40388 14.717 3.54573 15.3741 1.52749 15.3741C1.17976 15.3741 0.83724 15.354 0.5 15.3176C2.40671 16.4899 4.67036 17.1734 7.10327 17.1734C15.028 17.1734 19.3597 10.8884 19.3597 5.43766L19.3453 4.90365C20.1917 4.32561 20.9239 3.59936 21.5 2.77258Z" fill="#192F5D"/>
                                </svg> 
                            </div>
                        </div>
                        <div className='w-full mt-6' >
                            <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium' >Secured and Trusted Checkout</p>
                            <div className='flex items-center mt-3'>
                                <svg className='mt-4 lg:mt-0' width="44" height="19" viewBox="0 0 44 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5465 2.51851L20.514 3.18846V0.657543L23.5465 0V2.51851ZM29.8532 3.91967C28.6692 3.91967 27.9081 4.49037 27.4853 4.88738L27.3282 4.11817H24.6702V18.5842L27.6906 17.9266L27.7027 14.4156C28.1377 14.7381 28.778 15.1972 29.8412 15.1972C32.0038 15.1972 33.9731 13.4106 33.9731 9.47778C33.961 5.8799 31.9675 3.91967 29.8532 3.91967ZM29.1284 12.4669C28.4156 12.4669 27.9928 12.2064 27.7028 11.8838L27.6907 7.28104C28.0048 6.92126 28.4398 6.67313 29.1284 6.67313C30.2278 6.67313 30.989 7.93859 30.989 9.56383C30.989 11.2263 30.2399 12.4669 29.1284 12.4669ZM43.4932 9.60184C43.4932 6.42578 41.995 3.91967 39.1317 3.91967C36.2563 3.91967 34.5166 6.42578 34.5166 9.57703C34.5166 13.3114 36.5704 15.1972 39.5183 15.1972C40.956 15.1972 42.0434 14.8622 42.8649 14.3907V11.9094C42.0434 12.3313 41.101 12.5918 39.9049 12.5918C38.733 12.5918 37.694 12.17 37.5611 10.706H43.469C43.469 10.6376 43.4733 10.4823 43.4783 10.3033L43.4783 10.3031C43.4851 10.06 43.4932 9.77331 43.4932 9.60184ZM37.5247 8.42325C37.5247 7.02132 38.3583 6.43822 39.1195 6.43822C39.8564 6.43822 40.6417 7.02132 40.6417 8.42325H37.5247ZM20.514 4.13057H23.5465V14.9862H20.514V4.13057ZM17.0709 4.13193L17.2642 5.05001C17.977 3.71011 19.3906 3.98305 19.7772 4.13193V6.98542C19.4026 6.84895 18.1945 6.67526 17.4817 7.63056V14.9876H14.4613V4.13193H17.0709ZM11.2237 1.43858L8.27579 2.08372L8.26371 12.0213C8.26371 13.8575 9.60477 15.2098 11.3928 15.2098C12.3835 15.2098 13.1084 15.0237 13.5071 14.8004V12.2818C13.1205 12.4431 11.2116 13.0138 11.2116 11.1777V6.77337H13.5071V4.13079H11.2116L11.2237 1.43858ZM4.08357 6.61188C3.44325 6.61188 3.05664 6.79798 3.05664 7.28183C3.05664 7.81012 3.722 8.04251 4.54746 8.33082C5.89315 8.80083 7.66431 9.41944 7.6718 11.7109C7.6718 13.9317 5.94414 15.2096 3.43117 15.2096C2.39215 15.2096 1.25648 14.9987 0.132897 14.5024V11.5497C1.14775 12.1204 2.4284 12.5422 3.43117 12.5422C4.10774 12.5422 4.591 12.3561 4.591 11.7854C4.591 11.2002 3.86973 10.9327 2.99897 10.6098C1.67285 10.118 0 9.49767 0 7.43071C0 5.23476 1.63101 3.91967 4.08357 3.91967C5.08635 3.91967 6.07703 4.08095 7.07981 4.49037V7.40589C6.16161 6.89723 5.00177 6.61188 4.08357 6.61188Z" fill="#192F5D"/>
                                </svg>
                                <svg className='mt-4 ml-2 lg:mt-0'  width="52" height="16" viewBox="0 0 52 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.5933 15.7692H18.4619L21.0459 0.280762H25.1771L22.5933 15.7692Z" fill="#192F5D"/>
                                    <path d="M37.5698 0.659406C36.7549 0.346017 35.4624 0 33.8643 0C29.7844 0 26.9114 2.10896 26.8938 5.12412C26.8599 7.3487 28.9508 8.58429 30.5146 9.32604C32.113 10.084 32.6563 10.5787 32.6563 11.2543C32.64 12.2919 31.3647 12.7702 30.1753 12.7702C28.5258 12.7702 27.642 12.5236 26.299 11.9464L25.755 11.6989L25.1768 15.1757C26.1458 15.6036 27.931 15.9834 29.7844 16C34.1193 16 36.9415 13.9237 36.9749 10.7105C36.9914 8.94739 35.8874 7.59639 33.5071 6.49242C32.0621 5.78374 31.1772 5.30589 31.1772 4.58079C31.1942 3.9216 31.9257 3.24643 33.5568 3.24643C34.8999 3.21336 35.8867 3.52631 36.6342 3.83948L37.0079 4.00395L37.5698 0.659406Z" fill="#192F5D"/>
                                    <path d="M43.0604 10.2822C43.4007 9.39239 44.7098 5.94865 44.7098 5.94865C44.6927 5.98172 45.0494 5.04243 45.2534 4.46581L45.5421 5.80039C45.5421 5.80039 46.3245 9.50781 46.4944 10.2822C45.8487 10.2822 43.8764 10.2822 43.0604 10.2822ZM48.1601 0.280762H44.9645C43.979 0.280762 43.2303 0.560642 42.8051 1.56584L36.6685 15.7689H41.0034C41.0034 15.7689 41.7171 13.8573 41.8705 13.4456C42.3461 13.4456 46.5631 13.4456 47.1748 13.4456C47.2934 13.9894 47.6678 15.7689 47.6678 15.7689H51.493L48.1601 0.280762Z" fill="#192F5D"/>
                                    <path d="M15.011 0.280762L10.9651 10.8424L10.5229 8.70036C9.77491 6.22875 7.42898 3.54339 4.81104 2.20816L8.517 15.7527H12.8858L19.3796 0.280762H15.011Z" fill="#192F5D"/>
                                    <path d="M7.20811 0.280762H0.561165L0.493164 0.593712C5.6782 1.87901 9.11215 4.97717 10.523 8.70101L9.07803 1.5827C8.84014 0.593492 8.10907 0.313393 7.20811 0.280762Z" fill="#192F5D"/>
                                </svg>
                                <svg className='mt-3 ml-2 lg:mt-0'  width="35" height="22" viewBox="0 0 35 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_81_732)">
                                    <path d="M22.0845 2.22778H12.9165V18.7462H22.0845V2.22778Z" fill="#192F5D"/>
                                    <path d="M13.4698 10.5265C13.4698 7.28605 14.9715 4.28271 17.5006 2.22779C12.9166 -1.3288 6.35659 -0.538432 2.72096 3.96658C-0.835634 8.55063 -0.0452681 15.1106 4.45975 18.7462C8.25345 21.7495 13.6279 21.7495 17.4216 18.7462C14.9715 16.7703 13.4698 13.767 13.4698 10.5265Z" fill="#192F5D"/>
                                    <path d="M34.4931 10.5264C34.4931 16.296 29.83 21.0381 23.9814 21.0381C21.6104 21.0381 19.3183 20.2477 17.5005 18.8251C22.0846 15.2685 22.8749 8.62955 19.2393 4.12454C18.6861 3.49226 18.1328 2.85997 17.5005 2.38575C22.0846 -1.17084 28.6445 -0.380472 32.2011 4.12454C33.7027 5.86332 34.4931 8.15532 34.4931 10.5264Z" fill="#192F5D"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_81_732">
                                    <rect width="34" height="22" fill="#192F5D" transform="translate(0.493164)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                <svg className='mt-3 ml-2 lg:mt-0'  width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.9932 12C23.9932 18.3513 18.8444 23.5 12.4932 23.5C6.14189 23.5 0.993164 18.3513 0.993164 12C0.993164 5.64873 6.14189 0.5 12.4932 0.5C18.8444 0.5 23.9932 5.64873 23.9932 12Z" stroke="#192F5D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25049 12.4878L12.6333 15.6699V3.55615L7.25049 12.4878Z" fill="#192F5D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6338 3.55615V15.6699L18.0166 12.4878L12.6338 3.55615Z" fill="#192F5D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6336 10.041L7.25049 12.4874L12.6333 15.6695L18.0164 12.4878L12.6336 10.041Z" fill="#192F5D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6336 10.041L7.25049 12.4874L12.6333 15.6695L12.6336 10.041Z" fill="#192F5D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25049 13.5088L12.6333 21.0944V16.6891L7.25049 13.5088Z" fill="#192F5D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6338 16.6891V21.0947L18.0201 13.5088L12.6338 16.6891Z" fill="#192F5D"/>
                                </svg> 
                                <svg className='mt-3 ml-2 lg:mt-0'  width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.85095 22.2197L6.23659 19.6879L5.37753 19.6672H1.27539L4.12624 0.984095C4.13512 0.92752 4.16383 0.875002 4.20576 0.837641C4.24789 0.80028 4.3016 0.779785 4.35778 0.779785H11.2746C13.5711 0.779785 15.1558 1.27359 15.983 2.24838C16.3709 2.70568 16.6179 3.18368 16.7375 3.7095C16.8629 4.26137 16.865 4.92063 16.7427 5.72485L16.7338 5.78334V6.29871L17.1217 6.52586C17.4483 6.70498 17.7079 6.90993 17.907 7.14455C18.2388 7.53567 18.4534 8.03267 18.544 8.62169C18.6378 9.22757 18.6068 9.94874 18.4534 10.7651C18.2764 11.7041 17.9903 12.5219 17.6038 13.191C17.2485 13.8076 16.7958 14.3191 16.2581 14.7153C15.7448 15.0919 15.1351 15.3778 14.4456 15.5607C13.7774 15.7405 13.0157 15.8312 12.1801 15.8312H11.6419C11.2571 15.8312 10.8832 15.9745 10.5897 16.2313C10.2954 16.4935 10.1008 16.8517 10.0411 17.2435L10.0004 17.4715L9.31898 21.934L9.2882 22.0978C9.27994 22.1497 9.26589 22.1755 9.24524 22.193C9.22685 22.209 9.20042 22.2197 9.1746 22.2197H5.85095Z" fill="#192F5D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4886 5.84375C17.4681 5.98017 17.4444 6.11958 17.4179 6.26283C16.5058 11.1035 13.385 12.7758 9.39932 12.7758H7.36994C6.88247 12.7758 6.47164 13.1415 6.39583 13.6385L5.06253 22.3798C5.01317 22.7062 5.25649 23.0002 5.57499 23.0002H9.17439C9.60051 23.0002 9.96259 22.6802 10.0297 22.2457L10.065 22.0568L10.7427 17.6117L10.7863 17.3679C10.8526 16.932 11.2155 16.6117 11.6417 16.6117H12.1799C15.6672 16.6117 18.3972 15.1485 19.1951 10.9137C19.5283 9.14473 19.3558 7.66759 18.4738 6.62875C18.207 6.31556 17.8758 6.05553 17.4886 5.84375Z" fill="#192F5D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5342 5.4502C16.3947 5.40814 16.251 5.37014 16.1035 5.33577C15.9552 5.30225 15.8034 5.27257 15.647 5.24653C15.0999 5.15515 14.5002 5.11182 13.8581 5.11182H8.43667C8.30303 5.11182 8.1762 5.14299 8.0628 5.19935C7.81267 5.3236 7.62698 5.56826 7.58195 5.86778L6.42856 13.4181L6.39551 13.6382C6.47131 13.1412 6.88215 12.7754 7.36961 12.7754H9.399C13.3846 12.7754 16.5055 11.1023 17.4176 6.26253C17.4449 6.11927 17.4678 5.97986 17.4882 5.84345C17.2575 5.71685 17.0076 5.60861 16.7384 5.51638C16.6719 5.49354 16.6034 5.47155 16.5342 5.4502Z" fill="#192F5D"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.58262 5.86797C7.62765 5.56845 7.81334 5.32379 8.06348 5.20039C8.1777 5.14382 8.3037 5.11265 8.43734 5.11265H13.8587C14.5009 5.11265 15.1005 5.1562 15.6477 5.24757C15.8041 5.27341 15.9559 5.30329 16.1042 5.33681C16.2517 5.37097 16.3954 5.40918 16.5348 5.45103C16.604 5.47238 16.6726 5.49458 16.7397 5.51657C17.0089 5.6088 17.259 5.71789 17.4897 5.84364C17.7611 4.05481 17.4875 2.83685 16.5518 1.73396C15.52 0.519634 13.6582 0 11.2756 0H4.35853C3.8719 0 3.45672 0.365708 3.38154 0.863565L0.500537 19.7388C0.443735 20.1122 0.722375 20.4491 1.08673 20.4491H5.35701L7.58262 5.86797Z" fill="#192F5D"/>
                                </svg>
                                <svg  className='mt-4 ml-2 lg:mt-0'  width="56" height="15" viewBox="0 0 56 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.60348 0L0.353516 14.2378H7.8356L8.76316 11.9677H10.8834L11.8109 14.2378H20.0466V12.5052L20.7804 14.2378H25.0406L25.7744 12.4685V14.2378H42.9024L44.985 12.0266L46.9352 14.2378L55.7325 14.2561L49.4627 7.15862L55.7325 0H47.0716L45.0443 2.17027L43.1555 0H24.5226L22.9225 3.67489L21.285 0H13.8185V1.67365L12.9879 0H6.60348ZM8.05092 2.02227H11.698L15.8436 11.677V2.02227H19.8389L23.0409 8.94464L25.9919 2.02227H29.9672V12.2388H27.5483L27.5286 4.23319L24.0021 12.2388H21.8383L18.292 4.23319V12.2388H13.3158L12.3724 9.94838H7.27564L6.3342 12.2368H3.668L8.05092 2.02227ZM42.016 2.02227H32.1803V12.2328H41.8637L44.9848 8.84884L47.9931 12.2328H51.1378L46.567 7.15711L51.1378 2.02227H48.1295L45.0243 5.36734L42.016 2.02227ZM9.82536 3.75099L8.14616 7.83117H11.5026L9.82536 3.75099ZM34.6093 6.00152V4.1365V4.13472H40.7465L43.4244 7.11737L40.6278 10.1163H34.6093V8.08025H39.9751V6.00152H34.6093Z" fill="#192F5D"/>
                                </svg> 
                                <svg  className='mt-4 ml-2 lg:mt-0'  width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7324 10.5C21.7324 16.299 17.0314 21 11.2324 21C5.43343 21 0.732422 16.299 0.732422 10.5C0.732422 4.70101 5.43343 0 11.2324 0C17.0314 0 21.7324 4.70101 21.7324 10.5ZM13.7551 6.59942C15.2157 7.10098 16.2841 7.85201 16.0745 9.24969C15.9223 10.2732 15.3528 10.7682 14.5961 10.9415C15.6342 11.4798 15.988 12.5015 15.6593 13.7368C15.0351 15.5146 13.5514 15.6643 11.5781 15.2927L11.0989 17.2038L9.94215 16.9163L10.4147 15.0308C10.1148 14.9566 9.80835 14.8772 9.49263 14.7925L9.01807 16.6871L7.86265 16.3996L8.34117 14.4846L6.01121 13.899L6.58596 12.5794C6.58596 12.5794 7.43884 12.8046 7.42698 12.7882C7.75456 12.869 7.90022 12.6563 7.95756 12.5151L9.25601 7.32813C9.27051 7.08326 9.18549 6.7747 8.71686 6.65785C8.73466 6.64537 7.87649 6.44974 7.87649 6.44974L8.1843 5.21881L10.5175 5.79455L10.9921 3.90122L12.1482 4.18876L11.6835 6.04468C11.9946 6.11492 12.307 6.18648 12.6109 6.26198L13.0723 4.41788L14.229 4.70543L13.7551 6.59942ZM10.9876 9.75586C11.7756 9.96476 13.4902 10.4193 13.7891 9.22746C14.0939 8.00802 12.4281 7.63973 11.6125 7.4594L11.6125 7.45939C11.5201 7.43896 11.4386 7.42094 11.3721 7.40437L10.796 9.70605C10.8509 9.71961 10.9153 9.73669 10.9875 9.75584L10.9876 9.75586ZM10.0949 13.4612C11.0387 13.7098 13.1028 14.2535 13.4312 12.9401C13.7674 11.5973 11.7661 11.15 10.7896 10.9318L10.7896 10.9318C10.6805 10.9074 10.5842 10.8858 10.5054 10.8662L9.87002 13.403C9.9346 13.4189 10.0102 13.4389 10.0949 13.4612Z" fill="#192F5D"/>
                                </svg>
                                <svg  className='mt-4 ml-2 lg:mt-0'  width="47" height="20" viewBox="0 0 47 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.02534 2.50348C8.49342 3.15938 7.64236 3.6767 6.79129 3.6028C6.68491 2.71596 7.10157 1.77368 7.58917 1.19169C8.12108 0.517325 9.05194 0.0369518 9.80549 0C9.89414 0.923794 9.54839 1.82911 9.02534 2.50348ZM9.79641 3.77806C9.04663 3.73309 8.3625 4.01303 7.8099 4.23913C7.45429 4.38464 7.15316 4.50786 6.92406 4.50786C6.66696 4.50786 6.35339 4.37805 6.00133 4.23231C5.54001 4.04134 5.01259 3.82301 4.45951 3.83349C3.19177 3.85196 2.01269 4.60024 1.36552 5.79193C0.0357298 8.17532 1.01978 11.7042 2.30524 13.6442C2.93468 14.6049 3.68823 15.658 4.68114 15.6211C5.11796 15.6039 5.43218 15.465 5.75738 15.3212C6.13176 15.1556 6.52068 14.9837 7.12796 14.9837C7.71418 14.9837 8.08609 15.1512 8.44311 15.3119C8.78257 15.4648 9.10856 15.6116 9.59251 15.6026C10.6209 15.5841 11.268 14.6419 11.8975 13.6811C12.5767 12.65 12.8752 11.6437 12.9205 11.4909L12.9259 11.4733C12.9248 11.4721 12.9164 11.4681 12.9016 11.4611L12.9016 11.4611C12.6745 11.3527 10.9389 10.5248 10.9223 8.30465C10.9056 6.44115 12.2989 5.49698 12.5182 5.34836C12.5316 5.33931 12.5406 5.33321 12.5446 5.33003C11.6581 3.96282 10.2751 3.81501 9.79641 3.77806ZM16.9158 15.5013V1.0994H22.1019C24.7793 1.0994 26.6498 3.02089 26.6498 5.82922C26.6498 8.63755 24.7438 10.5775 22.031 10.5775H19.0612V15.5013H16.9158ZM19.0609 2.9833H21.5343C23.396 2.9833 24.4598 4.01794 24.4598 5.83782C24.4598 7.65769 23.396 8.70158 21.5254 8.70158H19.0609V2.9833ZM33.7331 13.7737C33.1657 14.9007 31.9157 15.612 30.5682 15.612C28.5735 15.612 27.1816 14.3742 27.1816 12.5081C27.1816 10.6605 28.5292 9.59815 31.0203 9.44111L33.6976 9.27482V8.48036C33.6976 7.30714 32.9618 6.66973 31.6497 6.66973C30.5682 6.66973 29.7792 7.25172 29.6196 8.13856H27.687C27.749 6.2725 29.4334 4.91452 31.7118 4.91452C34.1675 4.91452 35.7632 6.25402 35.7632 8.33255V15.5012H33.7774V13.7737H33.7331ZM31.1436 13.9034C30 13.9034 29.273 13.3307 29.273 12.4531C29.273 11.5478 29.9734 11.0212 31.3121 10.938L33.6968 10.781V11.5939C33.6968 12.9427 32.5975 13.9034 31.1436 13.9034ZM42.3502 16.0645C41.4902 18.5864 40.5062 19.4178 38.414 19.4178C38.2544 19.4178 37.7225 19.3994 37.5984 19.3624V17.6349C37.7313 17.6534 38.0594 17.6719 38.2278 17.6719C39.1764 17.6719 39.7083 17.2562 40.0363 16.1753L40.2314 15.5379L36.5966 5.05286H38.8395L41.3661 13.561H41.4104L43.9371 5.05286H46.1179L42.3502 16.0645Z" fill="#192F5D"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className=' lg:w-500px mx-auto px-6 mt-8' >
                    <div className='border-b-2  border-t-2 border-inactive' >
                        <div className='w-full flex justify-between items-center py-4' >
                            <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium' >PRODUCT DETAILS</p>
                            {show === 1 ?
                                <svg onClick={()=> setShow(0)} className='cursor-pointer'  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.00003 6L11 11M1 1L6.00003 6L1 1ZM6.00003 6L11 1L6.00003 6ZM6.00003 6L1 11L6.00003 6Z" stroke="#262F56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg> 
                            :
                                <svg onClick={()=> setShow(1)} className='cursor-pointer'  width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 7V13M7 1V7V1ZM7 7H13H7ZM7 7H1H7Z" stroke="#192F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            }
                        </div>
                        {show === 1 ? 
                            <p style={{color: '#192F5D', fontSize: '16px'}} className=' my-10 font-Assistant-Medium w-400px' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper at iaculis suspendisse magna id ultricies. Est id in volutpat velit integer. Nisl consequat pretium interdum posuere. Lectus velit sit neque porttitor fermentum sit non.</p>
                        :null} 
                    </div>
                    <div className='border-b-2 border-inactive' >
                        <div className='w-full flex justify-between items-center py-4' >
                            <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium' >SHIPPING DETAILS</p>
                            {show === 2 ?
                                <svg onClick={()=> setShow(0)} className='cursor-pointer'  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.00003 6L11 11M1 1L6.00003 6L1 1ZM6.00003 6L11 1L6.00003 6ZM6.00003 6L1 11L6.00003 6Z" stroke="#262F56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg> 
                            :
                                <svg onClick={()=> setShow(2)} className='cursor-pointer'  width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 7V13M7 1V7V1ZM7 7H13H7ZM7 7H1H7Z" stroke="#192F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            }
                        </div>
                        {show === 2 ? 
                            <p style={{color: '#192F5D', fontSize: '16px'}} className=' my-10 font-Assistant-Medium w-400px' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper at iaculis suspendisse magna id ultricies. Est id in volutpat velit integer. Nisl consequat pretium interdum posuere. Lectus velit sit neque porttitor fermentum sit non.</p>
                        :null}
                    </div>
                    <div className='border-b-2 border-inactive' >
                        <div className='w-full flex justify-between items-center py-4 ' >
                            <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium' >RETURN POLICY</p>
                            {show === 3 ?
                                <svg onClick={()=> setShow(0)} className='cursor-pointer'  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.00003 6L11 11M1 1L6.00003 6L1 1ZM6.00003 6L11 1L6.00003 6ZM6.00003 6L1 11L6.00003 6Z" stroke="#262F56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg> 
                            :
                                <svg onClick={()=> setShow(3)} className='cursor-pointer'  width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 7V13M7 1V7V1ZM7 7H13H7ZM7 7H1H7Z" stroke="#192F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            }
                        </div>
                        {show === 3 ? 
                            <p style={{color: '#192F5D', fontSize: '16px'}} className=' my-10 font-Assistant-Medium w-400px' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper at iaculis suspendisse magna id ultricies. Est id in volutpat velit integer. Nisl consequat pretium interdum posuere. Lectus velit sit neque porttitor fermentum sit non.</p>
                        :null}
                    </div>
                    <div className='border-b-2 border-inactive' >
                        <div className='w-full flex justify-between items-center py-4 ' >
                            <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium' >PROMISE/GUARANTEE</p>
                            {show === 4 ?
                                <svg onClick={()=> setShow(0)} className='cursor-pointer'  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.00003 6L11 11M1 1L6.00003 6L1 1ZM6.00003 6L11 1L6.00003 6ZM6.00003 6L1 11L6.00003 6Z" stroke="#262F56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg> 
                            :
                                <svg onClick={()=> setShow(4)} className='cursor-pointer'  width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 7V13M7 1V7V1ZM7 7H13H7ZM7 7H1H7Z" stroke="#192F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            }
                        </div>
                        {show === 4 ? 
                            <p style={{color: '#192F5D', fontSize: '16px'}} className=' my-10 font-Assistant-Medium w-400px' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper at iaculis suspendisse magna id ultricies. Est id in volutpat velit integer. Nisl consequat pretium interdum posuere. Lectus velit sit neque porttitor fermentum sit non.</p>
                        :null}
                    </div>
                </div>
                <div className='w-full' >
                    <div className='w-full flex flex-col items-center my-14 mt-20'>
                        <OtherProducts title='YOU MAY ALSO LIKE' /> 
                    </div>
                </div>
            </div>
            <div className='w-full' >
                <Footer />
            </div>
        </div>
    )
}
