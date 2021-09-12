import { useEffect, useState } from "react";
import styled from "styled-components";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";

const Index = () => {
  return (
    <Container>
      <Page1 />
      <Page2 />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

export default Index;