import cryptoMockup from "./img/cryptomockup.png";
import huluMockup from "./img/hulumockup.png";
import alfredosMockup from "./img/alfredosmockup.png";
import organizzerMockup from "./img/todomockup.png";
// import dashboardMockup from "./img/dashboard_mockup.png";
import minibankMockup from "./img/minibank_mockup.png";
// import climaVueMockup from "./img/climavuemockup.png";
import vuetifyMockup from "./img/vuetifymockup.png";
import mjvMockup from "./img/mjvmockup.png";

export const data = {
  about: {
    pt: `Olá! Meu nome é Athos Franco. Tenho 26 anos e sou um Desenvolvedor Web auto-didata. Minhas principais linguagens são Java e JavaScipt e utilizo tecnologias modernas existentes em ambas linguagens para desenvolver soluções para web.`,
    en: `Hi! My name is Athos Franco. I'm a 26 years old self-taught web developer. My main languages are Java and JavaScipt and i use modern technologies existing in both languages ​​to develop great solutions for the web.`,

    resumeUrl: "https://drive.google.com/file/d/1FP5HSgZIgJ8A5Btmlt9WWOFVti4WtEnO/view?usp=sharing",
    resumeUrlEnglish: "https://drive.google.com/file/d/1DqfPflXd284LbvN8BPh7zHmGdS-VIlTz/view?usp=sharing",
  },
  skills: [
    "Java",
    "Spring Boot",
    "Spring Data JPA",
    "JDBC",
    "Hibernate",
    "PostgreSQL",
    "REST API",
    "JavaScript ES6+",
    "TypeScript",
    "React",
    "Angular",
    "VueJs",
    "NextJs",
    "Bootstrap 5",
    "Styled Components",
    "HTML5 + CSS3",
    "Git",
  ],

  projects: [
    {
      id: 1,
      title: `MJV Clinic`,
      desc: `Este Sistema de Gestão de Clínica Médica é uma aplicação fullstack apresentada como Projeto Final para a MJV School de Java. O objetivo do projeto é desenvolver um sistema simples, mas completo e consistente, que permita que os funcionários da clínica fictícia possam CRIAR, CONSULTAR, EDITAR e EXCLUIR registros de pacientes, médicos e consultas. Esses registros precisam estar salvos em um banco de dados. O Back-End foi desenvolvido em Java, Spring Boot e Spring Data JPA para implementar a camada de persistência dos dados. O banco de dados utilizado foi o PostgreSQL.  (Login: admin /// Senha: 0000)`,
      descEn: `This is a Fullstack App presented as a Final Project for the MJV School of Java. The aim of the project is to develop a simple but complete and consistent web app that allows the employees of a fictional medical clinic to CREATE, READ, EDIT and DELETE patient, doctors and appointments records. These records must be saved in a database. Front-end was developed with React, Styled Components, Bootstrap and ChartJs. The Back-End was developed with Java, using Spring Boot framework. Spring Data JPA was used to implement the data persistence layer and the PostgreSQL database. The developed API is documented in Swagger. Feel free to use it for a personal project. (Login: admin / Password: 0000)`,
      stack: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "PostgreSQL",
        "React",
        "Styled Components",
        "Bootstrap",
        "ChartJs",
      ],
      url: "https://mjv-clinic-athos.herokuapp.com/dashboard",
      rep: "https://github.com/athosfranco/mjv-school-projeto-final",
      img: mjvMockup,
    },
    {
      id: 2,
      title: `CryptoHub`,
      desc: `Esta SPA (Single Page Application) surgiu da união de dois interesses: Criptomoedas e Desenvolvimento Web. A página consome uma API pública e exibe dados estatísticos sobre as principais criptomoedas 
      do mercado, como preço atual, capitalização de mercado, volume total, entre outras informações. Estes dados são apresentados de forma intuitiva e responsiva, com gráficos customizáveis, sendo possível consultar a variação dessas estatísticas nos últimos dias, semanas ou meses. É possível visualizar a conversão do preço da criptomoeda em diferentes moedas reais, como Dólar, Euro ou Yen. A aplicação também está disponível em dois idiomas: Português e Inglês.`,
      descEn: `This SPA (Single Page Application) came from the union of two personal interests: Cryptocurrencies and Web Development. The page consumes a public API and displays statistical data about the main cryptocurrencies on the market, such as current price, market capitalization, total volume, among other information. These data are presented in an intuitive and responsive way, with customizable charts, and being able to consult the variation of these statistics in the last days, weeks or months. You can view the cryptocurrency price conversion in different real currencies such as USD, EUR or YEN. The application is also available in two languages: Brazilian Portuguese and English.`,
      stack: ["React", "JavaScript", "Consumo de API's com Axios", "ChartJs", "Bootstrap"],
      url: "https://cryptohub-app.netlify.app/",
      rep: "https://github.com/athosfranco/cryptohub-app",
      img: cryptoMockup,
    },
    {
      id: 3,
      title: `Minibank Landing Page`,
      desc: `Desenvolvi esta Landing Page de um banco fictício para aprender como extrair diferentes elementos de um design pronto no Figma, e usá-los como svg em um código Front-End. A biblioteca de animações utilizada foi a React-Reveal. Obs: não desenvolvi o design no Figma, apenas utilizei como base.`,
      descEn: `I developed this Landing Page to learn how to extract different elements from an already made design in Figma, and use them as svg in a Front-End code. The animation library used was React-Reveal. Ps: the Figma design was not made by me.`,
      stack: ["React", "Styled Components", "Figma"],
      url: "https://minibank-landing-page.netlify.app/",
      rep: "https://github.com/athosfranco/dashboard-react-ui",
      img: minibankMockup,
    },
    // {
    //   id: 3,
    //   title: `Dashboard Médico`,
    //   desc: `Este dashboard foi desenvolvido durante um teste para uma Startup em São Paulo. O teste consistia em desenvolver o dashboard com React seguindo o design enviado no Figma. A página é 100% responsiva.`,
    //   descEn: `
    //   This dashboard was developed during a test for a Startup in São Paulo. The test consisted of developing the dashboard with React following the design sent in Figma. The page is 100% responsive.`,
    //   stack: ["React", "Styled Components", "Figma"],
    //   url: "https://dashboard-react-ui.netlify.app/",
    //   rep: "https://github.com/athosfranco/dashboard-react-ui",
    //   img: dashboardMockup,
    // },
    {
      id: 4,
      title: `Hulu Clone`,
      desc: `Um clone da interface do aplicativo de streaming Hulu
      que desenvolvi com NextJs e TailwindCss. O objetivo ao desenvolver esta página foi colocar em prática algumas técnicas de Front-End que aprendi, como aplicar "Lazy Loading" no carregamento das imagens e Server Side Rendering (SSR) com NextJs. O projeto usa a API do MovieDB para alimentar a interface com dados.
      `,
      descEn: `A Hulu streaming UI clone that i developed with NextJs and TailwindCss. The goal in developing this page was to put into practice some Front-End techniques i learned, such as "Lazy Loading" and Server Side Rendering (SSR) with NextJs. The project uses MovieDB's API to feed the interface with data.
      `,
      stack: ["React", "JavaScript", "NextJs", "TailwindCss", "Consumo de API's com Axios"],
      url: "https://hulu-clone-nextjs-seven.vercel.app/",
      rep: "https://github.com/athosfranco/hulu-clone-nextjs",
      img: huluMockup,
    },
    {
      id: 5,
      title: `Alfredo's Pizzeria`,
      desc: `Uma página de uma pizzaria fictícia. É possível visualizar um cardápio e adicionar/remover produtos a um "carrinho" (lista de produtos do pedido). Pude colocar em prática conceitos Front-End de responsividade e desenvolver componentes reutilizáveis com Styled Components.`,
      descEn: `A React web app of a fictitious pizzeria. You can add/remove products to a "cart". The main objective of this small project was to put into practice Front-End concepts of responsiveness and develop reusable components with Styled Components.`,
      stack: ["React", "Styled Components", "React Router", "Local Storage"],
      url: "https://alfredos-pizza.netlify.app/",
      rep: "https://github.com/athosfranco/react-alfredos-pizza-cart",
      img: alfredosMockup,
    },
    {
      id: 6,
      title: `Digital Web`,
      desc: `Uma Landing Page que desenvolvida com Vue, utilizando a biblioteca Vuetify para os componentes da interface. Este projeto foi desenvolvido para colocar em prática meus estudos pessoais de VueJs. `,
      descEn: `This landing page was developed with Vue, using the Vuetify library for the interface components. This project was developed to put into practice my personal VueJs studies..`,
      stack: ["VueJs", "Consumo de API com Fetch"],
      url: "https://vuetify-landing-page.netlify.app/",
      rep: "https://github.com/athosfranco/vuetify-landing-page",
      img: vuetifyMockup,
    },
    {
      id: 7,
      title: `Organizzer`,
      desc: `Um simples "Todo App" desenvolvido durante meus estudos em JavaScript. Você pode criar tarefas, definir um prazo para sua conclusão, editar uma tarefa criada anteriormente, marcá-la como concluída e também excluir tarefas. É o meu primeiro CRUD. O aplicativo está disponível em dois idiomas (inglês e português) e possui dois esquemas de cores (diurno e noturno). Tarefas e configurações são armazenadas no armazenamento local do navegador. O usuário também pode organizar a ordem em que as tarefas são exibidas.`,
      descEn: `This is a simple "Todo" app developed during my studies in JavaScript. You can create tasks, set a deadline for their completion (or set no deadline at all), edit a previously created task, mark it as completed and also, of course, delete previously created tasks. It's my first ever CRUD. The app is available in two languages (English and Portuguese), in addition to having two color schemes (light and dark/day and night). Setting the language and color scheme is done by the user within the application itself. Tasks and settings are stored on the browser's local storage.`,
      stack: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      url: "https://athosfranco.github.io/crud-task-manager/",
      rep: "https://github.com/athosfranco/crud-task-manager",
      img: organizzerMockup,
    },
  ],
};
