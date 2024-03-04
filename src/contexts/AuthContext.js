import {useState, useEffect, createContext} from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(()=>{
        //
    }, []);

    const login = async (accessToken) => {
        //
    };

    const data = {
        accessToken: token,
        user,
        login,
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}