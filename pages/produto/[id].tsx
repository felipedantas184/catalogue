import Details from "@/components/Details";
import { Products } from "@/database/products";
import Layout from "@/layout"
import Head from "next/head";

export const getServerSideProps = async (context: any) => {
  const id = context.params.id;
  const data = Products.filter((product) => product.id == id);
  const product = data[0]

  return {
    props: {
      product,
    }
  }
}

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

export default function ProductsPage({product} : Product) {

  return (
    <>
      <Head>
        <title>LovMaria | Loja de Roupas</title>
        <meta name="description" content="Looks únicos para momentos marcantes ♡" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Details product={product} />
      </Layout>
    </>
  )
}