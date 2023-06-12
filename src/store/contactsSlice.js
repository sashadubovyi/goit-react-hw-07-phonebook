import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    users: [],
  },

  reducers: {
    addContact(state, { payload }) {
      if (
        state.users.find(
          contact => payload.name.toLowerCase() === contact.name.toLowerCase()
        )
      ) {
        Notiflix.Notify.failure(
          `You have already created a contact with the name ${payload.name}`
        );
        return state;
      }
      state.users.push(payload);
    },
    removeContact(state, { payload }) {
      return {
        users: state.users.filter(contact => contact.id !== payload),
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, removeContact } = contactsSlice.actions;
