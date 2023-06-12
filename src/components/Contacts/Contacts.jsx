import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonDelete,
  ContactName,
  ContactPhone,
  ContactsContainer,
  ContactsItem,
  Title,
} from './Contacts.styled';
import { removeContact } from 'store/contactsSlice';
import Filter from 'components/Filter/Filter';

function Contacts() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.users);
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactsContainer>
      <Filter />
      <Title>Contacts</Title>
      <div>
        {filterContacts.map(contact => (
          <ContactsItem key={contact.id}>
            <ContactName key={`${contact.id}-name`}>
              {contact.name}:
            </ContactName>
            <ContactPhone
              key={`${contact.id}-phone`}
              href={`tel:${contact.number}`}
            >
              {contact.number}
            </ContactPhone>
            <ButtonDelete onClick={() => dispatch(removeContact(contact?.id))}>
              Delete
            </ButtonDelete>
          </ContactsItem>
        ))}
      </div>
    </ContactsContainer>
  );
}

export default Contacts;
