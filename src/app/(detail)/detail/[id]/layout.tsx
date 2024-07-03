import axios from "axios";
import { Metadata } from "next";
import React from "react";

interface DetailPageType {
  params: {
    id: number;
  };
}

export const generateMetadata = async ({
  params,
}: DetailPageType): Promise<Metadata> => {
  const response = await axios.get(
    `http://localhost:3000/api/pokemons/${params.id}`
  );
  const pokemonInfo: Pokemon = response.data;
  return {
    title: `${params.id}번 포켓몬 ${pokemonInfo.korean_name}`,
    description: "정보",
  };
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <header>포켓몬 상세 정보</header>
      {children}
    </div>
  );
};

export default layout;
