import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showtoggle: true };
const intialAuthState = {isAuthenticated:false};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    decrement(state) {
      state.counter = state.counter - 1;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.toggle = !state.showtoggle;
    },
  },
});

const authSlice = createSlice({
  name: "Auth",
  initialState: intialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated=true
    },
    logout(state) {
      state.isAuthenticated=false
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions=authSlice.actions
export default store;
