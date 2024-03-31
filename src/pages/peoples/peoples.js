import CardsList from "../../components/cardsList/cardsList";

export default function Peoples() {
  return (
    <>
      <div>
        <h3>Lista de Pessoas</h3>
      </div>

      <CardsList href="/encontro/encontro">Encontro</CardsList>
      <CardsList href="/reencontro/reencontro">Reencontro</CardsList>
    </>
  );
}
