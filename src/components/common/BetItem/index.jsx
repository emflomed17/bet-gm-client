// @flow
import React, { useEffect } from 'react'
import { Container, Header, Content, Card, CardItem, Body, Text, Icon } from 'native-base'
import { View, TouchableOpacity } from 'react-native'
import styles from './styles'
import colors from '../../../res/colors'
import { RightArrowIcon } from '../../icons'

type Props = {
  betName: string,
  status: number,
  betSport: number,
  betOdd: number
}

const BetItem = (props: Props) => {
  const { betName, status, betSport, betOdd } = props
  return (
    <Card>
      <CardItem>
        <Body style={styles.betItemContainer}>
          <View>
            <Text>{betSport}</Text>
          </View>
          <View>
            <Text>{betName}</Text>
          </View>
          <View>
            <Text>{betOdd}</Text>
          </View>
          <View style={{ backgroundColor: colors.customGreen }}>
            <Text>{status}</Text>
          </View>
          <TouchableOpacity>
            <RightArrowIcon width={20} height={20} color={colors.customGreen} />
          </TouchableOpacity>
        </Body>
      </CardItem>
    </Card>
  )
}

export default BetItem
