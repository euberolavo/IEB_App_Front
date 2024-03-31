import CardsList from "../../components/cardsList/cardsList";

export default function Peoples() {
  return (
    <div>
      <h3>Lista de Quartos</h3>
      <div>
        <CardsList href="/rooms/roomsMale/roomsMale">Quartos Masculinos</CardsList>
        <CardsList href="/rooms/roomsFemale/roomsFemale">Quartos Femininos</CardsList>
      </div>
    </div>
  );
}