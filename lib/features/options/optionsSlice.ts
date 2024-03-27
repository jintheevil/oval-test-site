import {createSlice} from "@reduxjs/toolkit";

export const optionsSlice = createSlice({
  name: "options",
  initialState: {
    initialLoading: false,
    navBar: [
      {
        brandName: '',
        id: '',
        subProducts: [
          {
            id: '',
            productName: '',
            productDesc: '',
            productImgPath: '',
            productImgPathTransformed: ''
          }
        ],
      }
    ]
  },
  reducers: {
    setNavBar: (state, action) => {
      state.navBar = action.payload
    },
    setLoaded: state => {
      if (!state.initialLoading) {
        state.initialLoading = true;
      }
    }
  }
})

export const {setNavBar, setLoaded} = optionsSlice.actions;

export default optionsSlice.reducer;
