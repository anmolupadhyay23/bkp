import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
    const [auth,setAuth] = useState({
        userId: null,
        token: "",
        name: "",
        email: "",
        address: "",
        phone: null,
    });

    // Used to maintain state
    useEffect(() => {
        const data = localStorage.getItem('auth');

        if(data){
            const parseData = JSON.parse(data);
            setAuth( prevAuth => ({
                ...prevAuth,
                userId: parseData._id,
                token: parseData.token,
                name: parseData.name,
                email: parseData.email,
                address: parseData.address,
                phone: parseData.phone
            }))
        }

    }, []);

    return (
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider};