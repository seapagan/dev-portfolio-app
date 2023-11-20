"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[207],{5386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=t(5893),i=t(1151);const l={sidebar_position:2},r="Installation",s={id:"installation/index",title:"Installation",description:"The portfolio app is a React application, therefore it depends on having",source:"@site/docs/installation/index.md",sourceDirName:"installation",slug:"/installation/",permalink:"/dev-portfolio-app/docs/installation/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/dev-portfolio-app/docs/introduction/"},next:{title:"The Settings file",permalink:"/dev-portfolio-app/docs/settings/"}},d={},c=[{value:"Clone the repository",id:"clone-the-repository",level:2},{value:"Yarn or NPM",id:"yarn-or-npm",level:2},{value:"Install the dependencies",id:"install-the-dependencies",level:2},{value:"Update the configuration",id:"update-the-configuration",level:2},{value:"Run the application locally",id:"run-the-application-locally",level:2},{value:"Build the Production bundle",id:"build-the-production-bundle",level:2},{value:"Deploy the application",id:"deploy-the-application",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["The portfolio app is a ",(0,o.jsx)(n.a,{href:"https://reactjs.org/",children:(0,o.jsx)(n.code,{children:"React"})})," application, therefore it depends on having\n",(0,o.jsx)(n.a,{href:"https://nodejs.org/en/",children:(0,o.jsx)(n.code,{children:"Node.JS"})})," installed locally on your development machine. You will need\nto have version 18 or later of Node.js installed."]}),"\n",(0,o.jsxs)(n.p,{children:["You will need some form of web hosting. React build folders are basically just\nstatic HTML, CSS and JavaScript files so pretty much any provider will be able\nto host them. the CRA website has some useful information ",(0,o.jsx)(n.a,{href:"https://create-react-app.dev/docs/deployment/",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"clone-the-repository",children:"Clone the repository"}),"\n",(0,o.jsxs)(n.p,{children:["Either clone it somewhere locally from where you then upload the dist directory\nto your web hosting provider, or clone it directly onto your hosting server.\nNote that the only files which need to be available to your web hosting server\nare the contents of the ",(0,o.jsx)(n.code,{children:"./dist"})," directory (once you have generated the bundle)."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"$ git clone https://github.com/seapagan/dev-portfolio-app\n"})}),"\n",(0,o.jsx)(n.h2,{id:"yarn-or-npm",children:"Yarn or NPM"}),"\n",(0,o.jsxs)(n.p,{children:["The portfolio app can be built using either ",(0,o.jsx)(n.a,{href:"https://yarnpkg.com/",children:(0,o.jsx)(n.code,{children:"yarn"})})," or ",(0,o.jsx)(n.code,{children:"npm"}),". For\npreference, use ",(0,o.jsx)(n.code,{children:"yarn"})," as the project lock file is set up for this. You can use\n",(0,o.jsx)(n.code,{children:"npm"})," if you prefer, but you will need to delete the ",(0,o.jsx)(n.code,{children:"yarn.lock"})," file first."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Npm"})," comes installed with Node.js and can be used straight out of the box,\nhowever you will need to install ",(0,o.jsx)(n.code,{children:"yarn"})," yourself if you choose to go that way.\nIt is actually installed in the repo, but needs to be enabled first if not\nalready done:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"$ corepack enable\n"})}),"\n",(0,o.jsx)(n.h2,{id:"install-the-dependencies",children:"Install the dependencies"}),"\n",(0,o.jsxs)(n.p,{children:["From the root project directory, run ",(0,o.jsx)(n.code,{children:"yarn install"})," (or ",(0,o.jsx)(n.code,{children:"npm install"}),") depending\non your own personal preference."]}),"\n",(0,o.jsx)(n.h2,{id:"update-the-configuration",children:"Update the configuration"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Rename the ",(0,o.jsx)(n.code,{children:"./src/configure/settings-template.js"})," file to\n",(0,o.jsx)(n.code,{children:"./src/configure/settings.js"}),". Modify the settings, text, icons, hero image etc\nto your own requirements."]}),"\n",(0,o.jsxs)(n.li,{children:["Add your GitHib Personal Access Token to the ",(0,o.jsx)(n.code,{children:"VITE_GH_TOKEN"})," key in the\n",(0,o.jsx)(n.code,{children:".env"})," file. This will allow the 'Open Source' section to query GitHub. Without\nthis, that section will not work. Define your PAT on GitHub (it is account wide,\nnot per-repository) ",(0,o.jsx)(n.a,{href:"https://github.com/settings/tokens",children:"here"})," under Personal\naccess tokens"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"These files are the ONLY files you should be editing! Nothing else needs changing."}),"\n",(0,o.jsx)(n.h2,{id:"run-the-application-locally",children:"Run the application locally"}),"\n",(0,o.jsxs)(n.p,{children:["For local development, run ",(0,o.jsx)(n.code,{children:"yarn start"})," (or ",(0,o.jsx)(n.code,{children:"npm start"}),") to start the local\ndevelopment server. This will open a browser window at\n",(0,o.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," and will automatically reload\nwhen you make changes to the source code."]}),"\n",(0,o.jsx)(n.h2,{id:"build-the-production-bundle",children:"Build the Production bundle"}),"\n",(0,o.jsxs)(n.p,{children:["From the root folder of this repository, either run ",(0,o.jsx)(n.code,{children:"yarn build"})," or ",(0,o.jsx)(n.code,{children:"npm run build"}),". This will create a production-ready website in the ",(0,o.jsx)(n.code,{children:"dist"})," folder. This\n",(0,o.jsx)(n.code,{children:"dist"})," folder is the one you need to upload to your hosting provider, with the\ncontents of this folder being the root to serve. Again, the React Deployment\npages have good information if you are new at this."]}),"\n",(0,o.jsxs)(n.admonition,{title:"Test the bundle locally",type:"tip",children:[(0,o.jsxs)(n.p,{children:["If you want to test the production bundle locally, you can use the\n",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/serve",children:(0,o.jsx)(n.code,{children:"serve"})})," package to serve the bundle\nlocally."]}),(0,o.jsxs)(n.p,{children:["For ",(0,o.jsx)(n.code,{children:"yarn"}),", simply run ",(0,o.jsx)(n.code,{children:"yarn dlx serve -s dist"})," from the root folder of the\nrepository ,while for ",(0,o.jsx)(n.code,{children:"npm"})," you can either run ",(0,o.jsx)(n.code,{children:"npx serve -s dist"})," or install it\nglobally with ",(0,o.jsx)(n.code,{children:"npm install -g serve"})," and then run ",(0,o.jsx)(n.code,{children:"serve -s dist"})," from the root\nfolder. This will serve the production bundle at\n",(0,o.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})]})]}),"\n",(0,o.jsx)(n.h2,{id:"deploy-the-application",children:"Deploy the application"}),"\n",(0,o.jsxs)(n.p,{children:["I no longer recommend deploying to GitHub pages - since your GitHub Personal\nAccess Token is stored in the final production build, GitHub will then detect\nthis and cancel it, hence the OpenSource section will fail. Look at\n",(0,o.jsx)(n.a,{href:"https://www.netlify.com/",children:"Netlify"})," or ",(0,o.jsx)(n.a,{href:"https://vercel.com/",children:"Vercel"})," instead. Obviously, if you have your own\nhosting you can upload the production build and serve that as any other site."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var o=t(7294);const i={},l=o.createContext(i);function r(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);