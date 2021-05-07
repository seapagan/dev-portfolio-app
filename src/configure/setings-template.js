// rename or copy this to 'settings.js' in the same folder, and change the
// values to suit your own details

export const settings = {
  name: "Master Develpoer", // your name
  skills: [
    // list of skills objects
    {
      name: "Skill 1",
      desc: "Blah blah blah about this skill",
    },
    {
      name: "Skill 2",
      desc: "Blah blah blah about this skill",
    },
    {
      name: "Skill 3",
      desc: "Blah blah blah about this skill",
    },
    {
      name: "Skill 4",
      desc: "Blah blah blah about this skill",
    },
    {
      name: "Skill 5",
      desc: "Blah blah blah about this skill",
    },
  ],
  about: {
    // change to link to your social medial accounts. If blank, they wont
    // be mentioned.
    socialLinkedin: "",
    socialFacebook: "",
    socialTwitter: "",
    socialTiktok: "",
    socialSnapchat: "",
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
      link: "https://coyboy-web-design.com",
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
