import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserAPI, registerUserAPI } from 'services/contactsAPI';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await axios.post('/contacts', contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  }
);

export const registerUser = createAsyncThunk(
  'auth/registrateUser',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await registerUserAPI(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await loginUserAPI(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
