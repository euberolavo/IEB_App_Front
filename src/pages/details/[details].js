import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { config } from "../../conf/variaveis";
import { format } from "date-fns"; // Importe a função format


export default function ParticipantsDetails() {
  const [details, setDetails] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchMembro() {
      try {
        const response = await fetch(
          `${config.caminhoServidor}/api/participants/${id}`
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

  if (!details) {
    return <div>Carregando...</div>;
  }

  // Formate a data de nascimento usando date-fns
  const formattedBirthDate = format(new Date(details.birth_date), "dd/MM/yyyy");

  const handleGoBack = () => {
    window.history.back(); // Navega para a página anterior no histórico do navegador
  };

  return (
    <>
      {/* <style jsx>{`
        .botao-voltar {
          margin-top: 10px;
          padding: 5px 10px;
          background-color: #f0f0f0;
          color: #333;
          border: 1px solid #ccc;
          border-radius: 4px;
          cursor: pointer;
        }
        .botao-voltar:hover {
          background-color: #ddd;
        }
      `}</style> */}
      <fieldset>
        <legend>
          <h3>{details.name}</h3>
        </legend>
        <div>
          <p>Endereço: {details.address}</p>
          <p>Data Nascimento: {formattedBirthDate}</p>
          <p>CPF: {details.cpf}</p>
          <p>E-mail: {details.email}</p>
          <p>Ministerio: {details.ministry}</p>
          <p>Telefone: {details.phone}</p>
          <p>Sexo: {details.sex}</p>
          <p>Tipo: {details.type}</p>
        </div>
      </fieldset>
    </>
  );
}
