import React from 'react'

export default function Shipping(props: any) {

    const [radio, setRadio] = React.useState(0)

    const ClearButton =(index: any)=> {
        if(radio === index){
            setRadio(0)
        } else{
            setRadio(index)
        }
    }

    return (
        <div className='w-full mt-12' >
            <div className=' w-full border px-6 border-inactive' >
                <div className='w-full flex justify-between items-center py-4 border-b' > 
                    <p style={{color: '#9DA6B8', fontSize: '14px'}} className='font-Assistant-Medium ' >Contact <span style={{color: '#192F5D'}} className='ml-3' >brightma210@hotmail.com</span></p>
                    <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium cursor-pointer ' >Change</p>
                </div>
                <div className='w-full flex justify-between items-center py-4' > 
                <p style={{color: '#9DA6B8', fontSize: '14px'}} className='font-Assistant-Medium py-4' >Ship to<span style={{color: '#192F5D'}} className='ml-3' >Location, Apartment, City, Country, State, Phone</span></p>
                    <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium cursor-pointer ' >Change</p>
                </div>
            </div>
            <p style={{color: '#192F5D', fontSize: '16px'}} className='font-Assistant-Medium mt-6 ' >Shipping Method</p>
            <div className=' w-full border mt-3 px-6 py-3 border-inactive' >
                <div className='flex w-full justify-between py-2 items-center' >
                    <div className='flex items-center' > 
                       {/* Radio Button */}
                        <div onClick={()=> ClearButton(1)} className='w-8 h-8 border rounded-full flex justify-center cursor-pointer items-center ' >
                            {radio === 1 ?
                                <div className='w-2 h-2 bg-olokun rounded-full' />
                            :null}
                        </div>
                        <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium ml-4' >Method 1</p>
                    </div>
                        <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium' >$3</p>
                </div>
                <div className='flex w-full justify-between py-2 items-center' >
                    <div className='flex items-center' >
                       {/* Radio Button */}
                        <div onClick={()=> ClearButton(2)} className='w-8 h-8 border rounded-full flex justify-center cursor-pointer items-center ' >
                            {radio === 2 ?
                                <div className='w-2 h-2 bg-olokun rounded-full' />
                            :null}
                        </div>
                        <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium ml-4' >Method 1</p>
                    </div>
                        <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium' >$35</p>
                </div>
            </div>
            <button onClick={()=> props.close(2)} style={{backgroundColor: '#192F5D'}} className=' w-80 text-white px-8 mt-8 rounded-md py-2 font-Assistant-Bold '>CONTINUE TO PAYMENT</button>
        </div>
    )
}
