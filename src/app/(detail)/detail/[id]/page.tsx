import Link from "next/link";
import PokemonDetail from "./_components/PokemonDetail";

interface DetailPageType {
  params: {
    id: number;
  };
}

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
