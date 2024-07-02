import axios from "axios";
import Image from "next/image";
import React from "react";

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
      <Image
        src={pokemonInfo.sprites.front_default}
        alt={pokemonInfo.korean_name}
        width={250}
        height={250}
      />
      <span>이름: {pokemonInfo.korean_name}</span>
      <span>신장: {(pokemonInfo.height * 0.1).toFixed(1)}m</span>
      <span>체중: {pokemonInfo.weight * 0.1}kg</span>
      <div className="flex flex-row gap-1">
        타입:{" "}
        {pokemonInfo.types.map((type) => (
          <div key={type.type.name} className="bg-red-500 rounded-sm p-1">
            {type.type.korean_name}
          </div>
        ))}{" "}
      </div>
      <div className="flex flex-row gap-1">
        특성:{" "}
        {pokemonInfo.abilities.map((ability) => (
          <div
            key={ability.ability.name}
            className="bg-violet-700 rounded-sm p-1"
          >
            {ability.ability.korean_name}
          </div>
        ))}
      </div>
      <div>
        기술: {pokemonInfo.moves.map((move) => move.move.korean_name + " | ")}
      </div>
    </div>
  );
};

export default PokemonDetail;
