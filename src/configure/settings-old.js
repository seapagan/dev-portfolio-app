import apiLogo from "/src/assets/icons/api.svg";
import cloudLogo from "/src/assets/icons/cloud.png";
import cssLogo from "/src/assets/icons/css3.png";
import databaseLogo from "/src/assets/icons/database.png";
import esxiLogo from "/src/assets/icons/esxi.png";
import htmlLogo from "/src/assets/icons/html5.png";
import linuxLogo from "/src/assets/icons/linux.png";
import pythonIcon from "/src/assets/icons/python.png";
import reactLogo from "/src/assets/icons/react.png";
import socialBlog from "/src/assets/social/blog.png";
import socialEmail from "/src/assets/social/email.png";
import socialFacebook from "/src/assets/social/facebook.png";
import socialGitHub from "/src/assets/social/github.png";
import socialLinkedIn from "/src/assets/social/linkedin.png";
import socialMedium from "/src/assets/social/medium.png";
import socialSnapchat from "/src/assets/social/snapchat.png";
import socialTikTok from "/src/assets/social/tiktok.png";
import socialTwitter from "/src/assets/social/twitter.png";
import socialYouTube from "/src/assets/social/youtube.png";
import heroLogo from "/src/assets/svg/undraw_Code_thinking.svg";

export const settings = {
  meta: {
    description:
      "A Passionate and driven Python, Django, React programmer, API Writer; " +
      "Frontend and Backend geek; Lover of Pizza and unrepentant Trekkie",
    link: "https://www.gnramsay.com",
  },
  name: "Grant Ramsay",
  githubUsername: ["seapagan", "gnramsay"],
  githubToken: import.meta.env.VITE_GH_TOKEN,
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
      "Collie (both mental) and a couple of Horses.",
    "Based on an old Farm, I am surrounded by beautiful scenery and working " +
      "fields. Tractors and Harversters before dawn yeah!",
    "I am fully setup for Remote work with a dedicated office space and " +
      "superfast Wireless Broadband, 20 minutes drive from Berwick-Upon-" +
      "Tweed and Rail links to the rest of the UK, 90 minutes drive from " +
      "either Edinburgh or Newcastle airports.",
  ],
  social: [
    /*
     * change to link to your social medial accounts. If link is blank, they
     * wont be mentioned.
     */
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
    {
      name: "Twitter",
      link: "https://www.twitter.com/gnramsay_dev",
      icon: socialTwitter,
    },
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
        "Developed API's using FastAPI & Django (both Python), interfacing " +
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
        "Fully experienced in modern CSS3 technologies, Including Flexbox " +
        " and Grid.",
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

  projects: [
    {
      name: "Project 1",
      repo: "https://github.com/seapagan/project1",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Eligendi explicabo, expedita eum cumque quia maxime, voluptatibus
        ullam unde id accusantium consequatur deserunt earum! Dicta aperiam
        recusandae tempore nisi, suscipit alias.`,
      image: "http://via.placeholder.com/1024x768",
      website: "https://www.gnramsay.com",
    },
    {
      name: "Project 2",
      repo: "https://github.com/seapagan/project2",
      desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Maiores fuga quod veniam corporis dolorem id beatae, minima quaerat
        temporibus, veritatis hic expedita ex quae aspernatur animi! Obcaecati
        modi minus tenetur!`,
      image: "http://via.placeholder.com/1024x768",
      website: "https://www.gnramsay.com",
    },
    {
      name: "Project 3",
      repo: "https://github.com/seapagan/project3",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio, blanditiis libero provident exercitationem, vitae eligendi
        excepturi accusamus enim culpa minima sapiente voluptatibus nesciunt
        adipisci modi ducimus nulla? Dignissimos, dolorem culpa.`,
      image: "http://via.placeholder.com/1024x768",
      website: "https://www.gnramsay.com",
    },
  ],
  experience: [
    {
      enabled: true,
      title: "Python and Full-Stack Developer and Learner",
      dates: "Dec 2020 to Present",
      company: "Freelance",
      link: "https://www.gnramsay.com",
      responsibilities: [
        {
          name: "Frontend / Backend design",
          desc:
            "Creating Backend APi's with Python (FastAPI & Django), and " +
            "Frontends with React or Django. Recently I've been getting into " +
            "NextJS and (specifically) Remix - I LOVE the latter.",
        },
        {
          name: "Releasing Utilities and Packages",
          desc:
            "I have created and released several Python and React packages " +
            "and a VSCode extension. I have also contributed to several " +
            "other third-party Open-Source projects. These have all been " +
            "publicly released on the relevant package repositories - PyPi, " +
            "NPM and the VSCode store.",
        },
        {
          name: "Learn and improve",
          desc:
            "During this period I have dedicated my spare time to learning " +
            "new technologies and improving my skills in those I already " +
            "use. I have a passion for learning and researching new methods " +
            "and technologies both on the Front and Back end. All my current " +
            "personal work is publicly availiable and open-source.",
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
