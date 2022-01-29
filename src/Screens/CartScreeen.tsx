import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar' 
import CartItemComponent from '../components/CartItemComponent'
import { useNavigate } from 'react-router-dom'
import { IUser, UserContext } from '../context/UserContext'

export default function CartScreeen() {
 
    const navigate = useNavigate(); 
    const userContext: IUser = React.useContext(UserContext); 
    const [data, setData] = React.useState(JSON. parse(localStorage.getItem("cart") as any)) 
    const [total, setTotal] = React.useState([]as any) 
    
     
    userContext.setTab('Cart')

    const ClickHandler =()=>{
        navigate('/')
        userContext.setTab('Home')
    }

    React.useEffect(() => { 
        if(data !== null){  
            localStorage.setItem('cartlength', data.length) 
        }
    }, [])

    
    return (
        <div className='w-full h-full overflow-x-hidden '>
            {/* <div className='w-full' >
                <Navbar cart={true} />
            </div> */}
            <div style={{backgroundColor: '#00081B'}} className='w-full flex ' >
                <div className='w-850px p-10 mx-auto' >
                    <p style={{color: '#FFFFFF', fontSize: '20px'}} className='font-Assistant-Regular flex ' >CART 
                        
                        {data !== null ? 
                            <>
                                {data.length !== 0 ? 
                                    <p>({data.length} Items)</p>
                                :null}
                            </>
                        :null}
                    </p>

                    {data !== null ? 
                        <>
                            {data.length === 0 ? 
                                <div className='w-full flex flex-col items-center h-96 justify-center' >
                                    <svg width="48" height="34" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M47.9944 16.7309H47.9992C47.9992 15.0644 47.3466 13.5503 46.2854 12.4209L46.2873 12.4191L37.0639 0.571991H10.5276L1.56997 12.6593L1.57381 12.6632C0.7264 13.6657 0.205249 14.9397 0.115424 16.33C0.048287 16.4604 0 16.6013 0 16.7584V32.4823C0 33.0053 0.423763 33.4281 0.945844 33.4281H47.0543C47.5773 33.4281 48.0001 33.0054 48.0001 32.4823V16.7584C48 16.749 47.9944 16.7404 47.9944 16.7309ZM11.3846 2.46368H36.2362L41.8665 10.434C41.8069 10.4321 41.7502 10.4245 41.6896 10.4245H30.3449V13.26C30.3449 16.4795 26.9645 15.7833 25.9281 15.7833H22.1505C21.1139 15.7833 17.7337 16.4795 17.7337 13.26V10.4245H6.38785C6.26964 10.4245 6.15421 10.4359 6.03693 10.4415L11.3846 2.46368ZM46.1084 31.5364H1.8925V16.7584C1.8925 16.749 1.88773 16.7405 1.8868 16.7309H1.97093C1.97093 14.2964 3.95232 12.316 6.38774 12.316H15.8419V13.2598C15.8419 16.5163 18.318 17.6748 22.1504 17.6748H25.9279C29.7612 17.6748 32.2364 16.5163 32.2364 13.2598V12.316H41.6915C42.9087 12.316 44.0125 12.8106 44.8126 13.6098L44.8145 13.6117C45.6137 14.4109 46.1074 15.5137 46.1074 16.7309H46.114C46.114 16.7404 46.1083 16.7488 46.1083 16.7584C46.1084 16.7584 46.1084 31.5364 46.1084 31.5364Z" fill="#FFF"/>
                                    </svg>
                                    <p style={{color: '#FFFFFF', fontSize: '20px'}} className='font-Assistant-Regular my-3 ' >Your Cart Is Empty</p>
                                </div>
                            : 
                                <div className='w-full my-20' >
                                    {data.map((item: any, index: any)=> {
                                        return( 
                                            <CartItemComponent key={index} item={item} data={data} values={setData} total={setTotal}  getTotal={total} />
                                        )
                                    })}
                                    {/* <CartItemComponent />
                                    <CartItemComponent /> */}
                                    <div className='mt-20' >
                                    <p style={{color: '#FFFFFF', fontSize: '20px'}} className='font-Assistant-SemiBold ' >Total: <span style={{color: '#F09000'}} >${total}</span></p>
                                    <p style={{color: '#FFFFFF', fontSize: '14px'}} className='font-Assistant-Regular ' >Delivery fee not included yet</p>
                                    <p style={{color: '#FFFFFF', fontSize: '14px'}} className='font-Assistant-Regular ' >International Shipping and Customs fee not included yet</p>
                                        <div className='flex lg:flex-row flex-col mt-10' > 
                                            <button onClick={()=> ClickHandler()} style={{backgroundColor: 'rgba(255, 255, 255, 0.12)'}} className='lg:w-44 font-Assistant-Bold py-3 border border-white text-white' >Continue Shopping</button>
                                            <button onClick={()=> navigate('/checkout')} style={{ color: '#192F5D'}} className='lg:w-44 font-Assistant-Bold py-3 bg-white lg:ml-8 lg:mt-0 mt-4 ' >Proceed to payment</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                    :
                        <div className='w-full flex flex-col items-center h-96 justify-center' >
                            <svg width="48" height="34" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.9944 16.7309H47.9992C47.9992 15.0644 47.3466 13.5503 46.2854 12.4209L46.2873 12.4191L37.0639 0.571991H10.5276L1.56997 12.6593L1.57381 12.6632C0.7264 13.6657 0.205249 14.9397 0.115424 16.33C0.048287 16.4604 0 16.6013 0 16.7584V32.4823C0 33.0053 0.423763 33.4281 0.945844 33.4281H47.0543C47.5773 33.4281 48.0001 33.0054 48.0001 32.4823V16.7584C48 16.749 47.9944 16.7404 47.9944 16.7309ZM11.3846 2.46368H36.2362L41.8665 10.434C41.8069 10.4321 41.7502 10.4245 41.6896 10.4245H30.3449V13.26C30.3449 16.4795 26.9645 15.7833 25.9281 15.7833H22.1505C21.1139 15.7833 17.7337 16.4795 17.7337 13.26V10.4245H6.38785C6.26964 10.4245 6.15421 10.4359 6.03693 10.4415L11.3846 2.46368ZM46.1084 31.5364H1.8925V16.7584C1.8925 16.749 1.88773 16.7405 1.8868 16.7309H1.97093C1.97093 14.2964 3.95232 12.316 6.38774 12.316H15.8419V13.2598C15.8419 16.5163 18.318 17.6748 22.1504 17.6748H25.9279C29.7612 17.6748 32.2364 16.5163 32.2364 13.2598V12.316H41.6915C42.9087 12.316 44.0125 12.8106 44.8126 13.6098L44.8145 13.6117C45.6137 14.4109 46.1074 15.5137 46.1074 16.7309H46.114C46.114 16.7404 46.1083 16.7488 46.1083 16.7584C46.1084 16.7584 46.1084 31.5364 46.1084 31.5364Z" fill="#FFF"/>
                            </svg>
                            <p style={{color: '#FFFFFF', fontSize: '20px'}} className='font-Assistant-Regular my-3 ' >Your Cart Is Empty</p>
                        </div>
                    }
                </div>
            </div>
            <div className='w-full' >
                <Footer />
            </div>
        </div>
    )
}
