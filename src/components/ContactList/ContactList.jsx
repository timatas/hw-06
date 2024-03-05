import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/selectors.js";
//import {getFilter } from "../../redux/selectors.js";
import { useSelector } from "react-redux";

export const ContactList = () => {
  const contactItem = useSelector(selectContacts);
  const filterValue = useSelector((state) => state.filters.name);

  const filteredContacts = filterValue
    ? contactItem.filter((item) =>
        item.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    : contactItem;

  return (
    <div>
      <ul className={css.list}>
        {filteredContacts.map((item) => (
          <Contact key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
