import { createSlice } from "@reduxjs/toolkit";

// Play Audio Functionality
const playerSlice = createSlice({
  name: "player",
  initialState: { isPlayerDiv: false, songPath: "", img: "" },
  reducers: {
    setDiv(state) {
      state.isPlayerDiv = true;
    },
    // Close audio player
    closeDiv(state) {
      state.isPlayerDiv = false;
    },
    // Change song
    changeSong(state, action) {
      const pathOfSong = action.payload;
      state.songPath = pathOfSong;
    },
    // Change thumbnail image
    changeImage(state, action) {
      const imgOfSong = action.payload;
      state.img = imgOfSong;
    },
  },
});

export const playerActions = playerSlice.actions;
export default playerSlice.reducer;
