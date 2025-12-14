This represents the homepage of [debarros.eu](https://debarros.eu/), which serves as my home on the so-called World Wide Web.

This has been built with SST, Next.js and Tailwind CSS and is serverless hosted in AWS.

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) on your browser to see the result.

## Deploy

### Manual Deployment

To deploy to production manually, please run the following:

```sh
yarn deploy --stage=production
```

### Automated Deployment (CI/CD)

This project uses GitHub Actions for automated deployments. When you push to the `main` branch, the workflow will:

1. Run the necessary checks (e.g. linting)
2. Build the application
3. Deploy to AWS using SST
