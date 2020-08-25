// @flow
import { AsyncStorage } from "react-native";
import { AUTH_USER, AUTH_IN_PROGRESS, AUTH_ERROR } from "./auth-types";
import type { AuthActionType } from "./auth-types";
import type { Dispatch, ThunkAction } from "../action_types";
import { authenticateUser } from "../../api/auth";
import { getUser } from "../../api/users";

export type AuthInfo = {
  email: string,
  password: string,
};

export const loginUser = (
  loginInfo: AuthInfo
): ThunkAction<AuthActionType, string> => {
  return async (dispatch: Dispatch<AuthActionType, string>) => {
    dispatch({
      type: AUTH_IN_PROGRESS,
      payload: "",
    });
    try {
      const { email, password } = loginInfo;
      const authData = await authenticateUser(email, password);

      const {
        data: { user },
        token,
      } = authData;

      const userData = await getUser(user, token);

      const {
        data: { group, role, isEnabled },
      } = userData;

      const LSUserData = {
        user,
        token,
        group,
        role,
        isEnabled,
      };

      await AsyncStorage.setItem("@UserData", JSON.stringify(LSUserData));

      dispatch({
        type: AUTH_USER,
        payload: userData,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err,
      });
    }
  };
};
