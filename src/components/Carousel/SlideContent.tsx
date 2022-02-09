import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { formatText } from '../../utils/formatText';

interface SlideContentProps {
  continent: string;
  description: string;
}

export function SlideContent({ continent, description }: SlideContentProps) {
  return (
    <Link href={`/continentes/${formatText(continent)}`} passHref>
      <Flex
        as="a"
        direction="column"
        bgImage={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(/images/carousel-${formatText(
          continent
        )}-img.png)`}
        bgSize="cover"
        bgPosition="center"
        align="center"
        justify="center"
        width="100%"
        minHeight={['250px', '450px']}
      >
        <VStack spacing={['3', '4']}>
          <Heading
            textTransform="capitalize"
            fontSize={['2xl', '3xl', '5xl']}
            lineHeight={['36px', '56px', '72px']}
            fontWeight="700"
            color="gray.50"
          >
            {continent}
          </Heading>
          <Text
            fontSize={['sm', 'md', '2xl']}
            lineHeight={['21px', '27px', '36px']}
            fontWeight="700"
            color="gray.50"
          >
            {description}
          </Text>
        </VStack>
      </Flex>
    </Link>
  );
}
