import Link from 'next/link';

export default function Index() {
  return (
    <>
      <p>Technologies used in this project</p>

      <div className="grid">
        <a
          href="https://github.com/webmaxru/nextjs-azure-container-apps-starter"
          className="card"
        >
          <h3>This project on GitHub &rarr;</h3>
          <p>Info about scaffolding and deploying</p>
        </a>

        <a
          href="https://docs.microsoft.com/en-us/azure/container-apps/overview"
          className="card"
        >
          <h3>Azure Container Apps &rarr;</h3>
          <p>Fully-managed, serverless platform for running containers</p>
        </a>

        <a
          href="https://docs.docker.com/develop/develop-images/multistage-build/"
          className="card"
        >
          <h3>Multi-stage Dockerfile &rarr;</h3>
          <p>Keeping images small, and easy to read and maintain</p>
        </a>

        <a
          href="https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files-experimental"
          className="card"
        >
          <h3>Copying traced files &rarr;</h3>
          <p>Read more about outputStandalone feature of Next.js</p>
        </a>
      </div>

      <p>Azure Container Apps tooling</p>

      <div className="grid">
        <a
          href="https://techcommunity.microsoft.com/t5/apps-on-azure-blog/simplify-azure-container-apps-deployments-with-quot-az/ba-p/3298436"
          className="card"
        >
          <h3>containerapp extension of Azure CLI &rarr;</h3>
          <p>
            Streamline the process of deploying to Azure Container Apps in a
            single command
          </p>
        </a>

        <a
          href="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurecontainerapps"
          className="card"
        >
          <h3>VS Code extension &rarr;</h3>
          <p>Create and deploy your Container Apps from the IDE</p>
        </a>
      </div>

      <p>Calling API in different modes (will be used in next iterations)</p>

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
