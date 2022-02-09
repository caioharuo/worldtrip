import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      '500': '#FFBA08',
    },

    gray: {
      '900': '#47585B',
      '700': '#999999',
      '100': '#DADADA',
      '50': '#F5F8FA',
    },

    black: {
      '999': '#000000',
    },

    white: {
      '0': '#FFFFFF',
    },
  },

  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },

  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900',
      },
    },
  },
});
