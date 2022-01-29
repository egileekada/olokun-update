import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IUser, UserContext } from '../../context/UserContext';

export default function Information(props: any) {

    const navigate = useNavigate(); 
    const userContext: IUser = React.useContext(UserContext); 
    const [country, setCountry] = React.useState([] as any)
    const [selectedcountry, setSelectedCountry] = React.useState('')
    const [loading, setLoading] = React.useState(true)
    const [state, setState] = React.useState([] as any)

    const ClickHandler =()=> {
        localStorage.setItem('savelength', '')
        navigate('/login')
        localStorage.removeItem('token')
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
                setLoading(false)
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
        <div className='w-full' >
            <div className=' w-full justify-between flex mt-12' >
                <p style={{color: '#192F5D', fontSize: '16px'}} className='font-Assistant-Medium' >Contact Information</p>
                {userContext.userData._id === undefined ? 
                    <p onClick={()=> ClickHandler()} style={{color: '#192F5D', fontSize: '16px'}} className='font-Assistant-Medium cursor-pointer' >Already have an account? Log in</p>
                :null}
            </div>
            <Input size='lg' fontSize='sm' className='mt-4' placeholder='Email address' />
            <p style={{color: '#192F5D', fontSize: '16px'}} className='font-Assistant-Medium mt-8' >Shipping address</p>
            <div className='flex items-center w-full mt-4' >
                <Input size='lg' fontSize='sm' className='mr-2' placeholder='First name' />
                <Input size='lg' fontSize='sm' className='ml-2' placeholder='Last name' />
            </div>
            <Input size='lg' fontSize='sm' className='mt-4' placeholder='Address' />
            <Input size='lg' fontSize='sm' className='mt-4' placeholder='Apartment, suite, etc. (Opitional)' />
            <Input size='lg' fontSize='sm' className='mt-4' placeholder='City' />
            <div className='flex items-center w-full mt-4' >
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
                    <Select size='lg' fontSize='sm' placeholder='State'>
                        {!loading ?
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
                </div>
                <div className=' w-full pl-2' >
                    <Input size='lg' fontSize='sm' placeholder='ZIP code' />
                </div>
            </div>
            <Input size='lg' fontSize='sm' className='mt-4' placeholder='Phone' />
            {userContext.userData._id !== undefined ? 
                <button onClick={()=> props.close(1)} style={{backgroundColor: '#192F5D'}} className=' w-80 text-white px-8 mt-8 rounded-md py-2 font-Assistant-Bold '>CONTINUE TO SHIPPING</button>
            :null}
        </div>
    )
}
