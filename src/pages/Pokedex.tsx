import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Spinner,
  Stack,
  Stat,
  StatNumber,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { PokemonCard } from '../components';
import { useAllPokemonList } from '../hooks/useAllPokemonList';
import { SimplePokemon } from '../interfaces/fetchAllPokemonsResponse';
import { PageAnimation } from './PageAnimation';

export const Pokedex = () => {
  const { isLoading, simplePokemonList } = useAllPokemonList();
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLabel, setPageLabel] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [filteredPokemons, setFilteredPokemons] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    setFilteredPokemons(simplePokemonList.slice(currentPage, currentPage + 9));
    setMaxPage(Math.ceil(simplePokemonList.length / 9));
  }, [simplePokemonList]);

  useEffect(() => {
    setFilteredPokemons(simplePokemonList.slice(currentPage, currentPage + 9));
  }, [currentPage]);

  const nextPage = () => {
    // if (simplePokemonList.slice(currentPage, currentPage + 9).length > currentPage + 9) {
    //   alert('si se puede')
    // } else {
    //   alert('NO se puede')
    // }
    setCurrentPage(currentPage + 9);
    setPageLabel(oldPageLabel => oldPageLabel + 1);
  };
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 9);
      setPageLabel(oldPageLabel => oldPageLabel - 1);
    }
  };

  return (
    <PageAnimation>
      <Stack
        paddingX="1rem"
        marginY="2rem"
        marginX="auto"
        maxW={{
          base: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        }}
      >
        <Heading
          as="h1"
          fontWeight="normal"
          textAlign="center"
          letterSpacing="0.25rem"
        >
          800{' '}
          <Heading as="p" display="inline">
            Pokemons
          </Heading>{' '}
          for you to choose your favorite
        </Heading>
        <Box>
          <Heading>Input</Heading>
        </Box>
        <VStack>
          {!isLoading ? (
            <Grid
              w="100%"
              gap="2rem"
              templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              }}
            >
              {filteredPokemons.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </Grid>
          ) : (
            <Spinner size="xl" />
          )}
        </VStack>
        <HStack gap="1rem" pt="1.5rem" justifyContent="center">
          <Button onClick={prevPage} variant="outline" colorScheme="yellow">
            Previous
          </Button>
          <Text>
            {pageLabel} ... {maxPage}
          </Text>
          <Button onClick={nextPage} variant="outline" colorScheme="yellow">
            Next
          </Button>
        </HStack>
      </Stack>
    </PageAnimation>
  );
};
