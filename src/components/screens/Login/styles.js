import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#FDFFFC',
    alignItems: 'center',
  },
  logoWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  formWrapper: {
    flex: 2,
    justifyContent: 'flex-start',
    width: '70%',
  },
  inputsWrapper: {
    flex: 1,
    paddingBottom: 50,
  },
  loginBottom: {
    flex: 2,
    paddingTop: 30,
  },
  forgotLinkText: {
    alignSelf: 'center',
    paddingTop: 20,
    textDecorationLine: 'underline',
  },
  errorContainer: {
    paddingTop: 10,
  },
  errorMessage: {
    color: 'red',
  },
})
export default styles
