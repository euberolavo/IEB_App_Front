import { useState } from "react";
import Forms from "../../../components/forms/forms";

import { config } from "../../../conf/variaveis";

export default function RegistrationRooms() {
  const [name, setName] = useState("");
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Limpar o estado de erro
    setErro("");

    // Verificar se algum campo está vazio
    if (!name) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    const data = {
      name,
    };

    try {
      const response = await fetch(`${config.caminhoServidor}/api/teams`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const textoResposta = await response.text();
        setResposta(textoResposta);
        console.log("Resposta:", textoResposta);
        // Success: Redirect or show success message
        console.log("Cadastro realizado com sucesso!");
      } else {
        // Error: Handle the error case
        console.log("Erro ao cadastrar.");
      }
    } catch (error) {
      console.log("Erro:", error);
    }
  };

  return (
    <>
      <h3>Cadastro de Equipes</h3>
      <Forms>
        <form className="member-form" onSubmit={handleSubmit}>
          {/* Informações Pessoais */}
          <fieldset>
            {erro && <p>{erro}</p>}
            {resposta && <p>{resposta}</p>}
            <legend>Informações</legend>
            <div>
              <label htmlFor="name">Nome da Equipe:</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
