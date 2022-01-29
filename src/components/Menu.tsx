import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IUser, UserContext } from '../context/UserContext';

export default function Menu(props: any) {
 
    const Array = [ 'Home', 'New Arrivals', 'Trending', 'Collections', 'Profile', 'Saved Item' ] 
    const userContext: IUser = React.useContext(UserContext);
    const navigate = useNavigate();  

    console.log(localStorage.getItem('index'))
    const ClickHandler =(index: any)=> {
        localStorage.setItem('index', index)
        if(index === 'Profile'){
            navigate('/profile')
        } else if(index === 'Saved Item'){
            navigate('/saveditem')
        }else{ 
            userContext.setTab(index) 
            navigate('/')
        }
        props.close();
    }  
 
    return (
        <div className='w-full h-screen pt-8 flex flex-col bg-olokun items-center overflow-y-auto' > 
            <div className='w-full flex pt-4 pb-8' >
                <div className='w-full flex flex-1' />
                <p onClick={()=> props.close()} className='font-Inter-Bold text-base cursor-pointer mr-8' style={{color:'#EB5757'}} >Close</p>
            </div> 
            <div className='w-full mt-6' >
                {Array.map((item: any, index: any) => {
                    return( 
                        <div onClick={()=> ClickHandler(item)} key={index} className='w-full cursor-pointer my-4 px-6' > 
                            <div className='w-full h-full flex flex-row items-center ' >  
                                <p style={item === userContext.tab ? {color: '#F09000'} : {color: '#FFF'}} className=' font-Montserrat-Medium lg:text-sm' >{item}</p>
                            </div>
                        </div>
                    )
                })}
            </div> 
        </div>
    )
}
