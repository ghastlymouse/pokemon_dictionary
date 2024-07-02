"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get("http://localhost:3000/api/pokemons");
      console.log(response.data);
      setPokemons(response.data);
    };
    fetchData();
  }, []);

  if (!pokemons) return <div>...로딩중</div>;

  return (
    <div>
      <h1>포켓몬 목록</h1>
      <ul className="grid grid-cols-4">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
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
