import { Flex, List } from '@chakra-ui/react';
import { TravelTypesItem } from './TravelTypesItem';

export function TravelTypes() {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      maxWidth={['275px', '1160px']}
      mx={['auto', '50px', null, null, null, null, 'auto']}
    >
      <List
        colorScheme="yellow"
        display="flex"
        width="100%"
        minHeight={['120px', 'initial']}
        flexWrap="wrap"
        my={['9', '20']}
        justifyContent={['space-around', 'space-between']}
        align="center"
      >
        <TravelTypesItem type="vida noturna" icon="/images/cocktail.svg" />
        <TravelTypesItem type="praia" icon="/images/surf.svg" />
        <TravelTypesItem type="moderno" icon="/images/building.svg" />
        <TravelTypesItem type="clássico" icon="/images/museum.svg" />
        <TravelTypesItem type="e mais..." icon="/images/earth.svg" />
      </List>
    </Flex>
  );
}
