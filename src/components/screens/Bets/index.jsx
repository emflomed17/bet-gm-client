// @flow
import React, { useEffect, useState } from 'react'
import { AsyncStorage } from 'react-native'
import { Container, Header, Title, Content, Left, Right, Body } from 'native-base'
import styles from './styles'
import colors from '../../../res/colors/index'
import BetItem from '../../common/BetItem'
import { getBets } from '../../../api/bets'

const BetsScreen = () => {
  const [betsList, setBetsList] = useState([])

  useEffect(() => {
    async function getData() {
      const AS_DATA = JSON.parse(await AsyncStorage.getItem('@UserData'))
      const { group, token } = AS_DATA
      getBets(group, token)
        .then((response) => {
          setBetsList(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getData()
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
        {console.log(betsList)}
        {betsList &&
          betsList.map((bet) => (
            <BetItem
              key={bet._id}
              betName={bet.description}
              betSport={bet.sportId}
              status={bet.status}
              betOdd={bet.odd}
            />
          ))}
      </Content>
    </Container>
  )
}

export default BetsScreen
