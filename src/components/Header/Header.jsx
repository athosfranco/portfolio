import React from "react";
import {
  HeaderH1,
  HeaderH2,
  HeaderSpan,
  HeaderContainer,
  LeftContainer,
  RightContainer,
  Line,
  Skill,
  SkillsContainer,
  SocialMediaContainer,
  AboutMeText,
  InfoSpan,
  ExternalLink,
} from "./Header.styles";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { FiGithub, FiFileText } from "react-icons/fi";
import { data } from "../../data";
import ReactTooltip from "react-tooltip";

const Header = ({ lang }) => {
  const title = "Athos Franco";

  return (
    <HeaderContainer>
      <ReactTooltip />
      <LeftContainer>
        <div data-aos={"fade-right"} data-aos-duration={"1500"}>
          <HeaderH1>{title}</HeaderH1>
          <Line />
        </div>

        <SocialMediaContainer data-aos={"fade-left"} data-aos-delay={"300"} data-aos-duration={"1500"}>
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
          <ExternalLink
            data-tip={lang ? "Ver meu Currículo" : "View my Resume"}
            href={data.about.resumeUrl}
            target="_blank"
          >
            <FiFileText />
          </ExternalLink>
        </SocialMediaContainer>
      </LeftContainer>
      <RightContainer>
        <HeaderSpan
          data-aos={"fade-down"}
          data-aos-delay={window.innerWidth < 800 ? "0" : "1500"}
          data-aos-duration={"1000"}
        >
          {lang ? "Perfil" : "Profile "}
        </HeaderSpan>
        <HeaderH2
          data-aos={"fade-down"}
          data-aos-delay={window.innerWidth < 800 ? "0" : "600"}
          data-aos-duration={"1000"}
        >
          Fullstack Web Developer
        </HeaderH2>

        <AboutMeText
          data-aos={"fade-down"}
          data-aos-delay={window.innerWidth < 800 ? "0" : "900"}
          data-aos-duration={"1200"}
        >
          {lang ? data.about.pt : data.about.en}
        </AboutMeText>
        <HeaderSpan
          data-aos={"fade-right"}
          data-aos-delay={window.innerWidth < 800 ? "0" : "1500"}
          data-aos-duration={"1000"}
        >
          Stack
        </HeaderSpan>
        <SkillsContainer
          data-aos={"fade-down"}
          data-aos-delay={window.innerWidth < 800 ? "0" : "1200"}
          data-aos-duration={"1200"}
        >
          {data.skills.map((s) => {
            return <Skill>{s}</Skill>;
          })}
        </SkillsContainer>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
