import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <DataContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
