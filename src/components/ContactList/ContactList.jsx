import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({ items, onDelete }) => {
  return (
    <>
      <ul className={css.list}>
        {items.map((item) => (
          <Contact
            key={item.id}
            item={item}
            onDelete={() => onDelete(item.id)}
          />
        ))}
      </ul>
    </>
  );
};
