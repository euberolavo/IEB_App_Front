import React from "react";

import CardsList from "../components/cardsList/cardsList";
import Style from "./Index.module.css";

export default function HomePage() {
  return (
    <div>
      <>
        <figure className={Style.figure}>
          <img
            className={Style.image}
            src="https://i.imgur.com/WbXgNP9.png"
            alt="Logo Encontro com Deus"
          />
        </figure>
        {/* <CardsList href="/peoples/peoples">Lista de Pessoas</CardsList>
        <CardsList href="/rooms/rooms">Lista de Quartos</CardsList>
        <CardsList href="/teams/teams">Equipes</CardsList> */}
        <CardsList href="/registration/registration">Cadastros</CardsList>
      </>
    </div>
  );
}
