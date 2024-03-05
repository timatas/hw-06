import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";

import { fetchContacts } from "../redux/operations";
import { getIsLoading, selectError } from "../redux/selectors";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}
// ============
//     return (
//       <div>
//         {loading && <p>LOADING...</p>}
//         {error && <p>ERROR!!!!</p>}
//         {items && items.length > 0 && (
//           <ul>
//             {items.map((item) => (
//               <li key={item.id}>
//                 <p>{item.name}</p>
//                 <p>{item.number}</p>
//                 <button onClick={() => dispatch(deleteContact(item.id))}>
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   });
// }
//=============
