import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 50px;
  background: rgba(15, 15, 15, 0.75);
  box-shadow: 1px 0px 15px 5px rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterSpan = styled.span`
  margin-left: 20px;
  &:hover {
    color: ${(props) => props.theme.color};
  }
  @media only screen and (max-width: 700px) {
    font-size: 10px;
    width: 20%;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const GoToTop = styled.button`
  outline: none;
  background: none;
  border: none;
  color: #dddddd;
  cursor: pointer;
  margin-right: 20px;
  &:hover {
    color: ${(props) => props.theme.color};
  }
  @media only screen and (max-width: 700px) {
    font-size: 10px;
  }
`;

export const ExternalLink = styled.a`
  font-size: 40px;
  margin: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.color};
    transition: 0.3s;
    transform: scale(1.3);
  }
  @media only screen and (max-width: 415px) {
    font-size: 30px;
  }
`;
