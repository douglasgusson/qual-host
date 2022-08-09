import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [domain, setDomain] = useState("");
  const [serverInfo, setServerInfo] = useState();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      .finally(() => setDomain(""));
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

        <form onSubmit={handleSubmit}>
          <label htmlFor="">Domínio</label>
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            required
          />
          <button type="submit">Verificar</button>
        </form>

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
