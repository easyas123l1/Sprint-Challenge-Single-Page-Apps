import React from "react";
import styled from 'styled-components'

const Header2 = styled.h2`
  text-align: center;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Header2>Introuducing our favorite characters!</Header2>
      </header>
    </section>
  );
}
