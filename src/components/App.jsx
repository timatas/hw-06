import "./App.css";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";

import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  // const contact = useSelector((state) => state.items);

  // console.log(contact);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

// import { useState, useEffect } from "react";
// import { ContactList } from "./ContactList/ContactList";
// import { SearchBox } from "./SearchBox/SearchBox";
// import { ContactForm } from "./ContactForm/ContactForm";

// const prevContacts = () => {
//   const storedContacts = window.localStorage.getItem("key-contacts");
//   if (storedContacts !== null) {
//     return JSON.parse(storedContacts);
//   }
//   return [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ];
// };

//   const [contacts, setContacts] = useState(prevContacts);
//   const [contactFilter, setContactFilter] = useState("");

//   const addContact = (newContact) => {
//     setContacts((prevContacts) => {
//       return [...prevContacts, newContact];
//     });
//   };

//   const deleteContact = (contactId) => {
//     setContacts((prevContacts) => {
//       return prevContacts.filter((item) => item.id !== contactId);
//     });
//   };

//   useEffect(() => {
//     localStorage.setItem("key-contacts", JSON.stringify(contacts), [contacts]);
//   });

//   const filteredContacts = contacts.filter((item) =>
//     item.name.toLowerCase().includes(contactFilter.toLowerCase())
//   );

//   return (
//     <div>
//       <ContactForm onAdd={addContact} />
//       <h1>Phonebook</h1>
//       <SearchBox value={contactFilter} onChange={setContactFilter} />
//       <ContactList items={filteredContacts} onDelete={deleteContact} />
//     </div>
//   );
// }
// export default App;
