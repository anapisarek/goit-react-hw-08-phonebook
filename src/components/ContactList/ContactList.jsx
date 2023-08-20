import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactItem from 'components/ContactItem/ContactItem';
import Loader from 'components/Loader';

import { fetchContacts } from 'redux/Contacts/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/Contacts/selectors';

import css from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const filterContacts = () => {
    if (filter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  };

  const filteredContacts = filterContacts();

  return (
    <>
      {isLoading && (
        <div className="backdrop">
          <Loader />
        </div>
      )}
      {filteredContacts && filteredContacts.length > 0 ? (
        <ul className={css['contact-list']}>
          {filteredContacts.map(({ id, name, number }) => {
            return <ContactItem key={id} id={id} name={name} number={number} />;
          })}
        </ul>
      ) : error ? (
        <p className={css['error-text']}>{error}</p>
      ) : (
        <div>
          <p className={css['no-contact-text']}>Sorry, no contacts found</p>
        </div>
      )}
    </>
  );
};

export default ContactList;