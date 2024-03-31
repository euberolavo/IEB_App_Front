import React, { useState, useEffect } from "react";
import Link from "next/link";
import Forms from "../../../components/forms/forms";

import { config } from "../../../conf/variaveis";

export default function RegistrationParticipants() {
  const [participants, setParticipants] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [participant, setParticipant] = useState("");
  const [room, setRoom] = useState("");
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch(`${config.caminhoServidor}/api/participantsWithoutRoom/`)
      .then((response) => response.json())
      .then((data) => setParticipants(data))
      .catch((error) => console.log("Erro ao buscar Participantes:", error));

    fetch(`${config.caminhoServidor}/api/rooms`)
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) => console.log("Erro ao buscar quartos:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");

    if (!room || !participant) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    const data = {
      participant,
      room,
    };

    console.log(data);

    try {
      const response = await fetch(
        `${config.caminhoServidor}/api/rooms/${data.room}/participants/${data.participant}/capacity/1`,
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
      <h3>Cadastro Participantes nos Quartos</h3>
      <Forms>
        <form className="member-form" onSubmit={handleSubmit}>
          {erro && <p>{erro}</p>}
          {resposta && <p>{resposta}</p>}
          <fieldset>
            <legend>Registro</legend>
            <div>
              <label htmlFor="participant">Participante:</label>
              <select
                id="participant"
                value={participant}
                onChange={(e) => setParticipant(e.target.value)}
              >
                <option value="">Selecione</option>
                {participants.map((participant) => (
                  <option key={participant.id} value={participant.id}>
                    {participant.name}
                  </option>
                ))}
              </select>

              <label htmlFor="room">Quarto:</label>
              <select
                id="room"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              >
                <option value="">Selecione</option>
                {rooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name}
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
