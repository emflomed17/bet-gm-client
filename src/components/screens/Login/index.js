import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
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
import styles from './styles';
import { BetIcon } from '../../icons/index';
import colors from '../../../res/colors/index';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('entro');
    console.log(email);
    console.log(password);
  };

  return (
    <Container>
      <Content contentContainerStyle={styles.mainContainer}>
        <View style={styles.logoWrapper}>
          <BetIcon width={100} height={100} color={colors.orangePeel} />
          <Text>betGM</Text>
        </View>
        <View style={styles.formWrapper}>
          <Form style={styles.inputsWrapper}>
            <Item stackedLabel>
              <Label>email</Label>
              <Input onChangeText={(text) => setEmail(text)} />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              />
            </Item>
          </Form>
          <View style={styles.loginBottom}>
            <Button full onPress={handleLogin}>
              <Text>Login</Text>
            </Button>
            <TouchableOpacity>
              <Text style={styles.forgotLinkText}>Olvidé mi contraseña</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default LoginScreen;

{
  /* <SafeAreaView style={styles.safeArea}>
<Header
  centerComponent={{ text: 'LOGIN', style: { color: '#fff' } }}
  backgroundColor='#011627'
/>
<View style={styles.mainContainer}>
  <View style={styles.logoWrapper}>
    <BetIcon width={100} height={100} color={colors.orangePeel} />
    <Text>betGM</Text>
  </View>
  <View style={styles.formWrapper}>
    <Input
      placeholder='email'
      leftIcon={{
        type: 'material',
        name: 'account-circle',
        color: colors.rickBlack,
      }}
      onChange={({ nativeEvent: { text } }) => setEmail(text)}
    />
    <Input
      placeholder='password'
      leftIcon={{
        type: 'material',
        name: 'vpn-key',
        color: colors.rickBlack,
      }}
      onChange={({ nativeEvent: { text } }) => setPassword(text)}
      secureTextEntry={true}
    />
    <View style={styles.loginBottom}>
      <Button
        title='LOG IN'
        buttonStyle={{ backgroundColor: colors.customGreen }}
        onPress={handleLogin}
      />
      <TouchableOpacity>
        <Text style={styles.forgotLinkText}>Olvidé mi contraseña</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
</SafeAreaView> */
}
