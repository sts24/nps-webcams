import { createContext, useState, useContext, useEffect } from 'react';

const ParksData = createContext({});

async function getParksData (){
    const npsapi = await fetch('https://developer.nps.gov/api/v1/webcams?api_key=BxxA9qGfk0o1ts6bdhcqbuUHef6CAfflNrNPU3TD')
    const npsjson = await npsapi.json()

    return npsjson
}

export function ParksDataProvider({ children }) {
    const [parkdata, setData] = useState({})

    useEffect(() => {
        getParksData().then((value) => {
            setData(value.data)
        })
    }, [])
  
    return <ParksData.Provider value={{ parkdata, setData }}>{children}</ParksData.Provider>
}

export function useParksData() {
    return useContext(ParksData)
}