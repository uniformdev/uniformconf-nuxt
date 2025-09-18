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

### Install dependencies

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Setting up your own local project

If you want to work on your own project, start with an empty Uniform project, then create an API key with Developer role in Uniform and update `UNIFORM_API_KEY` in your `.env` file, then run `npm run uniform:push` to push content from `./content` folder to your project.

To sync changes from your Uniform project to source control, use `npm run uniform:pull` command.