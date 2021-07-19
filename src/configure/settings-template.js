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
import socialBlog from "../assets/social/blog.png";
import socialEmail from "../assets/social/email.png";
import socialFacebook from "../assets/social/facebook.png";
import socialGitHub from "../assets/social/github.png";
import socialLinkedIn from "../assets/social/linkedin.png";
import socialMedium from "../assets/social/medium.png";
import socialSnapchat from "../assets/social/snapchat.png";
import socialTikTok from "../assets/social/tiktok.png";
import socialTwitter from "../assets/social/twitter.png";
import socialYouTube from "../assets/social/youtube.png";
import heroLogo from "../assets/svg/undraw_Code_thinking.svg";

export const settings = {
  meta: {
    description:
      "A Passionate and driven Python, Django, React developer, API Writer; " +
      "Frontend and Backend geek; Lover of Pizza and unrepentant Trekkie",
    link: "https://www.gnramsay.com",
  },
  name: "Master Developer", // your name
  githubUsername: "masterdev",
  githubToken: "z0w45tkwiecskfglksoaietricw4act0aw4t0",
  hero: {
    image: heroLogo,
    heading: "A Passion to Excel",
    message:
      "A Results-oriented professional with a diverse experience and a proven \
      knowledge of Application Development, IT Skills, End-User support, and \
      Innovation.",
  },
  about: [
    "A Python and Backend developer with Frontend leanings, living in the \
    beautiful (and wet) Scottish Borders with a Border Terrier, Border Collie \
    (both mental), A Horse, and some lodger sheep.",
    "Based on an old Farm, I am surrounded by beautiful scenery and working \
    fields. Tractors and Harversters before dawn yeah!",
    "I am fully setup for Remote work with a dedicated office space and \
    superfast Wireless Broadband, 20 minutes drive from Berwick-Upon-Tweed \
    and Rail links to the rest of the UK, 90 minutes from either Edinburgh or \
    Newcastle airports.",
  ],
  social: [
    // change to link to your social medial accounts. If link is blank, they
    // wont be mentioned.
    { name: "Email", link: "mailto:me@hello.com", icon: socialEmail },
    { name: "Blog", link: "", icon: socialBlog },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/my-name/",
      icon: socialLinkedIn,
    },
    {
      name: "Medium",
      link: "https://you.medium.com/",
      icon: socialMedium,
    },
    { name: "GitHub", link: "github", icon: socialGitHub },
    { name: "YouTube", link: "youtube", icon: socialYouTube },
    { name: "FaceBook", link: "facebook", icon: socialFacebook },
    { name: "SnapChat", link: "snapchat", icon: socialSnapchat },
    { name: "TikTok", link: "tiktok", icon: socialTikTok },
    { name: "Twitter", link: "twitter", icon: socialTwitter },
  ],
  skills: [
    {
      name: "Python",
      icon: pythonIcon,
      desc: "Experienced developer with skills in data manipulation and \
      backend technologies, including Django.",
    },
    {
      name: "React JS",
      icon: reactLogo,
      desc: "Frontend Developer with experience in the latest React versions \
      and methodology, including interfacing with API's and GraphQL.",
    },
    {
      name: "API Developer",
      icon: apiLogo,
      desc: "Developed API's using Django(Python) and Express.js, interfacing \
      with multiple Database servers and live devices.",
    },
    {
      name: "HTML",
      icon: htmlLogo,
      desc: "Fully experienced in all aspects of modern HTML5.",
    },
    {
      name: "CSS",
      icon: cssLogo,
      desc: "Experienced in modern CSS3 technologies, Including Flexbox and \
      Grid.",
    },
    {
      name: "Database Integration",
      icon: databaseLogo,
      desc: "Able to integrate the most popular SQL and NoSQL databases with \
      Front and Backend technologies.",
    },
    {
      name: "Linux",
      icon: linuxLogo,
      desc: "Very experienced Linux Sysadmin, installer and troubleshooter.",
    },
    {
      name: "Cloud Hosting",
      icon: cloudLogo,
      desc: "Familiar with Google Cloud (and Firebase), Amazon AWS, Digital \
      Ocean and similar technologies",
    },
    {
      name: "VMWare ESXi",
      icon: esxiLogo,
      desc: "Skilled in the installation and administration of VMWare EXSi, \
        including VCenter.",
    },
  ],
  additionalSkills: [
    "JavaScript",
    "Ruby",
    "Microsoft Office Suite",
    "Google GSuite",
  ],

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
