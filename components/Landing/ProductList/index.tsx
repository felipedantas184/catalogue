import { Products } from "@/database/products";
import ProductCard from "../ProductCard";
import { Grid, Section, Wrapper } from "./styles";

type Product = {
  id: number,
  title: string,
  brand: string,
  imageUrl: string,
  description: string,
  price: number,
}

const ProductList = () => {
  return ( 
    <Section>
      <Wrapper>
        <Grid>
          {Products.map((product : Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </Wrapper>
    </Section>
   );
}
 
export default ProductList;