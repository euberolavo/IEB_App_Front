import Link from "next/link";
import CardsList from "../../components/cardsList/cardsList";

export default function Encontro() {
  return (
    <>
      <h3>Lista de Pessoas</h3>
      <h4>Encontro</h4>
      <div>
        <CardsList href="/encontro/general/general">Lista Geral</CardsList>
        <CardsList href="/encontro/man/man">Homens</CardsList>
        <CardsList href="/encontro/woman/woman">Mulheres</CardsList>
      </div>
    </>
  );
}
