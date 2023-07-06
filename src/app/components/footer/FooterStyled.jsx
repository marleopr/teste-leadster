import Image from "next/image";
import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  p {
    color: #808080;
  }
  .address {
    color: black;
  }
`;

export const RangeLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px;
`;

export const Logo = styled.div``;
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 80%;
  padding: 30px;
  .fotosocial {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  li {
    margin-top: 25px;
    color: #858da8;
    &:hover {
      cursor: pointer;
      color: #007eff;
    }
  }
`;
export const Socials = styled(Image)`
  padding: 5px;
  margin: 0 5px 0 0;
  border-radius: 25px;
  background-color: #e2e2e2;
  &:hover {
    background-color: #007eff;
    cursor: pointer;
  }
`;
export const InfoFooter = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 80%;
  margin-bottom: 20px;
  .info-footer {
    color: #007eff;
    margin-left: 5px;
  }
`;
export const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  margin: 20px -10% 5px -10%;
  margin-bottom: 20px;
  opacity: 0.2;
  background-color: #858da8;
`;
