import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100vw;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  @media only screen and (max-width: 900px) {
    padding: 10px;
    margin-top: 50px;
  }
`;

export const ContactH2 = styled.h2`
  font-size: 3rem;
  @media only screen and (max-width: 416px) {
    font-size: 2rem;
  }
`;

export const Line = styled.div`
  border-bottom: 10px solid ${(props) => props.theme.color};
  width: 250px;
  outline: none;
  margin-bottom: 20px;
`;

export const FlexContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const LeftWrapper = styled.div`
  flex: 5;
  padding: 1rem;
  @media only screen and (max-width: 900px) {
    padding: 2px;
  }
`;

export const RightWrapper = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 1rem 0 0 3rem;
  @media only screen and (max-width: 900px) {
    padding: 8px 0 0 24px;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 4rem;
  border-radius: 10px;
  background: rgba(15, 15, 15, 0.75);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  @media only screen and (max-width: 900px) {
    padding: 16px;
  }
`;

export const Input = styled.input`
  width: 100%;
  color: #dddddd;
  padding: 10px;
  font-size: 18px;
  border: 2px solid #919191;
  border-radius: 5px;
  background: none;
  outline: none;
  margin-bottom: 10px;
  &:focus {
    border: 2px solid ${(props) => props.theme.color};
  }
  @media only screen and (max-width: 900px) {
    padding: 5px;
    font-size: 16px;
  }
`;

export const InputMessage = styled.textarea`
  width: 100%;
  color: #dddddd;
  padding: 10px;
  font-size: 18px;
  border: 2px solid #919191;
  border-radius: 5px;
  background: none;
  outline: none;
  margin-bottom: 10px;
  resize: none;
  width: 100%;
  height: 150px;
  &:focus {
    border: 2px solid ${(props) => props.theme.color};
  }
  @media only screen and (max-width: 700px) {
    padding: 5px;
    font-size: 16px;
  }
`;

export const SubmitBtn = styled.button`
  border: 1px solid ${(props) => props.theme.color};
  color: #dddddd;
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
  background-color: transparent;
  -webkit-box-shadow: 0px 9px 17px 5px rgba(0, 0, 0, 0.41);
  box-shadow: 0px 9px 17px 5px rgba(0, 0, 0, 0.41);
  margin-top: 20px;
  width: 50%;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.color};
  }
  @media only screen and (max-width: 700px) {
    padding: 10px;
    font-size: 16px;
    width: 100%;
  }
`;

export const ContactP = styled.p`
  margin: 20px 30px 30px 10px;
  font-size: 20px;
  line-height: 1.7;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ContactSpan = styled.span`
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 18px;
  align-self: start;
`;

export const IconWrapper = styled.div`
  font-size: 40px;
  color: ${(props) => props.theme.color};
`;
