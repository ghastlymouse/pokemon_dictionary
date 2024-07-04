import axios from "axios";
import Image from "next/image";

interface DetailPageType {
  params: {
    id: number;
  };
}

const PokemonDetail = async ({ params }: DetailPageType) => {
  const response = await axios.get(
    `http://localhost:3000/api/pokemons/${params.id}`
  );
  const pokemonInfo: Pokemon = response.data;
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="flex flex-row">
        <div className="w-1/2 flex-1">
          <Image
            src={pokemonInfo.sprites.front_default}
            alt={pokemonInfo.korean_name}
            width={250}
            height={250}
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-start gap-1 text-xl">
          <span>이름: {pokemonInfo.korean_name}</span>
          <span>신장: {(pokemonInfo.height * 0.1).toFixed(1)}m</span>
          <span>체중: {pokemonInfo.weight * 0.1}kg</span>
          <div className="flex flex-row gap-1 items-center">
            타입:{" "}
            {pokemonInfo.types.map((type) => (
              <div
                key={type.type.name}
                className="bg-red-500 text-white rounded-sm p-1"
              >
                {type.type.korean_name}
              </div>
            ))}{" "}
          </div>
          <div className="flex flex-row gap-1 items-center">
            특성:{" "}
            {pokemonInfo.abilities.map((ability) => (
              <div
                key={ability.ability.name}
                className="bg-violet-700 text-white rounded-sm p-1"
              >
                {ability.ability.korean_name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <div className="bg-yellow-600 text-white rounded-sm p-1">
          {pokemonInfo.korean_name}의 {pokemonInfo.moves.length}개의 기술
        </div>
        <div>
          {pokemonInfo.moves.map((move) => move.move.korean_name + " | ")}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
