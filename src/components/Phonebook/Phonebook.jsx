import Notiflix from 'notiflix';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  PhoneBookContainer,
  Title,
  FormContacts,
  InputName,
  ButtonSubmit,
} from './Phonebook.styled';
import { addContact } from 'store/operations';

function PhoneBook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.users);
  const error = useSelector(state => state.contacts.error);

  const onSubmitForm = evt => {
    evt.preventDefault();

    const newName = contacts.filter(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (newName.length === 0) {
      dispatch(addContact({ name, number }));
      resetInputs();
    } else {
      Notiflix.Notify.info(`You already have a contact with the name ${name}`);
    }
  };

  const resetInputs = () => {
    setName('');
    setNumber('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  return (
    <PhoneBookContainer>
      <Title>Phonebook</Title>
      <FormContacts onSubmit={onSubmitForm}>
        <InputName
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
        <InputName
          type="tel"
          name="number"
          pattern="^\+\d{1,12}$"
          input="^\+\d{1,3}\s?\d{1,14}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          placeholder="Enter your number"
          required
        />
        <ButtonSubmit>Add contact</ButtonSubmit>
        {error && <p>Something went wrong!</p>}
      </FormContacts>
    </PhoneBookContainer>
  );
}

export default PhoneBook;
