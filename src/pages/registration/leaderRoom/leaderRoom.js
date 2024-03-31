import React, { useState, useEffect } from "react";
import Forms from "../../../components/forms/forms";

import { config } from "../../../conf/variaveis";

export default function RegistrationParticipants() {
  const [leaders, setLeaders] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [leader, setLeader] = useState("");
  const [room, setRoom] = useState("");
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch(`${config.caminhoServidor}/api/participantstype/lider`)
      .then((response) => response.json())
      .then((data) => setLeaders(data))
      .catch((error) => console.log("Erro ao buscar líderes:", error));

    fetch(`${config.caminhoServidor}/api/rooms`)
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) => console.log("Erro ao buscar quartos:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");

    if (!room || !leader) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    const data = {
      leader,
      room,
    };

    try {
      const response = await fetch(
        `${config.caminhoServidor}/api/rooms/${data.room}/leader/${data.leader}`,
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
      <h3>Cadastro Líderes nos Quartos</h3>
      <Forms>
      <form className="member-form" onSubmit={handleSubmit}>
        {erro && <p>{erro}</p>}
        {resposta && <p>{resposta}</p>}
        <fieldset>
          <legend>Registro</legend>
          <div>
            <label htmlFor="leader">Líder:</label>
            <select
              id="leader"
              value={leader}
              onChange={(e) => setLeader(e.target.value)}
            >
              <option value="">Selecione</option>
              {leaders.map((leader) => (
                <option key={leader.id} value={leader.id}>
                  {leader.name}
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
        <button type="submit">Enviar</button>
      </form>
      </Forms>
      <div>
        <h2>Lista de Quartos</h2>
        <ul>
          {rooms.map((room) => (
            <li key={room.id}>
              <fieldset>
                <legend><h3>{room.name}</h3></legend>
                <p>Quarto: {room.name}</p>
                <p>Gênero: {room.sex}</p>
                <p>Pessoas no Quarto: {room.capacity}</p>
                <p>Líder do Quarto: {room.room_leader}</p>
              </fieldset>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
