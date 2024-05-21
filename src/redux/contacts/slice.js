import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../auth/operations";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.loading = false;
};

export const contactsSlice = createSlice({
  name: "contacts",

  initialState: {
    items: [],
    loading: false,
    error: null,
    isAdd: false,
    isDel: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
        state.isAdd = true;
        state.isDel = false;
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.isAdd = false;
        state.isDel = true;
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, action) => {})
      .addCase(editContact.rejected, handleRejected)
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export const contactReducer = contactsSlice.reducer;
