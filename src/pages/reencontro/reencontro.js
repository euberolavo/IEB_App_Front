import CardsList from "../../components/cardsList/cardsList";

export default function Rencontro() {
  return (
    <>
      <h3>Lista de Pessoas</h3>
      <h4>Reencontro</h4>
        <CardsList href="/reencontro/general/general">Lista Geral</CardsList>
        <CardsList href="/reencontro/man/man">Homens</CardsList>
        <CardsList href="/reencontro/woman/woman">Mulheres</CardsList>
    </>
  );
}
