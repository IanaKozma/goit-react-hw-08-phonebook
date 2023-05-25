import PropTypes from 'prop-types';
import { DeleteModalContainer, Button, Text } from './DeleteModal.styled';

const DeleteModal = ({ deleteContact, closeModal, contact }) => {
  return (
    <DeleteModalContainer>
      <Text>Are you sure you want to delete {contact}?</Text>
      <Button type="button" onClick={deleteContact}>
        Delete
      </Button>
      <Button type="button" onClick={closeModal}>
        Go back
      </Button>
    </DeleteModalContainer>
  );
};

DeleteModal.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  contact: PropTypes.string.isRequired,
};

export default DeleteModal;
