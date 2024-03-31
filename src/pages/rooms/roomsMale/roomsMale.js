import { useState, useEffect } from "react";
import Link from "next/link";

import { config } from "../../../conf/variaveis";

export default function RoomsMale() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await fetch(
          `${config.caminhoServidor}/api/roomstype/Masculino`
        ); // Substitua pelo endpoint correto da API
        if (response.ok) {
          const data = await response.json();
          setRooms(data);
        } else {
          console.log("Erro ao obter os quartos da API.");
        }
      } catch (error) {
        console.log("Erro:", error);
      }
    }

    fetchRooms();
  }, []);

  return (
    <>
      <h3>Lista de Quartos - Masculinos</h3>

      <h3>Participantes</h3>
      {rooms.map((room, index) => (
        <Link
          href={`/rooms/roomDetails/rd?id=${room.id}`}
          as={`/rooms/roomDetails/rd?id=${room.id}`}
          key={room.id}
        >
          <fieldset key={index}>
            <legend></legend>
            <div>
              <h3>{room.roomname}</h3>
              <p>Líder: {room.leader.leadername}</p>
              <p>Quantidade Part.: {room.capacity}</p>

            </div>
          </fieldset>
        </Link>
      ))}
    </>
  );
}
