import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface MenuState {
  title: string | null;
  count: number;
}

// Define the initial state using that type
const initialState: MenuState = {
  title: null,
  count: 0,
};

export const menuSlice = createSlice({
  name: "menu",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Pure functions
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTitle: (state, action: PayloadAction<string | null>) => {
      state.title = action.payload;
    },
    plus: (state) => {
      state.count += 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
  selectors: {
    selectTitle: (x) => x.title,
    selectCount: (x) => x.count,
  },
});

export const { setTitle, plus, reset } = menuSlice.actions;
export const { selectTitle, selectCount } = menuSlice.selectors;

export default menuSlice.reducer;
