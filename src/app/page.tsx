"use client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const {
    data: pokemons,
    isError,
    isPending,
  } = useQuery<Pokemon[], AxiosError, Pokemon[]>({
    queryKey: ["pokemons"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/api/pokemons");
      console.log(response.data);
      return response.data;
    },
  });

  if (isPending) return <div>...로딩중</div>;

  if (isError) return <div>데이터를 가져오는 데에 실패했습니다.</div>;

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl">포켓몬 목록</h1>
      <ul className="grid grid-cols-6 gap-1">
        {pokemons.map((pokemon) => (
          <li
            key={pokemon.id}
            className="border-solid border-4 border-white rounded-md p-4"
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
    </div>
  );
}
