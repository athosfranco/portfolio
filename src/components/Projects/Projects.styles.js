import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    margin-top: 300px;
  }
`;

export const Wrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media only screen and (max-width: 900px) {
    align-items: flex-start;
    margin: 50px 20px 20px 20px;
  }
`;

export const H1 = styled.h1`
  font-size: 3rem;

  @media only screen and (max-width: 900px) {
    font-size: 2rem;
  }
`;

export const Line = styled.div`
  border-bottom: 10px solid ${(props) => props.theme.color};
  width: 200px;
  outline: none;
  margin-bottom: 20px;
`;
