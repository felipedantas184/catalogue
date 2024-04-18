import { useState } from "react";
import ProductCard from "../ProductCard";
import { BrandTopic, BrandWrapper, Grid, Input, RadioButtons, RadioInput, RadioLabel, Section, Subtitle, TextWrapper, Title, Wrapper } from "./styles";

type Product = {
  id: number,
  title: string,
  brand: string,
  imageUrl: string,
  description: string,
  price: number,
  stock: number,
}

const ProductList = ({ products }: any) => {
  function byName(a: any, b: any) {
    if (a.title < b.title) { return -1; }
    if (a.title > b.title) { return 1; }
    return 0;
  }
  function byBrandName(a: any, b: any) {
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  }

  const [brandFilter, setBrandFilter] = useState('')

  return (
    <Section>
      <Wrapper>
        <TextWrapper>
          <Title>Nossos Produtos</Title>
          {(brandFilter) ? (
              <Subtitle>{products.filter((product: Product) => product.brand == brandFilter).length} produtos encontrados</Subtitle>
            ) : (
              <Subtitle>{products.length} produtos encontrados</Subtitle>
            )}
        </TextWrapper>
        <BrandWrapper>
          <RadioInput type="radio" name="brand" id='todos' defaultChecked />
          <RadioLabel onClick={() => setBrandFilter('')} htmlFor="todos" >Todos</RadioLabel>
          {products.map((product: Product) => product.brand).filter((brand: any, index: any, current_value: any) => current_value.indexOf(brand) === index).sort(byBrandName).map((brand: any) => (
            <div key={brand}>
              <RadioInput type="radio" name="brand" id={brand} />
              <RadioLabel onClick={() => setBrandFilter(brand)} htmlFor={brand}>{brand}</RadioLabel>
            </div>
          ))}
        </BrandWrapper>
        <Grid>
          {(brandFilter) ? (
            products.sort(byName).filter((product: Product) => product.brand == brandFilter).map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            products.sort(byName).map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </Grid>
      </Wrapper>
    </Section>
  );
}

export default ProductList;