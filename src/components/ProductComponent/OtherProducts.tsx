import React from 'react' 
import SlideShowCollection from '../SlideShowCollection';

export default function OtherProducts(props: any) { 
 
    const [items, setItem] = React.useState([] as any) 
    const [loading, setLoading] = React.useState(false);  

    React.useEffect(() => {
        fetch(`https://olokun-api.herokuapp.com/items`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => { 
            setItem(data)  
            setLoading(true) 
        })
        .catch((error) => {
            console.error('Error:', error);
        });  
    },[props.array])

    const loader = ['1', '2', '3', '4']
    return (
        <div className='pb-8 w-full' >  
            <div className='w-full flex flex-col items-center my-14 mt-20'>
                <p style={{fontSize: '32px', color: '#192F5D'}} className='font-Assistant-Bold mt-1 text-center' >{props.title}</p>

                {!loading ?  
                    <div className='w-full px-4 h-auto lg:h-203px lg:px-10 grid grid-cols-2 gap-1 lg:grid-cols-4 my-10' > 
                        {loader.map((item: any)=> {
                            return(
                                <svg key={item} className='mx-auto my-auto' xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                    <g transform="translate(80,50)">
                                        <g transform="rotate(0)">
                                            <circle cx="0" cy="0" r="6" fill="#02081b" fill-opacity="1">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.4861111111111111s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.4861111111111111s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(71.21320343559643,71.21320343559643)">
                                        <g transform="rotate(45)">
                                            <circle cx="0" cy="0" r="6" fill="#02081b" fill-opacity="0.875">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.41666666666666663s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.41666666666666663s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(50,80)">
                                        <g transform="rotate(90)">
                                            <circle cx="0" cy="0" r="6" fill="#02081b" fill-opacity="0.75">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.3472222222222222s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.3472222222222222s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(28.786796564403577,71.21320343559643)">
                                        <g transform="rotate(135)">
                                            <circle cx="0" cy="0" r="6" fill="#02081b" fill-opacity="0.625">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.2777777777777778s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.2777777777777778s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(20,50.00000000000001)">
                                        <g transform="rotate(180)">
                                            <circle cx="0" cy="0" r="6" fill="#02081b" fill-opacity="0.5">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.20833333333333331s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.20833333333333331s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(28.78679656440357,28.786796564403577)">
                                        <g transform="rotate(225)">
                                            <circle cx="0" cy="0" r="6" fill="#02081b" fill-opacity="0.375">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.1388888888888889s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.1388888888888889s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(49.99999999999999,20)">
                                        <g transform="rotate(270)">
                                            <circle cx="0" cy="0" r="6" fill="#02081b" fill-opacity="0.25">
                                                <animateTransform attributeName="transform" type="scale" begin="-0.06944444444444445s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="-0.06944444444444445s"></animate>
                                            </circle>
                                        </g>
                                    </g>
                                    <g transform="translate(71.21320343559643,28.78679656440357)">
                                        <g transform="rotate(315)">
                                            <circle cx="0" cy="0" r="6" fill="#02081b" fill-opacity="0.125">
                                                <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite"></animateTransform>
                                                <animate attributeName="fill-opacity" keyTimes="0;1" dur="0.5555555555555556s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
                                            </circle>
                                        </g>
                                    </g> 
                                </svg>
                            )
                        })}
                    </div>
                :  
                    <SlideShowCollection item={items}  option={true} array='/new-arrivals?limit=4' /> 
                                    
                }
            </div>
        </div>
    )
}
