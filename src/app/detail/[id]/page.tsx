import Link from "next/link";
import PokemonDetail from "./PokemonDetail";

interface DetailPageType {
  params: {
    id: number;
  };
}

const DetailPage = ({ params }: DetailPageType) => {
  return (
    <div>
      {params.id}
      <PokemonDetail params={params} />
      <Link href={"/"}>뒤로가기</Link>
    </div>
  );
};

export default DetailPage;
