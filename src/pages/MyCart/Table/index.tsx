import { useEffect, useState } from "react";
import { useCart } from "../../../hooks/useCart"
import { TableDesktop } from "./TableDesktop";
import { TableMobile } from "./TableMobile";
import { EmptyCart } from "../../../components/EmptyCart";


export const Table = () => {
  const { cart } = useCart();
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);

  useEffect(() => {
    const updateTableComponentBasedInWindowWidth = () => {
      const currentWidth = document.documentElement.clientWidth;
      setWindowWidth(currentWidth)
    }
    window.addEventListener('resize', updateTableComponentBasedInWindowWidth)

    return () => {
      window.removeEventListener('resize', updateTableComponentBasedInWindowWidth)
    }
  },[])

  if (cart.length === 0) {
    return <EmptyCart title="Ops! Parece que você não fez nenhum pedido!" />
  }

  return windowWidth > 768 ? <TableDesktop /> : <TableMobile />
}
