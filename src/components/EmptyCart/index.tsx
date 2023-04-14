import { Container, Button } from "./styles";

interface EmptyCartProps {
  title: string;
}

export const EmptyCart = ({ title }: EmptyCartProps) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar produtos</Button>
    </Container>
  )
}
