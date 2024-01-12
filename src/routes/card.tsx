import { useLoaderData } from "react-router-dom";
import { Card as CardType } from "../loaders";

export default function Card() {
  const { card } = useLoaderData() as { card: CardType };
  return (
    <>
      <p>{card.name}</p>
      <p>{card.description}</p>
      <p>{card.pwd}</p>
    </>
  );
}
