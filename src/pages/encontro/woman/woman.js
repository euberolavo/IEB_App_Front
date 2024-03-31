import { useState, useEffect } from "react";
import CardsList from "../../../components/cardsList/cardsList";

import { config } from "../../../conf/variaveis";

export default function ParticipantsEncontro() {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    async function fetchParticipants() {
      try {
        const response = await fetch(
          `${config.caminhoServidor}/api/participantstype/Encontro/participantssex/Feminino`
        ); // Substitua pelo endpoint correto da API
        if (response.ok) {
          const data = await response.json();
          setParticipants(data);
        } else {
          console.log("Erro ao obter os membros da API.");
        }
      } catch (error) {
        console.log("Erro:", error);
      }
    }

    fetchParticipants();
  }, []);

  return (
    <>
      <h3>Lista Encontro - Mulheres</h3>
      <h4>Participantes</h4>
      {participants.map((participants, index) => (
        <CardsList
          href={`/details/54646546?id=${participants.id}`}
          as={`/details/54646546?id=${participants.id}`}
          key={participants.id}
        >
          <div key={index}>{participants.name}</div>
        </CardsList>
      ))}
    </>
  );
}
