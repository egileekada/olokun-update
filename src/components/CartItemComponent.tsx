import React from 'react' 
import { IUser, UserContext } from '../context/UserContext';

export default function CartItemComponent(props: any) {

    const [item, setItem] = React.useState(1)
    const [loading, setLoading] = React.useState(false); 
    const [total, setTotal] = React.useState(0); 
    const [save, setSave] = React.useState(false); 
    const [product, setProduct] = React.useState([] as any)
    const userContext: IUser = React.useContext(UserContext); 

    const RemoveItem =()=> {
        if(item <= 1){
            setItem(1)
        }else{
            setItem(item-1) 
        }
    } 


    React.useEffect(() => {
        setLoading(false) 

        fetch(`https://olokun-api.herokuapp.com/items/${props.item}`, {
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
            let clone = [...props.getTotal, data.price]
            props.total(clone)  
        })
        .catch((error) => {
            console.error('Error:', error);
        });   
    },[props.item])

    const DeleteHandler =(index: any)=> { 
        let clone = [...props.data] 
        clone.splice(clone.indexOf(index), 1)  
        localStorage. setItem("cart", JSON.stringify(clone))
        props.values(clone)
    } 

    const AddItem = async(save: any)=> {
        setSave(true)
        const request = await fetch(`https://olokun-api.herokuapp.com/saved-items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                item: save
            }),
        }); 

        console.log(request.status)
        DeleteHandler(save)
        setSave(false)
    }

    return (
        <div key={props.key} className=' w-full' >
            {!loading ? 
                <div className='w-full h-40 justify-center items-center flex py-6 ' > 
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
                <div className=' w-full justify-between flex lg:flex-row flex-col my-6 lg:items-center' >
                    <div className='w-auto lg:flex-row flex-col  flex' >
                        <div className='lg:w-40 h-40 border' >
                            <img src={product.imagesURLs[0]} className='w-full h-full object-cover object-top'  alt='' />
                        </div>
                        <div className='lg:ml-4 h-40 flex mt-4 lg:mt-0 flex-col' > 
                            <p style={{color: '#FFFFFF', fontSize: '18px'}} className='font-Assistant-Regular ' >{product.name}</p>
                            <p style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '16px'}} className='font-Assistant-Regular my-2 ' >Descriptions</p>
                            <p style={{color: '#FFFFFF', fontSize: '16px'}} className='font-Assistant-Regular ' >Unit Price: €{product.price}<span style={{color: "#F09000"}} className='ml-3' >Sub Total: €{(product.price*item).toFixed(2)}</span></p> 
                            <div className=' w-64 flex items-center border border-inactive mt-auto' >
                                <div onClick={()=> RemoveItem()} className= 'border-r border-inactive py-2 w-full flex justify-center cursor-pointer' >
                                    <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 1H7H1" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div className= 'border-r border-inactive py-2 w-full flex justify-center cursor-pointer' >
                                    <p style={{color: '#FFF', fontSize: '14px'}} className='font-Assistant-Medium' >{item}</p>
                                </div>
                                <div onClick={()=> setItem(item+1)} className= ' py-2 w-full flex justify-center cursor-pointer' >
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 7V13M7 1V7V1ZM7 7H13H7ZM7 7H1H7Z" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mt-6 lg:mt-0' >
                            <button onClick={()=> DeleteHandler(props.item)} className='lg:w-44 font-Assistant-Bold py-3 border border-white text-white' >REMOVE FROM CART</button>
                        {userContext.userData.address !== undefined ?
                            <button onClick={()=> AddItem(props.item)} style={{backgroundColor: 'rgba(255, 255, 255, 0.12)'}} className='lg:w-44 font-Assistant-Bold py-3 flex justify-center items-center mt-4 text-white' >
                                {!save ? 
                                        'MOVE TO SAVED ITEM'
                                    :   
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
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
                        :null}
                    </div>
                </div>
            }
        </div>
    )
}
