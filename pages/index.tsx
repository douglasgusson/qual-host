import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Logo } from '../components/Logo';
import { SearchForm } from "../components/SearchForm";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [serverInfo, setServerInfo] = useState<{
    domain: string;
    family: number;
    address: string;
    hostnames: string[];
  }>();

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
        <Logo />
        
        <h1 className={styles.title}>Qual host?</h1>

        <SearchForm onSubmit={handleSubmit} />

        {loading && <div>Buscando...</div>}

        {serverInfo && (
          <>
            <dl className={styles.serverInfo}>
              <dt>Domínio</dt>
              <dd>{serverInfo.domain}</dd>
              <dt>IP ({`IPv${serverInfo.family}`})</dt>
              <dd>{serverInfo.address}</dd>
              {serverInfo.hostnames.length > 0 && (
                <>
                  <dt>Hostnames</dt>
                  <dd>
                    <ul>
                      {serverInfo.hostnames.map((hostname) => (
                        <li key={hostname}>{hostname}</li>
                      ))}
                    </ul>
                  </dd>
                </>
              )}
            </dl>
          </>
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
