---
sidebar_position: 2
---

# Installation

The portfolio app is a [`React`][react] application, therefore it depends on having
[`Node.JS`][nodejs] installed locally on your development machine. You will need
to have version 18 or later of Node.js installed.

You will need some form of web hosting. React build folders are basically just
static HTML, CSS and JavaScript files so pretty much any provider will be able
to host them. the CRA website has some useful information [here][deploy].

## Clone the repository

Either clone it somewhere locally from where you then upload the dist directory
to your web hosting provider, or clone it directly onto your hosting server.
Note that the only files which need to be available to your web hosting server
are the contents of the `./dist` directory (once you have generated the bundle).

```console
$ git clone https://github.com/seapagan/dev-portfolio-app
```

## Yarn or NPM

The portfolio app can be built using either [`yarn`][yarn] or `npm`. For
preference, use `yarn` as the project lock file is set up for this. You can use
`npm` if you prefer, but you will need to delete the `yarn.lock` file first.

`Npm` comes installed with Node.js and can be used straight out of the box,
however you will need to install `yarn` yourself if you choose to go that way.
It is actually installed in the repo, but needs to be enabled first if not
already done:

```console
$ corepack enable
$ yarn set version stable
```

## Install the dependencies

From the root project directory, run `yarn install` (or `npm install`) depending
on your own personal preference.

## Update the configuration

1) Rename the `./src/configure/settings-template.js` file to
`./src/configure/settings.js`. Modify the settings, text, icons, hero image etc
to your own requirements.
2) Add your GitHib Personal Access Token to the `VITE_GH_TOKEN` key in the
`.env` file. This will allow the 'Open Source' section to query GitHub. Without
this, that section will not work. Define your PAT on GitHub (it is account wide,
not per-repository) [here](https://github.com/settings/tokens) under Personal
access tokens

These files are the ONLY files you should be editing! Nothing else needs changing.

## Run the application locally

For local development, run `yarn start` (or `npm start`) to start the local
development server. This will open a browser window at
[http://localhost:3000](http://localhost:3000) and will automatically reload
when you make changes to the source code.

## Build the Production bundle

From the root folder of this repository, either run `yarn build` or `npm run
build`. This will create a production-ready website in the `dist` folder. This
`dist` folder is the one you need to upload to your hosting provider, with the
contents of this folder being the root to serve. Again, the React Deployment
pages have good information if you are new at this.

:::tip[Test the Production bundle locally]

If you want to test the production bundle locally, you can use built in preview
server that comes with `vite`.

Use either `yarn preview` or `npm run preview` to start the preview server. This
will automatically open a browser window for you.

:::

## Deploy the application

Since the production bundle is just static HTML, CSS and JavaScript files, you
can deploy it to any web hosting provider.

I no longer recommend deploying to GitHub pages - since your GitHub Personal
Access Token is stored in the final production build, GitHub will then detect
this and cancel it, hence the OpenSource section will fail. Look at
[Netlify][netlify] or [Vercel][vercel] instead. Obviously, if you have your own
hosting you can upload the production build and serve that as any other site.

Again, check the Create-React-App [website][deploy] for more information on
deployment.

[react]: https://reactjs.org/
[nodejs]: https://nodejs.org/en/
[deploy]: https://create-react-app.dev/docs/deployment/
[yarn]: https://yarnpkg.com/
[netlify]: https://www.netlify.com/
[vercel]: https://vercel.com/
