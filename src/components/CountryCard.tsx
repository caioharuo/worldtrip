import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

interface CountryCardProps {
  photoUrl: string;
  city: string;
  country: string;
  flagUrl: string;
}

export function CountryCard({
  photoUrl,
  city,
  country,
  flagUrl,
}: CountryCardProps) {
  return (
    <Flex direction="column" borderRadius="4px" maxWidth="256px">
      <Image src={photoUrl} alt={city} />
      <Flex
        direction="column"
        p="18px 24px 24px 24px"
        border="1px solid"
        borderTopWidth="0"
        borderTopLeftRadius="0"
        borderTopRightRadius="0"
        borderBottomLeftRadius="4px"
        borderBottomRightRadius="4px"
        borderColor="yellow.500"
      >
        <Flex justify="space-between" align="center">
          <Box>
            <Stack spacing="12px">
              <Heading
                fontSize="xl"
                fontWeight="600"
                fontFamily="Barlow"
                textTransform="capitalize"
              >
                {city}
              </Heading>
              <Text
                color="gray.700"
                fontFamily="Barlow"
                textTransform="capitalize"
              >
                {country}
              </Text>
            </Stack>
          </Box>
          <Box w="30px" h="30px">
            <Image
              w="100%"
              h="100%"
              borderRadius="50%"
              objectFit="cover"
              src={flagUrl}
              alt={`Bandeira ${country}`}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
