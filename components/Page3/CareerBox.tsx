import styled from "styled-components";
import { media } from "../../styles/theme";

const CareerBox = ({career}: any) => (
  <Container>
		<CareerTitle>{career.title}</CareerTitle>
		<div>{career.period}</div>
		<TechSkillList>
			{career.skills?.map((skill: String, index: number) => (<span key={index}>{skill}</span>))}
		</TechSkillList>
		<ItemTitle>Description</ItemTitle>
		<div>{career.description} </div>
		<ItemTitle>What did i Do</ItemTitle>
		<ul>
			{career.works.map((work: String, index: number) => (<li key={index}>{work}</li>))}
		</ul>
		<ItemTitle>Performance</ItemTitle>
		<ul>
			{career.performances.map((performance: String, index: number) => (<li key={index}>{performance}</li>))}
		</ul>
		<div>
			<img src="" />
		</div>

	</Container>
);

const Container = styled.section`
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

const ItemTitle = styled.span`
	font-weight: 900;
	font-size: 1.2rem;
	padding-top: 15px;
`;

export default CareerBox;