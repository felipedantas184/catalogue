import { useSelector } from "react-redux";
import ProductCheckout from "../ProductCheckout";
import { Divider, Span, SpanBold, Title, Topic, TopicBold, TopicWrapper, Wrapper } from "./styles";
import { useEffect } from "react";

const Order = () => {
  const cart = useSelector((state: any) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  type Item = {
    id: number,
    title: string,
    brand: string,
    imageUrl: string,
    description: string,
    price: number,
    quantity: number,
  }

  return (
    <Wrapper>
      <Title>Carrinho</Title>

      {cart.map((item: Item) => (
        <ProductCheckout key={item.id} item={item} />
      ))}

      <Divider />
      <TopicWrapper>
        <Topic>Frete</Topic>
        <Span>A combinar</Span>
      </TopicWrapper>
      <TopicWrapper>
        <Topic>Total de itens</Topic>
        <Span>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(120)}</Span>
      </TopicWrapper>
      <TopicWrapper>
        <TopicBold>Valor Total</TopicBold>
        <SpanBold>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(120)}</SpanBold>
      </TopicWrapper>
    </Wrapper>
  );
}

export default Order;