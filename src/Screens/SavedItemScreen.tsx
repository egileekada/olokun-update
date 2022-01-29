import React from 'react' 
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SavedItemComponent from '../components/SavedItemComponent'
import { IUser, UserContext } from '../context/UserContext'

export default function SavedItemScreen() {

    const [show, setShow] = React.useState(true)
    const userContext: IUser = React.useContext(UserContext);
    const [loading, setLoading] = React.useState(false);
    const [product, setProduct] = React.useState([] as any)
    const navigate = useNavigate(); 
 
    userContext.setTab('Saved Item')

    React.useEffect(() => {
        setLoading(false)  
        fetch(`https://olokun-api.herokuapp.com/saved-items/saved`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => { 
            console.log(data)  
            setProduct(data)
            const t1 = setTimeout(() => { 
                clearTimeout(t1);
                setLoading(true)
            }, 3000); 
            if(data.length === undefined){ 
                localStorage.setItem('savelength', '')
            } else { 
                localStorage.setItem('savelength', data.length)
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });  
    },[])

    return (
        <div className='w-full h-full overflow-x-hidden '>
            {/* <div className='w-full' >
                <Navbar save={true} />
            </div> */}
            <div style={{backgroundColor: '#00081B'}} className='w-full flex ' >
                <div className='w-850px p-10 mx-auto' >
                    <p style={{color: '#FFFFFF', fontSize: '20px'}} className='font-Assistant-Regular flex ' >SAVED ITEMS
                        {product.length !== 0 && product.length !== undefined ? 
                            <p>({product.length} Items)</p>
                        :null}
                    </p>
                    {userContext.userData._id === undefined ?
                        <div className='w-full flex flex-col items-center h-96 justify-center' >
                            <svg width="48" height="34" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.9944 16.7309H47.9992C47.9992 15.0644 47.3466 13.5503 46.2854 12.4209L46.2873 12.4191L37.0639 0.571991H10.5276L1.56997 12.6593L1.57381 12.6632C0.7264 13.6657 0.205249 14.9397 0.115424 16.33C0.048287 16.4604 0 16.6013 0 16.7584V32.4823C0 33.0053 0.423763 33.4281 0.945844 33.4281H47.0543C47.5773 33.4281 48.0001 33.0054 48.0001 32.4823V16.7584C48 16.749 47.9944 16.7404 47.9944 16.7309ZM11.3846 2.46368H36.2362L41.8665 10.434C41.8069 10.4321 41.7502 10.4245 41.6896 10.4245H30.3449V13.26C30.3449 16.4795 26.9645 15.7833 25.9281 15.7833H22.1505C21.1139 15.7833 17.7337 16.4795 17.7337 13.26V10.4245H6.38785C6.26964 10.4245 6.15421 10.4359 6.03693 10.4415L11.3846 2.46368ZM46.1084 31.5364H1.8925V16.7584C1.8925 16.749 1.88773 16.7405 1.8868 16.7309H1.97093C1.97093 14.2964 3.95232 12.316 6.38774 12.316H15.8419V13.2598C15.8419 16.5163 18.318 17.6748 22.1504 17.6748H25.9279C29.7612 17.6748 32.2364 16.5163 32.2364 13.2598V12.316H41.6915C42.9087 12.316 44.0125 12.8106 44.8126 13.6098L44.8145 13.6117C45.6137 14.4109 46.1074 15.5137 46.1074 16.7309H46.114C46.114 16.7404 46.1083 16.7488 46.1083 16.7584C46.1084 16.7584 46.1084 31.5364 46.1084 31.5364Z" fill="#FFF"/>
                            </svg>
                            <p style={{color: '#FFFFFF', fontSize: '20px'}} className='font-Assistant-Regular my-3 ' >No Saved Item</p>
                        </div>
                    :
                        <>
                            {!loading ? 
                                <div className='w-full  h-96 justify-center items-center flex py-6 ' > 
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
                                    {product.length === 0 && product.length === undefined ? 
                                        <div className='w-full flex flex-col items-center h-96 justify-center' >
                                            <svg width="48" height="34" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M47.9944 16.7309H47.9992C47.9992 15.0644 47.3466 13.5503 46.2854 12.4209L46.2873 12.4191L37.0639 0.571991H10.5276L1.56997 12.6593L1.57381 12.6632C0.7264 13.6657 0.205249 14.9397 0.115424 16.33C0.048287 16.4604 0 16.6013 0 16.7584V32.4823C0 33.0053 0.423763 33.4281 0.945844 33.4281H47.0543C47.5773 33.4281 48.0001 33.0054 48.0001 32.4823V16.7584C48 16.749 47.9944 16.7404 47.9944 16.7309ZM11.3846 2.46368H36.2362L41.8665 10.434C41.8069 10.4321 41.7502 10.4245 41.6896 10.4245H30.3449V13.26C30.3449 16.4795 26.9645 15.7833 25.9281 15.7833H22.1505C21.1139 15.7833 17.7337 16.4795 17.7337 13.26V10.4245H6.38785C6.26964 10.4245 6.15421 10.4359 6.03693 10.4415L11.3846 2.46368ZM46.1084 31.5364H1.8925V16.7584C1.8925 16.749 1.88773 16.7405 1.8868 16.7309H1.97093C1.97093 14.2964 3.95232 12.316 6.38774 12.316H15.8419V13.2598C15.8419 16.5163 18.318 17.6748 22.1504 17.6748H25.9279C29.7612 17.6748 32.2364 16.5163 32.2364 13.2598V12.316H41.6915C42.9087 12.316 44.0125 12.8106 44.8126 13.6098L44.8145 13.6117C45.6137 14.4109 46.1074 15.5137 46.1074 16.7309H46.114C46.114 16.7404 46.1083 16.7488 46.1083 16.7584C46.1084 16.7584 46.1084 31.5364 46.1084 31.5364Z" fill="#FFF"/>
                                            </svg>
                                            <p style={{color: '#FFFFFF', fontSize: '20px'}} className='font-Assistant-Regular my-3 ' >No Saved Item</p>
                                        </div>
                                    : 
                                        <div className='w-full my-20' >
                                            {product.map((item: any)=> {
                                                return(
                                                    <SavedItemComponent product={item} /> 
                                                )
                                            })}
                                        </div>
                                    }
                                </>
                            }
                        </>
                    }
                </div>
            </div>
            <div className='w-full ' >
                <Footer />
            </div>
        </div>
    )
}
