# Node.js on Azure Container Apps Starter

[Azure Container Apps](https://azure.microsoft.com/en-us/services/container-apps/) is a fully managed serverless container service for building and deploying modern apps at scale.

It's a perfect choice for hosting fullstack web applications with a server-side rendered components like Next.js or Remix.

## How to scaffold an Azure Container App

1. [Install Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)

2. Install `containerapp` extension of the Azure CLI

```bash
az extension add --name containerapp --upgrade
```

3. Clone and deploy this starter as an Azure Container App with the name of your choice (`nextjs-aca` in the example below):

```bash
az containerapp up --name nextjs-aca --source .
```

## How to deploy a new version

Use the same command to deploy a new version:

```bash
az containerapp up --name nextjs-aca --source .
```

## About

### Credits

- Dockerfile is based on [with-docker example](https://github.com/vercel/next.js/tree/canary/examples/with-docker)
- API call is based on [api-routes example](https://github.com/vercel/next.js/tree/canary/examples/api-routes)

### Author

[Maxim Salnikov](https://twitter.com/webmaxru). Feel free to contact me if you have any questions about the project, Azure, Azure Container Apps, Azure Static Web Apps.