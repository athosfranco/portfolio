import styled from "styled-components";

export const HeaderContainer = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 100px;
  @media only screen and (max-width: 769px) {
    flex-direction: column;
    margin: 0 25px;
  }
`;

export const HeaderH1 = styled.h1`
  width: 50%;
  line-height: 0.9;
  font-size: 8rem;
  transition: 1s ease-out;
  cursor: pointer;
  transition: all 1s ease-out;

  &:hover {
    letter-spacing: 4px;
  }
  @media only screen and (max-width: 372px) {
    font-size: 4rem;
  }
  @media only screen and (min-width: 373px) and (max-width: 500px) {
    font-size: 6rem;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 6;
  min-height: 417px;
  @media only screen and (max-width: 769px) {
    justify-content: center;
    min-height: 50vh;
  }
`;

export const RightContainer = styled.div`
  flex: 5;
`;

export const Line = styled.div`
  margin: 20px 0;
  border-bottom: 20px solid ${(props) => props.theme.color};
  width: 20%;

  @media only screen and (max-width: 1025px) {
    width: 45%;
    border-bottom: 10px solid ${(props) => props.theme.color};
  }
`;

export const HeaderSpan = styled.span`
  font-size: 18px;
  text-shadow: 2px 2px 5px #000000;
  color: ${(props) => props.theme.color};
  font-weight: 700;
`;

export const HeaderH2 = styled.h2`
  font-size: 3rem;
  @media only screen and (max-width: 416px) {
    font-size: 2rem;
  }
`;

export const Skill = styled.p`
  background-color: #111111;
  box-shadow: 1px 6px 15px 5px rgba(0, 0, 0, 0.62);
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
  @media only screen and (max-width: 370px) {
    font-size: 16px;
    padding: 4px; 6px;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const AboutMeText = styled.p`
  margin: 20px 0;
  font-size: 20px;
  line-height: 1.7;
  @media only screen and (max-width: 370px) {
    font-size: 16px;
  }
`;

export const InfoSpan = styled.span`
  font-size: 16px;
  color: grey;
  font-style: italic;
  @media only screen and (max-width: 370px) {
    font-size: 12px;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ExternalLink = styled.a`
  font-size: 50px;
  margin-right: 15px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.color};
    transition: 0.3s;
    transform: scale(1.3);
  }
  @media only screen and (max-width: 700px) {
    font-size: 30px;
  }
`;
