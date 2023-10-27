import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  const gameCards = games.map((game) => <GameCard key={game.id} game={game} />);
  const loadingCards = skeletons.map((s) => <GameCardSkeleton key={s} />);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {isLoading && loadingCards}
        {gameCards}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
