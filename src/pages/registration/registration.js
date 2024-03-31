import CardsList from "../../components/cardsList/cardsList";

export default function Peoples() {
  return (
    <div>
      <h1>Cadastros</h1>
      <div>
        <CardsList href="/registration/registrationParticipants/registrationParticipants">
          Cadastro de Pessoas
        </CardsList>
        <CardsList href="/registration/registrationRoom/registrationRoom">
          Cadastro de Quartos
        </CardsList>
        <CardsList href="/registration/leaderRoom/leaderRoom">
          Cadastro de Líder de Quarto
        </CardsList>
        <CardsList href="/registration/participantsRoom/participantsRoom">
          Cadastro de Encontristas nos Quartos
        </CardsList>
        <CardsList href="/registration/registrationTeams/registrationTeams">
          Criação de Equipes
        </CardsList>
        <CardsList href="/registration/workerTeams/workerTeams">
          Cadastro de Trabalhadores nas Equipes
        </CardsList>
      </div>
    </div>
  );
}
