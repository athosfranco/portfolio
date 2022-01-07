import React, { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import {
  SidebarContainer,
  SidebarIcon,
  SidebarSection,
  SidebarItem,
  SidebarSpan,
  SidebarLine,
  CloseSidebar,
  ColorControl,
  ColorTheme,
  LanguageControl,
  LanguageToggler,
} from "./Sidebar.styles";
import { IoLanguage } from "react-icons/io5";
import ReactTooltip from "react-tooltip";
import { data } from "../../data";

const Sidebar = ({ onGetThemeColor, onGetLang, onGetScrollSection, lang }) => {
  //State do sidebar
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  //Handler que abre/fecha sidebar
  const sidebarToggler = () => setSidebarIsOpen(!sidebarIsOpen);

  return (
    <>
      <ReactTooltip />
      <SidebarIcon onClick={sidebarToggler}>
        <CgMenuRightAlt />
      </SidebarIcon>
      <SidebarContainer isOpen={sidebarIsOpen}>
        <CloseSidebar onClick={sidebarToggler}>
          <AiOutlineClose />
        </CloseSidebar>
        <SidebarSection>
          <SidebarItem
            onClick={() => {
              onGetScrollSection("header");
              sidebarToggler();
            }}
          >
            <SidebarSpan>{lang ? "Início" : "Home"}</SidebarSpan>
          </SidebarItem>
          <SidebarItem
            onClick={() => {
              onGetScrollSection("projects");
              sidebarToggler();
            }}
          >
            <SidebarSpan>{lang ? "Projetos" : "Projects"}</SidebarSpan>
          </SidebarItem>
          <SidebarItem
            onClick={() => {
              onGetScrollSection("contact");
              sidebarToggler();
            }}
          >
            <SidebarSpan>{lang ? "Contato" : "Contact"}</SidebarSpan>
          </SidebarItem>
          <SidebarItem>
            <SidebarSpan>
              <a href={data.about.resumeUrl} target="_blank" rel="noreferrer">
                {lang ? "Currículo" : "Resume"}
              </a>
            </SidebarSpan>
          </SidebarItem>
        </SidebarSection>
        <SidebarLine />
        <SidebarSection>
          <SidebarItem>
            <SidebarSpan>
              <a href="https://github.com/athosfranco" target="_blank" rel="noreferrer">
                Github
              </a>
            </SidebarSpan>
          </SidebarItem>
          <SidebarItem>
            <SidebarSpan>
              <a href="https://www.linkedin.com/in/athosfranco" target="_blank" rel="noreferrer">
                Linkedin
              </a>{" "}
            </SidebarSpan>
          </SidebarItem>
          <SidebarItem>
            <SidebarSpan>
              <a href="https://twitter.com/AthosFrancof" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </SidebarSpan>
          </SidebarItem>
        </SidebarSection>

        <ColorControl>
          <ColorTheme
            color={"#0E918C"}
            onClick={() => {
              onGetThemeColor("#0E918C");
            }}
          />
          <ColorTheme
            color={"#c81d25"}
            onClick={() => {
              onGetThemeColor("#c81d25");
            }}
          />
          <ColorTheme
            color={"#6F4A8E"}
            onClick={() => {
              onGetThemeColor("#6F4A8E");
            }}
          />
        </ColorControl>
        <LanguageControl data-tip={lang ? "Mudar idioma" : "Switch language"}>
          <LanguageToggler
            onClick={() => {
              onGetLang(!lang);
            }}
          >
            <IoLanguage style={{ marginRight: "10px" }} />
            {lang ? "PT-BR" : "EN-US"}
          </LanguageToggler>
        </LanguageControl>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
