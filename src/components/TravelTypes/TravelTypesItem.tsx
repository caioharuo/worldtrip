import {
  Flex,
  Icon,
  IconProps,
  Image,
  ListItem,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';

interface TravelTypesItemProps {
  type: string;
  icon: string;
}

const CircleIcon = (props: IconProps) => (
  <Icon viewBox="0 0 8 8" {...props}>
    <circle cx="4" cy="4" r="4" fill="#FFBA08" />
  </Icon>
);

export function TravelTypesItem({ type, icon }: TravelTypesItemProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <ListItem>
      <VStack spacing={['0', '6']}>
        {isWideVersion && <Image src={icon} alt="" w="85px" h="85px" />}
        <Flex align="center">
          {!isWideVersion && <CircleIcon fontSize="8px" mr="8px" />}
          <Text fontSize={['lg', '2xl']} fontWeight="600">
            {type}
          </Text>
        </Flex>
      </VStack>
    </ListItem>
  );
}
