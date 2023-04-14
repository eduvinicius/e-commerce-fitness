import { createContext, ReactNode, useState } from 'react';
import { toast } from 'react-toastify';

import { ItemsData } from '../interfaces/ItemData';

import { itemEmoji } from '../helpers/itemEmoji';

interface Item extends ItemsData {
  quantity: number
  subtotal: number
}

interface CartContextProps {
  cart: Item[]
  addItemIntoCart: (item: ItemsData) => void
  removeItemFromCart: (item: Item) => void
  itemCartIncrement: (item: Item) => void
  itemCartDecrement: (item: Item) => void
  confirmOrder: () => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: CartProviderProps ) => {
  const [cart, setCart] = useState<Item[]>([])

  const addItemIntoCart = (item: ItemsData): void => {
    // find an item
    const itemExistentInCart = cart.find(
      (product) => product.item === item.item && product.id === item.id
    )

    // to update
    if ( itemExistentInCart ) {
      const newCart = cart.map((product) => {
        if ( product.id === item.id ) {
          const quantity = product.quantity + 1;
          const subtotal = product.price * quantity;

          return {...product, quantity, subtotal}
        }

        return product;
      })

      toast.success(`Outro(a) ${itemEmoji(item.item)} ${item.name} adicionado nos pedidos!`)
      setCart(newCart)

      return
    }

    // to add an item
    const newItem = { ...item, quantity: 1, subtotal: item.price }
    const newCart = [...cart, newItem] // push de um array

    toast.success(` ${itemEmoji(item.item)} ${item.name} adicionado nos pedidos!`)
    setCart(newCart)
  }

  const removeItemFromCart = (item: Item) => {
    const newCart = cart.filter((product) => !(product.id === item.id && product.item === item.item))

    setCart(newCart)
  }

  const updateItemQuantity = (item: Item, newQuantity: number) => {
    if (newQuantity <= 0) return;

    const itemExistentInCart = cart.find((product) => product.id == item.id && product.item === item.item)

    if (!itemExistentInCart) return;

    const newCart = cart.map((product) => {
      if (product.id === itemExistentInCart.id && product.item === itemExistentInCart.item) {
        return {
          ...product,
          quantity: newQuantity,
          subtotal: product.price * newQuantity,
        }
      }

      return product;
    })

    setCart(newCart);
  }

  const itemCartIncrement = (item: Item) => {
    updateItemQuantity(item, item.quantity + 1)
  }

  const itemCartDecrement = (item: Item) =>{
    updateItemQuantity(item, item.quantity - 1)
  }

  const confirmOrder = () => {
    //
  }

  return (
    <CartContext.Provider
    value={{
       cart,
       addItemIntoCart,
       removeItemFromCart,
       itemCartIncrement,
       itemCartDecrement,
       confirmOrder
      }}>{children}</CartContext.Provider>
  )
}
