import { createGlobalStyle } from 'styled-components';
import kanit from '../assets/fonts/kanit.ttf';
import inter from '../assets/fonts/inter.ttf';
import { MAIN_COLORS } from '../constants/styles/mainColors';

export const Global = createGlobalStyle<{ $theme: boolean }>`
    @font-face {
        font-family: Kanit;
        src: url(${kanit});

    }
    @font-face {
        font-family: Inter;
        src: url(${inter});
    }
    :root {
        --bg-color: ${(props) =>
          props.$theme
            ? `${MAIN_COLORS.COLOR_DARK}`
            : `${MAIN_COLORS.COLOR_LIGHT}`};
        --text-color: ${(props) =>
          props.$theme
            ? `${MAIN_COLORS.COLOR_LIGHT}`
            : `${MAIN_COLORS.COLOR_DARK}`};
    }
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: Kanit;
        font-weight: 500;
       
    }
    a, a:link, a:visited, a:hover  {
        text-decoration: none;
        color: var(--text-color);
    }

    ul {
        list-style-type: none;
    }

    input, button {
        color: var(--text-color);
        background-color: var(--bg-color);
        border: none;
        border-radius: 0;

        &:focus {
            outline: none;
        }
    }

    body {
        background-color: var(--bg-color);
        color: var(--text-color);
        transition: height 1s;
    }
`;
