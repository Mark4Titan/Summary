import avatar from "./avatar.png";
import certificate from "./certificate.png";

export const Resume = {
  language: [{ RU: "RU" }],
  about: [
    { title: "Обо мне" },
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
      fullName: { name: "Василий ", surname: "Андрейчук" },
      address: "Украина · г. Хмельницкий",
      phone: "+380983366033",
      mail: "andreychukvasiliy@gmail.com",
      aboutMe:
        "У меня есть опыт использования гибких фреймворков, чтобы обеспечить надежный синопсис для взаимодействия на высоком уровне.",
      social: {
        linkedIn: "https://www.linkedin.com/in/vasiliy-andreichuk-8a6945211/",
        github: "https://github.com/Mark4Titan?tab=repositories",
        telegram: "https://t.me/MArkTitan",
        youtube: "https://www.youtube.com/channel/UCWIV9JNJ6nFAI8P9_f1BPhA",
      },
    },
  ],
  experience: [
    { title: "Опыт" },
    // { position: "", period: "", company: "", content: "" },
    {
      position: "Продакт-менеджер",
      period: "Июль 2015 - Июнь 2016",
      company: "'Технопространство'",
      content:
        "На Delphi 6 (Object Pascal), создал парсер сайтов, помогавший в актуальном реагировании на изменение цен.",
    },
    {
      position: "Администратор системы",
      period: "Июнь 2016 - Апрель 2018",
      company: "'SmartPhone'",
      content:
        "В данной должности, помимо управления, также занимался разработкой небольших программок на Delphi 7 (Object Pascal), и создание динамично-кастомных отчетов на FastReport.",
    },
    {
      position: "Региональный директор",
      period: "Январь 2020",
      company: "'Siti Case'",
      content:
        "С помощью Delphi 7 (Object Pascal), автоматизировал синхронное закрытие касс по Украине и выводом стандартизированных отчетов.",
    },
    {
      position: "Scrum Master / Front-end Developer",
      period: "Декабрь 2021",
      company: "'GoIt'",
      content:
        "После обучения на Full-Stack Developer принял участие в разработке командного проекта как разработчик и Scrum Master.",
    },
  ],

  education: [
    { title: "образование" },
    // { institution: "", period: "", received: "", faculty: "", GPA: "" },
    {
      institution: "Хмельницкий Институт Развития Человека Украина",
      period: "Сентябрь 2007 - Июнь 2011",
      received: "БАКАЛАВР НАУК",
      faculty: "0301 Социально-политические науки 6.030102 Психология",
    },
    {
      institution: "GoIt Academy",
      period: "Декабрь 2020 - Декабрь 2022",
      received: "Full Stack Developer",
      faculty: "",
    },
  ],
  skills: [
    { title: "навыки" },
    // { Title: "", workflow: [], tools: [] },
    {
      Title: "ЯЗЫКИ ПРОГРАММИРОВАНИЯ И ИНСТРУМЕНТЫ",
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
      ],
      workflow: [
        "Мобильный изначально, адаптивный дизайн",
        "Кросбраузерное тестирование и отладка",
        "Межфункциональные команды",
        "Гибкая разработка и Scrum",
      ],
    },
  ],
  interests: [
    { title: "интересы" },
    // { content: "" },
    {
      content:
        "Увлекаюсь электроникой, люблю делать электронику, которая по моему мнению в чем-то не дотягивает чтобы быть 10/10.",
    },
    {
      content:
        "Люблю программировать микроконтроллеры, и интегрировать их в быт.",
    },
  ],
  awards: [
    {
      title: "награды",
      expansion: "НАГРАДЫ И СЕРТИФИКАТЫ",
    },
    // { Title: "", content: [] },
    {
      content: [certificate],
    },
  ],
};

export default Resume;
