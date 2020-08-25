// @flow
import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Input,
  Form,
  Item,
  Label,
  Button,
} from "native-base";
import styles from "./styles";
import colors from "../../../res/colors/index";
import BetItem from "../../common/BetItem";


const BetsScreen = () => {
  useEffect(() => {
    // TODO: getBets api call 
  }, [])

  return (
    <Container>
      <Header style={{ backgroundColor: colors.rickBlack }}>
        <Left />
        <Body>
          <Title style={{ color: colors.appBackground }}>Homeee</Title>
        </Body>
        <Right />
      </Header>
      <Content contentContainerStyle={styles.mainContainer}>
        <BetItem
          betName="Arizona Over 2.5"
          betSport="NFL"
          betStatus="In Progress"
          betOdd="-110"
        />
        <BetItem
          betName="Arizona Over 2.5"
          betSport="NFL"
          betStatus="In Progress"
          betOdd="-110"
        />
        <BetItem
          betName="Arizona Over 2.5"
          betSport="NFL"
          betStatus="In Progress"
          betOdd="-110"
        />
      </Content>
    </Container>
  );
};

export default BetsScreen;
