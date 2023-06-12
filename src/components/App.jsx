import Contacts from './Contacts/Contacts';
import PhoneBook from './Phonebook/Phonebook';
import Section from './Section/Section';

function App() {
  return (
    <Section>
      <PhoneBook />
      <Contacts />
    </Section>
  );
}

export default App;
