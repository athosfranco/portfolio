import cryptoMockup from "./img/cryptomockup.png";
import huluMockup from "./img/hulumockup.png";
import alfredosMockup from "./img/alfredosmockup.png";
import organizzerMockup from "./img/todomockup.png";

export const data = {
  about: {
    pt: `Olá! Me chamo Athos Franco, tenho 26 anos e sou um programador autodidata. Utilizo JavaScript e todo o seu
        ecossistema de tecnologias modernas para desenvolver soluções para a web. Atualmente sou Desenvolvedor Front End Júnior e estou estudando para me tornar um desenvolvedor Full Stack.`,
    en: `Hello! My name is Athos Franco, im 26 years old and i'm a self taught web developer. My main language is JavaScript and i use modern javascript-related technologies and frameworks to develop web solutions. I'm currently working as a Junior Front End Developer and i'm studying to become a Full Stack Web Dev.`,
  },
  skills: [
    "JavaScript ES6+",
    "React",
    "REST API",
    "NextJs",
    "Bootstrap 5",
    "TailwindCss",
    "Styled Components",
    "HTML5",
    "CSS3",
    "Git",
    "MongoDB*",
    "Express*",
    "NodeJs*",
    "Java*",
    "TypeScript*",
  ],

  projects: [
    {
      id: 1,
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
      id: 2,
      title: `Hulu Clone`,
      desc: `Um clone da interface do aplicativo de streaming Hulu
      que desenvolvi com NextJs e TailwindCss. O objetivo ao desenvolver esta página foi colocar em prática algumas técnicas de Front-End que aprendi, como aplicar "Lazy Loading" no carregamento das imagens e Server Side Rendering (SSR) com NextJs. O projeto usa a API do MovieDB para alimentar a interface com dados.
      `,
      descEn: `A Hulu streaming UI clone that i developed with NextJs and TailwindCss. The goal in developing this page was to put into practice some Front-End techniques i learned, such as "Lazy Loading" and Server Side Rendering (SSR) with NextJs. The project uses MovieDB's API to feed the interface with data.
      `,
      stack: ["React", "JavaScript", "NextJs", "TailwindCss"],
      url: "https://hulu-clone-nextjs-seven.vercel.app/",
      rep: "https://github.com/athosfranco/hulu-clone-nextjs",
      img: huluMockup,
    },
    {
      id: 3,
      title: `Alfredo's Pizzeria`,
      desc: `Uma página de uma pizzaria fictícia. É possível visualizar um cardápio e adicionar/remover produtos a um "carrinho" (lista de produtos do pedido). Pude colocar em prática conceitos Front-End de responsividade e desenvolver componentes reutilizáveis com Styled Components.`,
      descEn: `A React web app of a fictitious pizzeria. You can add/remove products to a "cart". The main objective of this small project was to put into practice Front-End concepts of responsiveness and develop reusable components with Styled Components.`,
      stack: ["React", "Styled Components", "React Router", "Local Storage"],
      url: "https://alfredos-pizza.netlify.app/",
      rep: "https://github.com/athosfranco/react-alfredos-pizza-cart",
      img: alfredosMockup,
    },
    {
      id: 4,
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
