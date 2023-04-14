import { Link } from 'react-router-dom';

import logoImg from '../../assets/fitnessshop.png';

import { useCart } from '../../hooks/useCart';

import { Container } from './styles';

import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';

const OrderHeader = () => {
  const { cart } = useCart()

  return (
    <Container>
      <Link to='/'>
        <img src={logoImg} alt="Fitness Shop" />
      </Link>
      <div>
        <div>
          <h3>Meus Pedidos</h3>
          <span>
            <strong>
              {`${cart.length}`.padStart(2, '0')} item(s)
            </strong>
          </span>
        </div>
        <CartIcon />
      </div>

    </Container>
  )
}

export default OrderHeader
