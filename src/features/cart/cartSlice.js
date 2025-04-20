import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://www.course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (thunkAPi) => {
    try {
      const response = await axios.get(url);
      console.log(response);

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPi.rejectWithValue(
        "there was an error fetching the cart items"
      );
    }
  }
);

const initialState = {
  items: [],
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.items.find((item) => item.id === itemId);
      cartItem.amount += 1;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.items.find((item) => item.id === itemId);
      cartItem.amount -= 1;
    },
    calculateTotals: (state) => {
      let total = 0;
      let amount = 0;
      state.items.forEach((item) => {
        total += item.amount * item.price;
        amount += item.amount;
      });
      state.total = parseFloat(total.toFixed(2));
      state.amount = amount;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      });
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
