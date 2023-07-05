import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
`;
export const ChatModal = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  border-radius: 10px;
  border-top: 30px solid #0084ff;
  background-color: #fff;
`;
export const ChatCloseButton = styled.button`
  position: absolute;
  outline: none;
  font-size: 20px;
  top: 1px;
  right: 10px;
  border: none;
  color: #555555;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #0084ff;
  }
`;
export const ChatMsg = styled.p`
  background-color: #f0f0f0;
  color: #000000;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 20px;
  border: none;
  width: 18rem;
  p{
    font-size: 10px;
  }
`;
export const ChatButton = styled.button`
  background-color: #007eff;
  color: #ffffff;
  padding: 10px 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0777e8;
  }
`;
