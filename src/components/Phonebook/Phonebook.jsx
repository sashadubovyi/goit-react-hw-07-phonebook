const { nanoid } = require('nanoid');
const { useState } = require('react');
const { useDispatch } = require('react-redux');
const { addContact } = require('store/contactsSlice');
const {
  PhoneBookContainer,
  Title,
  FormContacts,
  InputName,
  ButtonSubmit,
} = require('./Phonebook.styled');

function PhoneBook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const onSubmitForm = evt => {
    evt.preventDefault();

    dispatch(addContact({ name, number, id: nanoid() }));
    resetInputs();
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
      </FormContacts>
    </PhoneBookContainer>
  );
}

export default PhoneBook;
