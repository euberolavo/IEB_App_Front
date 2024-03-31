import React, { useState, useEffect } from "react";
import Forms from "../../../components/forms/forms";

import { config } from "../../../conf/variaveis";

export default function RegistrationWorkersTeams() {
  const [workers, setWorkers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [selectedWorker, setSelectedWorker] = useState(""); // Use this to store the selected worker
  const [selectedTeam, setSelectedTeam] = useState(""); // Use this to store the selected team
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch(`${config.caminhoServidor}/api/participantstype/Trabalhador`)
      .then((response) => response.json())
      .then((data) => setWorkers(data))
      .catch((error) => console.log("Erro ao buscar Trabalhadores:", error));

    fetch(`${config.caminhoServidor}/api/teams`)
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) => console.log("Erro ao buscar Equipes:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");

    if (!selectedTeam || !selectedWorker) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    const data = {
      workers: selectedWorker,
      teams: selectedTeam,
    };

    try {
      const response = await fetch(
        `${config.caminhoServidor}/api/teams/${data.teams}/members/${data.workers}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const textoResposta = await response.text();
        setResposta(textoResposta);
        console.log("Resposta:", textoResposta);
        console.log("Cadastro realizado com sucesso!");
      } else {
        console.log("Erro ao cadastrar.");
      }
    } catch (error) {
      console.log("Erro:", error);
    }
  };

  return (
    <>
      <h3>Cadastro Trabalhadores nas Equipes</h3>
      <Forms>
        <form className="member-form" onSubmit={handleSubmit}>
          {erro && <p>{erro}</p>}
          {resposta && <p>{resposta}</p>}
          <fieldset>
            <legend>Registro</legend>
            <div>
              <label htmlFor="workers">Trabalhador: </label>
              <select
                id="workers"
                value={selectedWorker}
                onChange={(e) => setSelectedWorker(e.target.value)}
              >
                <option value="">Selecione</option>
                {workers.map((worker) => (
                  <option key={worker.id} value={worker.id}>
                    {worker.name}
                  </option>
                ))}
              </select>

              <label htmlFor="teams">Equipe: </label>
              <select
                id="teams"
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
              >
                <option value="">Selecione</option>
                {teams.map((team) => (
                  <option key={team.id} value={team.id}>
                    {team.name}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
          <article>
            <button type="submit">Enviar</button>
          </article>
        </form>
      </Forms>
    </>
  );
}
