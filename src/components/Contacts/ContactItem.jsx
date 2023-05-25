import { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact, Icon, Button } from './Contacts.styled';
import DeleteModal from 'components/Modal/DeleteModal';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsOperations';
import { FaTrash, FaUserAlt } from 'react-icons/fa';

export const ContactListItem = ({ contact }) => {
  const [contactToDelete, setContactToDelete] = useState(null);
  const dispatch = useDispatch();
  const ContactsArray = useSelector(getContacts);

  return (
    <>
      {contactToDelete ? (
        <DeleteModal
          deleteContact={() => {
            dispatch(deleteContact(contactToDelete.id));
            setContactToDelete(null);
          }}
          closeModal={() => {
            setContactToDelete(null);
          }}
          contact={
            [...ContactsArray].find(
              contact => contact.id === contactToDelete.id
            ).name || null
          }
        />
      ) : (
          <Contact key={contact.id}>
             <Icon>
                <FaUserAlt />
              </Icon>
            <div>
            {contact.name} : {contact.number}
          </div>

          <Button
            type="button"
            onClick={() => {
              setContactToDelete(contact);
            }}
          >
            <FaTrash width="24" height="24" />
          </Button>
        </Contact>
      )}
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
