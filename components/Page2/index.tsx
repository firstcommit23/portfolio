import styled from "styled-components";
import { media } from "styles/theme";

const Page2 = () => (
  <Container className="scrollPage">
		<Wrapper className="flex">
			
			<Title>ABOUT ME</Title>
			<img src="https://avatars.githubusercontent.com/u/3303885?v=4" alt="임시" />
			<div>
				<div>mail : jm131313.kim@gmail.com</div>
				<div>github : https://github.com/jemizem</div>
				<div>blog : https://jemizem.tistory.com/</div>
			</div>
			<TextBox className="animate">
			지난 9년간 PHP, C#, ASP.NET을 이용해 일본 이커머스 플랫폼, ERP(인사,급여) 등 다양한 도메인을 담당해본 경험이 있습니다.<br />
			<Bold>모던 웹의 우아함과 가능성</Bold>을 보고 프론트엔드 개발자가 되기 위해 새롭게 배우고 있습니다.<br />
			자바스크립트와 객체지향적 설계하는 것이 재미있고 아직 더 성장하고 싶습니다.<br />
			백엔드와 데이터를 다뤄본 경험도 많고 여러 개발언어를 다뤄보아 새로운 언어 습득이 빠릅니다.<br />
			다양한 유관 부서와 협업하여 프로젝트를 성공적으로 이끈 경험이 있고, 함께 일하는 가치를 믿습니다.<br />
			
			</TextBox>

			
			
		</Wrapper>
	</Container>
);

const Container = styled.section`
	padding: 2rem 0;
	box-sizing: border-box;
`;

const Wrapper = styled.div`
	max-width: 1373px;
	height: 100%;
	margin: 0 auto;
	box-sizing: border-box;
	overflow: hidden;
	position: relative;
	flex-direction: column;
`;

const Title = styled.div`
	padding: 20px;
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

export default Page2;