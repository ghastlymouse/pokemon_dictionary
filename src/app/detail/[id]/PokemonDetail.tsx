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
    <div>
      <Image
        src={pokemonInfo.sprites.front_default}
        alt={pokemonInfo.korean_name}
        width={250}
        height={250}
      />
      이름: {pokemonInfo.korean_name} <br />
      신장: {(pokemonInfo.height * 0.1).toFixed(1)}m <br />
      체중: {pokemonInfo.weight * 0.1}kg <br />
      타입: {pokemonInfo.types.map((type) => type.type.korean_name + "/")}{" "}
      <br />
      특성:{" "}
      {pokemonInfo.abilities.map(
        (ability) => ability.ability.korean_name + "/"
      )}
    </div>
  );
};

export default PokemonDetail;
