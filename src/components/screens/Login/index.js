import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  getAuthIsLoading,
  getUserData,
  getAuthError,
} from "../../../selectors";
import { loginUser } from "../../../actions/auth/auth-actions";
import { View, SafeAreaView, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
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
import { BetIcon } from "../../icons/index";
import colors from "../../../res/colors/index";

const LoginScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const { isLoading, userData, authError } = useSelector(
    (state) => ({
      isLoading: getAuthIsLoading(state),
      userData: getUserData(state),
      authError: getAuthError(state),
    }),
    shallowEqual
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    function handleStartSession() {
      // console.log(`isLoading: ${isLoading}`);
      // console.log(userData);
      // console.log(`authError: ${authError}`);
      // console.log(authError);
      if (!isLoading && userData) {
        console.log("Credenciales Correctas!");
        navigation.navigate('Apuestas')
      }
    }
    handleStartSession();
  }, [isLoading, userData, email]);

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      dispatch(loginUser({ email, password }));
    }
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
              <Input autoCapitalize="none" onChangeText={(text) => setEmail(text)} />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              />
            </Item>
            {authError && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorMessage}>
                  Email o Password son incorrectos{" "}
                </Text>
              </View>
            )}
          </Form>
          <View style={styles.loginBottom}>
          {isLoading ? (
              <ActivityIndicator />
            ) : (
              <Button full onPress={handleLogin}>
                <Text>Login</Text>
              </Button>
            )}
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
