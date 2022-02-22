import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
  <Container>
    <Section 
      title="Model S"
      description="Order online for touchless delivery right now"
      backgroundImage="model-s.jpg"
      leftButtonText="Custom Order"
      rightButtonText="Existing Inventory"
    />
      <Section
        title="Model Y"
        description="Order online for touchless delivery right now"
        backgroundImage="model-y.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order online for touchless delivery right now"
        backgroundImage="model-3.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order online for touchless delivery right now"
        backgroundImage="model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in the USA"
        description="Money-back guarantee!"
        backgroundImage="solar-panel.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than You Think!"
        backgroundImage="solar-roof.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftButtonText="Shop Now"
        rightButtonText=""
      />

  </Container>
  )
}

export default Home;

const Container = styled.div`
    height: 100vh;
    
`
