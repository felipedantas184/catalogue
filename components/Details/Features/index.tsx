import { Paragraph, Section, Span, TextWrapper, Topic, Wrapper } from "./styles";

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

const Features = ({product} : Product) => {
  return ( 
    <Section>
      <Wrapper>
      <TextWrapper>
          <Topic>Modelo</Topic>
          <Span>{product.title}</Span>
        </TextWrapper>
        <TextWrapper>
          <Topic>Marca</Topic>
          <Span>{product.brand}</Span>
        </TextWrapper>
        <TextWrapper>
          <Topic>Descrição</Topic>
          <Paragraph>{product.description}</Paragraph>
        </TextWrapper>
      </Wrapper>
    </Section>
   );
}
 
export default Features;