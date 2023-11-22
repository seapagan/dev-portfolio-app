"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[289],{5789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(5893),s=t(1151);const o={sidebar_position:2},a="The Settings file",c={id:"settings/index",title:"The Settings file",description:"The settings file is where you configure the portfolio app to your own",source:"@site/docs/settings/index.md",sourceDirName:"settings",slug:"/settings/",permalink:"/docs/settings/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/docs/installation/"},next:{title:"License",permalink:"/docs/license"}},r={},l=[{value:"Example Settings",id:"example-settings",level:2},{value:"The settings object",id:"the-settings-object",level:2},{value:"Imports",id:"imports",level:2},{value:"&#39;Meta&#39; Sections",id:"meta-sections",level:2},{value:"The &#39;Hero&#39; Section",id:"the-hero-section",level:2},{value:"Social Media Icons",id:"social-media-icons",level:3},{value:"The &#39;About Me&#39; Section",id:"the-about-me-section",level:2},{value:"The &#39;My Skills&#39; Section",id:"the-my-skills-section",level:2},{value:"Additional Skills",id:"additional-skills",level:3},{value:"The &#39;My Experience&#39; Section",id:"the-my-experience-section",level:2},{value:"The &#39;Open-Source Projects&#39; Section",id:"the-open-source-projects-section",level:2},{value:"The &#39;Contact Me&#39; Section",id:"the-contact-me-section",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"the-settings-file",children:"The Settings file"}),"\n",(0,i.jsxs)(n.p,{children:["The settings file is where you configure the portfolio app to your own\nrequirements. It is a JavaScript file which exports an object containing all the\nsettings. The file is located at ",(0,i.jsx)(n.code,{children:"./src/configure/settings.js"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"example-settings",children:"Example Settings"}),"\n",(0,i.jsxs)(n.p,{children:["As described in the ",(0,i.jsx)(n.a,{href:"installation#update-the-configuration",children:"installation"})," section, the portfolio app\ncomes with an example settings file. This file is located at\n",(0,i.jsx)(n.code,{children:"./src/configure/settings.example.js"}),". You can copy this file to\n",(0,i.jsx)(n.code,{children:"./src/configure/settings.js"})," and then edit it to your own requirements."]}),"\n",(0,i.jsx)(n.h2,{id:"the-settings-object",children:"The settings object"}),"\n",(0,i.jsx)(n.p,{children:"The settings object is a JavaScript object which contains all the settings for\nthe portfolio app. It is exported from the settings file as the default export."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// ./src/configure/settings.js\nexport const settings = {\n  // ...\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"This settings object is not set in stone, you can add your own settings to it\nand use them in your portfolio app. However, if you remove any of the existing\nsettings, the app will fail unless you also remove the code that uses them."}),"\n",(0,i.jsx)(n.h2,{id:"imports",children:"Imports"}),"\n",(0,i.jsx)(n.p,{children:"At the top of the settings file, you will find a number of imports. These are\ngenerally used to import logos and other images which are used in the portfolio.\nThis way, they will be included in the bundle and available to the app."}),"\n",(0,i.jsx)(n.p,{children:"You can change these to your own images if you wish, or add new ones, any format\nthat React can handle is fine. By default, the portfolio app uses PNG and SVG\nimages."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// The Hero Image\nimport heroLogo from "/src/assets/svg/undraw_Code_thinking.svg";\n\n// Used in the \'My Skills\' section\nimport { ReactComponent as apiLogo } from "/src/assets/icons/api.svg";\nimport cloudLogo from "/src/assets/icons/cloud.png";\nimport cssLogo from "/src/assets/icons/css3.png";\nimport databaseLogo from "/src/assets/icons/database.png";\nimport esxiLogo from "/src/assets/icons/esxi.png";\nimport htmlLogo from "/src/assets/icons/html5.png";\nimport linuxLogo from "/src/assets/icons/linux.png";\nimport pythonIcon from "/src/assets/icons/python.png";\nimport reactLogo from "/src/assets/icons/react.png";\n\n// Social Icons\nimport socialBlog from "/src/assets/social/blog.png";\nimport socialEmail from "/src/assets/social/email.png";\nimport socialFacebook from "/src/assets/social/facebook.png";\nimport socialGitHub from "/src/assets/social/github.png";\nimport socialLinkedIn from "/src/assets/social/linkedin.png";\nimport socialMedium from "/src/assets/social/medium.png";\nimport socialSnapchat from "/src/assets/social/snapchat.png";\nimport socialTikTok from "/src/assets/social/tiktok.png";\nimport socialTwitter from "/src/assets/social/twitter.png";\nimport socialYouTube from "/src/assets/social/youtube.png";\n'})}),"\n",(0,i.jsx)(n.h2,{id:"meta-sections",children:"'Meta' Sections"}),"\n",(0,i.jsxs)(n.p,{children:["There are a couple of settings at the top that you should change to your own\ndetails. These are the ",(0,i.jsx)(n.code,{children:"meta"})," settings, which are used to populate the ",(0,i.jsx)(n.strong,{children:"meta\ntags"}),", ",(0,i.jsx)(n.strong,{children:"name"}),", and ",(0,i.jsx)(n.strong,{children:"githubUsername"})," (the latter is used in the 'Open\nSource' section to display your repositories nicely)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'meta: {\n  description: "This is my portfolio",\n  link: "https://my-portfolio.com",\n},\nname: "My Name",\ngithubUsername: ["my-github-username"],\n// ...\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"name"})," value will be used in the title of the page, and in the page header."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that the ",(0,i.jsx)(n.code,{children:"githubUsername"})," setting is an array, this is because you can\nspecify multiple usernames. This is useful if you have multiple GitHub accounts."]}),"\n",(0,i.jsx)(n.h2,{id:"the-hero-section",children:"The 'Hero' Section"}),"\n",(0,i.jsx)(n.p,{children:"This is the section that contains the hero image and the text that appears on\ntop of it. You can change the image and the text to your own."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'hero: {\n    enabled: true,\n    image: heroLogo,\n    heading: "A Passion for Excellence",\n    message:\n      "A Results-oriented professional with a diverse experience and a " +\n      "proven knowledge of Application Development, IT Skills, End-User " +\n      "support, and Innovation. Driven to continuously learn and improve.",\n  },\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"image"})," setting is the name of the imported graphic file that you want to\nuse as the hero image. The ",(0,i.jsx)(n.code,{children:"heading"})," and ",(0,i.jsx)(n.code,{children:"message"})," settings are the text that\nappears at the side of the hero image. This appears as below:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Hero Image",src:t(1417).Z+"",width:"1196",height:"380"})}),"\n",(0,i.jsx)(n.h3,{id:"social-media-icons",children:"Social Media Icons"}),"\n",(0,i.jsxs)(n.p,{children:["The social media icons are the icons that appear at the bottom of the hero\nsection above, and also in the ",(0,i.jsx)(n.code,{children:"Contact"})," section at the bottom. You can add as\nmany or as few as you like, and you can remove any that are not relevant to you.\nIf you leave the ",(0,i.jsx)(n.code,{children:"link"})," setting as an empty string, the icon will not appear."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'social: [\n  // change to link to your social medial accounts. If link is blank, they\n  // wont be mentioned.\n  { name: "Email", link: "mailto:me@hello.com", icon: socialEmail },\n  { name: "Blog", link: "https://www.my-amazing-blog.com", icon: socialBlog },\n  {\n    name: "LinkedIn",\n    link: "https://www.linkedin.com/in/my-name/",\n    icon: socialLinkedIn,\n  },\n  {\n    name: "Medium",\n    link: "https://you.medium.com/",\n    icon: socialMedium,\n  },\n  { name: "GitHub", link: "https://github.com/myuser", icon: socialGitHub },\n  {\n    name: "YouTube",\n    link: "https://youtube.com/myuser",\n    icon: socialYouTube,\n  },\n  { name: "FaceBook", link: "", icon: socialFacebook },\n  { name: "SnapChat", link: "", icon: socialSnapchat },\n  { name: "TikTok", link: "", icon: socialTikTok },\n  {\n    name: "Twitter",\n    link: "https://twitter.com/myuser",\n    icon: socialTwitter,\n  },\n],\n'})}),"\n",(0,i.jsx)(n.h2,{id:"the-about-me-section",children:"The 'About Me' Section"}),"\n",(0,i.jsx)(n.p,{children:"This is a simple text section that lets the reader know a little about you. You\ncan put anything here that you fine relevant, but note its more informal\ninformation than the 'My Skills' section."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'about: [\n    "A Python and Backend developer with Frontend leanings, living in the " +\n      "beautiful (and wet) Scottish Borders with a Border Terrier, Border " +\n      "Collie (both mental) and a couple of Horses.",\n    "Based on an old Farm, I am surrounded by beautiful scenery and working " +\n      "fields. Tractors and Harversters before dawn yeah!",\n    "I am fully setup for Remote work with a dedicated office space and " +\n      "superfast Wireless Broadband, 20 minutes drive from Berwick-Upon-" +\n      "Tweed and Rail links to the rest of the UK, 90 minutes drive from " +\n      "either Edinburgh or Newcastle airports.",\n  ]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"the-my-skills-section",children:"The 'My Skills' Section"}),"\n",(0,i.jsxs)(n.p,{children:["This section is where you list your skills. You can add as many as you like,\nand you can add new icons to the ",(0,i.jsx)(n.code,{children:"import"})," section at the top of the file. You\ncan also remove any skill that is not relevant to you."]}),"\n",(0,i.jsxs)(n.p,{children:["it is an array of objects, each object represents a skill. The ",(0,i.jsx)(n.code,{children:"name"})," setting\nis the name of the skill, the ",(0,i.jsx)(n.code,{children:"icon"})," setting is the name of the imported icon\nfile, and the ",(0,i.jsx)(n.code,{children:"desc"})," setting is a brief description. You can have as many or as\nfew skills as you like."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'skills: [\n    {\n      name: "Python",\n      icon: pythonIcon,\n      desc:\n        "Experienced developer with skills in data manipulation and " +\n        "backend technologies, including Django.",\n    },\n    {\n      name: "React JS",\n      icon: reactLogo,\n      desc:\n        "Frontend Developer with experience in the latest React versions " +\n        "and methodology, including interfacing with API\'s and GraphQL.",\n    },\n    // ... repeat for each skill\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"My Skills",src:t(4978).Z+"",width:"1247",height:"662"})}),"\n",(0,i.jsx)(n.h3,{id:"additional-skills",children:"Additional Skills"}),"\n",(0,i.jsx)(n.p,{children:"Under the main skills section, there is a section for additional skills. This\nis a simple list of skills that you have, but are not necessarily your main\nskills. You can add as many as you like, and you can remove any that are not\nrelevant to you."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'additionalSkills: [\n  "JavaScript",\n  "Ruby",\n  "Microsoft Office Suite",\n  "Google GSuite",\n],\n'})}),"\n",(0,i.jsx)(n.h2,{id:"the-my-experience-section",children:"The 'My Experience' Section"}),"\n",(0,i.jsxs)(n.p,{children:["This is the section where you list your experience. It is an array of objects,\neach object represents a job. The ",(0,i.jsx)(n.code,{children:"title"})," setting is the job title, the ",(0,i.jsx)(n.code,{children:"dates"}),"\nsetting is the dates you worked there, the ",(0,i.jsx)(n.code,{children:"company"})," setting is the name of the\ncompany, the ",(0,i.jsx)(n.code,{children:"link"})," setting is the URL of the company website, and the\n",(0,i.jsx)(n.code,{children:"responsibilites"})," section is another array of objects, each object represents a\nresponsibility with a ",(0,i.jsx)(n.code,{children:"name"})," and ",(0,i.jsx)(n.code,{children:"description"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'experience: [\n    {\n      title: "Top Notch Developer",\n      dates: "2014 to now",\n      company: "A big Web development company",\n      link: "https://bigwebdevcorp.com",\n      responsibilities: [\n        {\n          name: "I did this",\n          desc: "This was actually what I did, and how good I was at it!",\n        },\n        {\n          name: "I also did this cool thing",\n          desc: "You won\'t believe how good I was at this thing",\n        },\n      ],\n    },\n    {\n      title: "Crap Developer",\n      dates: "2010 to 2014",\n      company: "A back street Web development company",\n      link: "https://cowboy-webdesign.com",\n      responsibilities: [\n        {\n          name: "Tea Maker",\n          desc: "I was really bad at this and put the milk in FIRST.",\n        },\n        {\n          name: "Garbage Collector",\n          desc:\n            "Javascript does this automatically so I didn\'t really do much. " +\n            "However, they paid me in Chicken Nuggets so RESULT!",\n        },\n      ],\n    },\n],\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"My Experience",src:t(9197).Z+"",width:"1247",height:"456"})}),"\n",(0,i.jsx)(n.h2,{id:"the-open-source-projects-section",children:"The 'Open-Source Projects' Section"}),"\n",(0,i.jsxs)(n.p,{children:["If you have specified a ",(0,i.jsx)(n.code,{children:"githubUsername"})," in the meta section (and added a GitHub\n",(0,i.jsx)(n.strong,{children:"Personal Access Token"}),"), then this section will appear. It is a list of your\n",(0,i.jsx)(n.strong,{children:"public"})," GitHub repositories and is automatically generated from your GitHub\naccount."]}),"\n",(0,i.jsxs)(n.p,{children:["By default it shows the 6 '",(0,i.jsx)(n.strong,{children:"pinned"}),"' repositories, with the rest appearing\nunder the 'Show more Public Repositories' toggle, hidden by default. You can\nalso toggle the complete list of repositories by clicking the inverted chevron\nat the top."]}),"\n",(0,i.jsxs)(n.p,{children:["You can have several GitHub accounts, and you can specify them all in the\n",(0,i.jsx)(n.code,{children:"githubUsername"})," setting as an array."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Open Source Projects",src:t(1714).Z+"",width:"1216",height:"860"})}),"\n",(0,i.jsx)(n.h2,{id:"the-contact-me-section",children:"The 'Contact Me' Section"}),"\n",(0,i.jsx)(n.p,{children:"The last section is the 'Contact Me' section. This is a simple paragraph and is\nnot editable at this time. It shows your social buttons again."}),"\n",(0,i.jsx)(n.p,{children:"This section will be updated in the future to allow you to add your own\ninformation and links."})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9197:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/experience-image-2c87c00e021e07924091954a03f968c6.png"},1417:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hero-image-b341d7c6a0b751729b0ca5559987f88c.png"},1714:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/open-source-image-f39c81930e54540a36ba6b16f7bcf493.png"},4978:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/skills-image-9b13d194e87a13bbc94f4e162d635a91.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var i=t(7294);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);