import React, { createContext, useState } from 'react';

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const {Provider} = UserContext;
    const [user, setUser] = useState({});

    const value = {user, setUser}

    return (
        <Provider value={value}>{children}</Provider>
    );
}