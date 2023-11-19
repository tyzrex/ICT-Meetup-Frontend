import { extendBaseTheme } from '@chakra-ui/react';
import { buttonTheme } from './buttonTheme';
import { sectionHeaderTheme } from './headerTheme';
import { TableTheme } from './AdminTable';

export const theme = extendBaseTheme({
 fonts: {
  body: 'Nunito Sans, sans-serif',
  heading: 'Syncopate, sans-serif'
 },
 components: {
  Button: buttonTheme,
  Heading: sectionHeaderTheme,
  Thead:TableTheme
 }
});
