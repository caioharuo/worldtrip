import { Center, Divider, Heading } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Center>
        <Divider
          borderColor="gray.900"
          borderTopWidth="1px"
          maxWidth={['60px', '90px']}
          bg="gray.900"
        />
      </Center>
      <Heading
        align="center"
        m={['24px 0 20px', '52px 0']}
        fontWeight="500"
        fontSize={['xl', '4xl']}
      >
        Vamos nessa?
        <br /> Então escolha seu continente
      </Heading>
      <Carousel />
    </>
  );
}
