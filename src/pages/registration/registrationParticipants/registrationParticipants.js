import { useState } from "react";
import { toast } from "react-toastify";
import Forms from "../../../components/forms/forms";

import { config } from "../../../conf/variaveis";

export default function RegistrationParticipants() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [civilStatus, setCivilStatus] = useState("");
  const [email, setEmail] = useState("");
  const [educationalLevel, setEducationalLevel] = useState("");
  const [profession, setProfession] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");
  const [_state, setState] = useState("");
  const [landmark, setLandmark] = useState("");
  const [congregation, setCongregation] = useState("");
  const [cellGroup, setCellGroup] = useState("");
  const [baptism, setBaptism] = useState("");
  const [encounter, setEncounter] = useState("");
  const [reencounter, setReencounter] = useState("");
  const [leadershipSchool, setLeadershipSchool] = useState("");
  const [birth_date, setBirth_date] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState("");
  const [ministry, setMinistry] = useState("");
  const [resposta, setResposta] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Limpar o estado de erro
    setErro("");
  
    // Verificar se algum campo está vazio
    if (!name || (!cpf && !rg)) {
      setErro("Por favor, preencha todos os campos.");
      toast("Por favor, preencha todos os campos.", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "warning",
      });
      return;
    }
  
    const data = {
      nome: name,
      cpf: cpf,
      rg: rg,
      estadoCivil: civilStatus,
      email: email,
      nivelEducacional: educationalLevel,
      profissao: profession,
      cep: cep,
      rua: street,
      numCasa: houseNumber,
      cidade: city,
      estado: _state,
      pontoReferencia: landmark,
      congregacao: congregation,
      celula: cellGroup,
      batizado: baptism,
      encontro: encounter,
      reencontro: reencounter,
      escolaLideres: leadershipSchool,
      dataNasc: birth_date,
      sexo: sex,
      telefone: phone,
      ministerio: ministry,
    };
  
    try {
      const response = await fetch(
        `${config.caminhoServidor}/cadmembro`,
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
        if (textoResposta === "Cadastro realizado com sucesso.") {
          toast(textoResposta, {
            hideProgressBar: true,
            autoClose: 2000,
            type: "warning",
          });
        } else {
          toast(textoResposta, {
            hideProgressBar: true,
            autoClose: 2000,
            type: "success",
          });
        }
      } else {
        // Error: Handle the error case
        console.log("Erro ao cadastrar.");
        toast("CPF ou RG já cadastrado.", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "warning",
        });
      }
    } catch (error) {
      console.log("Erro:", error);
    }
  };
  

  return (
    <>
      <h3>Cadastro de Pessoas</h3>
      <Forms>
        <form className="member-form" onSubmit={handleSubmit}>
          {/* Informações Pessoais */}
          <fieldset>
            {erro && <p>{erro}</p>}
            {resposta && <p>{resposta}</p>}
            <legend>Informações Pessoais</legend>
            <div>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="birth_date">Data de Nascimento:</label>
              <input
                type="date"
                id="dataNasc"
                value={birth_date}
                onChange={(e) => setBirth_date(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="sex">Sexo:</label>
              <select
                id="sexo"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="1">Masculino</option>
                <option value="2">Feminino</option>
              </select>
            </div>
            <div>
              <label htmlFor="civilStatus">Estado Civil:</label>
              <select
                id="estadoCivil"
                value={civilStatus}
                onChange={(e) => setCivilStatus(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="1">Solteiro</option>
                <option value="2">Casado</option>
              </select>
            </div>
            <div>
              <label htmlFor="cpf">CPF:</label>
              <input
                type="number"
                id="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="rg">RG:</label>
              <input
                type="number"
                id="rg"
                value={rg}
                onChange={(e) => setRg(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phone">Telefone:</label>
              <input
                type="tel"
                id="telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Informações Adicionais</legend>
            <div>
              <label htmlFor="educationalLevel">Escolaridade:</label>
              <select
                id="nivelEducacional"
                value={educationalLevel}
                onChange={(e) => setEducationalLevel(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="1">Ensino Fundamental</option>
                <option value="3">Graduação</option>
              </select>
            </div>
            <div>
              <label htmlFor="profession">Profissão:</label>
              <select
                id="profissao"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="1">Medico</option>
                <option value="3">Engenheiro</option>
              </select>
            </div>
          </fieldset>

          <fieldset>
            <legend>Endereço</legend>
            <div>
              <label htmlFor="cep">CEP:</label>
              <input
                type="number"
                id="cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="street">Rua:</label>
              <input
                id="rua"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="houseNumber">Número:</label>
              <input
                type="number"
                id="numCasa"
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="city">Cidade:</label>
              <input
                id="cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="_state">Estado:</label>
              <input
                id="estado"
                value={_state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="landmark">Ponto de Referência:</label>
              <input
                id="pontoReferencia"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
              />
            </div>
          </fieldset>
          {/* Informações Ministeriais */}
          <fieldset>
            <legend>Informações Ministeriais</legend>
            <div>
              <label htmlFor="congregation">Congregação:</label>
              <select
                id="congregacao"
                value={congregation}
                onChange={(e) => setCongregation(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="IEB Sede">IEB Sede</option>
                <option value="IEB Jardim">IEB Jardim</option>
              </select>
            </div>
            <div>
              <label htmlFor="cellGroup">Célula:</label>
              <select
                id="celula"
                value={cellGroup}
                onChange={(e) => setCellGroup(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="1">Celula 1</option>
                <option value="3">Célula 2</option>
              </select>
            </div>
            <div>
              <label htmlFor="ministry">Ministério:</label>
              <select
                id="ministerio"
                value={ministry}
                onChange={(e) => setMinistry(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="7">Louvor</option>
                <option value="6">Dança</option>
              </select>
            </div>
            <div>
              <label htmlFor="baptism">Batizado:</label>
              <input
                id="batizado"
                type="checkbox"
                checked={baptism}
                onChange={(e) => setBaptism(e.target.checked ? true : false)}
              />
            </div>
            <div>
              <label htmlFor="encounter">Encontro:</label>
              <input
                id="encontro"
                type="checkbox"
                checked={encounter}
                onChange={(e) => setEncounter(e.target.checked ? true : false)}
              />
            </div>
            <div>
              <label htmlFor="reencounter">Reencontro:</label>
              <input
                id="reencontro"
                type="checkbox"
                checked={reencounter}
                onChange={(e) => setReencounter(e.target.checked ? true : false)}
              />
            </div>
            <div>
              <label htmlFor="leadershipSchool">Escola de líderes:</label>
              <input
                id="escolaLideres"
                type="checkbox"
                checked={leadershipSchool}
                onChange={(e) => setLeadershipSchool(e.target.checked ? true : false)}
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
