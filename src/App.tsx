import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'; 
import { ChakraProvider } from '@chakra-ui/react'
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import AccountScreen from './Screens/AccountScreen';
import Message from './components/Message'; 
import ProductScreen from './Screens/ProductScreen';
import ScrollToTop from './ScrollToTop';
import CheckoutScreen from './Screens/CheckoutScreen';
import CartScreeen from './Screens/CartScreeen';
import SavedItemScreen from './Screens/SavedItemScreen';
import AllProductScreen from './Screens/AllProductScreen'; 
import { IUser, UserContext } from './context/UserContext';
import { Drawer, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import CookieConsent from 'react-cookie-consent';

function App() { 

    const userContext: IUser = React.useContext(UserContext);
    const [loading, setLoading] = React.useState(false);  
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [tab, setTab] = React.useState(0) 

    React.useEffect(() => {   
        localStorage.setItem('savelength', '')
        localStorage.setItem('cartlength', '')
        userContext.setAddress(localStorage.getItem('userAddres'))
        userContext.setTab('Home')
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
            // console.log(data)
            userContext.setUserData(data) 
        })
        .catch((error) => {
            console.error('Error:', error); 
        },);  
 
        fetch(`https://www.universal-tutorial.com/api/getaccesstoken`, {
            method: 'GET', // or 'PUT'
            headers: {
                "Accept": "application/json",
                "api-token": "V1mhwD-iZGLntVICiPhQfxRIhGpJ1xcokq0xZiMbq9YfK2VcXy0EikVGhfxI6RH-RLE",
                "user-email": "egileoniso.ekada@gmail.com"
            }
        })
        .then(response => response.json())
        .then(data => {   
            localStorage.setItem('country-token', data.auth_token)
        })
        .catch((error) => {
            console.error('Error:', error); 
        });   
    },[loading])  

  return ( 
    <>
      {!loading ?
        <div className='w-full h-full justify-center items-center flex py-6' > 
            <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="translate(80,50)">
                    <g transform="rotate(0)">
                        <circle cx="0" cy="0" r="6" fill="#192F5D" fill-opacity="1">
                            <animateTransform attributeName="transform" type="scale" begin="-0.4861111111111111s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                            <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.4861111111111111s"></animate>
                        </circle>
                    </g>
                </g>
                <g transform="translate(71.21320343559643,71.21320343559643)">
                    <g transform="rotate(45)">
                        <circle cx="0" cy="0" r="6" fill="#192F5D" fill-opacity="0.875">
                            <animateTransform attributeName="transform" type="scale" begin="-0.41666666666666663s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                            <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.41666666666666663s"></animate>
                        </circle>
                    </g>
                </g>
                <g transform="translate(50,80)">
                    <g transform="rotate(90)">
                        <circle cx="0" cy="0" r="6" fill="#192F5D" fill-opacity="0.75">
                            <animateTransform attributeName="transform" type="scale" begin="-0.3472222222222222s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                            <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.3472222222222222s"></animate>
                        </circle>
                    </g>
                </g>
                <g transform="translate(28.786796564403577,71.21320343559643)">
                    <g transform="rotate(135)">
                        <circle cx="0" cy="0" r="6" fill="#192F5D" fill-opacity="0.625">
                            <animateTransform attributeName="transform" type="scale" begin="-0.2777777777777778s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                            <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.2777777777777778s"></animate>
                        </circle>
                    </g>
                </g>
                <g transform="translate(20,50.00000000000001)">
                    <g transform="rotate(180)">
                        <circle cx="0" cy="0" r="6" fill="#192F5D" fill-opacity="0.5">
                            <animateTransform attributeName="transform" type="scale" begin="-0.20833333333333331s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                            <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.20833333333333331s"></animate>
                        </circle>
                    </g>
                </g>
                <g transform="translate(28.78679656440357,28.786796564403577)">
                    <g transform="rotate(225)">
                        <circle cx="0" cy="0" r="6" fill="#192F5D" fill-opacity="0.375">
                            <animateTransform attributeName="transform" type="scale" begin="-0.1388888888888889s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                            <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.1388888888888889s"></animate>
                        </circle>
                    </g>
                </g>
                <g transform="translate(49.99999999999999,20)">
                    <g transform="rotate(270)">
                        <circle cx="0" cy="0" r="6" fill="#192F5D" fill-opacity="0.25">
                            <animateTransform attributeName="transform" type="scale" begin="-0.06944444444444445s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                            <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.06944444444444445s"></animate>
                        </circle>
                    </g>
                </g>
                <g transform="translate(71.21320343559643,28.78679656440357)">
                    <g transform="rotate(315)">
                        <circle cx="0" cy="0" r="6" fill="#192F5D" fill-opacity="0.125">
                            <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                            <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
                        </circle>
                    </g>
                </g> 
            </svg>
        </div>
      : 
        <ChakraProvider>   
            <Router> 
                <div className='w-full' >
                    <Navbar open={onOpen} />
                </div>

                <div className=' lg:hidden flex' >
                    <Drawer 
                        size='xs'
                        isOpen={isOpen}
                        placement="left"
                        onClose={onClose}  > 
                        <DrawerContent>
                            {/* <DrawerCloseButton  /> */}
                            <Menu index={tab} close={onClose} mobile={true} tab={setTab} />
                        </DrawerContent>
                    </Drawer>
                </div>
                <CookieConsent
                    location="bottom"
                    buttonText="I Accept" 
                    cookieName="myAwesomeCookieName2"
                    style={{ background: "#2B373B" }}
                    buttonStyle={{ color: "#4e503b", fontSize: "13px", borderRadius: '4px' }}
                    expires={150}
                    >
                    This website uses cookies to enhance the user experience.{" "} 
                </CookieConsent>

                <ScrollToTop />
                <Routes> 
                    <Route path='/' element={<HomeScreen />} /> 
                    <Route path='/login' element={<LoginScreen />}/>
                    <Route path='/register' element={<RegistrationScreen />}/>
                    <Route path='/profile' element={<AccountScreen />}/>
                    <Route path='/message' element={<Message />}/>
                    <Route path='/product' element={<ProductScreen />}/>
                    <Route path='/allproduct' element={<AllProductScreen />}/>
                    <Route path='/checkout' element={<CheckoutScreen />}/>  
                    <Route path='/cart' element={<CartScreeen />}/>
                    <Route path='/saveditem' element={<SavedItemScreen />}/>
                </Routes>
            </Router> 
        </ChakraProvider> 
      }
    </>
  );
}
 

export default App;
