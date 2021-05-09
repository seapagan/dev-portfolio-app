// rename or copy this to 'settings.js' in the same folder, and change the
// values to suit your own details

// comment out these imports if you are not using the particular icon
import apiLogo from "../assets/icons//api.png";
import cloudLogo from "../assets/icons/cloud.png";
import cssLogo from "../assets/icons/css3.png";
import databaseLogo from "../assets/icons/database.png";
import esxiLogo from "../assets/icons/esxi.png";
import htmlLogo from "../assets/icons/html5.png";
import linuxLogo from "../assets/icons/linux.png";
import pythonIcon from "../assets/icons/python.png";
import reactLogo from "../assets/icons/react.png";

export const settings = {
  name: "Master Developer", // your name
  githubUsername: "masterdev",
  githubToken: "z0w45tkwiecskfglksoaietricw4act0aw4t0",
  skills: [
    {
      name: "Python",
      icon: pythonIcon,
      desc:
        "Experienced developer with skills in data manipulation and backend \
        technologies, including Django.",
    },
    {
      name: "React JS",
      icon: reactLogo,
      desc:
        "Frontend Developer with experience in the latest React versions and \
        methodology, including interfacing with API's and GraphQL.",
    },
    {
      name: "API Developer",
      icon: apiLogo,
      desc:
        "Developed API's using Django(Python) and Express.js, interfacing with \
        multiple Database servers and live devices.",
    },
    {
      name: "HTML",
      icon: htmlLogo,
      desc: "Fully experienced in all aspects of modern HTML5.",
    },
    {
      name: "CSS",
      icon: cssLogo,
      desc:
        "Experienced in modern CSS3 technologies, Including Flexbox and Grid.",
    },
    {
      name: "Database Integration",
      icon: databaseLogo,
      desc:
        "Able to integrate the most popular SQL and NoSQL databases with Front \
        and Backend technologies.",
    },
    {
      name: "Linux",
      icon: linuxLogo,
      desc: "Very experienced Linux Sysadmin, installer and troubleshooter.",
    },
    {
      name: "Cloud Hosting",
      icon: cloudLogo,
      desc:
        "Familiar with Google Cloud (and Firebase), Amazon AWS, Digital Ocean \
        and similar technologies",
    },
    {
      name: "VMWare ESXi",
      icon: esxiLogo,
      desc:
        "Skilled in the installation and administration of VMWare EXSi, \
        including VCenter.",
    },
  ],
  additionalSkills: [
    "JavaScript",
    "Ruby",
    "Microsoft Office Suite",
    "Google GSuite",
  ],
  about: {
    // change to link to your social medial accounts. If blank, they wont
    // be mentioned.
    socialBlog: "",
    socialFacebook: "",
    socialLinkedin: "",
    socialMedium: "",
    socialSnapchat: "",
    socialTiktok: "",
    socialTwitter: "",
    socialYoutube: "",
  },
  experience: [
    {
      title: "Top Notch Developer",
      dates: "2014 to now",
      company: "A big Web development company",
      link: "https://bigwebdevcorp.com",
      responsibilities: [
        {
          name: "I did this",
          desc: "This was actually what I did, and how good I was at it!",
        },
        {
          name: "I also did this cool thing",
          desc: "You won't believe how good I was at this thing",
        },
      ],
    },
    {
      title: "Crap Developer",
      dates: "2010 to 2014",
      company: "A back street Web development company",
      link: "https://cowboy-webdesign.com",
      responsibilities: [
        {
          name: "Tea Maker",
          desc: "I was really bad at this and put the milk in FIRST.",
        },
        {
          name: "Garbage Collector",
          desc:
            "Javascript does this automatically so I didn't really do much. " +
            "However, they paid me in Chicken Nuggets so RESULT!",
        },
      ],
    },
  ],
};
