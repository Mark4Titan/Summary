
import avatar from "./avatar.webp";
import certificate from "./certificate.webp";

export const Resume = {
  language: [{ DEU: "DEU" }],
  about: [
    { title: "Über mich" },
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
      address: "Ukraine · Chmelnyzkyj",
      phone: "+380983366033",
      mail: "andreychukvasiliy@gmail.com",
      aboutMe:
        "Ich habe Erfahrung in der Verwendung flexibler Frameworks, um eine robuste Synopse für Interaktionen auf hoher Ebene bereitzustellen.",
      social: {
        linkedIn: "https://www.linkedin.com/in/vasiliy-andreichuk-8a6945211/",
        github: "https://github.com/Mark4Titan?tab=repositories",
        telegram: "https://t.me/MArkTitan",
        youtube: "https://www.youtube.com/channel/UCWIV9JNJ6nFAI8P9_f1BPhA",
      },
    },
  ],
  experience: [
    { title: "Erfahrung" },
    // { position: "", period: "", company: "", content: "" },
    {
      position: "Produktmanager",
      period: "Juli 2015 - Juni 2016",
      company: "'Technospace'",
      content:
        "Auf Delphi 6 (Object Pascal) habe ich einen Website-Parser erstellt, der bei der rechtzeitigen Reaktion auf Preisänderungen half.",
    },
    {
      position: "Systemadministrator",
      period: "Juni 2016 - April 2018",
      company: "'SmartPhone'",
      content:
        "In dieser Position war ich neben dem Management auch an der Entwicklung kleiner Programme auf Delphi 7 (Object Pascal) und der Erstellung dynamischer benutzerdefinierter Berichte auf FastReport beteiligt.",
    },
    {
      position: "Regionaldirektor",
      period: "Januar 2020",
      company: "'Siti Case'",
      content:
        "mit Hilfe von Delphi 7 (Object Pascal), das synchrone Schließen von Kassen in der Ukraine und die Ausgabe von standardisierten Reports automatisiert.",
    },
    {
      position: "Scrum Master / Frontend-Entwickler",
      period: "Dezember 2021",
      company: "'GoIt'",
      content:
        "Nach der Ausbildung zum Full Stack Developer trat ich als Entwickler und Scrum Master in die Projektentwicklung bei.",
    },
    {
      position: "Front-end Developer",
      period: "Dezember 2022 und bis jetzt",
      company: "'PRGRSS'",
      content: "Anwendungsentwickler in Teilzeit bei der Firma PRGRSS.",
    },
  ],

  education: [
    { title: "Bildung" },
    // { institution: "", period: "", received: "", faculty: "", GPA: "" },
    {
      institution: "Khmelnytskyi Institute of Human Development Ukraine",
      period: "September 2007 - Juni 2011",
      received: "BACHELOR DER WISSENSCHAFTEN",
      faculty: "0301 Sozial- und Politikwissenschaften 6.030102 Psychologie",
    },
    {
      institution: "GoIt Academy",
      period: "Dezember 2020 - Dezember 2022",
      received: "Full Stack Developer",
      faculty: "",
    },
  ],
  skills: [
    { title: "Kompetenzen" },
    // { Title: "", workflow: [], tools: [] },
    {
      Title: "PROGRAMMIERSPRACHEN UND TOOLS",
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
        "gitHub",
        "grid",
        "emotionUi",
        "muiMaterial",
      ],
      workflow: [
        "Mobile First, Responsive Design",
        "Browserübergreifendes Testen und Debuggen",
        "Funktionsübergreifende Teams",
        "Agile Entwicklung und Scrum",
        "Das gesamte Layout befindet sich auf einem Raster",
      ],
    },
  ],
  interests: [
    { title: "Interessen" },
    // { content: "" },
    {
      content:
        "Ich habe eine Leidenschaft für Elektronik und repariere gerne Elektronik, die meiner Meinung nach in gewisser Weise nicht perfekt ist, um 10/10 zu sein.",
    },
    {
      content:
        "Meine andere Leidenschaft ist das Programmieren von Mikrocontrollern und deren Integration in den Alltag.",
    },
  ],
  projects: [
    { title: "Projekte" },
    // { link: "" },
    {
      project: "Benutzerdefiniertes Comic-Editor-Modul",
      link: "https://mark4titan.github.io/division_of_book_pages/",
      comit: "Bibliotheken: 're-resizable' 'react-draggable' 'ImageDragger'",
    },
    {
      project:
        "Geschwindigkeitstestmodul zwischen Abonnenten und dem Servernetzwerk",
      link: "https://mark4titan.github.io/test_2/",
      comit:
        "Bibliotheken: 'emotion/styled' 'reduxjs/toolkit' 'reduxjs-toolkit-persist' 'testing-library/user-event'",
    },
    {
      project: "Statischer Online-Shop (single page application)",
      link: "https://mark4titan.github.io/simple-shop-react/",
      comit:
        "Bibliotheken: 'reduxjs/toolkit' 'react-icons' 'redux-persist' 'emotion/styled' 'emailjs'",
    },
    {
      project: "Individueller Kalorienrechner (single page application)",
      link: "https://ds-slimmoms.netlify.app/",
      comit:
        "Bibliotheken: 'reduxjs/toolkit' 'react-icons' 'axios' 'notiflix' 'react-redux' 'react-loader-spinner' 'moment'",
    },
    {
      project:
        "Landungsunternehmen 'Bullion Network' (single page application)",
      link: "https://mark4titan.github.io/Bullion_network/",
      comit: "Bibliotheken: 'webpack -> air-datepicker' 'jQuery'",
    },
    {
      project: "Landungsunternehmen 'Tlayen Web Builder'",
      link: "https://tlayen-builder.progressio.agency/",
      comit: "Bibliotheken: 'JavaScript' 'CSS' 'html'",
    },
  ],
  awards: [
    {
      title: "Auszeich.",
      expansion: "AUSZEICHNUNGEN UND ZERTIFIKATE",
    },
    // { Title: "", content: [] },
    {
      content: [certificate],
    },
  ],
};

export default Resume;

