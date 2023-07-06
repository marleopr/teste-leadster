"use client";
import { createContext } from "react";
import {
  Main,
  RangeButton,
  Button,
  SelectInput,
  RangeSelect,
} from "./HomePageStyled";
import Cards from "../components/cards/Cards";

const Context = createContext();

const HomePage = () => {
  return (
    <Main>
      <RangeButton>
        <Button>Agências</Button>
        <Button>Chatbot</Button>
        <Button>Marketing Digital</Button>
        <Button>Geração de Leads</Button>
        <Button>Mídia Paga</Button>
        <RangeSelect>
          Ordenar por
          <SelectInput>
            <option>Data de Publicação</option>
          </SelectInput>
        </RangeSelect>
      </RangeButton>
      <Cards />
    </Main>
  );
};
export default HomePage;
