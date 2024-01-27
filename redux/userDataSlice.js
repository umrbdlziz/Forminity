import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    fullName: "",
    username: "",
    password: "",
    email: "",
    matric: "",
    school: "",
    desasiswa: "",
    point: "",
    mycsd: "",
  },
  reducers: {
    setfullName: (state, action) => {
      state.fullName = action.payload;
    },
    setusername: (state, action) => {
      state.username = action.payload;
    },
    setpassword: (state, action) => {
      state.password = action.payload;
    },
    setemail: (state, action) => {
      state.email = action.payload;
    },
    setmatric: (state, action) => {
      state.matric = action.payload;
    },
    setschool: (state, action) => {
      state.school = action.payload;
    },
    setdesasiswa: (state, action) => {
      state.desasiswa = action.payload;
    },
    setpoint: (state, action) => {
      state.point = action.payload;
    },
    setmycsd: (state, action) => {
      state.mycsd = action.payload;
    },
    clearUserData: (state) => {
      state.fullName = "";
      state.username = "";
      state.password = "";
      state.email = "";
      state.matric = "";
      state.school = "";
      state.desasiswa = "";
      state.point = "";
      state.mycsd = "";
    },
  },
});

export const {
  setfullName,
  setusername,
  setpassword,
  setmatric,
  setemail,
  setdesasiswa,
  setschool,
  setmycsd,
  setpoint,
} = userDataSlice.actions;
export default userDataSlice.reducer;
