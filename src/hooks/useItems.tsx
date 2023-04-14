import { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';

export const useItem = () => {
    return useContext(ItemsContext)
}