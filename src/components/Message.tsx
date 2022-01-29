import React from 'react';
import { useNavigate } from 'react-router';
import Logo from '../assets/images/logo.png' 

export default function Message() {

    const navigate = useNavigate();

    return (
        <div  style={{ backgroundColor: '#02081B'}} className='w-full py-8 px-12 text-white'>
            <div className='w-full flex' > 
                <div  onClick={()=> navigate('/')} className='w-auto cursor-pointer mx-auto' >
                    <img src={Logo} className='w-56 ' alt='logo' />
                </div>
            </div>

            <p style={{fontSize: '35px'}} className='font-Assistant-Regular text-center ' >Hi <span className='font-Assistant-Bold'>Bright,</span></p>
            <p style={{fontSize: '35px'}} className='font-Assistant-Regular text-center mt-2 ' >You Order has been placed, it will <br/>be delivered soon!</p>
            <div style={{ backgroundColor: '#29303F'}} className='w-full mt-16 flex flex-col items-center justify-center px-24 py-12'  >
                <div className='w-auto pb-14 border-b border-white' > 
                    <div style={{border: '1px solid #FFC350'}} className=' w-32 h-32 flex mx-auto justify-center items-center rounded-full' >
                        <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_633_11)">
                                <path d="M42.7566 0.284269L3.35095 19.3077C2.85681 19.5463 2.54297 20.0465 2.54297 20.5951V67.4049C2.54297 67.9535 2.85698 68.4537 3.35095 68.6922L42.7566 87.7157C43.5419 88.0949 44.4573 88.0949 45.2426 87.7157L84.6482 68.6922C85.1423 68.4537 85.4562 67.9535 85.4562 67.4049V20.5951C85.4562 20.0465 85.1421 19.5463 84.6482 19.3077L45.2426 0.284269C44.4573 -0.0947156 43.5419 -0.0947156 42.7566 0.284269Z" fill="#FFE17D"/>
                                <path d="M2.78067 19.8125C2.63045 20.0413 2.54297 20.3106 2.54297 20.5951V67.4049C2.54297 67.9535 2.85698 68.4537 3.35095 68.6922L42.7566 87.7155C43.1491 87.9051 43.5743 87.9998 43.9996 87.9998V39.7114L2.78067 19.8125Z" fill="#FFC350"/>
                                <path d="M85.2189 19.8125C85.3691 20.0413 85.4566 20.3106 85.4566 20.5951V67.4049C85.4566 67.9535 85.1426 68.4537 84.6486 68.6922L45.243 87.7155C44.8504 87.9051 44.4252 88 44 88V39.7114L85.2189 19.8125Z" fill="#FFD164"/>
                                <path d="M14.3364 64.9098C14.1285 64.9098 13.9162 64.8637 13.7167 64.7675L7.63279 61.8303C6.92089 61.4869 6.62354 60.6325 6.96695 59.922C7.30898 59.2114 8.16612 58.9155 8.87528 59.2561L14.9591 62.1935C15.671 62.5369 15.9684 63.3913 15.625 64.1018C15.3794 64.6124 14.8684 64.9098 14.3364 64.9098Z" fill="#FFE17D"/>
                                <path d="M19.9353 61.2649C19.7273 61.2649 19.515 61.2188 19.3155 61.1225L7.64037 55.4867C6.92984 55.1433 6.63112 54.289 6.97453 53.5784C7.31656 52.8693 8.17507 52.5719 8.88285 52.9126L20.5578 58.5484C21.2683 58.8918 21.5671 59.7462 21.2236 60.4567C20.9782 60.9673 20.4672 61.2649 19.9353 61.2649Z" fill="#FFF6D8"/>
                                <path d="M71.25 26.5329L29.8862 6.55016L18.9824 11.8353L60.439 31.849L71.25 26.5329Z" fill="#FF8087"/>
                                <path d="M60.4395 31.849V47.3533C60.4395 47.8802 60.9903 48.2261 61.465 47.997L70.4424 43.6631C70.9365 43.4246 71.2504 42.9244 71.2504 42.3758V26.533L60.4395 31.849Z" fill="#E6646E"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_633_11">
                                    <rect width="88" height="88" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p style={{fontSize: '18px'}} className='font-Assistant-Regular mt-4 text-center ' >You Order has been placed, it will be delivered soon!</p>
                </div>
                <p style={{fontSize: '18px'}} className='font-Assistant-Regular lg:w-96 mt-8 text-center mx-auto ' >You can access olokun website online on any devcie by going to http//shop.olukun.com</p>
                <button style={{border: '1px solid #192F5D', color: '#192F5D'}} className=' mx-auto px-8 bg-white mt-8 rounded-md py-2 font-Assistant-Bold '>View Orders</button>
            </div>
            <div className='relative grid grid-cols-3 w-full lg:w-56 lg:gap-6 mx-auto mt-16 border-2 border-white py-12 px-8' >
                <p style={{fontSize: '16px' }} className='font-Assistant-Medium absolute z-20 -top-3 bg-olokun  ml-5 px-5 ' >CONNECT</p>
                <svg className='cursor-pointer' width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5628 0.00458002L8.78554 0C5.66544 0 3.64903 2.12509 3.64903 5.41423V7.91055H0.856622C0.615322 7.91055 0.419922 8.1115 0.419922 8.35937V11.9763C0.419922 12.2241 0.615552 12.4249 0.856622 12.4249H3.64903V21.5514C3.64903 21.7993 3.84443 22 4.08574 22H7.72904C7.97034 22 8.16574 21.799 8.16574 21.5514V12.4249H11.4307C11.672 12.4249 11.8674 12.2241 11.8674 11.9763L11.8687 8.35937C11.8687 8.24036 11.8226 8.12638 11.7408 8.04215C11.6591 7.95793 11.5477 7.91055 11.4318 7.91055H8.16574V5.79439C8.16574 4.77727 8.40164 4.26094 9.69154 4.26094L11.5624 4.26025C11.8034 4.26025 11.9988 4.0593 11.9988 3.81166V0.45317C11.9988 0.20576 11.8037 0.00504002 11.5628 0.00458002Z" fill="white"/>
                </svg>
                <svg className='cursor-pointer' width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5 2.77258C20.7271 3.10051 19.8978 3.32291 19.0264 3.42221C19.9161 2.91205 20.5972 2.10287 20.92 1.14164C20.0854 1.61407 19.1642 1.95712 18.1826 2.14309C17.3966 1.34019 16.2785 0.840088 15.0384 0.840088C12.6593 0.840088 10.7303 2.68715 10.7303 4.96394C10.7303 5.28685 10.7683 5.60223 10.8418 5.90382C7.26201 5.73165 4.08768 4.08941 1.96314 1.59397C1.59176 2.20213 1.38049 2.91077 1.38049 3.66721C1.38049 5.09839 2.14161 6.36117 3.2964 7.09999C2.5904 7.07739 1.92639 6.8914 1.34508 6.58229V6.63381C1.34508 8.63169 2.83056 10.299 4.80024 10.6785C4.43936 10.7715 4.05882 10.823 3.66514 10.823C3.38696 10.823 3.11794 10.7966 2.85417 10.7464C3.40267 12.3861 4.99315 13.5785 6.87756 13.6112C5.40388 14.717 3.54573 15.3741 1.52749 15.3741C1.17976 15.3741 0.83724 15.354 0.5 15.3176C2.40671 16.4899 4.67036 17.1734 7.10327 17.1734C15.028 17.1734 19.3597 10.8884 19.3597 5.43766L19.3453 4.90365C20.1917 4.32561 20.9239 3.59936 21.5 2.77258Z" fill="white"/>
                </svg> 
                <svg className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 7.80863 2 5.71294 3.05041 4.26718C3.38964 3.80026 3.80026 3.38964 4.26718 3.05041C5.71294 2 7.80863 2 12 2C16.1914 2 18.2871 2 19.7328 3.05041C20.1997 3.38964 20.6104 3.80026 20.9496 4.26718C22 5.71294 22 7.80863 22 12C22 16.1914 22 18.2871 20.9496 19.7328C20.6104 20.1997 20.1997 20.6104 19.7328 20.9496C18.2871 22 16.1914 22 12 22C7.80863 22 5.71294 22 4.26718 20.9496C3.80026 20.6104 3.38964 20.1997 3.05041 19.7328C2 18.2871 2 16.1914 2 12ZM12 6.70588C9.07632 6.70588 6.70588 9.07632 6.70588 12C6.70588 14.9237 9.07632 17.2941 12 17.2941C14.9237 17.2941 17.2941 14.9237 17.2941 12C17.2941 9.07632 14.9237 6.70588 12 6.70588ZM12 15.3088C10.1762 15.3088 8.69118 13.8238 8.69118 12C8.69118 10.1749 10.1762 8.69118 12 8.69118C13.8238 8.69118 15.3088 10.1749 15.3088 12C15.3088 13.8238 13.8238 15.3088 12 15.3088ZM18.3966 6.30883C18.3966 6.69844 18.0808 7.01427 17.6912 7.01427C17.3016 7.01427 16.9857 6.69844 16.9857 6.30883C16.9857 5.91923 17.3016 5.60339 17.6912 5.60339C18.0808 5.60339 18.3966 5.91923 18.3966 6.30883Z" fill="white"/>
                </svg>
            </div>
            <div className='w-full flex flex-col justify-center items-center my-8' >
                <p style={{fontSize: '18px'}} className='font-Assistant-SemiBold text-center mx-auto ' >Olokun</p>
                <p style={{fontSize: '14px'}} className='font-Assistant-Regular mt-6 text-center mx-auto ' >CopyrightⒸ2021, </p>
                <p style={{fontSize: '16px'}} className='font-Assistant-SemiBold text-center mx-auto mt-4 ' >Olokun Stores</p>
                <p style={{fontSize: '14px'}} className='font-Assistant-SemiBold text-center mx-auto mt-2 ' >A better store for all your jewelleries</p>
            </div>
        </div>
    );
}
