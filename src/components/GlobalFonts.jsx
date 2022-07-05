import { createGlobalStyle } from "styled-components";
import eot from '../assets/fonts/07bc241768c969f6b6a27a7bf0dfb490.eot'
import woff2 from '../assets/fonts/07bc241768c969f6b6a27a7bf0dfb490.woff2'
import woff from '../assets/fonts/07bc241768c969f6b6a27a7bf0dfb490.woff'
import ttf from '../assets/fonts/07bc241768c969f6b6a27a7bf0dfb490.ttf'
import svg from '../assets/fonts/07bc241768c969f6b6a27a7bf0dfb490.svg'


export const GlobalFonts = createGlobalStyle`
    @font-face {
    font-family: "TT Norms Regular";
    src: url(${eot}); 
    src: url(${eot}) format("embedded-opentype"), 
    url(${woff2}) format("woff2"), 
    url(${woff}) format("woff"), 
    url(${ttf}) format("truetype"), 
    url(${svg}) format("svg"); 
}
`