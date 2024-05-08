import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.card}>
      <span>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;