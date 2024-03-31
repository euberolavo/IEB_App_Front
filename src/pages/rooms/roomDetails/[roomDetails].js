import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { config } from "../../../conf/variaveis";

export default function ParticipantsDetails() {
  const [details, setDetails] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchMembro() {
      try {
        const response = await fetch(
          `${config.caminhoServidor}/api/rooms/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setDetails(data);
        } else {
          console.log("Erro ao obter os membros da API.");
        }
      } catch (error) {
        console.log("Erro:", error);
      }
    }
    if (id) {
      fetchMembro();
    }
  }, [id]);

  console.log(details);

  if (!details) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <fieldset>
        <legend>
          <h3>{details.roomname}</h3>
        </legend>
        <div>
          <p>Líder: {details.leader.leadername}</p>
          <p>Quant. Part.: {details.capacity}</p>
          <p>Gênero: {details.sex}</p>
          <p>
            Participantes:
            <ul>
              {details.participants.map((participant, index) => (
                <li>
                  <div key={participant.id}>
                    <h3>Nome: {participant.participantname}</h3>
                    <p>Ministério: {participant.ministry}</p>
                  </div>
                </li>
              ))}
            </ul>
          </p>
        </div>
      </fieldset>
    </>
  );
}
