import { useState, useEffect } from "react";
import Link from "next/link";

import { config } from "../../conf/variaveis";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await fetch(
          `${config.caminhoServidor}/api/teamsWitchWorkers`
        ); // Substitua pelo endpoint correto da API
        if (response.ok) {
          const data = await response.json();
          setTeams(data);
        } else {
          console.log("Erro ao obter os times da API.");
        }
      } catch (error) {
        console.log("Erro:", error);
      }
    }

    fetchRooms();
  }, []);

  return (
    <>
      <h1>Lista de Times</h1>
      <Link href="/">Voltar</Link>
      <h3>Times: </h3>
      {teams.map((team, index) => (
        <fieldset key={index}>
          <legend>
            <h3>{team.team_name}</h3>
          </legend>
          <div>
            <label>Integrantes: </label>
            <ul>
            {team.worker_names.map((worker, index) => (
                <li key={index}>
                  <p>{worker}</p>
                </li>
              ))}
            </ul>
          </div>
        </fieldset>
      ))}
    </>
  );
}
