# Next.js on Azure Container Apps starter

<p align="center">
    <img src="public/nextjs-aca.png" width="300">
</p>

[Azure Container Apps](https://azure.microsoft.com/en-us/services/container-apps/) is a fully managed serverless container service for building and deploying modern apps at scale.

It's a perfect choice for hosting fullstack web applications with a server-side rendered components like [Next.js](https://nextjs.org/) or [Remix](https://remix.run/).

This project is a minimalistic (but including Next.js essentials like Layout, Style Components, SG, SSR, SWR) example of a Next.js app running on Azure Container Apps.

It uses [Dockerfile](https://github.com/webmaxru/nextjs-azure-container-apps-starter/blob/main/Dockerfile) with multi-stage builds and automatically copied traced files via [outputStandalone](https://github.com/webmaxru/nextjs-azure-container-apps-starter/blob/main/next.config.js#L3) feature of Next.js to keep image size as small as possible.

## How to scaffold an Azure Container App

0. [Claim your free Azure credits] if needed(https://aka.ms/free-azure-pass)

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

Use the same command to deploy a new version of your app:

```bash
az containerapp up --name nextjs-aca --source .
```

## About

### Credits

- Dockerfile is based on [with-docker example](https://github.com/vercel/next.js/tree/canary/examples/with-docker)
- API call is based on [api-routes example](https://github.com/vercel/next.js/tree/canary/examples/api-routes)

### Author

[Maxim Salnikov](https://twitter.com/webmaxru). Feel free to contact me if you have any questions about the project, Azure, Azure Container Apps, Azure Static Web Apps.