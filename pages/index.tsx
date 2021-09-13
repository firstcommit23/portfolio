import { useEffect, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";

// gsap.registerPlugin(ScrollTrigger);


const Index = () => {

  // useEffect(()=>{
  //   gsap.utils.toArray("section").forEach((section, i) => {
  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: "top top",
  //       pin: true,
  //       pinSpacing: false,
  //     });
  //   });
    
  //   ScrollTrigger.create({
  //     snap: 1 / 2
  //   });
  // }, []);

  return (
    <Container>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

export default Index;