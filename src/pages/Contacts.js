import { useEffect } from 'react';
import ContactList from 'components/Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getLoader } from 'redux/selectors';
import { fetchContacts } from 'redux/contactsOperations';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { ContactsPageHeader, Title, TitleСolor, Container, Text } from './Contacts.styled';

export default function Contacts() {
  const isLoading = useSelector(getLoader);
  const isError = useSelector(getError);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
          <Title>
        Phone<TitleСolor>book</TitleСolor>
      </Title>
        <ContactsPageHeader>
        <ContactsForm />
          <Filter />
          </ContactsPageHeader>
        {contacts.length > 0 ? (
          <Text>You have {contacts.length} contact(s)</Text>
        ) : (
          <Text>You have no contacts yet</Text>
        )}

        {isError && <p>{isError}</p>}
        {isLoading && <Loader />}
        {!isLoading && <ContactList />}
      </Container>
    </>
  );
}
