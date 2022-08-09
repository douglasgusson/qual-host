import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { SearchForm } from "../components/SearchForm";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [serverInfo, setServerInfo] = useState();

  const handleSubmit = (domain: string) => {
    setLoading(true);
    fetch("/api/host", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ domain: domain }),
    })
      .then((res) => res.json())
      .then(setServerInfo)
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Qual host?</title>
        <meta name="description" content="Busque o host de um domínio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Qual host?</h1>

        <SearchForm onSubmit={handleSubmit} />

        {loading && <div>Buscando...</div>}

        {serverInfo && (
          <pre className={styles.code}>
            <code>{JSON.stringify(serverInfo, null, 2)}</code>
          </pre>
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
