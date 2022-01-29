import React from 'react'; 

export interface IUser {
    userData: any, 
    setUserData: Function,
    token: any, 
    setToken: Function, 
    tab: any, 
    setTab: Function, 
    value: any, 
    setValue: Function,   
    cartData: any, 
    setCartData: Function, 
    address: any, 
    setAddress: Function, 
}

export const UserContext = React.createContext({} as IUser);

const UserContextWrapper = (props: any) => {

    const [token, setToken] = React.useState('');
    const [value, setValue] = React.useState('');  
    const [tab, setTab] = React.useState('');  
    const [address, setAddress] = React.useState('');  
    const [userData, setUserData] = React.useState({} as any); 
    const [cartData, setCartData] = React.useState([] as any);  
    
    return (
        <UserContext.Provider value={{userData, setUserData, token, setToken, value, setValue, cartData, setCartData, tab, setTab, address, setAddress }}>
            {
                props.children
            }
        </UserContext.Provider>
    )
}

export default UserContextWrapper;