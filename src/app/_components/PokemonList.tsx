"use client";

import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";

const PokemonList = () => {
  const {
    data: pokemons = [],
    isError,
    isPending,
  } = useQuery<Pokemon[], AxiosError, Pokemon[]>({
    queryKey: ["pokemons"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/api/pokemons");
      console.log(response);
      return response.data;
    },
  });

  if (isPending) return <div>포켓몬 불러오는 중...</div>;

  if (isError) return <div>데이터를 가져오는 데에 실패했습니다.</div>;
  return (
    <>
      <ul className="grid grid-cols-6 gap-1">
        {pokemons.map((pokemon) => (
          <li
            key={pokemon.id}
            className="bg-slate-400 border-solid border-4 border-black rounded-md p-4"
          >
            <Link href={`/detail/${pokemon.id}`}>
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.korean_name}
                width={100}
                height={100}
              />
              <h1>{pokemon.korean_name}</h1>
              <p>도감번호: {pokemon.id}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PokemonList;
