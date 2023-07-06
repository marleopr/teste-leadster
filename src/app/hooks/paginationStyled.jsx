import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
export const PageNumber = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ selected }) => (selected ? "#0084ff" : "#000000")};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  border: ${({ selected }) => (selected ? "1px solid #0084ff" : "none")};
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  &:hover{
    color: #0084ff;
  }
`;
export const PageLabel = styled.span`
  margin-right: 5px;
  font-weight: 600;
`;