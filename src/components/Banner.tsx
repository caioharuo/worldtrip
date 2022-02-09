import {
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true,
  });

  return (
    <Flex
      position="relative"
      justify="space-between"
      bgImage={'url(/images/banner.png)'}
      bgRepeat="no-repeat"
      bgSize="cover"
      width="100%"
      maxHeight={['163px', '335px']}
      padding={['28px 26px 28px 16px', null, '80px 140px 70px 140px']}
    >
      <Flex direction="column" gap="20px" maxWidth="524px">
        <Heading
          as="h1"
          color="gray.50"
          fontWeight="500"
          fontSize={['xl', '4xl']}
        >
          5 Continentes,
          <br /> infinitas possibilidades.
        </Heading>
        <Text fontSize={['sm', 'xl']} color="gray.100">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>

      {isWideVersion && (
        <Image
          src="/images/airplane.svg"
          alt="Desenho de um avião"
          zIndex={9999}
          position="absolute"
          right={140}
          bottom={-10}
        />
      )}
    </Flex>
  );
}
