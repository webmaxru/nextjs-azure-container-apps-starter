import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <p>
        Documentation
      </p>

      <div className="grid">
        <a href="https://nextjs.org/docs" className="card">
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://docs.docker.com/develop/develop-images/multistage-build/#name-your-build-stages"
          className="card"
        >
          <h3>Multi-stage Dockerfile &rarr;</h3>
          <p>Read more about multi-stage builds</p>
        </a>

        <a
          href="https://docs.microsoft.com/en-us/azure/container-apps/deploy-visual-studio-code"
          className="card"
        >
          <h3>Deploy &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with Azure
            Container Apps.
          </p>
        </a>
      </div>

      <p>
        Calling API in different modes
      </p>

      <div className="grid">
        <Link href="/persons-ajax">
          <a className="card">
            <h3>Ajax API call</h3>
            <p>Calling API as Ajax</p>
          </a>
        </Link>
        <Link href="/persons-sg">
          <a className="card">
            <h3>SG API call</h3>
            <p>Calling API as Static Generation</p>
          </a>
        </Link>
        <Link href="/persons-ssr">
          <a className="card">
            <h3>SSR API call</h3>
            <p>Calling API as Server-side Rendering</p>
          </a>
        </Link>
      </div>
    </>
  );
}
