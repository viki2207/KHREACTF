// registration
// login
// loading current user
import axios from "axios";
import { REGISTER_SUCCESS, USER_LOADED, USER_ERROR, LOGOUT } from "../types";
import { setAlert } from "./alertAction";
import api from "../../utils/api";

export const logout = () => ({ type: LOGOUT });
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/auth"); // we have to provide the token ?
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: USER_ERROR });
  }
};
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    // used to register the user via performing the rest call.

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = JSON.stringify({ name, email, password });
    try {
      console.log(data);
      const res = await api.post("/users", data, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      // lets traverse the errors array
      // to process the error i.e. display work should be handled by an action .
      /// let have alertAction.
    }
  };
// export : we can use this function in any file
// const : keyword
// register : name of the function
//({name,email,password}) : json object which is accepted by a function/ method
// as an arguement caller===> component.
// async : asynchronous operations
// dispatch :
