import styled from "styled-components";
import { media } from "styles/theme";

const Page2 = () => (
  <Wrapper className="flex">
		여기에 자기소개!
	</Wrapper>
);

const Wrapper = styled.div`
	margin-top: 100vh;
	height: 100vh;
	padding: 2rem 0;
	box-sizing: border-box;
`;

export default Page2;