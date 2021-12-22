import React from "react";
import { FooterContainer, FooterSpan, ExternalLink, FooterIcons, GoToTop } from "./Footer.styles";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";

const Footer = ({ lang, onGetScrollSection }) => {
  return (
    <FooterContainer>
      <FooterSpan>
        <a href="https://github.com/athosfranco">
          {lang ? "Feito com ❤ por Athos Franco" : "Made with ❤ by Athos Franco"}
        </a>{" "}
      </FooterSpan>
      <FooterIcons>
        <ExternalLink
          data-tip={lang ? "Visitar meu Github" : "Visit my Github"}
          href="https://github.com/athosfranco"
          target="_blank"
        >
          <FiGithub />
        </ExternalLink>
        <ExternalLink
          data-tip={lang ? "Visitar meu LinkedIn" : "Visit my LinkedIn"}
          href="https://www.linkedin.com/in/athosfranco"
          target="_blank"
        >
          <FaLinkedinIn />
        </ExternalLink>
        <ExternalLink
          data-tip={lang ? "Visitar meu Twitter" : "Visit my Twitter"}
          href="https://twitter.com/AthosFrancof"
          target="_blank"
        >
          <RiTwitterLine />
        </ExternalLink>
      </FooterIcons>
      <GoToTop
        onClick={() => {
          onGetScrollSection("header");
        }}
      >
        {lang ? "Voltar ao Topo" : "Back to Top"}
      </GoToTop>
    </FooterContainer>
  );
};

export default Footer;
