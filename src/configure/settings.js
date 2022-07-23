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
      "A Passionate and driven Python, Django, React programmer, API Writer; " +
      "Frontend and Backend geek; Lover of Pizza and unrepentant Trekkie",
    link: "https://www.gnramsay.com",
  },
  name: "Grant Ramsay",
  githubUsername: ["seapagan", "gnramsay"],
  githubToken: process.env.REACT_APP_GH_TOKEN,
  ga_id: "UA-202732836-1",
  fem_username: "seapagan",
  hero: {
    enabled: true,
    image: heroLogo,
    heading: "A Passion for Excellence",
    message:
      "A Results-oriented professional with a diverse experience and a " +
      "proven knowledge of Application Development, IT Skills, End-User " +
      "support, and Innovation. Driven to continuously learn and improve.",
  },
  about: [
    "A Python and Backend developer with Frontend leanings, living in the " +
      "beautiful (and wet) Scottish Borders with a Border Terrier, Border " +
      "Collie (both mental), a Horse, and some lodger sheep.",
    "Based on an old Farm, I am surrounded by beautiful scenery and working " +
      "fields. Tractors and Harversters before dawn yeah!",
    "I am fully setup for Remote work with a dedicated office space and " +
      "superfast Wireless Broadband, 20 minutes drive from Berwick-Upon-" +
      "Tweed and Rail links to the rest of the UK, 90 minutes drive from " +
      "either Edinburgh or Newcastle airports.",
  ],
  social: [
    // change to link to your social medial accounts. If link is blank, they
    // wont be mentioned.
    { name: "Email", link: "mailto:grant@gnramsay.com", icon: socialEmail },
    { name: "Blog", link: "", icon: socialBlog },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/grant-ramsay-5755271a4/",
      icon: socialLinkedIn,
    },
    {
      name: "Medium",
      link: "https://seapagan.medium.com/",
      icon: socialMedium,
    },
    { name: "GitHub", link: "https://github.com/seapagan", icon: socialGitHub },
    { name: "YouTube", link: "", icon: socialYouTube },
    { name: "FaceBook", link: "", icon: socialFacebook },
    { name: "SnapChat", link: "", icon: socialSnapchat },
    { name: "TikTok", link: "", icon: socialTikTok },
    { name: "Twitter", link: "", icon: socialTwitter },
  ],
  skills: [
    {
      name: "Python",
      icon: pythonIcon,
      desc:
        "Experienced developer with skills in data manipulation and " +
        "backend technologies, including Django.",
    },
    {
      name: "React JS",
      icon: reactLogo,
      desc:
        "Frontend Developer with experience in the latest React versions " +
        "and methodology, including interfacing with API's and GraphQL.",
    },
    {
      name: "API Developer",
      icon: apiLogo,
      desc:
        "Developed API's using Django(Python) and Express.js, interfacing " +
        "with multiple Database servers and live devices.",
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
        "Experienced in modern CSS3 technologies, Including Flexbox and " +
        "Grid.",
    },
    {
      name: "Database Integration",
      icon: databaseLogo,
      desc:
        "Able to integrate the most popular SQL and NoSQL databases with " +
        "Front and Backend technologies.",
    },
    {
      name: "Linux",
      icon: linuxLogo,
      desc: "Very experienced Linux Sysadmin, installer and troubleshooter.",
    },
    {
      name: "Cloud Services",
      icon: cloudLogo,
      desc:
        "Familiar with Google Cloud (and Firebase), Amazon AWS, Digital " +
        "Ocean and similar technologies",
    },
    {
      name: "VMWare ESXi",
      icon: esxiLogo,
      desc:
        "Skilled in the installation and administration of VMWare EXSi, " +
        "including VCenter.",
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
      enabled: true,
      title: "Developer, IT and Network Engineer",
      dates: "Dec 2020 to Present",
      company: "Freelance",
      link: "https://www.gnramsay.com",
      responsibilities: [
        {
          name: "Frontend / Backend design",
          desc: "Creating APi's with Python Django, Frontends using React.",
        },
        {
          name: "Remote IT troubleshooting and administration",
          desc:
            "Remote and on-site support for Linux servers. Upgrades, " +
            "Troubleshooting, installing LAMP and LEMP systems.",
        },
        {
          name: "Learn and improve",
          desc:
            "During this time I have not stopped learning new " +
            "technologies and improving my skills in those I already use. I " +
            "have a passion for learning and researching new methods and " +
            "technologies, so currently improving my knowledge of Numpy and " +
            "Pandas while learning Machine Learning and Data Science topics.",
        },
      ],
    },
    {
      title: "Lead Engineer then Technical Lead",
      dates: "May 2017 - Oct 2020",
      company: "BorderLink Broadband Ltd",
      link: "https://www.borderlink.co.uk",
      responsibilities: [
        {
          name: "Co-Founder and first Installation Engineer of this Startup",
          desc:
            "Responsible for installing equipment on customer premises, " +
            "working at height, creating and maintaining a network of " +
            "Wireless Base Stations across the Scottish Borders.",
        },
        {
          name: "Led the Company's real-time support",
          desc: "Support customers and Engineers in the field as required",
        },
        {
          name: "Design and install CCTV and internal Wi-Fi networks",
          desc: "",
        },
        {
          name: "Server Install and administration",
          desc:
            "Setting up and maintaining back-end servers running VMWare " +
            "ESXi, with assorted Operating systems and applications.",
        },
        {
          name: "Develop in-house applications and scripts as needed",
          desc:
            "Wrote a Python (Django) system to query all the Antenna & " +
            "Router hardware in the network and display it in a helpful web " +
            "front-end. I also designed an API for JSON access to same.",
        },
      ],
    },
    {
      title: "Offshore Oil and Gas Crew Manager",
      dates: "Feb 2002 - Aug 2016",
      company: "Compagnie Générale de Géophysique (Marine)",
      link: "https://www.cgg.com",
      responsibilities: [
        {
          name:
            "Manage a high-capacity 3D multi-streamer Seismic research " +
            "vessel",
          desc:
            "Working in challenging environments and with demanding " +
            "clients, with a varied team to ensure that production targets " +
            "are met or exceeded",
        },
        {
          name: "Take ownership of the vessel QHSE process",
          desc:
            "Overall responsibility for the on-board QHSE system, " +
            "trained in incident investigation and reporting. Plan and " +
            "chair the monthly safety meetings then follow up and close any " +
            "outstanding action points. Ensure that all crew meet their " +
            "required targets for HSE training and reporting and that all " +
            "hazards or unsafe acts are immediately logged then followed up " +
            "and closed.",
        },
        {
          name:
            "Perform well under extreme levels of stress and time " +
            "constraints",
          desc:
            "making correct and timely decisions to ensure that the " +
            "operation continues smoothly without impact on surrounding " +
            "marine traffic or wildlife. First line of contact between the " +
            "Company and Client (usually a major oil company) for all " +
            "quality, operational and contractual issues. ",
        },
        {
          name: "On site coordinator for mutli-vessel derig in Dunkirk",
          desc:
            "Coordinate the derig and cold-stacking of 6 state-of-the-" +
            "art vessels, leaving them in a state so that they could be re-" +
            "commisioned when needed.",
        },
      ],
    },
    {
      title: "Lead Instrument Engineer / Deck Lead / Navigator",
      dates: "Apr 1992 - Dec 2001",
      company: "Various Marine Seismic Survey Companies",
      link: "",
      responsibilities: [
        {
          name: "Perform Seismic surveys both on land and at sea",
          desc: "Working safely and reaching production targets.",
        },
        {
          name:
            "Line Crew Chief on land, shallow water, and deep-water " +
            "Seismic surveys",
          desc:
            "Responsible for the kilometers of Seismic cables – " +
            "deploying, recovering, and repairing. I also maintained all the " +
            "electronic equipment or oversaw those who did.",
        },
        {
          name: "Programming as needed",
          desc:
            "Writing programs, scripts and interfaces as needed to " +
            "improve the workflow and efficiency of the crews.",
        },
      ],
    },
  ],
};
