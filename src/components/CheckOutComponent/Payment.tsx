import React from 'react'
import CheckoutForm from './CheckoutForm';

export default function Payment(props: any) {

    const [radio, setRadio] = React.useState(0)

    const ClearButton =(index: any)=> {
        if(radio === index){
            setRadio(0)
        } else{
            setRadio(index)
        }
    }

    console.log('Product '+props.value)

    return (
        <div className='w-full mt-12' >
            <div className=' w-full border px-6 border-inactive' >
                <div className='w-full flex justify-between items-center py-4 border-b' > 
                    <p style={{color: '#9DA6B8', fontSize: '14px'}} className='font-Assistant-Medium ' >Contact <span style={{color: '#192F5D'}} className='ml-3' >brightma210@hotmail.com</span></p>
                    <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium cursor-pointer ' >Change</p>
                </div>
                <div className='w-full flex justify-between items-center py-4 border-b' > 
                <p style={{color: '#9DA6B8', fontSize: '14px'}} className='font-Assistant-Medium py-4' >Ship to<span style={{color: '#192F5D'}} className='ml-3' >Location, Apartment, City, Country, State, Phone</span></p>
                    <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium cursor-pointer ' >Change</p>
                </div>
                <div className='w-full flex justify-between items-center py-4' > 
                <p style={{color: '#9DA6B8', fontSize: '14px'}} className='font-Assistant-Medium py-4' >Shipping Method<span style={{color: '#192F5D'}} className='ml-3' >Method 2</span></p>
                    
                </div>
            </div>
            <p style={{color: '#192F5D', fontSize: '16px'}} className='font-Assistant-Medium cursor-pointer mt-6 ' >Payment</p>
            <p style={{color: '#838383', fontSize: '14px'}} className='font-Assistant-Medium cursor-pointer mt-3' >Transaction are secured and safe</p>
            <div className=' w-full border px-6 border-inactive mt-5' >
                <div className='w-full flex lg:flex-row flex-col  justify-between lg:items-center py-4 border-b' > 
                   <div className='flex items-center' >
                       {/* Radio Button */}
                        <div onClick={()=> ClearButton(1)} className='w-8 h-8 border rounded-full flex justify-center cursor-pointer items-center ' >
                            {radio === 1 ?
                                <div className='w-2 h-2 bg-olokun rounded-full' />
                            :null}
                        </div>
                        <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium ml-3 ' >Credit card</p>
                   </div>
                   <div className='flex lg:flex-row flex-col  lg:mt-0 mt-4 items-center ' >
                    <svg width="195" height="22" viewBox="0 0 195 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.1002 18.2883H17.9688L20.5528 2.7998H24.684L22.1002 18.2883Z" fill="#00579F"/>
                                <path d="M37.0766 3.17894C36.2617 2.86555 34.9692 2.51953 33.3711 2.51953C29.2912 2.51953 26.4182 4.62849 26.4006 7.64365C26.3667 9.86823 28.4576 11.1038 30.0214 11.8456C31.6198 12.6035 32.1631 13.0982 32.1631 13.7738C32.1468 14.8114 30.8715 15.2897 29.6821 15.2897C28.0326 15.2897 27.1488 15.0431 25.8058 14.4659L25.2618 14.2184L24.6836 17.6952C25.6526 18.1231 27.4378 18.5029 29.2912 18.5195C33.6261 18.5195 36.4483 16.4432 36.4817 13.23C36.4982 11.4669 35.3942 10.1159 33.0139 9.01195C31.5689 8.30327 30.684 7.82542 30.684 7.10032C30.701 6.44113 31.4325 5.76596 33.0636 5.76596C34.4067 5.73289 35.3935 6.04584 36.141 6.35901L36.5147 6.52348L37.0766 3.17894Z" fill="#00579F"/>
                                <path d="M42.5672 12.8013C42.9075 11.9114 44.2166 8.46769 44.2166 8.46769C44.1995 8.50076 44.5562 7.56147 44.7602 6.98485L45.0489 8.31943C45.0489 8.31943 45.8313 12.0269 46.0012 12.8013C45.3555 12.8013 43.3832 12.8013 42.5672 12.8013ZM47.6669 2.7998H44.4713C43.4858 2.7998 42.7371 3.07968 42.3119 4.08488L36.1753 18.288H40.5102C40.5102 18.288 41.2239 16.3764 41.3773 15.9647C41.8529 15.9647 46.0699 15.9647 46.6816 15.9647C46.8002 16.5085 47.1746 18.288 47.1746 18.288H50.9998L47.6669 2.7998Z" fill="#00579F"/>
                                <path d="M14.5178 2.7998L10.4719 13.3615L10.0297 11.2194C9.28174 8.74779 6.93581 6.06243 4.31787 4.7272L8.02383 18.2718H12.3926L18.8864 2.7998H14.5178Z" fill="#00579F"/>
                                <path d="M6.71495 2.7998H0.0680009L0 3.11275C5.18504 4.39805 8.61899 7.49621 10.0298 11.2201L8.58487 4.10174C8.34698 3.11253 7.61591 2.83244 6.71495 2.7998Z" fill="#FAA61A"/>
                                <g clip-path="url(#clip0_164_1481)">
                                    <path d="M88.5913 2.22754H79.4233V18.7459H88.5913V2.22754Z" fill="#FF5F00"/>
                                    <path d="M79.9766 10.5265C79.9766 7.28605 81.4783 4.28271 84.0074 2.22779C79.4234 -1.3288 72.8634 -0.538432 69.2278 3.96658C65.6712 8.55063 66.4616 15.1106 70.9666 18.7462C74.7603 21.7495 80.1347 21.7495 83.9284 18.7462C81.4783 16.7703 79.9766 13.767 79.9766 10.5265Z" fill="#EB001B"/>
                                    <path d="M101 10.5266C101 16.2962 96.3368 21.0383 90.4882 21.0383C88.1172 21.0383 85.8251 20.2479 84.0073 18.8253C88.5914 15.2687 89.3817 8.62979 85.7461 4.12478C85.1929 3.4925 84.6396 2.86021 84.0073 2.38599C88.5914 -1.1706 95.1513 -0.380228 98.7079 4.12478C100.21 5.86356 101 8.15556 101 10.5266Z" fill="#F79E1B"/>
                                </g>
                                <rect x="117" width="30" height="21" rx="4" fill="#1F72CD"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M122.378 7.4375L119.571 13.7784H122.931L123.348 12.7674H124.3L124.717 13.7784H128.415V13.0068L128.745 13.7784H130.658L130.988 12.9905V13.7784H138.68L139.615 12.7937L140.491 13.7784L144.442 13.7866L141.626 10.6257L144.442 7.4375H140.552L139.642 8.40405L138.794 7.4375H130.426L129.707 9.07414L128.972 7.4375H125.618V8.18287L125.245 7.4375H122.378ZM123.028 8.33792H124.666L126.528 12.6377V8.33792H128.322L129.76 11.4209L131.086 8.33792H132.871V12.8879H131.785L131.776 9.32257L130.192 12.8879H129.22L127.628 9.32257V12.8879H125.393L124.969 11.8679H122.68L122.257 12.887H121.06L123.028 8.33792ZM138.282 8.33792H133.865V12.8852H138.214L139.615 11.3782L140.966 12.8852H142.379L140.326 10.6248L142.379 8.33792H141.028L139.633 9.82767L138.282 8.33792ZM123.825 9.10775L123.071 10.9249H124.578L123.825 9.10775ZM134.956 10.1106V9.27999V9.2792H137.712L138.915 10.6075L137.659 11.9432H134.956V11.0364H137.365V10.1106H134.956Z" fill="white"/>
                                <path d="M182.189 10.7058C182.189 16.0661 177.893 20.4115 172.594 20.4115C167.296 20.4115 163 16.0661 163 10.7058C163 5.34542 167.296 1 172.594 1C177.893 1 182.189 5.34542 182.189 10.7058Z" fill="#ED0006"/>
                                <path d="M194.636 10.7058C194.636 16.0661 190.34 20.4115 185.041 20.4115C179.742 20.4115 175.447 16.0661 175.447 10.7058C175.447 5.34542 179.742 1 185.041 1C190.34 1 194.636 5.34542 194.636 10.7058Z" fill="#0099DF"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M178.818 18.0926C180.881 16.3124 182.189 13.6635 182.189 10.7055C182.189 7.7475 180.881 5.09857 178.818 3.31836C176.755 5.09857 175.447 7.7475 175.447 10.7055C175.447 13.6635 176.755 16.3124 178.818 18.0926Z" fill="#6C6BBD"/>
                            <defs>
                                <clipPath id="clip0_164_1481">
                                    <rect width="34" height="22" fill="white" transform="translate(67)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p style={{color: '#192F5D', fontSize: '12px'}} className='font-Assistant-Medium ml-2 ' >and others...</p>
                   </div>
                </div>
                {radio === 1 ?
                    <div className='w-full py-4 pb-8 border-b' >  
                    
                        {/* <Input size='lg' fontSize='sm' className='mt-4' placeholder='Card number' /> 
                        <Input size='lg' fontSize='sm' className='mt-4' placeholder='Name on card' /> 
                        <div className='flex items-center w-full mt-4' >
                            <Input size='lg' fontSize='sm' className='mr-2' placeholder='Expiration date (MM/YY)' />
                            <Input size='lg' fontSize='sm' className='ml-2' placeholder='Security code' />
                        </div> */}
                        <CheckoutForm value={props.value} /> 
                    </div>
                :null}
                <div className='w-full flex justify-between items-center py-4' > 
                    <div className='flex items-center' >
                        {/* Radio Button */}
                            <div onClick={()=> ClearButton(2)} className='w-8 h-8 border rounded-full flex justify-center cursor-pointer items-center ' >
                                {radio === 2 ?
                                    <div className='w-2 h-2 bg-olokun rounded-full' />
                                :null}
                            </div>
                            <svg className='ml-3'  width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.8557 19.3221L5.19104 17.1206L4.44403 17.1026H0.876953L3.35595 0.856371C3.36367 0.807176 3.38864 0.761508 3.4251 0.72902C3.46174 0.696533 3.50844 0.678711 3.55729 0.678711H9.57194C11.5689 0.678711 12.9468 1.1081 13.6662 1.95575C14.0035 2.3534 14.2183 2.76905 14.3223 3.22629C14.4313 3.70618 14.4331 4.27945 14.3268 4.97876L14.3191 5.02963V5.47777L14.6564 5.6753C14.9403 5.83105 15.1661 6.00927 15.3393 6.21329C15.6277 6.55339 15.8143 6.98557 15.8932 7.49776C15.9747 8.02461 15.9478 8.65171 15.8143 9.36161C15.6604 10.1781 15.4116 10.8893 15.0756 11.4711C14.7667 12.0072 14.3729 12.452 13.9054 12.7966C13.4591 13.124 12.9289 13.3726 12.3293 13.5317C11.7483 13.688 11.0859 13.7669 10.3594 13.7669H9.89129C9.55667 13.7669 9.23157 13.8915 8.97635 14.1148C8.7204 14.3428 8.55121 14.6543 8.4993 14.995L8.46391 15.1932L7.87138 19.0737L7.84461 19.2161C7.83743 19.2612 7.82522 19.2837 7.80725 19.2989C7.79127 19.3128 7.76828 19.3221 7.74583 19.3221H4.8557Z" fill="#28356A"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9768 5.08105C14.959 5.19968 14.9384 5.32091 14.9154 5.44547C14.1222 9.65474 11.4085 11.1089 7.94269 11.1089H6.178C5.75412 11.1089 5.39687 11.4269 5.33096 11.8591L4.17157 19.4602C4.12864 19.7441 4.34022 19.9997 4.61718 19.9997H7.74709C8.11763 19.9997 8.43249 19.7214 8.49086 19.3436L8.52157 19.1793L9.11088 15.3141L9.14878 15.1021C9.20643 14.723 9.52201 14.4445 9.89255 14.4445H10.3606C13.393 14.4445 15.7669 13.1721 16.4608 9.48971C16.7505 7.95147 16.6005 6.667 15.8336 5.76366C15.6015 5.49133 15.3136 5.26521 14.9768 5.08105Z" fill="#298FC2"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1468 4.73956C14.0256 4.70299 13.9005 4.66994 13.7723 4.64005C13.6433 4.61091 13.5113 4.5851 13.3754 4.56245C12.8996 4.483 12.3782 4.44531 11.8197 4.44531H7.10549C6.98928 4.44531 6.879 4.47242 6.78039 4.52143C6.56288 4.62947 6.40141 4.84222 6.36225 5.10267L5.3593 11.6681L5.33057 11.8595C5.39648 11.4273 5.75373 11.1093 6.17761 11.1093H7.94229C11.4081 11.1093 14.1218 9.65446 14.915 5.44593C14.9387 5.32136 14.9586 5.20014 14.9764 5.08151C14.7758 4.97142 14.5585 4.8773 14.3244 4.79711C14.2666 4.77724 14.207 4.75812 14.1468 4.73956Z" fill="#22284F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.36201 5.10259C6.40117 4.84213 6.56264 4.62938 6.78015 4.52208C6.87947 4.47289 6.98903 4.44578 7.10524 4.44578H11.8195C12.3779 4.44578 12.8993 4.48365 13.3751 4.56311C13.5111 4.58557 13.6431 4.61156 13.7721 4.64071C13.9003 4.67041 14.0253 4.70364 14.1465 4.74003C14.2067 4.75859 14.2663 4.7779 14.3247 4.79702C14.5588 4.87722 14.7763 4.97208 14.9769 5.08142C15.2129 3.52592 14.9749 2.46683 14.1613 1.50779C13.2641 0.451855 11.6451 0 9.57328 0H3.55846C3.13529 0 2.77427 0.318007 2.7089 0.750926L0.203677 17.1642C0.154284 17.4889 0.39658 17.7818 0.713414 17.7818H4.4267L6.36201 5.10259Z" fill="#28356A"/>
                            </svg>
                            <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium ml-3 ' >Paypal</p>
                    </div>
                </div>
                {radio === 2 ?
                    <div className='w-full py-8 flex flex-col justify-center items-center pb-8 border-t' >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.4219 33.6719C37.4219 35.7428 35.7431 37.4219 33.6719 37.4219H6.17188C4.10095 37.4219 2.42188 35.7431 2.42188 33.6719V6.17188C2.42188 4.10095 4.10065 2.42188 6.17188 2.42188H24.9219V-0.078125H6.17188C2.72186 -0.0741577 -0.0741577 2.72186 -0.078125 6.17188V33.6719C-0.0741577 37.1219 2.72186 39.9179 6.17188 39.9219H33.6719C37.1219 39.9179 39.9179 37.1219 39.9219 33.6719V14.9219H37.4219V33.6719Z" fill="#675E82"/>
                            <path d="M37.4219 -0.078125H28.6719V2.42188H35.6543L17.7881 20.2881L19.5557 22.0557L37.4219 4.18945V11.1719H39.9219V2.42188C39.9219 1.04126 38.8025 -0.078125 37.4219 -0.078125Z" fill="#675E82"/>
                        </svg>
                            <p style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium lg:w-96 text-center mt-3 ' >After clicking “Complete order”, you will be redirected to PayPal to complete your purchase securely.</p>
                    </div>
                :null}
            </div>
            <div className='flex lg:flex-row flex-col items-center mt-8 justify-between' >
                <button onClick={()=> props.close(true)} style={{backgroundColor: '#192F5D'}} className=' w-80 text-white px-8 rounded-md py-2 font-Assistant-Bold '>COMPLETE ORDER</button>
                <p onClick={()=> props.close(0)} style={{color: '#192F5D', fontSize: '14px'}} className='font-Assistant-Medium cursor-pointer lg:my-0 my-6 ' >Return to information</p>
            </div>
        </div>
    )
}
