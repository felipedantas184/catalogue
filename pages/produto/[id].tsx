import Details from "@/components/Details";
import { Products } from "@/database/products";
import fireDB from "@/firebase/initFirebase";
import Layout from "@/layout"
import { doc, getDoc } from "firebase/firestore";
import Head from "next/head";

export const getServerSideProps = async (context: any) => {
  const id = context.params.id;
  const data = await getDoc(doc(fireDB, "products", id));
  const product = data.data()
  if (product !== undefined) {
    product.id = id
  }
  
  return {
    props: {
      product: product,
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
    price: number,
    stock: number,
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