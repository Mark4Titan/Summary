import avatar from "./avatar.png";

export const Resume = {
  language: [{ UA: "UA" }],
  about: [
    { title: "Про мене" },
    { avatar },
    // {
    //   title: "",
    //   name: "",
    //   avatar,
    //   aboutMe: "",
    //   address: "",
    //   phone: "",
    //   mail: "",
    //   social: { linkedinIn: "", github: "", twitter: "", facebook: "" },
    // },
    {
      fullName: { name: "Василь ", surname: "Андрейчук" },
      address: "Україна · м. Хмельницький",
      phone: "· (+380) 983366033",
      mail: "andreychukvasiliy@gmail.com",
      aboutMe:
        "Я маю досвід використання гнучких фреймворків, щоб забезпечити надійний синопсис для оглядів високого рівня. Ітераційні підходи до корпоративної стратегії сприяють спільному мисленню для просування загальної ціннісної пропозиції.",
      social: {
        linkedinIn: "https://www.linkedin.com/in/vasiliy-andreichuk-8a6945211/",
        github: "https://github.com/Mark4Titan?tab=repositories",
        telegram: "https://t.me/MArkTitan",
        youtube: "https://www.youtube.com/channel/UCWIV9JNJ6nFAI8P9_f1BPhA",
      },
    },
  ],
  experience: [
    { title: "Досвід" },
    // { position: "", period: "", company: "", content: "" },
    {
      position: "SENIOR WEB DEVELOPER",
      period: "March 2013 - Present",
      company: "INTELITEC SOLUTIONS",
      content:
        "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
    },
    {
      position: "WEB DEVELOPER",
      period: "December 2011 - March 2013",
      company: "INTELITEC SOLUTIONS",
      content:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
    },
    {
      position: "JUNIOR WEB DESIGNER",
      period: "July 2010 - December 2011",
      company: "SHOUT! MEDIA PRODUCTIONS",
      content:
        "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",
    },
    {
      position: "WEB DESIGN INTERN",
      period: "September 2008 - June 2010",
      company: "SHOUT! MEDIA PRODUCTIONS",
      content:
        "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.",
    },
  ],

  education: [
    { title: "освіта" },
    // { institution: "", period: "", received: "", faculty: "", GPA: "" },
    {
      institution: "UNIVERSITY OF COLORADO BOULDER",
      period: "August 2006 - May 2010",
      received: "BACHELOR OF SCIENCE",
      faculty: "Computer Science - Web Development Track",
      GPA: "3.23",
    },
    {
      institution: "JAMES BUCHANAN HIGH SCHOOL",
      period: "August 2002 - May 2006",
      received: "TECHNOLOGY MAGNET PROGRAM",
      faculty: "",
      GPA: "3.56",
    },
  ],
  skills: [
    { title: "навички" },
    // { Title: "", workflow: [], tools: [] },
    {
      Title: "МОВИ ПРОГРАМУВАННЯ ТА ІНСТРУМЕНТИ",
      tools: [
        "html5",
        "css3",
        "javaScript",
        "sass",
        "css",
        "less",
        "npm",
        "react",
        "redux",
        "nodejs",
      ],
      workflow: [
        "Mobile-First, Responsive Design",
        "Cross Browser Testing & Debugging",
        "Cross Functional Teams",
        "Agile Development & Scrum",
      ],
    },
  ],
  interests: [
    { title: "інтереси" },
    // { content: "" },
    {
      content:
        "Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.",
    },
    {
      content:
        "When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.",
    },
  ],
  awards: [
    {
      title: "нагороди",
      expansion: "НАГОРОДИ ТА СЕРТИФІКАЦІЇ",
    },
    // { Title: "", content: [] },
    {
      content: [
        "Google Analytics Certified Developer",
        "Mobile Web Specialist - Google Certification",
        "1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009",
        "1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
        "2 nd Place - University of Colorado Boulder - Emerging Tech Competition 2008",
        "1 st Place - James Buchanan High School - Hackathon 2006",
        "3 rd Place - James Buchanan High School - Hackathon 2005",
      ],
    },
  ],
};

export default Resume;
