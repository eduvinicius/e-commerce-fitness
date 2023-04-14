import { createContext, ReactNode, useEffect, useState } from 'react';

import { ItemsData } from '../interfaces/ItemData';

import { getAnt, getEquips, getSups } from '../services/api';

interface ItemsContextProps {
    sups: ItemsData[]
    equips: ItemsData[]
    antrop: ItemsData[]
}

interface ItemsProviderProps {
    children: ReactNode;
}

export const ItemsContext = createContext({} as ItemsContextProps)

export const ItemsProvider = ({ children }: ItemsProviderProps) => {
    
    const [sups, setSups] = useState<ItemsData[]>([]);
    const [equips, setEquips] = useState<ItemsData[]>([]);
    const [antrop, setAntrop] = useState<ItemsData[]>([]);
  
    useEffect(() => {
        (async () => {
  
          try {
            const supsRequest = await getSups();
            const equipsRequest = await getEquips();
            const antRequest = await getAnt();
  
            const requests = [supsRequest, equipsRequest, antRequest]
  
            const [
              {data: supsResponse},
              {data: equipsResponse},
              {data: antResponse},
            ] = await Promise.all(requests)
  
            setSups(supsResponse)
            setEquips(equipsResponse)
            setAntrop(antResponse)
          } catch (error) {
            console.error(error)
          }
        })()
    }, [])

    return (
        <ItemsContext.Provider value={{ sups, equips, antrop }}>
            {children}
        </ItemsContext.Provider>
    )
}