import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js on Azure Container Apps starter</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className={styles.header}>
        <h2>
          <Link href="/">Next.js on Azure Container Apps starter</Link>
        </h2>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        Created by&nbsp;
        <a href="https://twitter.com/webmaxru">Maxim Salnikov</a>
        &nbsp;|&nbsp;
        <a href="https://github.com/webmaxru/nextjs-azure-container-apps-starter">
          Fork on GutHub
        </a>
        &nbsp;|&nbsp;
        <a
          href="https://aka.ms/learn-aca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by&nbsp;
          <img
            src="/favicon.png"
            alt="Azure Container Apps"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  );
}
