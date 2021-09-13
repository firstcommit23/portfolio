import styled from "styled-components";
import { media } from "styles/theme";
import CareerBox from "./CareerBox";
import { careers } from "public/data";

careers.map(c => console.log(c))
const Page3 = () => (
  <Container>
		<Wrapper>
			
			<Title>Work Experience</Title>
				{
					careers.map((career, index) => (
						
						<CareerBox key={index} career={career} />
					))
				}
			
			
		</Wrapper>
	</Container>
);

const Container = styled.div`
	height: 100%;
	padding: 2rem 2rem;
	box-sizing: border-box;
  background-color: #272e41;
`;

const Wrapper = styled.div`
	max-width: 1373px;
	height: 100%;
	margin: 0 auto;
	box-sizing: border-box;
	overflow: hidden;
	position: relative;
	flex-direction: column;
	display: grid;

	${media.mobile} {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const Title = styled.div`
	font-size: 3rem;
	font-weight: 800;
`;

const TextBox = styled.div`
	white-space: pre-line;
	line-height: 230%;
	margin-top: 3rem;
	font-size: 1.1rem;

	${media.mobile} {
		font-size: 1.3rem;
		line-height: 200%;
		font-weight: 700;
		padding-left: 7rem;
	}
`;

const Bold = styled.span`
	font-weight: 700;
	font-size: 1.3rem;
	margin-left: 0.3rem;
	background-clip: text;
	background: ${({ theme }) => theme.color.gradient};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	${media.mobile} {
		font-size: 1.5rem;
		font-weight: 800;
	}
`;

export default Page3;