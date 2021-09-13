import styled from "styled-components";
import { media } from "../../styles/theme";

const ProjectBox = ({project}: any) => (
  <Container>
		<CareerTitle>Gonggle / E-commerce Store / 프론트 3명, 백엔드 3명</CareerTitle>
		<TechSkillList>
			{/* {project.skills?.map((skill, index) => (<span>{skill}</span>))} */}
      <span>React</span><span>VanillaJS</span><span>SCSS</span>
		</TechSkillList>
		<div>
			<img src="/images/project_gonggol1.png" width="600px" />
		</div>
		<ItemTitle>What did i Do</ItemTitle>
		<ul>
      <li>상품은 기본목록, 서브 카테고리, 필터, 페이징네이션 액션 시 api를 호출하여 구현</li>
      <li>동적 라우팅 기능을 사용하여 경로에 따라 다른 상품을 보여주도록 구현</li>
      <li>Vanilla JS를 사용하여 이미지 슬라이드로 구현</li>
      <li>상품 옵션 선택 기능 구현</li>
		</ul>
		<div>
			<button>VIEW DEMO</button>
			<button>VIEW GITHUB</button>
		</div>

	</Container>
);

const Container = styled.div`
	padding: 2rem;
	position: relative;
	margin: 14px;
	border-radius: 2rem;
	background-color: #ffffff;
	display: flex;
	line-height: 30px;
	flex-direction: column;
	align-item: flex-start;
`;

const CareerTitle = styled.div`
	font-weight: 900;
  font-size: 1.4rem;
`;
const TechSkillList = styled.div`
	width: 100%;

	span {
		background: #E9ECF3;
		color: #263747;
		border-radius: 0.25rem;
		padding: 0.5rem;
		margin-right: 3px;
		font-size: 0.75rem;
	}
`;

const Description = styled.div`
	font-weight: 900;
	font-size: 1.4rem;
	color: #000;
`;

const ItemTitle = styled.span`
	font-weight: 900;
	font-size: 1.2rem;
	padding-top: 15px;
`;

export default ProjectBox;