import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 5px 5px 5px grey;
`;

const Header2 = styled.h2`
  text-align: center;
`;

const Paragraph = styled.p`
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
`;

const CharacterCard = props => {
  return (
    <Container>
      <Image alt={props.character.name}  src={props.character.image} />
      <Header2>Name: {props.character.name}</Header2>
      <Paragraph>Gender: {props.character.gender}</Paragraph>
      <Paragraph>Species: {props.character.species}</Paragraph>
      <Paragraph>Status: {props.character.status}</Paragraph>
    </Container>  
  )
}

export default CharacterCard;