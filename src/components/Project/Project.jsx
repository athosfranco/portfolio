import React from "react";
import {
  ProjectContainer,
  ImgWrapper,
  ProjectImg,
  ProjectInfo,
  ProjectH1,
  ProjectDescription,
  StackContainer,
  Tech,
  LinkContainer,
  ExternalLink,
  Span,
  Line,
  Section,
} from "./Project.styles";
import { FaPlay } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Project = ({ id, title, desc, stack, img, url, rep, lang }) => {
  return (
    <ProjectContainer id={id} data-aos={id % 2 !== 0 ? "fade-right" : "fade-left"} data-aos-duration={"1500"}>
      <ImgWrapper>
        <ProjectImg src={img} />
      </ImgWrapper>
      <ProjectInfo>
        <Section>
          <ProjectH1>{title}</ProjectH1>
          <Line />
          <Span>{lang ? "Tecnologias utilizadas" : "Tech Stack"}</Span>
          <StackContainer>
            {stack.map((tech) => {
              return <Tech>{tech}</Tech>;
            })}
          </StackContainer>
        </Section>

        <Section style={{ marginTop: "20px" }}>
          <Span>{lang ? "Sobre o Projeto" : "About the Project"}</Span>
          <ProjectDescription>{desc}</ProjectDescription>
          <LinkContainer>
            <ExternalLink href={url} target="_blank">
              <FaPlay style={{ marginRight: "5px" }} />
              Ver Demo
            </ExternalLink>
            <ExternalLink href={rep} target="_blank">
              <FiGithub style={{ marginRight: "5px" }} />
              {lang ? "Repositório no Github" : "Github Repository"}
            </ExternalLink>
          </LinkContainer>
        </Section>
      </ProjectInfo>
    </ProjectContainer>
  );
};

export default Project;
