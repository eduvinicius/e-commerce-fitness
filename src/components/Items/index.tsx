import {FiPlus} from 'react-icons/fi';

import { currencyFormat } from '../../helpers/currencyFomat';
import { ItemsData } from '../../interfaces/ItemData';
import { useCart } from '../../hooks/useCart';

import { SkeletonItems } from './SkeletonItems';

import { Container } from "./styles";


interface ItemsProps {
    items: ItemsData[]
}

export const Items = ({items}: ItemsProps) => {
  const { cart, addItemIntoCart } = useCart();

    return (
        <Container>
            {!items.length
            ? [1,2,3,4].map((n) => <SkeletonItems key={n} />)
            : items.map((item) => {
                const itemExistent = cart.find(
                  (product) => product.item === item.item && product.id === item.id)
              return (
                <div key={item.id} className='items'>
                  {itemExistent && <span>{itemExistent.quantity}</span>}
                  <h2>{item.name}</h2>
                  <img src={item.image} alt={item.name} />
                  <p>{item.description}</p>
                  <div>
                    <strong>{currencyFormat(item.price)}</strong>
                    <button type="button" onClick={() => addItemIntoCart(item)}>
                      <FiPlus />
                    </button>
                  </div>
                </div>
              )
            })}
        </Container>
    )

};
