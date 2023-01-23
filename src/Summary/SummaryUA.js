import avatar from "./avatar.webp";
import certificate from "./certificate.webp";

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
      phone: "+380983366033",
      mail: "andreychukvasiliy@gmail.com",
      aboutMe:
        "Я маю досвід використання гнучких фреймворків, щоб забезпечити надійний синопсис для ваємодії на високому рівні.",
      social: {
        linkedIn: "https://www.linkedin.com/in/vasiliy-andreichuk-8a6945211/",
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
      position: "Продакт-Менеджер",
      period: "Липень 2015 - Червень 2016",
      company: "'Технопростір'",
      content:
        "На Delphi 6 (Object Pascal), створив парсер сайтів, який допомагав в актуальному реагуванні на зміну цін.",
    },
    {
      position: "Адміністратор системи",
      period: "Червень 2016 - Квітень 2018",
      company: "'SmartPhone'",
      content:
        "На даній посаді, окрім управління, також займався розробкою невеличких програмок на Delphi 7 (Object Pascal), і створення динамічно-кастомних звітів на FastReport.",
    },
    {
      position: "Регіональний директор",
      period: "Січень 2020",
      company: "'Siti Case'",
      content:
        "за допомогою Delphi 7 (Object Pascal), автоматизував синхронне закриття кас по Україні і виводом стандартизованих звітів.",
    },
    {
      position: "Scrum Master / Front-end Developer",
      period: "Грудень 2021",
      company: "'GoIt'",
      content:
        "Після навчання на Full-Stack Developer прийняв участь у розробці командного проєкту як розробник і як Scrum Master.",
    },
  ],

  education: [
    { title: "освіта" },
    // { institution: "", period: "", received: "", faculty: "", GPA: "" },
    {
      institution: "Хмельницький Інститут Розвитку Людини Україна",
      period: "Вересень 2007 - Червень 2011",
      received: "БАКАЛАВР НАУК",
      faculty: "0301 Соціально-політичні науки 6.030102 Психологія",
    },
    {
      institution: "GoIt Academy",
      period: "Грудень 2020 - Грудень 2022",
      received: "Full Stack Developer",
      faculty: "",
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
        "typeScript",
        "nodejs",
        "mongodb",
        "express",
        "docker",
        "postman",
        "gitHub",
        "grid",
        "emotionStyled",
      ],
      workflow: [
        "Мобільний спочатку, адаптивний дизайн",
        "Кросбраузерне тестування та налагодження",
        "Міжфункціональні команди",
        "Гнучка розробка та Scrum",
        "Уся верстка на grid",
      ],
    },
  ],
  interests: [
    { title: "інтереси" },
    // { content: "" },
    {
      content:
        "Захоплююсь електронікою, полюбляю до робляти електроніку, яка на мою думку в чомусь не дотягує щоб бути 10/10.",
    },
    {
      content:
        "Полюбляю програмувати мікроконтролери, і інтегрувати їх в побут.",
    },
  ],
  awards: [
    {
      title: "нагороди",
      expansion: "НАГОРОДИ ТА СЕРТИФІКАТИ",
    },
    // { Title: "", content: [] },
    {
      content: [certificate],
    },
  ],
};

export default Resume;
