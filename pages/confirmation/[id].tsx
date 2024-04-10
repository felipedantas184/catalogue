import Confirmation from "@/components/Confirmation";
import fireDB from "@/firebase/initFirebase";
import Layout from "@/layout";
import { doc, getDoc } from "firebase/firestore";
import Head from "next/head";


export const getServerSideProps = async (context: any) => {
  const id = context.params.id;
  const data = await getDoc(doc(fireDB, "orders", id));
  const order = data.data()
  if (order !== undefined) {
    order.id = id
  }
  
  return {
    props: {
      order: order,
    }
  }
}

export default function OrdersPage({order} : any) {
  return (
    <>
      <Head>
        <title>LovMaria | Loja de Roupas</title>
        <meta name="description" content="Looks únicos para momentos marcantes ♡" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Confirmation />
      </Layout>
    </>
  );
}
