import { ContactList } from "../../components/ContactList/ContactList";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import toast, { Toaster } from "react-hot-toast";
import css from "./ContactsPage.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

const notify = () => toast("Here is your toast.");

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <main className={css["main-contacts"]}>
        <ContactForm />
        <ContactList />
      </main>
      <Toaster />
    </>
  );
};

export default ContactsPage;
