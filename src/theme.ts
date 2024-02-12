import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
    base: '0em',
    sm: '28em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }

export const theme = extendTheme({
    breakpoints,
    styles: {
        global: {
            '*': {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box'
            }
        }
    },

    colors: {
        white: '#ffffff',
        black: '#000000',

        red: {
            100: '#FFB2B2',
            200: '#FF9393',
            300: "#DC0000",
            400: "#A20000",
            500: "#850000"
        },
        gray: {
            100: '#F4F4F4',
            200: '#CBCBCB',
            300: '#949494',
            400: '#606060',
            500: '#2D2D2D',
            600: '#1E1E1E'
        }
    },

    fonts: {
        heading: `"Kumbh Sans", sans-serif`,
        body: `"Kumbh Sans", sans-serif`      
    },
});