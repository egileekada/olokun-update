import React from 'react'
import Desktop from '../../assets/images/Desktop.png'
import Mobile from '../../assets/images/mobile.png' 
import ShopNow from '../HomeTabComponent/ShopNow'
import AllProductCollection from '../HomeTabComponent/AllProductCollection'

export default function HomeTabs() {

    return (
        <div className='w-screen overflow-x-hidden' >
            <img className='w-full hidden lg:flex' src={Desktop} alt='desktop' />
            <img className='w-full lg:hidden' src={Mobile} alt='desktop' />
            <div className='w-full my-14 mt-10 lg:mt-20' >
                <ShopNow />
            </div>
            <div className='w-full mb-14'>
                <AllProductCollection />
            </div>
        </div>
    )
}
