import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
	${reset}
	::-webkit-scrollbar {
		display: none !important;
	}

	html {
		background-color: #272e41;
		color: ${({ theme }) => theme.color.pink};
		font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
			Bitstream Vera Sans Mono, Courier New, monospace;
		cursor: auto;
		scroll-behavior: smooth;
		${media.mobile} {
			font-size: 8px;
		}
	}

	.flex {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	section.scrollPage {
		width: 100%;
		height: 100vh;
		position: relative;
	}

	.animate {
    -webkit-animation: animate .6s cubic-bezier(0.2, 0.6, 0.2, 1);
    -moz-animation: animate .6s cubic-bezier(0.2, 0.6, 0.2, 1);
    animation: animate .6s cubic-bezier(0.2, 0.6, 0.2, 1);
    -webkit-animation-fill-mode: backwards;
    -moz-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
	}
`;