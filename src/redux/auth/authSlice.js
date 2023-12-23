import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from "./authOperations";


const initialState = {
  isLoading: false,
  error: null,
  authenticated: false,
  token: null,
  userData: null,
};

const authSlice = createSlice({

  name: "auth",

  initialState,

  reducers: {},
  extraReducers: builder => builder
 .addCase(logoutThunk.fulfilled, ()=>{
  return initialState
 })
  .addCase(refreshThunk.fulfilled, (state, { payload }) => {
    state.isLoading = false
    state.authenticated=true;
    state.contacts = payload
    
  })
 .addMatcher(isAnyOf(loginThunk.fulfilled, registerThunk.fulfilled), (state, { payload }) => {state.isLoading = false
  state.authenticated=true;
  state.token = payload.token
  state.contacts = payload.user})

  .addMatcher(isAnyOf(loginThunk.pending, registerThunk.pending, refreshThunk.pending, logoutThunk.pending), state => {
    state.isLoading = true;
    state.error = null
  })
  .addMatcher(isAnyOf(loginThunk.rejected, registerThunk.rejected, refreshThunk.rejected, logoutThunk.rejected), (state, { payload }) => {
    state.isLoading = false;
    state.error = payload
  })
});




export const authReducer = authSlice.reducer;


