import { Helmet } from 'react-helmet';

import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import css from './Contacts.module.css';

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>PhoneBook</title>
      </Helmet>
      <main>
        <div className={css['main-content-wrapper']}>
          <Section title="Phonebook">
            <ContactForm />
          </Section>
          <Section title="Contacts">
            <Filter />
            <ContactList />
          </Section>
        </div>
      </main>
    </>
  );
};

export default Contacts;