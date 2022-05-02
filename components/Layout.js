import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Azure Container App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js</a> on Azure Container
          Apps!
        </h1>

        {children}
      </main>

      <footer>
        <a
          href="https://docs.microsoft.com/en-us/azure/container-apps/deploy-visual-studio-code"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img
            src="/favicon.png"
            alt="Azure Container Apps"
          />
        </a>
      </footer>
    </>
  );
}
