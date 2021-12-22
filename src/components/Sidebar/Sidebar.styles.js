import styled from "styled-components";

export const SidebarContainer = styled.aside`
  background: rgba(15, 15, 15, 0.95);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  width: 500px;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
  transition: 0.3s ease;
  height: 100vh;
  z-index: 99;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const SidebarIcon = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  margin: 10px;
  font-size: 50px;
  background: transparent;
  outline: none;
  border: none;
  color: #dddddd;
  cursor: pointer;
  z-index: 50;
  &:hover {
    color: ${(props) => props.theme.color};
  }
`;

export const SidebarMenu = styled.div``;

export const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SidebarItem = styled.button`
  margin-bottom: 20px;
  outline: none;
  background: transparent;
  border: none;
  color: #dddddd;
`;

export const SidebarSpan = styled.span`
  text-transform: uppercase;
  font-size: 24px;
  transition: all 0.2s ease;
  cursor: pointer;
  padding: 10px;
  &:hover {
    letter-spacing: 2px;
    color: ${(props) => props.theme.color};
    border: 1px solid ${(props) => props.theme.color};
    border-radius: 10px;
  }
`;

export const SidebarLine = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.color};
  width: 50%;
  margin: 20px 0;
`;

export const CloseSidebar = styled.button`
  margin: 10px;
  font-size: 50px;
  background: transparent;
  outline: none;
  border: none;
  color: #dddddd;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transition: all 0.2s ease;
  &:hover {
    color: ${(props) => props.theme.color};
    transform: scale(1.3);
  }
`;

export const ColorControl = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
`;

export const ColorTheme = styled.button`
  background-color: ${(props) => props.color};
  border: 1px solid #dddddd;
  width: 20px;
  height: 20px;
  outline: 0;
  margin: 2px;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
  }
`;

export const LanguageControl = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 1rem;
`;

export const LanguageToggler = styled.button`
  display: flex;
  text-transform: uppercase;
  font-size: 20px;
  transition: all 0.2s ease;
  cursor: pointer;
  background: transparent;
  outline: none;
  border: none;
  color: #dddddd;
  &:hover {
    letter-spacing: 2px;
    color: ${(props) => props.theme.color};
    border-radius: 10px;
  }
`;
