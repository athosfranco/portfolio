import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Sidebar from "./components/Sidebar/Sidebar";
import Contact from "./components/Contact/Contact";
import { GlobalStyle } from "./globals.styles";
import { ThemeProvider } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";

function App() {
  //inicializa a biblioteca animateOnScroll
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  //idioma
  const [lang, setLang] = useState(true);
  const languageHandler = (boolean) => setLang(boolean);

  //definiçao da cor do tema
  const [themeColor, setThemeColor] = useState("#0E918C");
  const themeColorHandler = (colorInput) => setThemeColor(colorInput);

  //tema (styled components <ThemeProvider/>);
  const theme = {
    color: themeColor,
  };

  //Ref's pra fazer o scroll da página
  const headerSection = useRef(null);
  const projectsSection = useRef(null);
  const contactsSection = useRef(null);

  //função que faz o scroll
  const scrollToSection = (section) => {
    if (section === "header") window.scrollTo({ top: headerSection.current.offsetTop, behavior: "smooth" });
    else if (section === "projects") window.scrollTo({ top: projectsSection.current.offsetTop, behavior: "smooth" });
    else if (section === "contact") window.scrollTo({ top: contactsSection.current.offsetTop, behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Sidebar
        onGetThemeColor={themeColorHandler}
        onGetLang={languageHandler}
        onGetScrollSection={scrollToSection}
        lang={lang}
      />
      <section ref={headerSection}>
        <Header lang={lang} />
      </section>
      <section ref={projectsSection}>
        <Projects lang={lang} />
      </section>
      <section ref={contactsSection}>
        <Contact lang={lang} />
      </section>
      <Footer lang={lang} onGetScrollSection={scrollToSection} />
    </ThemeProvider>
  );
}

export default App;
