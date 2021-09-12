import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
	${reset}
	::-webkit-scrollbar {
		display: none !important;
	}

	html {
		background-color: #17181c;
		color: #fff;
		font-family: "AK1", sans-serif;
		font-size: 0.9375vw;
		cursor: auto;
		scroll-behavior: smooth;
		${media.mobile} {
			font-size: 8px;
		}
	}
`;