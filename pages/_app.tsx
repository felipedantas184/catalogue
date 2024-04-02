import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from '../redux/store'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function useRouterReady() {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsReady(router.isReady);
  }, [router.isReady]);

  return isReady;
}

export default function App({ Component, pageProps }: AppProps) {
  const isRouterReady = useRouterReady();

  return isRouterReady ? (
    <Provider store={store} >
      <Component {...pageProps} />
    </Provider>
  ) : null
}
