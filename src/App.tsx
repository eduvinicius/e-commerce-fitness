import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'

import { BrowserRouter } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { AppRoutes } from './routes'

import { ItemsProvider } from './contexts/ItemsContext'
import { CartProvider } from './contexts/CartContext'

export default function App() {

  return (
    <BrowserRouter>
      <Theme>
        <ItemsProvider>
          <CartProvider>
            <AppRoutes />
            <ToastContainer autoClose={2000} />
            <GlobalStyle />
            <Normalize />
          </CartProvider>
        </ItemsProvider>
      </Theme>
    </BrowserRouter>
  )
}
