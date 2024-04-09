import ProductList from "@/components/Landing/ProductList";
import fireDB from "@/firebase/initFirebase";
import Layout from "@/layout";
import { collection, getDocs } from "firebase/firestore";
import Head from "next/head";

export async function getServerSideProps() {
  const DBProducts = await getDocs(collection(fireDB, "products"));
  const products: any = []
  DBProducts.forEach((doc) => {
    const obj = {
      id: doc.id,
      ...doc.data()
    }

    products.push(obj)
  });

  return {
    props: {
      products
    }
  }
}

export default function Home({products} : any) {
  return (
    <>
      <Head>
        <title>LovMaria | Loja de Roupas</title>
        <meta name="description" content="Looks únicos para momentos marcantes ♡" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ProductList products={products} />
      </Layout>
    </>
  );
}
