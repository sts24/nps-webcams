import { createContext, useContext, useState } from 'react';

export const ParksData = createContext({});

export const useParksData = () => useContext(ParksData);

export const ParksDataProvider = ({ children }) => {
    const [data, setData] = useState({})
  
    return <ParksData.Provider value={{ data, setData }}>{children}</ParksData.Provider>
}