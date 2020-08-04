import React from 'react';
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
} from 'native-base';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../../res/colors/index';

const HomeScreen = () => {
  return (
    <Container>
      <Header style={{ backgroundColor: colors.rickBlack }}>
        <Left />
        <Body>
          <Title>Apuestas</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Text>This is Content Section</Text>
      </Content>
    </Container>
  );
};

export default HomeScreen;
