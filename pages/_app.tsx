import type { AppProps } from "next/app";
import Head from "next/head";
import { Footer } from '../components/Footer';
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Qual host?</title>
        <meta
          name="description"
          content="Descubra detalhes de host no Qual Host? Encontre informações de DNS, resolva domínios e IPs. Explore a infraestrutura online de forma simples e rápida."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Qual host?" />
        <meta
          property="og:description"
          content="Descubra detalhes de host no Qual Host? Encontre informações de DNS, resolva domínios e IPs. Explore a infraestrutura online de forma simples e rápida."
        />
        <meta
          property="og:image"
          content="https://qualhost.capixaba.dev/og-image.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Logo Qual host?" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://qualhost.capixaba.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Qual host?" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
