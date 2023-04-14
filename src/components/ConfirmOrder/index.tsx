import { currencyFormat } from "../../helpers/currencyFomat";
import { useCart } from "../../hooks/useCart"

import { Container } from "./styles";

export const ConfirmOrder = () => {
  const { cart } = useCart();

  const totalAmount = cart.reduce((accumulator, currentItem) => (accumulator += currentItem.subtotal), 0)

  return (
    <Container>
      <span>
        Total <strong>{currencyFormat(totalAmount)}</strong>
      </span>
      <button type="button">Finalizar Pedido</button>
    </Container>
  )
}

