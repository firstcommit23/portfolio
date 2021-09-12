import styled from "styled-components";
import dynamic from 'next/dynamic';

const TextAnimation = dynamic(() => import("./TextAnimation"));

// function? 
const Page1 = () => {
    return (
      <Container className="flex fixed">
				<TextAnimation />
			</Container>
    );
}

const Container = styled.div`
	width: 100%;
`;

export default Page1;