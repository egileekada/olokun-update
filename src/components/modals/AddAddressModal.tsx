import { Checkbox } from '@chakra-ui/checkbox'
import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import React from 'react'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { IUser, UserContext } from '../../context/UserContext'

export default function AddAddressModal(props: any) {

    const [country, setCountry] = React.useState([] as any)
    const [selectedcountry, setSelectedCountry] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [stateloading, setStateLoading] = React.useState(true)
    const [state, setState] = React.useState([] as any) 
    const [main, setMain] = React.useState(false)
    const userContext: IUser = React.useContext(UserContext);

    const loginSchema = yup.object({  
        firstName: yup.string().required('Required'), 
        lastName: yup.string().required('Required'), 
        address: yup.string().required('Required'), 
        city: yup.string().required('Required'),  
        state: yup.string().required('Required'), 
        zipCode: yup.string().required('Required'), 
        phone: yup.string().required('Required'), 
    }) 

    // formik
    const formik = useFormik({
        initialValues: { 
        firstName:"",
        lastName:"",
        address:"",
        city:"", 
        state:"",
        zipCode:"",
        phone:""
    },
        validationSchema: loginSchema,
        onSubmit: () => {},
    });   


    console.log(main)
    const submit = async () => {

        if (!formik.dirty) {
          alert('You have to fill in th form to continue');
          return;
        }else if (!formik.isValid) {
          alert('You have to fill in the form correctly to continue');
          return;
        }else {
            setLoading(true);
            const request = await fetch(`https://olokun-api.herokuapp.com/users/address`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({
                    default: main,
                    firstName: formik.values.firstName,
                    lastName: formik.values.lastName,
                    address: formik.values.address,
                    city: formik.values.city,
                    country: selectedcountry,
                    state: formik.values.state,
                    zipCode: formik.values.zipCode,
                    phone: formik.values.phone
                }),
            });
            if(request.status === 200){
                fetch(`https://olokun-api.herokuapp.com/users/details`, {
                    method: 'GET', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization : `Bearer ${localStorage.getItem('token')}`
                    }
                })
                .then(response => response.json())
                .then(data => {   
                    setLoading(true) 
                    console.log(data)
                    userContext.setUserData(data) 
                    props.close(false)
                })
                .catch((error) => {
                    console.error('Error:', error); 
                });  
            } 
        }
    }

    React.useEffect(() => { 
        fetch(`https://www.universal-tutorial.com/api/countries/`, {
            method: 'GET', // or 'PUT'
            headers: { 
                Authorization : `Bearer ${localStorage.getItem('country-token')}`,
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {    
            setCountry(data)
        })
        .catch((error) => {
            console.error('Error:', error); 
        });  

        fetch(`https://www.universal-tutorial.com/api/states/${selectedcountry}`, {
            method: 'GET', // or 'PUT'
            headers: { 
                Authorization : `Bearer ${localStorage.getItem('country-token')}`,
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {   
            setState(data) 
            if(data.length !== 0){
                setStateLoading(false)
            }
        })
        .catch((error) => {
            console.error('Error:', error); 
        });  
    }, [selectedcountry])
    
    const CountryHandler =(e: any)=> {
        setSelectedCountry(e.target.value)
    } 

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }} className='lg:w-668px w-full bg-white py-12 px-6' >
            <svg onClick={()=> props.close(false)} className='ml-auto cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8L1 15M1 1L8 8L1 1ZM8 8L15 15L8 8ZM8 8L15 1L8 8Z" stroke="#262F56" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className='mx-auto' > 
                <p style={{fontSize: '20px'}} className='font-Assistant-Medium text-center ' >ADD ADDRESS</p>
                <p style={{fontSize: '16px'}} className='font-Assistant-Medium text-center mt-2 ' >Please fill the information below</p>
            </div>
            <div className='flex mt-6 my-2' >
                <div className='w-full mr-2' >
                    <Input 
                        name="firstName"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("firstName", true, true)
                        }  
                        placeholder='First name' size='lg' fontSize='sm' />

                    <div className="w-full h-auto pt-2">
                            {formik.touched.firstName && formik.errors.firstName && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-Regular text-errorRed"
                                >
                                    {formik.errors.firstName}
                                </motion.p>
                            )}
                        </div>
                </div>
                <div className='ml-2 w-full' >
                    <Input
                        name="lastName"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("lastName", true, true)
                        }  
                         placeholder='Last name' size='lg' fontSize='sm' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.lastName && formik.errors.lastName && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.errors.lastName}
                            </motion.p>
                        )}
                    </div>
            </div>
            </div>
            <Input 
                name="address"
                onChange={formik.handleChange}
                onFocus={() =>
                    formik.setFieldTouched("address", true, true)
                }  
                className='my-2' placeholder='Address'  size='lg' fontSize='sm' />
            <div className="w-full h-auto pt-2">
                {formik.touched.address && formik.errors.address && (
                    <motion.p
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-xs font-Inter-Regular text-errorRed"
                    >
                        {formik.errors.address}
                    </motion.p>
                )}
            </div>
            {/* <Input 
                name="email"
                onChange={formik.handleChange}
                onFocus={() =>
                    formik.setFieldTouched("email", true, true)
                }  
                className='my-2' placeholder='Apartment, suite, etc. (Opitional)'  size='lg' fontSize='sm' />
            
            <div className="w-full h-auto pt-2">
                {formik.touched.email && formik.errors.email && (
                    <motion.p
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-xs font-Inter-Regular text-errorRed"
                    >
                        {formik.errors.email}
                    </motion.p>
                )}
            </div> */}
            <Input 
                name="city"
                onChange={formik.handleChange}
                onFocus={() =>
                    formik.setFieldTouched("city", true, true)
                }  
                className='my-2' placeholder='City'  size='lg' fontSize='sm' />
            
            <div className="w-full h-auto pt-2">
                {formik.touched.city && formik.errors.city && (
                    <motion.p
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-xs font-Inter-Regular text-errorRed"
                    >
                        {formik.errors.city}
                    </motion.p>
                )}
            </div>
            <div className='flex my-2' >
                <div className=' w-full' >
                    <Select onChange={(e)=> CountryHandler(e)} size='lg' fontSize='sm' placeholder='Country/region'>
                        {country.map((item: any)=> {
                            return(
                                <option key={item.country_name} >{item.country_name}</option>
                            )
                        })}
                    </Select>
                </div>
                <div className=' w-full pl-2' >
                    <Select 
                        name="state"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("state", true, true)
                        }  
                        size='lg' fontSize='sm' placeholder='State'>
                        {!stateloading ?
                            <> 
                                {state.map((item: any)=> {
                                    return(
                                        <option key={item.state_name} >{item.state_name}</option>
                                    )
                                })}
                            </>
                        :
                            <>
                                <option>loading...</option>
                            </>
                        }
                    </Select>
                    <div className="w-full h-auto pt-2">
                        {formik.touched.state && formik.errors.state && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.errors.state}
                            </motion.p>
                        )}
                    </div>
                </div>
                <div className='w-full ml-2' >
                    <Input 
                        name="zipCode"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("zipCode", true, true)
                        }  
                        placeholder='ZIP code' size='lg' fontSize='sm' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.zipCode && formik.errors.zipCode && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.errors.zipCode}
                            </motion.p>
                        )}
                    </div>
                </div>
            </div>
            <Input 
                name="phone"
                onChange={formik.handleChange}
                onFocus={() =>
                    formik.setFieldTouched("phone", true, true)
                }  
                className='my-2' placeholder='Phone'  size='lg' fontSize='sm' />
            <div className="w-full h-auto pt-2">
                {formik.touched.phone && formik.errors.phone && (
                    <motion.p
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-xs font-Inter-Regular text-errorRed"
                    >
                        {formik.errors.phone}
                    </motion.p>
                )}
            </div>
            <div className='flex items-center my-2' >
                <Checkbox onChange={()=> setMain((prev)=> !prev)} />
                <p style={{fontSize: '14px'}} className='font-Assistant-Medium text-center ml-2 ' >Set as default address</p>
            </div>
            <button onClick={()=> submit()} style={{backgroundColor: '#192F5D'}} className=' w-full text-white mt-8 flex justify-center items-center rounded py-2 font-Assistant-Bold '>
                {!loading ? 
                        'ADD ADDRESS'
                    :   
                        <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                            <g transform="translate(80,50)">
                                <g transform="rotate(0)">
                                    <circle cx="0" cy="0" r="6" fill="#fff" fill-opacity="1">
                                        <animateTransform attributeName="transform" type="scale" begin="-0.4861111111111111s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                        <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.4861111111111111s"></animate>
                                    </circle>
                                </g>
                            </g>
                            <g transform="translate(71.21320343559643,71.21320343559643)">
                                <g transform="rotate(45)">
                                    <circle cx="0" cy="0" r="6" fill="#fff" fill-opacity="0.875">
                                        <animateTransform attributeName="transform" type="scale" begin="-0.41666666666666663s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                        <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.41666666666666663s"></animate>
                                    </circle>
                                </g>
                            </g>
                            <g transform="translate(50,80)">
                                <g transform="rotate(90)">
                                    <circle cx="0" cy="0" r="6" fill="#fff" fill-opacity="0.75">
                                        <animateTransform attributeName="transform" type="scale" begin="-0.3472222222222222s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                        <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.3472222222222222s"></animate>
                                    </circle>
                                </g>
                            </g>
                            <g transform="translate(28.786796564403577,71.21320343559643)">
                                <g transform="rotate(135)">
                                    <circle cx="0" cy="0" r="6" fill="#fff" fill-opacity="0.625">
                                        <animateTransform attributeName="transform" type="scale" begin="-0.2777777777777778s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                        <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.2777777777777778s"></animate>
                                    </circle>
                                </g>
                            </g>
                            <g transform="translate(20,50.00000000000001)">
                                <g transform="rotate(180)">
                                    <circle cx="0" cy="0" r="6" fill="#fff" fill-opacity="0.5">
                                        <animateTransform attributeName="transform" type="scale" begin="-0.20833333333333331s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                        <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.20833333333333331s"></animate>
                                    </circle>
                                </g>
                            </g>
                            <g transform="translate(28.78679656440357,28.786796564403577)">
                                <g transform="rotate(225)">
                                    <circle cx="0" cy="0" r="6" fill="#fff" fill-opacity="0.375">
                                        <animateTransform attributeName="transform" type="scale" begin="-0.1388888888888889s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                        <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.1388888888888889s"></animate>
                                    </circle>
                                </g>
                            </g>
                            <g transform="translate(49.99999999999999,20)">
                                <g transform="rotate(270)">
                                    <circle cx="0" cy="0" r="6" fill="#fff" fill-opacity="0.25">
                                        <animateTransform attributeName="transform" type="scale" begin="-0.06944444444444445s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                        <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.06944444444444445s"></animate>
                                    </circle>
                                </g>
                            </g>
                            <g transform="translate(71.21320343559643,28.78679656440357)">
                                <g transform="rotate(315)">
                                    <circle cx="0" cy="0" r="6" fill="#fff" fill-opacity="0.125">
                                        <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                        <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
                                    </circle>
                                </g>
                            </g> 
                        </svg>
                    }
            </button>
        </motion.div>
    )
}
