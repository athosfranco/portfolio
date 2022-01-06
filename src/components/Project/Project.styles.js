import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.id % 2 !== 0 ? "row" : "row-reverse")};
  min-height: 90vh;
  align-items: center;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ImgWrapper = styled.div``;

export const ProjectImg = styled.img`
  width: 50vw;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const ProjectInfo = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (max-width: 900px) {
    margin: 0 0 0 20px;
    align-items: start;
  }
`;

export const ProjectH1 = styled.h1`
  font-size: 3rem;
  @media only screen and (max-width: 900px) {
    font-size: 2rem;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 18px;
  line-height: 1.7;
  @media only screen and (max-width: 900px) {
    font-size: 16px;
    line-height: 1.5;
    margin-right: 30px;
  }
`;

export const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tech = styled.span`
background-color: #111111;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin: 4px;
  transition: 0.5s;
  &:hover {
    background-color: ${(props) => props.theme.color};
    transition: 0.3s;
  }
  @media only screen and (max-width: 900px) {
    font-size: 16px;
    padding: 4px; 6px;
  }
`;

export const LinkContainer = styled.div`
  margin-top: 20px;
  @media only screen and (max-width: 900px) {
    display: flex;
  }
`;

export const ExternalLink = styled.a`
  border: 1px solid ${(props) => props.theme.color};
  margin-right: 20px;
  font-size: 18px;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.color};
    -webkit-box-shadow: 0px 9px 17px 5px rgba(0, 0, 0, 0.41);
    box-shadow: 0px 9px 17px 5px rgba(0, 0, 0, 0.41);
  }
  @media only screen and (max-width: 900px) {
    font-size: 16px;
    margin-top: 10px;
    padding: 5px;
    text-align: center;
  }
`;

export const Span = styled.span`
  font-size: 18px;
  text-shadow: 2px 2px 5px #000000;
  color: ${(props) => props.theme.color};
  font-weight: 700;
  @media only screen and (max-width: 900px) {
    font-size: 16px;
  }
`;

export const Line = styled.div`
  border-bottom: 10px solid ${(props) => props.theme.color};
  margin-bottom: 20px;
  width: 200px;
  outline: none;
  @media only screen and (max-width: 900px) {
    width: 100px;
  }
`;

export const Section = styled.div``;
