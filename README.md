# UniformConf

This is a sample project to demonstrate some of the features that [Uniform](https://uniform.dev/) offers.

Learn more about Uniform Nuxt module:
https://www.npmjs.com/package/@uniformdev/uniform-nuxt

## Setup

### Configure environment variables

The project is already configured to use a sample Uniform project. Check out the [.env.example](./.env.example) file for instructions on how to use your own project instead.

### Setup Uniform Preview URL for Visual Editing

Make sure to [set the preview URL in the Uniform Canvas Settings](https://docs.uniform.app/docs/guides/composition/visual-editing/preview-mode#configure-the-preview-url-for-the-project) to the value for Nuxt.

```
http://localhost:3000/?preview=true
```

### Set the right Node version

The recommended Node version is specified in `.nvmrc`.
If you're using NVM, just run:

```
nvm use
```

### Install dependencies

Make sure to install the dependencies:

```bash
npm install --legacy-peer-deps
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```
