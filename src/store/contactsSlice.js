import { createSlice } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload : null;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload : null;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.users.findIndex(
          contact => contact.id === action.payload.id
        );
        state.users.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload : null;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
