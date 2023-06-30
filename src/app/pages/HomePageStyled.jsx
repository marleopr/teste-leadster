import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const RangeButton = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 15px;
  padding: 5px 10px 5px 10px;
  margin: 5px;
  cursor: pointer;
`;

export const SelectInput = styled.select`
  border: 1px solid black;
  border-radius: 15px;
  padding: 5px 10px 5px 10px;
  margin: 5px;
  cursor: pointer;
`;
