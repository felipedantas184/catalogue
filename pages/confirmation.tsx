import Confirmation from "@/components/Confirmation";
import Layout from "@/layout";
import Head from "next/head";

export default function ConfirmationPage() {
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
