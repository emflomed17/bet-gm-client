// @flow
import React, { useEffect, useState, useCallback } from "react";
import { AsyncStorage } from "react-native";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  getBetsData,
  getBetsError,
  getBetsInProgress,
} from "../../../selectors";
import { getGroupBets } from "../../../actions/bets/bets-actions";
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
import { getBets } from "../../../api/bets";

const BetsScreen = () => {
  const [betsList, setBetsList] = useState([]);

  const dispatch = useDispatch();
  const { inProgress, betsData, betsError } = useSelector(
    (state) => ({
      inProgress: getBetsInProgress(state),
      betsData: getBetsData(state),
      betsError: getBetsError(state),
    }),
    shallowEqual
  );

  useEffect(() => {
    async function getData() {
      const AS_DATA = JSON.parse(await AsyncStorage.getItem("@UserData"));
      const { group, token } = AS_DATA;
      console.log(group);
      getBets(group, token)
        .then((response) => {
          setBetsList(response.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, []);

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
        {console.log(betsList)}
        {betsList &&
          betsList.map((bet) => (
            <BetItem
              key={bet._id}
              betName={bet.description}
              betSport={bet.sportId}
              betStatus={bet.status}
              betOdd={bet.odd}
            />
          ))}
      </Content>
    </Container>
  );
};

export default BetsScreen;
