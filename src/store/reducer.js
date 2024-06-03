import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  isLoading: false,
  error: null,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      console.log("called slice");
      // state.messages.push(action.payload);
    },
  },
});

export const { addMessage, clearMessages } = chatSlice.actions;

export default chatSlice.reducer;
