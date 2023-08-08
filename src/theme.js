import { Roboto_Mono } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const roboto = Roboto_Mono({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#556cd6' },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
