import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  attributify: true,
  theme: {
    extend: {
      fontFamily: {
      text: ['Montserrat', 'sans-serif']
    },
    colors: {
      primary: '575757',
      secondary: '9A44B8'
    }
  }}})