import { FaTimes } from "react-icons/fa";
import { CheckoutButton, Close, Container, Divider, EmptyWrapper, ImageWrapper, Price, ProductsWrapper, Span, TextWrapper, Title, Topic, TopicWrapper, Wrapper } from "./styles";
import ProductCheckout from "@/components/Checkout/ProductCheckout";
import { useSelector } from "react-redux";
import Image from "next/image";

type Item = {
  id: number,
  title: string,
  brand: string,
  imageUrl: string,
  description: string,
  price: number,
  quantity: number,
  stock: number,
}

const Cart = ({ cartOpen, toggleCart }: any) => {
  const cart = useSelector((state: any) => state.cart);

  return (
    <Container cartOpen={cartOpen}>
      <Wrapper>
        <Close onClick={toggleCart}>
          <FaTimes color="#13131A" />
        </Close>
        <Title>Carrinho</Title>

        {(cart.length === 0) ? (
          <EmptyWrapper>
            <ImageWrapper>
              <Image src={'/assets/icons/emptyCart.svg'} alt={'product.titl'} fill className={'image'} />
            </ImageWrapper>
            <Span>Seu carrinho está vazio</Span>
          </EmptyWrapper>
        ) : (
          <ProductsWrapper>
            {cart.map((item: Item) => (
              <ProductCheckout key={item.id} item={item} />
            ))}
          </ProductsWrapper>
        )}
        <TextWrapper>
          <TopicWrapper>
            <Topic>Total</Topic>
            <Price>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(cart.reduce((acc: any, curr: any) => acc + curr.price * curr.quantity, 0))}</Price>
          </TopicWrapper>
          {(cart.length === 0) ? (
            <CheckoutButton href={'/'} onClick={toggleCart} >Adicionar Itens</CheckoutButton>
          ) : (
            <CheckoutButton href={'/checkout'}>Finalizar Pedido</CheckoutButton>
          )}
        </TextWrapper>
      </Wrapper>
    </Container>
  );
}

export default Cart;