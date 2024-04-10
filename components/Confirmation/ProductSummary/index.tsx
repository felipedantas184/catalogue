import Image from "next/image";
import { Brand, ImageWrapper, Price, Product, Quantity, TextWrapper, Title, TopicWrapper } from "./styles";

type Item = {
  item: {
    id: string,
    title: string,
    brand: string,
    imageUrl: string,
    description: string,
    price: number,
    quantity: number,
  }
}

const ProductSummary = ({item} : Item) => {
  return (
    <Product>
      <ImageWrapper href={'/'}>
        <Image src={item.imageUrl} alt={item.title} fill className={'image'} sizes="(max-width: 384px)" />
      </ImageWrapper>
      <TextWrapper style={{ flex: 2 }} >
        <Brand>{item.brand}</Brand>
        <Title>{item.title}</Title>
      </TextWrapper>
      <TopicWrapper>
        <Quantity>Qntd.: {item.quantity}</Quantity>
        <Price>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(item.price)}</Price>
      </TopicWrapper>
    </Product>
  );
}

export default ProductSummary;