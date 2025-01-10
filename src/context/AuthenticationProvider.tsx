import { createContext, PropsWithChildren, useState } from "react";

type Context = {
    isAuthenticated: boolean
    login: () => void
    logout: () => void
}

const AuthenticationContext = createContext<Context>({} as Context)

const AuthenticationProvider = ({children} : PropsWithChildren) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = () => {
        // TODO login function
    }

    const logout = () => {
        // TODO logout function
    }

    return (
        <AuthenticationContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export { AuthenticationProvider, AuthenticationContext }