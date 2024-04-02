import Image from "next/image";
import { AddButton, Brand, Card, ImageWrapper, Price, TextWrapper, Title } from "./styles";
import { addToCart } from "@/redux/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

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

const ProductCard = ({product} : Product) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return ( 
    <Card>
      <ImageWrapper href={`/produto/${product.id}`}>
        <Image src={product.imageUrl} alt={product.title} fill className={'image'} />
      </ImageWrapper>
      <TextWrapper href={'/produto'}>
        <Brand>{product.brand}</Brand>
        <Title>{product.title}</Title>
        <Price>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(product.price)}</Price>
      </TextWrapper>
      <AddButton onClick={() => dispatch(addToCart(product))} >Adicionar</AddButton>
    </Card>
   );
}
 
export default ProductCard;