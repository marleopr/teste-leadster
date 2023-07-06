import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const RangeButton = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 600;
`;
export const Button = styled.button`
  border: 1px solid black;
  border-radius: 15px;
  padding: 5px 10px 5px 10px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    border: 1px solid #007eff;
    color: #007eff;
  }
  &:active {
    color: #ffffff;
    background-color: #007eff;
  }
`;
export const SelectInput = styled.select`
  border: 1px solid black;
  border-radius: 15px;
  padding: 5px 10px 5px 10px;
  margin: 5px;
  margin-left: 1rem;
  cursor: pointer;
  &:hover {
    border: 1px solid #007eff;
    color: #007eff;
  }
`;
export const RangeSelect = styled.div`
  margin-left: 5rem;
`