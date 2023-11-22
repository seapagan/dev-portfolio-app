# Developers Portfolio Website

![Website Preview](website/docs/intro/img/webpage_image.png)

A totally stand-alone React based developers portfolio website, taking all data
from a local JSON file. The Application is **Fully Responsive**, reads your
GitHub **repository data in real-time**, has **Social Media buttons**, and can
be configured using one simple file - **No Coding needed**.

This is still work in progress but fully able to be used live. I try to avoid
any breaking changes in the configuration file, this will be noted in the
changelog if required.

> **Important : I have now converted this application to use**
> **[Vite](https://vitejs.dev) instead of `Create React App`. If you have an**
> **existing installation, please delete your existing `node_modules` folder and**
> **re-install the dependencies using `npm` or `yarn`**

There is a live working version on my own pages :
[https://www.gnramsay.com](https://www.gnramsay.com)

## Sections

- Hero section
  - A Tagline and brief statement of your philosophy.
- About Me
  - A brief couple of paragraphs to describe/sell yourself.
- My Skills
  - Displays brief info about the main Skills you have, and a list of other
    perhaps lesser but still relevant skills.
- My Experience
  - List your Job/Project experience with dates, notable responsibilities etc.
- OpenSource Projects.
  - Queries `Github` (In future I hope to add GitLab and Bitbucket) in real time
    and displays the PUBLIC repositories for the supplied User. You can also
    provide multiple users if you have multiple accounts for example. These can
    be folded away if required.
- Contact Me
  - The final statements and contact information
- Social Media buttons
  - Customisable buttons to link to your Social Media presence.
- Light / Dark mode
  - Toggle to choose own preference
  - Defaults to using the Operating System preference, if Supported. So far
    tested to work on Windows, Linux, OSX and iOS.

All of the information contained in the above are fully customisable using the
`settings.js` file, no actual programming or modification to the React code is
needed.

## Required setup

This is a [`React`][react] application, therefore it depends on having
[`Node.JS`][nodejs] installed locally on your development and possibly
production systems.

You will need some form of web hosting. React build folders are basically just
static HTML, CSS and JavaScript files so pretty much any provider will be able
to host them. the CRA website has some useful information [here][deploy].
[Netlify][netlify] and [Vercel][vercel] are good choices.

You can use either [`yarn`][yarn] or `npm` to install the required dependencies
as below, personally I prefer `yarn` as it seems faster and more robust. Either
works. `Npm` comes installed with Node.js and can be used straight out of the
box, however you will need to install `yarn` yourself if you choose to go that
way :

```bash
npm install -g yarn
```

## How to use

### Clone this Git repository

Either clone it somewhere locally from where you then upload the dist directory
to your web hosting provider, or clone it directly onto your hosting server.
Note that the only files which need to be available to your web hosting server
are the contents of the `./dist` directory.

### Install the dependencies

From the root project directory, either run `npm install` or `yarn` depending on
your own personal preference. I use Yarn personally, so there is a `yarn.lock`
file in the repo.

### Edit the configuration

Rename the
[./src/configure/settings-template.js](./src/configure/settings-template.js)
file to `./src/configure/settings.js` Modify the settings, text, icons, hero
image etc to your own requirements as described above.

add your **GitHib Personal Access Token** to the `VITE_GH_TOKEN` key in the
`.env` file. This will allow the 'Open Source' section to query GitHub. Without
this, that section will not work. Define your PAT on GitHub (it is account wide,
not per-repository) [here][token] under `Personal access tokens`

**These files are the ONLY files you should be editing! Nothing else needs
changing**.

### Build the application

From the web application root folder, either run ```npm run build``` or ```yarn
build```. This will create a production-ready website in the
[`./dist`](./dist) folder. This `/.dist` folder is the one you need to upload
to your hosting provider, with the **contents of this folder** being the root to
serve. Again, the [React Deployment pages][deploy] have good information if you
are new at this.

### Deploy the application

I no longer recommend deploying to GitHub pages - since your GitHub Personal
Access Token is stored in the final production build, GitHub will then detect
this and cancel it, hence the OpenSource section will fail. Look at
[Netlify][netlify] or [Vercel][vercel] instead. Obviously, if you have your own
hosting you can upload the production build and serve that as any other site.

## Attributions

- Day/Night toggle icons are from [IconScout](https://iconscout.com)

## TODO

- ~~Contact section.~~
- ~~Social media buttons.~~
- ~~floating back-to-top button.~~
- ~~tweaks and user info to the OpenSource section.~~
- ~~make the menu mobile-responsive.~~
- Add a contact form in the Contact section to facilitate easier contacts.
- Add GitLab and Bitbucket integration.
- Add a carousel to showcase notable projects.
- Optional [`AddThis`][addthis] or [`ShareThis`][sharethis] integration.
- Optional [`Google Analytics`][googanal] integration.
- Full instructions in this README.
- more!

Licensed under MIT, do with it as you will but please leave my copyright on it.
Pull requests are welcome.

[addthis]: https://www.addthis.com/
[sharethis]: https://sharethis.com/
[googanal]: https://analytics.google.com
[nodejs]: https://nodejs.org/en/
[react]: https://reactjs.org/
[yarn]: https://yarnpkg.com/
[deploy]: https://create-react-app.dev/docs/deployment/
[token]: https://github.com/settings/tokens
[netlify]: https://www.netlify.com/
[vercel]: https://vercel.com

Day/Night icons are from [IconScout](https://iconscout.com)
