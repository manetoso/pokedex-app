import { Box, Button } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  [x: string]: any;
}

export const CustomButton = ({ children, onClick, ...props }: Props) => {
  return (
    <Button
      position="relative"
      fontWeight="bold"
      fontFamily="fonts.karla"
      fontSize="2xl"
      paddingY="1.5rem"
      bg="types.grass"
      borderRadius="xl"
      borderBottom="8px"
      borderBottomColor="blackAlpha.300"
      transition="ease-in-out"
      transitionDuration="1500ms"
      _hover={{
        bg: 'types.grass',
      }}
      transformOrigin=""
      _active={{
        borderBottom: '1px',
        transform: '',
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};
