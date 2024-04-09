import ProductCard from "../ProductCard";
import { BrandTopic, BrandWrapper, Grid, Input, Section, Subtitle, TextWrapper, Title, Wrapper } from "./styles";

type Product = {
  id: number,
  title: string,
  brand: string,
  imageUrl: string,
  description: string,
  price: number,
}

const ProductList = ({products} : any) => {
  function byName(a:any, b:any) {
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;  
  }

  return ( 
    <Section>
      <Wrapper>
        <TextWrapper>
          <Title>Nossos Produtos</Title>
          <Subtitle>25 produtos encontrados</Subtitle>
        </TextWrapper>
        <BrandWrapper>
          <BrandTopic>Apple</BrandTopic>
          <BrandTopic>Samsung</BrandTopic>
          <BrandTopic>Motorola</BrandTopic>
        </BrandWrapper>
        <Grid>
          {products.sort(byName).map((product : Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </Wrapper>
    </Section>
   );
}
 
export default ProductList;