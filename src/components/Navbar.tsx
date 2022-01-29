import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import Logo from '../assets/images/logo.png' 
import { useNavigate } from 'react-router-dom';
import { IUser, UserContext } from '../context/UserContext';

export default function Navbar(props: any) {

    const navigate = useNavigate();
    const [value, setValue] = React.useState('')
    const [close, setClose] = React.useState('')
    const [showModal, setShowModal] = React.useState(false)
    const [items, setItem] = React.useState([] as any) 
    const [loading, setLoading] = React.useState(false);
    const userContext: IUser = React.useContext(UserContext);
    
    const OnChangeHandler =(e: any)=> {
        setValue(e.target.value)
        setClose(e.target.value)
    }

    const ClickHandler =()=> {
        // props.value(value)
        userContext.setValue(value)
        setClose('') 
        navigate('/')
        setShowModal(false)
    }

    const OpenProduct =(index: any)=> {
        localStorage.setItem('product', index)
        navigate('/product')
        setClose('') 
        setShowModal(false)
    }  

    React.useEffect(() => {  
        setLoading(false)
        fetch(`https://olokun-api.herokuapp.com/items/search?term=${value}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => { 
            setItem(data)  
            const t1 = setTimeout(() => { 
                clearTimeout(t1);
                setLoading(true)
            }, 3000); 
        })
        .catch((error) => {
            console.error('Error:', error);
            setItem('') 
        });  
    },[value]) 

    const RouteHandler =(rout: any)=> {
        if(rout === '/'){ 
            navigate(rout) 
            userContext.setTab('Home')
        } else if(rout === '/saveditem'){ 
            navigate(rout)
            userContext.setTab('Saved Item')
        } else if(rout === '/profile'){ 
            navigate(rout)
            userContext.setTab('Profile')
        } else if(rout === '/cart'){ 
            navigate(rout)
            userContext.setTab('Cart')
        }
    }

    return (
        <div style={{ backgroundColor: '#02081B'}} className='w-full text-white flex items-center px-5 lg:px-14 py-1 '>
            <div style={{width: '320px'}} className=' hidden relative flex-col  lg:flex' > 
                <InputGroup >
                    <InputLeftElement 
                    children={
                        <svg width="21" height="21" className='mt-2' viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.739 0C15.109 0 19.477 4.368 19.477 9.738C19.477 12.2715 18.5047 14.5823 16.9136 16.3165L20.0444 19.4407C20.3374 19.7337 20.3384 20.2077 20.0454 20.5007C19.8994 20.6487 19.7064 20.7217 19.5144 20.7217C19.3234 20.7217 19.1314 20.6487 18.9844 20.5027L15.8159 17.343C14.1491 18.6778 12.0357 19.477 9.739 19.477C4.369 19.477 0 15.108 0 9.738C0 4.368 4.369 0 9.739 0ZM9.739 1.5C5.196 1.5 1.5 5.195 1.5 9.738C1.5 14.281 5.196 17.977 9.739 17.977C14.281 17.977 17.977 14.281 17.977 9.738C17.977 5.195 14.281 1.5 9.739 1.5Z" fill="white" fill-opacity="0.7"/>
                        </svg> 
                    }
                    />
                    <Input onChange={(e)=> OnChangeHandler(e)} size='sm' height='48px' borderRadius='4px' border='1px solid rgba(255, 255, 255, 0.6)' backgroundColor='#192132' placeholder="Search categories, Brands, products..." /> 
                </InputGroup>
                {close !== '' ? 
                    <>
                        {loading ? 
                            <div className='w-full top-14 absolute bg-olokun z-50 my-1' >
                                {items !== undefined ? 
                                    <>
                                        {items.items.map((item: any, index: any)=>{
                                            console.log(items)
                                            if(index >= 3 ){
                                                return null
                                            }
                                            return(
                                                <div onClick={()=> OpenProduct(item._id)} key={index} className='flex items-center py-2 cursor-pointer px-3' >
                                                    <img className='w-10 h-10 object-cover'  src={item.imagesURLs[0]} alt={item.name} /> 
                                                    <p style={{fontSize: '12px', color: '#fff'}} className='font-Assistant-Regular text-center ml-2' >{item.name}</p>
                                                </div>
                                            )
                                        })} 

                                        {items.items.length !== 0 ?
                                            <div onClick={()=> ClickHandler()} className='py-2 px-3 h-16 cursor-pointer flex justify-center items-center'> 
                                                <p style={{fontSize: '14px', color: '#fff'}} className='font-Assistant-Bold text-center' >Search For {value}</p>
                                            </div>
                                        :
                                            <div className='py-2 px-3 h-16 flex justify-center items-center'> 
                                                <p style={{fontSize: '14px', color: '#fff'}} className='font-Assistant-Bold text-center' >Search Request Not Found</p>
                                            </div>
                                        }
                                    </>
                                :null}
                            </div>
                        :
                            <div className='w-full top-14 absolute justify-center items-center flex py-6 bg-olokun' > 
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
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
                        }
                    </>
                :null}
            </div>
            <svg onClick={()=> props.open()} width="55" height="23" className='lg:hidden cursor-pointer' viewBox="0 0 55 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41 8H53" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M41 12H53" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M41 16H48" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.60481 5.488H3.06081L5.12481 11.248L5.89281 13.472H5.95681C6.03148 13.2693 6.13281 12.9653 6.26081 12.56C6.43148 12.048 6.58081 11.6107 6.70881 11.248L8.74081 5.488H10.2128V16H9.10881V9.92C9.10881 9.28 9.15681 8.26667 9.25281 6.88H9.18881L8.35681 9.264L6.30881 14.912H5.47681L3.41281 9.264L2.58081 6.88H2.51681L2.54881 7.28C2.63415 8.41067 2.67681 9.29067 2.67681 9.92V16H1.60481V5.488ZM18.9441 11.68C18.9441 11.9573 18.9281 12.192 18.8961 12.384H13.5361C13.5894 13.2907 13.8667 13.9947 14.3681 14.496C14.8801 14.9973 15.5041 15.248 16.2401 15.248C16.9227 15.248 17.5787 15.04 18.2081 14.624L18.6401 15.392C18.2561 15.6373 17.8614 15.8347 17.4561 15.984C17.0507 16.1227 16.5974 16.192 16.0961 16.192C15.4134 16.192 14.7894 16.032 14.2241 15.712C13.6694 15.3813 13.2267 14.9067 12.8961 14.288C12.5761 13.6693 12.4161 12.9493 12.4161 12.128C12.4161 11.3173 12.5761 10.6027 12.8961 9.984C13.2267 9.36533 13.6587 8.89067 14.1921 8.56C14.7254 8.21867 15.2907 8.048 15.8881 8.048C16.8481 8.048 17.5947 8.37333 18.1281 9.024C18.6721 9.664 18.9441 10.5493 18.9441 11.68ZM17.9041 11.536C17.9041 10.7147 17.7281 10.0853 17.3761 9.648C17.0241 9.21067 16.5334 8.992 15.9041 8.992C15.3281 8.992 14.8161 9.21067 14.3681 9.648C13.9201 10.0853 13.6534 10.7147 13.5681 11.536H17.9041ZM20.8991 8.24H21.8591L21.9551 9.392H22.0031C22.4297 8.96533 22.8457 8.63467 23.2511 8.4C23.6671 8.16533 24.1204 8.048 24.6111 8.048C25.4217 8.048 26.0191 8.304 26.4031 8.816C26.7871 9.31733 26.9791 10.0693 26.9791 11.072V16H25.8111V11.216C25.8111 10.4693 25.6884 9.92533 25.4431 9.584C25.2084 9.24267 24.8191 9.072 24.2751 9.072C23.8911 9.072 23.5337 9.17333 23.2031 9.376C22.8724 9.568 22.4884 9.88267 22.0511 10.32V16H20.8991V8.24ZM31.8266 16.192C31.0266 16.192 30.4346 15.9413 30.0506 15.44C29.6666 14.928 29.4746 14.1707 29.4746 13.168V8.24H30.6266V13.024C30.6266 13.7707 30.7492 14.32 30.9946 14.672C31.2399 15.0133 31.6346 15.184 32.1786 15.184C32.5732 15.184 32.9306 15.0773 33.2506 14.864C33.5812 14.6507 33.9492 14.2987 34.3546 13.808V8.24H35.5226V16H34.5466L34.4506 14.768H34.4026C34.0079 15.2267 33.6026 15.5787 33.1866 15.824C32.7812 16.0693 32.3279 16.192 31.8266 16.192Z" fill="white"/>
            </svg>
            <div  onClick={()=> RouteHandler('/')} className='w-auto cursor-pointer mx-auto' >
                <img src={Logo} className='w-44 lg:w-auto' alt='logo' />
            </div>
            <div className='flex' >
                <div onClick={()=> RouteHandler('/saveditem')} className='relative mx-4 hidden lg:flex cursor-pointer' >
                    {userContext.tab !== 'Saved Item' ? 
                        <div className='rounded-full absolute top-0 -right-1 flex justify-center items-center' style={{width: '17px', height: '17px', backgroundColor: '#F09000'}}>
                            <p>{localStorage.getItem('savelength')}</p>
                        </div>
                    :null}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_81_906)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3131 5.38531C18.4811 4.01464 21.3611 3.63597 23.8491 4.43331C29.2611 6.17864 30.9411 12.0786 29.4384 16.7733C27.1198 24.1466 17.2171 29.6466 16.7971 29.8773C16.6478 29.96 16.4824 30.0013 16.3171 30.0013C16.1518 30.0013 15.9878 29.9613 15.8384 29.88C15.4211 29.652 5.59045 24.2333 3.19445 16.7746C3.19311 16.7746 3.19311 16.7733 3.19311 16.7733C1.68911 12.0773 3.36378 6.17597 8.77045 4.43331C11.3091 3.61197 14.0758 3.97331 16.3131 5.38531ZM9.38378 6.33731C5.00911 7.74797 3.91045 12.4533 5.09845 16.164C6.96778 21.98 14.3531 26.6826 16.3158 27.8466C18.2851 26.6706 25.7238 21.916 27.5331 16.1693C28.7211 12.4546 27.6184 7.74931 23.2371 6.33731C21.1144 5.65597 18.6384 6.07064 16.9291 7.39331C16.5718 7.66797 16.0758 7.67331 15.7158 7.40131C13.9051 6.03997 11.5398 5.64131 9.38378 6.33731ZM21.9571 8.98517C23.7744 9.57317 25.0478 11.1825 25.2038 13.0852C25.2478 13.6358 24.8384 14.1185 24.2878 14.1625C24.2598 14.1652 24.2331 14.1665 24.2051 14.1665C23.6891 14.1665 23.2518 13.7705 23.2091 13.2478C23.1211 12.1518 22.3878 11.2265 21.3438 10.8892C20.8171 10.7185 20.5291 10.1545 20.6984 9.63051C20.8704 9.10517 21.4291 8.81984 21.9571 8.98517Z" fill={userContext.tab === 'Saved Item' ? '#F09000' : 'white'}/>
                        </g>
                        <defs>
                        <clipPath id="clip0_81_906">
                        <rect width="32" height="32" fill={userContext.tab === 'Saved Item' ? '#F09000' : 'white'}/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                <div onClick={()=> RouteHandler('/profile')} className='relative mx-4 hidden lg:flex cursor-pointer' >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.7319 15.463C22.2991 16.008 21.8129 16.5111 21.2545 16.9652C24.442 18.7936 26.594 22.2311 26.594 26.1618C26.594 28.2857 21.9404 29.9495 15.9997 29.9495C10.059 29.9495 5.40547 28.2857 5.40547 26.1618C5.40547 22.2311 7.55741 18.7936 10.7449 16.9652C10.1866 16.5111 9.70039 16.008 9.26754 15.463C5.71785 17.7046 3.35498 21.6622 3.35498 26.1618C3.35498 27.5249 4.10133 29.4244 7.65712 30.7336C9.87512 31.5503 12.8379 32 15.9998 32C19.1617 32 22.1245 31.5503 24.3425 30.7336C27.8982 29.4244 28.6446 27.5249 28.6446 26.1618C28.6445 21.6622 26.2816 17.7046 22.7319 15.463Z" fill={userContext.tab === 'Profile' ? '#F09000' : 'white'}/>
                        <path d="M15.9995 16.8141C19.9846 16.8141 23.0533 12.9621 23.0533 8.40711C23.0533 3.85002 19.9831 0 15.9995 0C12.0145 0 8.9458 3.85205 8.9458 8.40704C8.9458 12.9641 12.0161 16.8141 15.9995 16.8141ZM15.9995 2.05049C18.7583 2.05049 21.0028 4.90201 21.0028 8.40704C21.0028 11.9121 18.7583 14.7636 15.9995 14.7636C13.2408 14.7636 10.9963 11.9121 10.9963 8.40704C10.9963 4.90201 13.2408 2.05049 15.9995 2.05049Z" fill={userContext.tab === 'Profile' ? '#F09000' : 'white'}/>
                    </svg>
                </div>
                {!showModal ? 
                    <div onClick={()=> setShowModal(true)} className='relative mx-2 lg:hidden cursor-pointer' >
                        <svg width="21" height="21" className='mt-2' viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.739 0C15.109 0 19.477 4.368 19.477 9.738C19.477 12.2715 18.5047 14.5823 16.9136 16.3165L20.0444 19.4407C20.3374 19.7337 20.3384 20.2077 20.0454 20.5007C19.8994 20.6487 19.7064 20.7217 19.5144 20.7217C19.3234 20.7217 19.1314 20.6487 18.9844 20.5027L15.8159 17.343C14.1491 18.6778 12.0357 19.477 9.739 19.477C4.369 19.477 0 15.108 0 9.738C0 4.368 4.369 0 9.739 0ZM9.739 1.5C5.196 1.5 1.5 5.195 1.5 9.738C1.5 14.281 5.196 17.977 9.739 17.977C14.281 17.977 17.977 14.281 17.977 9.738C17.977 5.195 14.281 1.5 9.739 1.5Z" fill="white" fill-opacity="0.7"/>
                        </svg> 
                    </div>
                :null}
                <div onClick={()=> RouteHandler('/cart')} className='relative mx-2 lg:mx-4 cursor-pointer' >
                    {userContext.tab !== 'Cart' ? 
                        <div className='rounded-full absolute top-0 -right-1 flex justify-center items-center' style={{width: '17px', height: '17px', backgroundColor: '#F09000'}}>
                        <p>{localStorage.getItem('cartlength')}</p>
                    </div>
                    :null}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_81_917)">
                            <path d="M31.5249 11.5665C31.1024 11.0364 30.4684 10.7323 29.7856 10.7323H23.6228L20.281 3.08022C20.0738 2.60578 19.5212 2.38897 19.0467 2.59628C18.5722 2.80347 18.3555 3.35616 18.5628 3.83066L21.5768 10.7323H10.4232L13.4373 3.83066C13.6444 3.35616 13.4278 2.80353 12.9533 2.59628C12.4789 2.38897 11.9262 2.60566 11.719 3.08022L8.37719 10.7323H2.21444C1.53157 10.7323 0.897629 11.0364 0.475066 11.5666C0.0602539 12.0871 -0.0928086 12.7562 0.0551289 13.4026L3.34619 27.7776C3.576 28.7813 4.46394 29.4823 5.5055 29.4823H26.4945C27.5361 29.4823 28.424 28.7813 28.6538 27.7776L31.9449 13.4025C32.0928 12.7562 31.9398 12.087 31.5249 11.5665ZM26.4945 27.6073H5.5055C5.34632 27.6073 5.20688 27.5029 5.17394 27.359L1.88288 12.9842C1.85707 12.8713 1.90038 12.7865 1.94138 12.7352C1.97938 12.6874 2.06544 12.6073 2.21444 12.6073H7.55838L7.31282 13.1697C7.10563 13.6442 7.32225 14.1968 7.79675 14.404C7.91888 14.4574 8.04613 14.4827 8.17144 14.4827C8.53282 14.4827 8.87719 14.2725 9.03107 13.9202L9.60438 12.6075H22.3958L22.9691 13.9202C23.1229 14.2725 23.4673 14.4827 23.8287 14.4827C23.9539 14.4827 24.0813 14.4574 24.2034 14.404C24.6779 14.1968 24.8946 13.6442 24.6873 13.1697L24.4418 12.6073H29.7857C29.9347 12.6073 30.0208 12.6874 30.0588 12.7352C30.0997 12.7865 30.1431 12.8714 30.1173 12.9841L26.8262 27.3591C26.7932 27.5029 26.6537 27.6073 26.4945 27.6073Z" fill={userContext.tab === 'Cart' ? '#F09000' : 'white'}/>
                            <path d="M10.375 16.6698C9.85725 16.6698 9.4375 17.0895 9.4375 17.6073V24.4823C9.4375 25 9.85725 25.4198 10.375 25.4198C10.8928 25.4198 11.3125 25 11.3125 24.4823V17.6073C11.3125 17.0895 10.8928 16.6698 10.375 16.6698Z" fill={userContext.tab === 'Cart' ? '#F09000' : 'white'}/>
                            <path d="M16 16.6698C15.4822 16.6698 15.0625 17.0895 15.0625 17.6073V24.4823C15.0625 25 15.4822 25.4198 16 25.4198C16.5178 25.4198 16.9375 25 16.9375 24.4823V17.6073C16.9375 17.0895 16.5178 16.6698 16 16.6698Z" fill={userContext.tab === 'Cart' ? '#F09000' : 'white'}/>
                            <path d="M21.625 16.6698C21.1072 16.6698 20.6875 17.0895 20.6875 17.6073V24.4823C20.6875 25 21.1072 25.4198 21.625 25.4198C22.1428 25.4198 22.5625 25 22.5625 24.4823V17.6073C22.5624 17.0895 22.1428 16.6698 21.625 16.6698Z" fill={userContext.tab === 'Cart' ? '#F09000' : 'white'}/>
                        </g>
                        <defs>
                            <clipPath id="clip0_81_917">
                                <rect width="32" height="32" fill={userContext.tab === 'Cart' ? '#F09000' : 'white'}/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none">
                            <div className=' w-full lg:hidden relative flex-col flex mt-16' > 
                                <InputGroup >
                                    <InputLeftElement 
                                    children={
                                        <svg width="21" height="21" className='mt-2' viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.739 0C15.109 0 19.477 4.368 19.477 9.738C19.477 12.2715 18.5047 14.5823 16.9136 16.3165L20.0444 19.4407C20.3374 19.7337 20.3384 20.2077 20.0454 20.5007C19.8994 20.6487 19.7064 20.7217 19.5144 20.7217C19.3234 20.7217 19.1314 20.6487 18.9844 20.5027L15.8159 17.343C14.1491 18.6778 12.0357 19.477 9.739 19.477C4.369 19.477 0 15.108 0 9.738C0 4.368 4.369 0 9.739 0ZM9.739 1.5C5.196 1.5 1.5 5.195 1.5 9.738C1.5 14.281 5.196 17.977 9.739 17.977C14.281 17.977 17.977 14.281 17.977 9.738C17.977 5.195 14.281 1.5 9.739 1.5Z" fill="white" fill-opacity="0.7"/>
                                        </svg> 
                                    }
                                    />
                                    <Input onChange={(e)=> OnChangeHandler(e)} size='sm' height='48px' borderRadius='4px' border='1px solid rgba(255, 255, 255, 0.6)' backgroundColor='#192132' placeholder="Search categories, Brands, products..." /> 
                                </InputGroup>
                                {close !== '' ? 
                                    <>
                                        {loading ? 
                                            <div className='w-full top-14 absolute bg-olokun my-1' >
                                                {items !== undefined ? 
                                                    <>
                                                        {items.items.map((item: any, index: any)=>{
                                                            console.log(items)
                                                            if(index >= 3 ){
                                                                return null
                                                            }
                                                            return(
                                                                <div onClick={()=> OpenProduct(item._id)} key={index} className='flex items-center py-2 cursor-pointer px-3' >
                                                                    <img className='w-10 h-10 object-cover'  src={item.imagesURLs[0]} alt={item.name} /> 
                                                                    <p style={{fontSize: '12px', color: '#fff'}} className='font-Assistant-Regular text-center ml-2' >{item.name}</p>
                                                                </div>
                                                            )
                                                        })} 

                                                        {items.items.length !== 0 ?
                                                            <div onClick={()=> ClickHandler()} className='py-2 px-3 h-16 cursor-pointer flex justify-center items-center'> 
                                                                <p style={{fontSize: '14px', color: '#fff'}} className='font-Assistant-Bold text-center' >Search For {value}</p>
                                                            </div>
                                                        :
                                                            <div className='py-2 px-3 h-16 flex justify-center items-center'> 
                                                                <p style={{fontSize: '14px', color: '#fff'}} className='font-Assistant-Bold text-center' >Search Request Not Found</p>
                                                            </div>
                                                        }
                                                    </>
                                                :null}
                                            </div>
                                        :
                                            <div className='w-full top-14 absolute justify-center items-center flex py-6 bg-olokun' > 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
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
                                        }
                                    </>
                                :null}
                            </div>
                        </div> 
                        <div className="opacity-25 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) 
            :null}
        </div>
    )
}
