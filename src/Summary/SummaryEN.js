
import avatar from "./avatar2.webp";
import certificate from "./certificate.webp";

export const Resume = {
  language: [{ EN: "EN" }],
  about: [
    { title: "about" },
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
      fullName: { name: "Vasyl ", surname: "Andreychuk" },
      address: "Ukraine · Khmelnytskyi",
      phone: "+380983366033",
      mail: "andreychukvasiliy@gmail.com",
      aboutMe:
        "I have experience of using flexible frameworks to provide a robust synopsis for high-level interactions.",
      social: {
        linkedIn: "https://www.linkedin.com/in/vasiliy-andreichuk-8a6945211/",
        github: "https://github.com/Mark4Titan?tab=repositories",
        telegram: "https://t.me/MArkTitan",
        youtube: "https://www.youtube.com/channel/UCWIV9JNJ6nFAI8P9_f1BPhA",
      },
    },
  ],
  experience: [
    { title: "experience" },
    // { position: "", period: "", company: "", content: "" },
    {
      position: "Product Manager",
      period: "July 2015 - June 2016",
      company: "'Technospace'",
      content:
        "On Delphi 6 (Object Pascal), I created a site parser that helped in timely response to price changes.",
    },
    {
      position: "System administrator",
      period: "June 2016 - April 2018",
      company: "'SmartPhone'",
      content:
        "In this position, in addition to management, I was also involved in the development of small programs on Delphi 7 (Object Pascal) and the creation of dynamic custom reports on FastReport.",
    },
    {
      position: "Regional director",
      period: "January 2020",
      company: "'Siti Case'",
      content:
        "with the help of Delphi 7 (Object Pascal), automated the synchronous closing of cash registers in Ukraine and the output of standardized reports.",
    },
    {
      position: "Scrum Master / Front-end Developer",
      period: "December 2021",
      company: "'GoIt'",
      content:
        "After training as a Full Stack Developer, I joined the team as a developer and a Scrum Master on the project development.",
    },
    {
      position: "Front-end Developer",
      period: "December 2022 and until now",
      company: "'PRGRSS'",
      content: "Part-time application developer at PRGRSS company.",
    },
  ],

  education: [
    { title: "education" },
    // { institution: "", period: "", received: "", faculty: "", GPA: "" },
    {
      institution: "Khmelnytskyi Institute of Human Development Ukraine",
      period: "September 2007 - June 2011",
      received: "BACHELOR OF SCIENCES",
      faculty: "0301 Social and political sciences 6.030102 Psychology",
    },
    {
      institution: "GoIt Academy",
      period: "December 2020 - December 2022",
      received: "Full Stack Developer",
      faculty: "",
    },
  ],
  skills: [
    { title: "skills" },
    // { Title: "", workflow: [], tools: [] },
    {
      Title: "PROGRAMMING LANGUAGES & TOOLS",
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
        "typeScript",
        "nodejs",
        "mongodb",
        "express",
        "docker",
        "postman",
        "jira",
        "trello",
        "gitHub",
        "grid",
        "emotionUi",
        "muiMaterial",
        "framerMotion",
      ],
      workflow: [
        "Mobile first, responsive design",
        "Cross-Browser Testing and Debugging",
        "Cross-functional teams",
        "Agile Development and Scrum",
        "The entire layout is on a grid",
      ],
    },
  ],
  interests: [
    { title: "interests" },
    // { content: "" },
    {
      content:
        "I am passionate about electronics and I like to fix electronics, which are not perfect in some ways to be 10/10, in my opinion.",
    },
    {
      content:
        "My other passion is programming microcontrollers and integrating them into everyday life.",
    },
  ],
  projects: [
    { title: "Projects" },
    // { link: "" },
    {
      project: "Test task 'Quick note'",
      link: "https://mark4titan.github.io/notes_as_on_apple_macos/",
      comit: "Libraries: 'emotion/styled' 'react-icons' 'nanoid' 'moment' 'axios'",
    },
    {
      project: "Custom comic editor module",
      link: "https://mark4titan.github.io/division_of_book_pages/",
      comit: "Libraries: 're-resizable' 'react-draggable' 'ImageDragger'",
    },
    {
      project:
        "Speed ​​testing module between subscribers and the server network",
      link: "https://mark4titan.github.io/test_2/",
      comit:
        "Libraries: 'emotion/styled' 'reduxjs/toolkit' 'reduxjs-toolkit-persist' 'testing-library/user-event'",
    },
    {
      project: "Static online store (single page application)",
      link: "https://mark4titan.github.io/simple-shop-react/",
      comit:
        "Libraries: 'reduxjs/toolkit' 'react-icons' 'redux-persist' 'emotion/styled' 'emailjs'",
    },
    {
      project: "Individual calorie calculator (single page application)",
      link: "https://ds-slimmoms.netlify.app/",
      comit:
        "Libraries: 'reduxjs/toolkit' 'react-icons' 'axios' 'notiflix' 'react-redux' 'react-loader-spinner' 'moment'",
    },
    {
      project: "Landing company 'Bullion Network' (single page application)",
      link: "https://mark4titan.github.io/Bullion_network/",
      comit: "Libraries: 'webpack -> air-datepicker' 'jQuery'",
    },
    {
      project: "Landing company 'Tlayen Web Builder'",
      link: "https://tlayen-builder.progressio.agency/",
      comit: "Libraries: 'JavaScript' 'CSS' 'html'",
    },
  ],
  awards: [
    {
      title: "awards",
      expansion: "AWARDS & CERTIFICATIONS",
    },
    // { Title: "", content: [] },
    {
      content: [certificate],
    },
  ],
};

export default Resume;

