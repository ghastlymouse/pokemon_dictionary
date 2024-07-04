import Link from "next/link";
import PokemonDetail from "./_components/PokemonDetail";

interface DetailPageType {
  params: {
    id: number;
  };
}

const DetailPage = async ({ params }: DetailPageType) => {
  return (
    <div className="h-[700px] p-4 bg-slate-400 flex flex-col justify-center items-center gap-4 rounded-md">
      <PokemonDetail params={params} />
      <Link href={"/"} className="bg-black text-white rounded-md p-1">
        Go Back
      </Link>
    </div>
  );
};

export default DetailPage;
