import { Input } from '@chakra-ui/input'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer' 
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { IUser, UserContext } from '../context/UserContext';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
export default function LoginScreen() {

    const [loading, setLoading] = React.useState(false);
    const [showpassword, setShowpass] = React.useState(false);
    const [modal, setShowModal] = React.useState(0) 
    const userContext: IUser = React.useContext(UserContext);

    const handleShowpassword = () => {
        setShowpass(prev => !prev);
    } 

    const loginSchema = yup.object({ 
        email: yup.string().email('This email is not valid').required('Your email is required'),
        password: yup.string().required('Your password is required').min(8, 'A minimium of 8 characters')
    }) 

    // formik
    const formik = useFormik({
        initialValues: {email: '', password: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });   

    const navigate = useNavigate();

    // React.useEffect(() => { 
    //     const token = localStorage.getItem('token')
    //     if(token ){
    //         navigate('/')
    //     } 
    // },); 

    const submit = async () => {

        if (!formik.dirty) { 
            setShowModal(3)
            const t1 = setTimeout(() => {  
                clearTimeout(t1);
                setShowModal(0)
            }, 1000); 
          return;
        }else if (!formik.isValid) {
            setShowModal(3)
            const t1 = setTimeout(() => {  
                clearTimeout(t1);
                setShowModal(0)
            }, 1000); 
          return;
        }else {
            setLoading(true);
            const request = await fetch(`https://olokun-api.herokuapp.com/auth/login`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formik.values),
            });
    
            const json = await request.json(); 
    
            if (request.status === 200) {   
                setShowModal(1)
                localStorage.setItem('token', json.token);  
                setLoading(false); 
                fetch(`https://olokun-api.herokuapp.com/users/details`, {
                    method: 'GET', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization : `Bearer ${json.token}`
                    }
                })
                .then(response => response.json())
                .then(data => {  
                    userContext.setUserData(data)  
                })
                .catch((error) => {
                    console.error('Error:', error); 
                });  
                const t1 = setTimeout(() => {  
                    clearTimeout(t1);
                    navigate('/')
                    setLoading(false);
                }, 3000); 
            }else { 
                setShowModal(2)
                const t1 = setTimeout(() => {  
                    clearTimeout(t1);
                    setShowModal(0)
                }, 1000); 
                setLoading(false);
            }
        }
    } 

    return (
        <div className='w-full h-full overflow-x-hidden '> 
            
            {modal === 1 ? 
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed lg:mt-24 inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-green-400 px-4 py-2 flex justify-center lg:mt-2 items-center ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Assistant-Medium' >Login Successfull</p>
                    </div>
                </motion.div>
            :null}
            {modal === 2 ?  
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed lg:mt-24 inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-red-500 px-4 py-2 flex justify-center items-center lg:mt-2 ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Assistant-Bold' >Incorrect Email or Password</p>
                    </div>
                </motion.div>
            :null}
            {modal === 3 ?  
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed lg:mt-24 inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-red-500 px-4 py-2 flex justify-center items-center lg:mt-2 ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Assistant-Bold' >Please Enter Your Email And Password</p>
                    </div>
                </motion.div>
            :null}
            <div className='w-full flex flex-col py-8 px-8 lg:flex-row bg-olokun lg:py-10 lg:px-14 lg:pr-40 font-Assistant-Medium'>
                <div style={{backgroundColor: '#4C525F'}} className='h-20 px-4 lg:ml-auto flex flex-col items-center justify-center' > 
                    <p style={{fontSize: '16px', color: '#fff'}} className='font-Assistant-Medium text-center' >Don’t have an account?</p>
                    <p onClick={()=> navigate('/register')} style={{fontSize: '16px', color: '#fff'}} className='font-Assistant-Medium mt-1 cursor-pointer text-center underline' >CREATE NEW ACCOUNT</p>
                </div>
                <div className='lg:w-400px w-full lg:mt-0 mt-8 lg:ml-16 lg:mr-auto'> 
                    <p style={{color: '#fff'}} className='font-Assistant-Medium text-2xl lg:text-4xl text-center' >LOGIN</p>
                    <p style={{fontSize: '16px', color: '#fff'}} className='font-Assistant-Medium mt-2 text-center' >Fill your details to create a new account<br/>with olokun store</p>
                    <div className='my-2 mt-16 w-full' >
                        <Input 
                            name="email"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("email", true, true)
                            }  
                            placeholder="Email" backgroundColor='#FFF' size="lg" fontSize='sm' />
                    
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
                        </div>
                    </div>
                    <div className=' relative w-full flex font-Inter-Regular justify-center flex-col py-2 ' > 
                        {/* <Input size='lg' fontSize='sm' placeholder='Password' /> */}
                        <Input
                            name="password"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("password", true, true)
                            } 
                            type={showpassword ? "text" : "password"} backgroundColor='#FFF' placeholder="Password" size="lg" fontSize='sm' />
                        <div onClick={()=> handleShowpassword()} style={{color: '#00191AA6'}} className=' font-Inter-Medium cursor-pointer z-10 absolute right-4 text-sm ' >
                            {showpassword ?
                                <IoIosEye size='25' className='cursor-pointer' />
                                :
                                <IoIosEyeOff size='25' className='cursor-pointer' /> 
                            }
                        </div> 
                    </div>
                    <div className="w-full h-auto pb-6">
                        {formik.touched.password && formik.errors.password && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-Regular text-errorRed"
                            >
                                {formik.errors.password}
                            </motion.p>
                        )}
                    </div>
                    <div className='my-2 w-full' >
                        {/* <button onClick={()=> navigate('/')} className='w-full bg-white h-10 rounded-md font-Assistant-Bold' >LOGIN</button>
                     */}
                        <button onClick={()=> submit()} className='w-full bg-white h-10 flex justify-center items-center rounded-md font-Assistant-Bold' >
                            {!loading ? 
                                'LOGIN'
                            :   
                                <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
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
                            }
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-full' >
                <Footer />
            </div>
        </div>
    )
}
