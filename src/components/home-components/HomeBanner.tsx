import { Heading, Image, useMediaQuery } from '@chakra-ui/react';

export const HomeBanner = () => {
  const [isLg] = useMediaQuery('(min-width: 62em)');
  return (
    <>
      {(!isLg && (
        <Image objectFit="cover" src="/public/banners/mobile-home-banner.svg" />
      )) || (
        //   <Heading>Is LG</Heading>
        <Image
          w="100%"
          objectFit="cover"
          src="/public/banners/mobile-home-banner.svg"
        />
      )}
    </>
  );
};
