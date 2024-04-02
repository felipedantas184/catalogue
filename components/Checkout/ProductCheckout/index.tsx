import Image from "next/image";
import { Brand, Buttons, ImageWrapper, Price, Product, QntButton, TextWrapper, Title } from "./styles";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

type Item = {
  item: {
    id: number,
    title: string,
    brand: string,
    imageUrl: string,
    description: string,
    price: number,
    quantity: number,
  }
}

const ProductCheckout = ({item} : Item) => {
  return (
    <Product>
      <ImageWrapper href={'/'}>
        <Image src={item.imageUrl} alt={item.title} fill className={'image'} sizes="(max-width: 384px)" />
      </ImageWrapper>
      <TextWrapper style={{ flex: 2 }} >
        <Brand>{item.brand}</Brand>
        <Title>{item.title}</Title>
        <Price>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(item.price)}</Price>
        <Buttons>
          <QntButton><FaMinusCircle size={16} color='#13131A' /></QntButton>
          <p>{item.quantity}</p>
          <QntButton><FaPlusCircle size={16} color='#13131A' /></QntButton>
        </Buttons>
      </TextWrapper>
    </Product>
  );
}

export default ProductCheckout;