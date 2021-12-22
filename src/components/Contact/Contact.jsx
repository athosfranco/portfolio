import React, { useRef } from "react";
import {
  ContactContainer,
  ContactH2,
  Line,
  FlexContainer,
  LeftWrapper,
  ContactForm,
  RightWrapper,
  ContactP,
  Input,
  InputMessage,
  SubmitBtn,
  ContactInfo,
  ContactSpan,
  IconWrapper,
} from "./Contact.styles";
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import emailjs from "emailjs-com";

const Contact = ({ lang }) => {
  //ref formulario email
  const form = useRef();

  //integração com emailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_1izorhg", "contact_form", form.current, "user_C6akroRpWTz4KoJogDW7t").then(
      (result) => {
        alert("Recebi a sua mensagem e entrarei em contato em breve! Obrigado! :) ");
      },
      (error) => {
        alert("Ops, algo deu errado. Por favor, tente novamente mais tarde.");
        console.log(error.text);
      }
    );
  };

  return (
    <ContactContainer>
      <div data-aos={"zoom-in"} data-aos-duration={"1200"}>
        <ContactH2>{lang ? "Entre em Contato" : "Get in Contact"}</ContactH2>
        <Line />
      </div>

      <FlexContainer>
        <LeftWrapper data-aos={"zoom-in"} data-aos-duration={"1200"}>
          <ContactForm ref={form} onSubmit={sendEmail}>
            <ContactSpan>{lang ? "Seu nome" : "Your name"}</ContactSpan>
            <Input type="text" name="user_name" placeholder="João da Silva" required></Input>
            <ContactSpan>{lang ? "Seu E-mail para contato" : "Your E-mail"}</ContactSpan>
            <Input type="email" name="user_email" placeholder="email@domain.com" required></Input>
            <ContactSpan>{lang ? "Sua Mensagem" : "Your Message"}</ContactSpan>
            <InputMessage name="message" placeholder="..." maxLength="500" required></InputMessage>
            <SubmitBtn>{lang ? "Enviar Mensagem" : "Send Message"}</SubmitBtn>
          </ContactForm>
        </LeftWrapper>
        <RightWrapper data-aos={"fade-left"} data-aos-duration={"1200"}>
          <ContactH2>{lang ? "Vamos conversar?" : "Let's Talk?"}</ContactH2>
          <ContactP>
            {lang
              ? `Adoraria ouvir suas ideias para trabalharmos juntos. Você pode entrar em contato comigo através do
            formulário ou enviando uma mensagem diretamente através dos seguintes meios:`
              : `Id love to hear your ideas and work together. You can get in touch with me by filling up the form or directly by the following:`}
          </ContactP>
          <ContactInfo>
            <IconWrapper>
              <AiOutlineMail />
            </IconWrapper>

            <ContactSpan>athos.francof@gmail.com</ContactSpan>
          </ContactInfo>
          <ContactInfo>
            <IconWrapper>
              <AiOutlineWhatsApp />
            </IconWrapper>
            <ContactSpan>
              <a
                href="http://api.whatsapp.com/send?1=pt_BR&phone=5598982080536"
                style={{ borderBottom: "1px solid #dddddd" }}
              >
                WhatsApp
              </a>
            </ContactSpan>
          </ContactInfo>
        </RightWrapper>
      </FlexContainer>
    </ContactContainer>
  );
};

export default Contact;
