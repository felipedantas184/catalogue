import { useSelector } from "react-redux";
import Form from "./Form";
import Order from "./Order";
import { Divider, EmptyWrapper, ImageWrapper, Section, Span, Wrapper } from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Checkout = () => {
  const cart = useSelector((state: any) => state.cart);
  const router = useRouter()

  useEffect(() => {
    if (cart.length === 0) {
      setTimeout(function(){
        router.push('/')
      }, 5000)
    }
  }, [router])

  return (
    <Section>
      <Wrapper>
        {(cart.length === 0) ? (
          <EmptyWrapper>
            <ImageWrapper>
              <Image src={'/assets/icons/emptyCart.svg'} alt={'product.titl'} fill className={'image'} />
            </ImageWrapper>
            <Span>Seu carrinho está vazio</Span>
            <Span>Você será redirecionado em instantes...</Span>
          </EmptyWrapper>
        ) : (
          <>
            <Order />
            <Divider />
            <Form />
          </>
        )}
      </Wrapper>
    </Section>
  );
}

export default Checkout;