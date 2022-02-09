import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Header } from '../../components/Header';
import { CountryCard } from '../../components/CountryCard';

export default function Europe() {
  return (
    <>
      <Header hasBackButton />
      <Flex
        height={['150px', '500px']}
        width="100%"
        bgImage={
          'linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(/images/bigbang-image.png)'
        }
        bgRepeat="no-repeat"
        bgSize="cover"
        align={['center', 'flex-end']}
      >
        <Flex
          width="100%"
          maxW={1160}
          mx={['16px', null, null, null, 'auto']}
          justify={['center', 'flex-start']}
        >
          <Heading
            mb={['0', '59px']}
            fontSize={['28px', '36px']}
            fontWeight="600"
            color="gray.50"
          >
            Europa
          </Heading>
        </Flex>
      </Flex>

      <Box maxW={1160} m={['0 16px 16px', null, null, null, '0 auto 35px']}>
        <Stack spacing={['8', '20']}>
          <Flex mt={['6', '12', '20']}>
            <Stack
              w="100%"
              spacing={['16px', '32px', '70px']}
              direction={['column', null, null, null, 'row']}
            >
              <Text
                maxW={['initial', null, null, null, '600px']}
                textAlign="justify"
                fontSize={['sm', 'lg', '2xl']}
              >
                A Europa é, por convenção, um dos seis continentes do mundo.
                Compreendendo a península ocidental da Eurásia, a Europa
                geralmente divide-se da Ásia a leste pela divisória de águas dos
                montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro
                a sudeste
              </Text>
              <HStack spacing="42px">
                <Flex direction="column" align={['flex-start', 'center']}>
                  <Text
                    fontSize={['2xl', '5xl']}
                    fontWeight="600"
                    color="yellow.500"
                    lineHeight={['36px', '48px']}
                  >
                    50
                  </Text>
                  <Text fontSize={['lg', '2xl']} fontWeight={['400', '600']}>
                    países
                  </Text>
                </Flex>
                <Flex direction="column" align={['flex-start', 'center']}>
                  <Text
                    fontSize={['2xl', '5xl']}
                    fontWeight="600"
                    color="yellow.500"
                    lineHeight={['36px', '48px']}
                  >
                    60
                  </Text>
                  <Text fontSize={['lg', '2xl']} fontWeight={['400', '600']}>
                    línguas
                  </Text>
                </Flex>
                <Flex direction="column" align={['flex-start', 'center']}>
                  <Text
                    fontSize={['2xl', '5xl']}
                    fontWeight="600"
                    color="yellow.500"
                    lineHeight={['36px', '48px']}
                  >
                    27
                  </Text>
                  <Text
                    fontSize={['lg', '2xl']}
                    fontWeight={['400', '600']}
                    display="flex"
                    alignItems="center"
                  >
                    cidades +100
                    <Tooltip label="Londres, Paris, Roma, Praga, Amsterdã, etc...">
                      <InfoOutlineIcon
                        w={['10px', '16px']}
                        h={['10px', '16px']}
                        ml="5px"
                        color="#999999"
                      />
                    </Tooltip>
                  </Text>
                </Flex>
              </HStack>
            </Stack>
          </Flex>

          <VStack spacing={['20px', '40px']}>
            <Heading fontWeight="500" fontSize={['2xl', '4xl']}>
              Cidades +100
            </Heading>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing="45px" mx="auto">
              <CountryCard
                photoUrl="/images/london-card.png"
                city="londres"
                country="reino unido"
                flagUrl="/images/uk-flag.jpg"
              />
              <CountryCard
                photoUrl="/images/paris-card.png"
                city="paris"
                country="frança"
                flagUrl="/images/fr-flag.png"
              />
              <CountryCard
                photoUrl="/images/rome-card.png"
                city="roma"
                country="itália"
                flagUrl="/images/it-flag.png"
              />
              <CountryCard
                photoUrl="/images/prague-card.png"
                city="praga"
                country="república tcheca"
                flagUrl="/images/cz-flag.png"
              />
              <CountryCard
                photoUrl="/images/amsterdam-card.png"
                city="amsterdã"
                country="holanda"
                flagUrl="/images/nl-flag.png"
              />
            </SimpleGrid>
          </VStack>
        </Stack>
      </Box>
    </>
  );
}
