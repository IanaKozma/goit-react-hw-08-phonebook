import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsOperations';
import { toast } from 'react-toastify';
import { Label, Title, StyledField, Button, FormikErrorMessage } from './ContactsForm.styled';
import PropTypes from 'prop-types';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Please enter name'),
  number: Yup.number().required('Please enter number'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactsForm = () => {
  const dispatch = useDispatch();
  const ContactsArray = useSelector(getContacts);

  const formSubmitHandler = (data, { resetForm }) => {
    if (
      ContactsArray.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      toast.warning(`${data.name} is already in contacts.`, {
        theme: 'colored',
      });
      return;
    }
    dispatch(
      addContact({
        ...data,
      })
    );
    toast.success(`${data.name} is added to Your Phonebook.`, {
      theme: 'colored',
    });
    resetForm();
  };

  return (
    <>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={formSubmitHandler}
        >
          {({ errors }) => (
            <Form>
              <Label htmlFor="name">
                <Title>Name</Title>
                <StyledField type="text" name="name" />
                <ErrorMessage name="name" component={FormikErrorMessage} />
              </Label>
              <Label htmlFor="number">
                <Title>Number</Title>
                <StyledField type="text" name="number" />
                <ErrorMessage name="number" component={FormikErrorMessage} />
              </Label>
              <Button type="submit">Add to contacts</Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ContactsForm;

ContactsForm.propType = {
  onSubmit: PropTypes.func.isRequired,
};
