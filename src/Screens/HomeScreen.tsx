import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Footer from '../components/Footer'; 
import SearchCollection from '../components/SearchCollection';
import HomeTabs from '../components/Tabs/HomeTabs';
import NewArrivals from '../components/Tabs/NewArrivalsTab';
import { IUser, UserContext } from '../context/UserContext';  

export default function HomeScreen() {
 
    const userContext: IUser = React.useContext(UserContext); 
    const navigate = useNavigate(); 

    React.useEffect(() => {
        if(userContext.tab === 'Profile'){
            navigate('/profile')
        } else if(userContext.tab === 'Checkout'){
            navigate('/checkout')
        } else if(userContext.tab === 'Saved Item'){
            navigate('/saveditem')
        }
    }, [])

    return (
        <div className='w-full h-full overflow-x-hidden '> 
            {userContext.value === '' ?
                <> 
                    <div className='w-full hidden lg:flex items-center font-Assistant-Medium justify-center border-t border-b pt-3' style={{borderColor: '#EDEDED', fontSize:'16px', backgroundColor: '#02081B', color: '#A1AFCE'}} >
                        <div onClick={()=> userContext.setTab('Home')} className='py-4 cursor-pointer mx-7' style={userContext.tab === 'Home' ? {borderBottomWidth: '4px', borderColor: '#F09000'}: {borderBottomWidth: '4px', borderColor: '#02081B'}}>
                            <p style={userContext.tab === 'Home' ? {color: '#F09000'}: { }}>Home</p>
                        </div>
                        <div onClick={()=> userContext.setTab('New Arrivals')} className='py-4 cursor-pointer mx-7' style={userContext.tab === 'New Arrivals' ? {borderBottomWidth: '4px', borderColor: '#F09000'}: {borderBottomWidth: '4px', borderColor: '#02081B'}}>
                            <p style={userContext.tab === 'New Arrivals' ? {color: '#F09000'}: { }}>New Arrivals</p>
                        </div>
                        <div onClick={()=> userContext.setTab('Trending')} className='py-4 cursor-pointer mx-7' style={userContext.tab === 'Trending' ? {borderBottomWidth: '4px', borderColor: '#F09000'}: {borderBottomWidth: '4px', borderColor: '#02081B'}}>
                            <p style={userContext.tab === 'Trending' ? {color: '#F09000'}: { }}>Trending</p>
                        </div>
                        <div onClick={()=> userContext.setTab('Collections')} className='py-4 cursor-pointer mx-7' style={userContext.tab === 'Collections' ? {borderBottomWidth: '4px', borderColor: '#F09000'}: {borderBottomWidth: '4px', borderColor: '#02081B'}}>
                            <p style={userContext.tab === 'Collections' ? {color: '#F09000'}: { }}>Collections</p>
                        </div>
                    </div>
                    <div className='w-full' >
                        {userContext.tab === 'Home' ? 
                            <HomeTabs />
                                :userContext.tab === 'New Arrivals' ? 
                                    <NewArrivals />
                        :null}
                    </div>
                </>
            : 
                <div className='w-full flex flex-col items-center my-14 mt-20'>
                    <p style={{fontSize: '32px', color: '#192F5D'}} className='font-Assistant-Bold mt-1 text-center' >You Searched For {userContext.value}</p>
                    <SearchCollection collection={true} option={true} /> 
                </div> 
            }
            <div className='w-full' >
                <Footer />
            </div>
        </div>
    );
}
