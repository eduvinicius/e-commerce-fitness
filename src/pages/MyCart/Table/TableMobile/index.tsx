import { currencyFormat } from "../../../../helpers/currencyFomat";
import { useCart } from "../../../../hooks/useCart"
import { Container } from "./styles"

import plusImg  from '../../../../assets/circle-plus.svg';
import minusImg  from '../../../../assets/circle-minus.svg';

import { FaTrashAlt } from 'react-icons/fa';
import { ConfirmOrder } from "../../../../components/ConfirmOrder";

export const TableMobile = () => {
  const {
    cart,
    removeItemFromCart,
    itemCartIncrement,
    itemCartDecrement,
  } = useCart();

  return (
    <Container>
      {cart.map((item) => (
        <div key={`${item.item}-${item.id}`} className="order-item">
          <div>
            <img src={item.image} alt={item.name} />
          </div>
          <div>
            <h4>{item.name}</h4>
            <span>{currencyFormat(item.price)}</span>
            <div>
              <div>
                <button type="button" onClick={() => itemCartDecrement(item)}>
                  <img src={minusImg} alt="remover quantidade" />
                </button>
                <span>{`${item.quantity}`.padStart(2, '0')}</span>
                <button type="button" onClick={() => itemCartIncrement(item)}>
                      <img src={plusImg} alt='Adicionar quantidade' />
                </button>
              </div>
              <button type="button" onClick={() => removeItemFromCart(item)}>
                <FaTrashAlt />
              </button>
            </div>
            <h5>
              <span>Subtotal:</span> {currencyFormat(item.subtotal)}
            </h5>
          </div>
        </div>
      ))}

      <ConfirmOrder />
    </Container>
  )
}
