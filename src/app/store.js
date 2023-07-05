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

export function useParksList(){
    const { parkdata } = useContext(ParksData)

    const allParksList = new Map()

    if(Object.keys(parkdata).length > 0){
        parkdata.forEach((park) => {
        
            park.relatedParks.forEach(item => {

                if(allParksList.get(item.parkCode) == undefined){

                    allParksList.set(item.parkCode, { 
                        name: item.fullName,
                        slug: `/${item.parkCode}`,
                        data: [ park ] 
                    })

                } else {

                    const parkItemData = allParksList.get(item.parkCode);
                    parkItemData.data.push(park)

                }
            })

        })
    }

    const sortedParksList = new Map([...allParksList].sort());

    return sortedParksList
}

export function useParksData() {
    return useContext(ParksData)
}