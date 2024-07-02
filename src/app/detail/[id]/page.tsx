import Link from "next/link";
import PokemonDetail from "./PokemonDetail";
import { Metadata } from "next";
import axios from "axios";
interface DetailPageType {
  params: {
    id: number;
  };
}

export const generateMetadata = async (
  { params }: DetailPageType,
  pokemonInfo: Pokemon
): Promise<Metadata> => {
  return {
    title: `${params.id}번 포켓몬 정보`,
    description: "정보",
  };
};

const DetailPage = async ({ params }: DetailPageType) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <PokemonDetail params={params} />
      <Link href={"/"} className="bg-white text-black rounded-md p-1">
        Go Back
      </Link>
    </div>
  );
};

export default DetailPage;
