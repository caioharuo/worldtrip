import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Image, SimpleGrid, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

interface HeaderProps {
  hasBackButton?: boolean;
}

export function Header({ hasBackButton = false }: HeaderProps) {
  return (
    <SimpleGrid
      justifyItems="center"
      alignItems="center"
      columns={hasBackButton ? 3 : 1}
      padding="27px 0 27px 0"
      mx={['16px', '140px']}
    >
      {hasBackButton && (
        <NextLink href="/" passHref>
          <Link
            position="relative"
            left="0"
            justifySelf="start"
            bg="transparent"
          >
            <ChevronLeftIcon
              w={['16px', '32px']}
              h={['16px', '32px']}
              transition="color 0.4s"
              _hover={{
                color: 'yellow.500',
              }}
            />
          </Link>
        </NextLink>
      )}
      <Image
        src="/images/logo.svg"
        alt="WorldTrip"
        maxWidth={['81px', '185px']}
        justifySelf="center"
      />
    </SimpleGrid>
  );
}
