import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonDelete,
  ContactName,
  ContactPhone,
  ContactsContainer,
  ContactsItem,
  Title,
} from './Contacts.styled';
import Filter from 'components/Filter/Filter';
import { deleteContact, fetchContact } from 'store/operations';

function Contacts() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const loader = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

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
              href={`tel:${contact.phone}`}
            >
              {contact.phone}
            </ContactPhone>
            <ButtonDelete onClick={() => dispatch(deleteContact(contact?.id))}>
              Delete
            </ButtonDelete>
          </ContactsItem>
        ))}
      </div>
      {loader && (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </ContactsContainer>
  );
}

export default Contacts;
