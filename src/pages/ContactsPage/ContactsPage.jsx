import Contacts from 'components/Contacts/Contacts';
import PhoneBook from 'components/Phonebook/Phonebook';

function ContactsPage() {
  return (
    <>
      <section>
        <div>
          <PhoneBook />
        </div>
        <div>
          <Contacts />
        </div>
      </section>
    </>
  );
}

export default ContactsPage;
