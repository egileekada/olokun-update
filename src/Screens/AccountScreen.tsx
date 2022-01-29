import { Radio } from '@chakra-ui/radio';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import AddAddressModal from '../components/modals/AddAddressModal'; 
import { IUser, UserContext } from '../context/UserContext';

export default function AccountScreen() {

    const [order, setOrder] = React.useState(false)
    const [address, setAddress] = React.useState(0)
    const [showModal, setShowModal] = React.useState(false)
    const [showLogiModal, setShowLoginModal] = React.useState(true)
    const userContext: IUser = React.useContext(UserContext);
    const navigate = useNavigate(); 

    React.useEffect(() => {
        if(userContext.userData.address === undefined){
            // navigate('/login') 
            // localStorage.setItem('savelength', '')
            // localStorage.removeItem('token')
        }  
        setAddress(userContext.address)
    }, [userContext.address])
    userContext.setTab('Profile')

    const ClickHandler =()=> {
        navigate('/') 
        userContext.setTab('Home')
    }

    const SaveAddress =(index: any)=> {
        userContext.setAddress(index) 
        localStorage.setItem('userAddres', index)
    }

    console.log(userContext.address)

    return (
        <div className='w-full h-full overflow-x-hidden '> 
            {/* <div className='w-full' >
                <Navbar />
            </div> */}
            <div onClick={()=> ClickHandler()} className=' w-full flex py-8 px-8 lg:py-12 mt-8 lg:px-20 items-center cursor-pointer' >
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L1 8L8 15" stroke="#192F5D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p style={{fontSize: '16px'}} className='font-Assistant-Medium ml-2' >BACK TO STORE</p>
            </div>
            <div className='w-full flex lg:flex-row flex-col-reverse ' >
                <div className='w-full px-8 lg:px-20' > 
                    <div style={{borderColor: '#E2E2E2'}} className='w-full pb-12 border-b'>
                        <p style={{fontSize: '20px'}} className='font-Assistant-Medium mb-8' >MY ACCOUNT</p>
                        <p style={{fontSize: '20px'}} className='font-Assistant-Bold' >Welcome {userContext.userData._id !== undefined ? userContext.userData.firstName: 'Guset'}! Good to have you</p> 
                        {userContext.userData._id === undefined ? 
                            <p onClick={()=> navigate('/login')} style={{color: '#192F5D', fontSize: '16px'}} className='font-Assistant-Medium cursor-pointer' >Please Log in to Continue</p>
                        :null}
                        <p style={{fontSize: '20px'}} className='font-Assistant-Medium mt-8' >Want to return or exchange an order? </p>
                        <p style={{fontSize: '16px'}} className='font-Assistant-Medium mt-1 lg:w-96' >You have an issues with the package bought or you feel like aexchanging for another feel free to click the button below.</p> 
                        {userContext.userData._id !== undefined ? 
                            <button style={{border: '1px solid #192F5D', color: '#192F5D'}} className=' mx-auto px-8 mt-3 rounded-md py-2 font-Assistant-Bold '>RETURN CENTER</button>
                        :null}
                    </div>
                    <div className='w-full py-12' >
                        <p style={{fontSize: '20px'}} className='font-Assistant-Medium' >ADDRESS</p>
                        {userContext.userData.address !== undefined ?
                            <> 
                                {userContext.userData.address.length === 0  ? 
                                    <p style={{fontSize: '16px'}} className='font-Assistant-Medium mt-4' >No Addresses saved currently</p>
                                :
                                    <div className='w-full mt-2' >
                                        {userContext.userData.address.map((item: any, index: any)=> {
                                            return(
                                                <div key={index} className=' flex items-center py-2 ' > 
                                                    <div onClick={()=> SaveAddress(index)} className='w-6 h-6 border rounded-full flex justify-center cursor-pointer items-center ' >
                                                        {index === address ?
                                                            <div className='w-2 h-2 bg-olokun rounded-full' />
                                                        :null}
                                                    </div>
                                                    <p style={{fontSize: '16px'}} className='font-Assistant-Medium ml-2' >Location: {item.address}, {item.city}, {item.country}, {item.state}, {item.phone}</p>
                                                </div>
                                            )
                                        })} 
                                    </div>
                                }
                            </>
                        : 
                            <p style={{fontSize: '16px'}} className='font-Assistant-Medium mt-4' >No Addresses saved currently</p>
                        }
                        {userContext.userData._id !== undefined ? 
                            <button onClick={()=> setShowModal(true)} style={{border: '1px solid #192F5D', color: '#192F5D'}} className=' mx-auto px-8 mt-8 rounded-md py-2 font-Assistant-Bold '>MANAGE ADDRESS</button>
                        :null}
                    </div>
                </div>
                <div className='w-full px-16' >
                    <p style={{fontSize: '20px'}} className='font-Assistant-Bold' >MY ORDERS</p>
                    {!order ? 
                        <div className='w-full flex flex-col py-24 items-center justify-center' >
                            <svg width="48" height="34" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.9944 16.7309H47.9992C47.9992 15.0644 47.3466 13.5503 46.2854 12.4209L46.2873 12.4191L37.0639 0.571991H10.5276L1.56997 12.6593L1.57381 12.6632C0.7264 13.6657 0.205249 14.9397 0.115424 16.33C0.048287 16.4604 0 16.6013 0 16.7584V32.4823C0 33.0053 0.423763 33.4281 0.945844 33.4281H47.0543C47.5773 33.4281 48.0001 33.0054 48.0001 32.4823V16.7584C48 16.749 47.9944 16.7404 47.9944 16.7309ZM11.3846 2.46368H36.2362L41.8665 10.434C41.8069 10.4321 41.7502 10.4245 41.6896 10.4245H30.3449V13.26C30.3449 16.4795 26.9645 15.7833 25.9281 15.7833H22.1505C21.1139 15.7833 17.7337 16.4795 17.7337 13.26V10.4245H6.38785C6.26964 10.4245 6.15421 10.4359 6.03693 10.4415L11.3846 2.46368ZM46.1084 31.5364H1.8925V16.7584C1.8925 16.749 1.88773 16.7405 1.8868 16.7309H1.97093C1.97093 14.2964 3.95232 12.316 6.38774 12.316H15.8419V13.2598C15.8419 16.5163 18.318 17.6748 22.1504 17.6748H25.9279C29.7612 17.6748 32.2364 16.5163 32.2364 13.2598V12.316H41.6915C42.9087 12.316 44.0125 12.8106 44.8126 13.6098L44.8145 13.6117C45.6137 14.4109 46.1074 15.5137 46.1074 16.7309H46.114C46.114 16.7404 46.1083 16.7488 46.1083 16.7584C46.1084 16.7584 46.1084 31.5364 46.1084 31.5364Z" fill="#192F5D"/>
                            </svg> 
                            <p style={{fontSize: '16px'}} className='font-Assistant-Medium mt-12' >You haven’t placed any order yet.</p>
                        </div>:
                        <div className='w-full py-8' >
                            <div className='flex items-center' >
                                <div className='w-20 h-20 bg-gray-300' >

                                </div>
                                <div className='w-auto ml-2' >
                                    <p style={{fontSize: '16px'}} className='font-Assistant-Medium ' >2mm gold chain</p>
                                    <p style={{fontSize: '14px'}} className='font-Assistant-Medium mt-1 ' >Olokun gold</p>
                                    <p style={{fontSize: '14px', color:'#F09000'}} className='font-Assistant-Medium mt-1' >$123.64</p>
                                </div>
                                <p style={{fontSize: '16px'}} className='font-Assistant-Medium ml-auto ' >2Pcs</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className='w-full' >
                <Footer />
            </div>
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 lg:px-4 inset-0 z-50 outline-none focus:outline-none">
                            <AddAddressModal close={setShowModal} />
                        </div> 
                        <div className="opacity-25 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}   
        </div>
    );
}
