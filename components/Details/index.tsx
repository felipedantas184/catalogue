import Image from "next/image";
import { AddToCart, Brand, Favorite, Gallery, GelleryIcon, ImageWrapper, Price, Section, SpaceBetween, TextWrapper, Title, Wrapper } from "./styles";
import { FaHeart, FaShare } from "react-icons/fa6";
import Features from "./Features";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart.slice"

type Product = {
  product: {
    id: number,
    title: string,
    brand: string,
    imageUrl: string,
    description: string,
    price: number
  }
}

const Details = ({product} : Product) => {
  const dispatch = useDispatch();

  return (
    <>
    <Section>
      <Wrapper>
        <ImageWrapper>
          <Image src={product.imageUrl} alt={product.title} fill className={'image'} />
        </ImageWrapper>
        {/**<Gallery>
          <GelleryIcon><Image src={'/assets/images/floral_beleza.jpg'} alt={'floral_beleza.jpg'} fill className={'image'} /></GelleryIcon>
        </Gallery>*/}
        <TextWrapper style={{ marginTop: 24 }} >
          <SpaceBetween>
            <Brand>{product.brand}</Brand>
            <FaShare size={16} color="#5A189A" />
          </SpaceBetween>
          <Title>{product.title}</Title>
          <Price>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(product.price)}</Price>
        </TextWrapper>
        <SpaceBetween style={{ paddingLeft: 8, paddingRight: 8, marginTop: 12 }} >
          <AddToCart onClick={() => dispatch(addToCart(product))} >Adicionar ao Carrinho</AddToCart>
          <Favorite><FaHeart size={16} color='#5A189A' /></Favorite>
        </SpaceBetween>
      </Wrapper>
    </Section>
    <Features product={product} />
    </>
  );
}

export default Details;