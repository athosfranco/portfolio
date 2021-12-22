import React from "react";
import { data } from "../../data";
import Project from "../Project/Project.jsx";
import { ProjectsContainer, H1, Line, Wrapper } from "./Projects.styles";

const Projects = ({ lang }) => {
  return (
    <ProjectsContainer>
      <Wrapper data-aos={"zoom-in"} data-aos-duration={"1200"}>
        <H1>{lang ? "Portfólio de Projetos" : "Projects Portfolio"}</H1>
        <Line></Line>
      </Wrapper>

      {data.projects.map((p) => {
        return (
          <Project
            id={p.id}
            img={p.img}
            title={p.title}
            desc={lang ? p.desc : p.descEn}
            stack={p.stack}
            url={p.url}
            rep={p.rep}
            lang={lang}
          />
        );
      })}
    </ProjectsContainer>
  );
};

export default Projects;
