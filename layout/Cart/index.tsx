import { FaTimes } from "react-icons/fa";
import { CheckoutButton, Close, Container, Divider, Price, TextWrapper, Title, Topic, TopicWrapper, Wrapper } from "./styles";
import ProductCheckout from "@/components/Checkout/ProductCheckout";
import { useSelector } from "react-redux";

type Item = {
  id: number,
  title: string,
  brand: string,
  imageUrl: string,
  description: string,
  price: number,
  quantity: number,
}

const Cart = ({ cartOpen, toggleCart }: any) => {
  const cart = useSelector((state: any) => state.cart);

  return (
    <Container cartOpen={cartOpen}>
      <Wrapper>
        <Close onClick={toggleCart}>
          <FaTimes color="#13131A" />
        </Close>
        <TextWrapper>
          <Title>Carrinho</Title>
          {cart.map((item: Item) => (
            <ProductCheckout key={item.id} item={item} />
          ))}
        </TextWrapper>

        <TextWrapper>
          <TopicWrapper>
            <Topic>Total</Topic>
            <Price>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(cart.reduce((acc:any, curr:any) => acc + curr.price*curr.quantity, 0))}</Price>
          </TopicWrapper>
          <CheckoutButton href={'/checkout'} >Adicionar Pedido</CheckoutButton>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
}

export default Cart;