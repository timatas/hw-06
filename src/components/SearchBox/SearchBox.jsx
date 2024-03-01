import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newSearch } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const filterId = useId();
  const filterValue = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor={filterId}>Find contacts by name</label>
      <br />
      <input
        type="text"
        id={filterId}
        value={filterValue}
        onChange={(e) => dispatch(newSearch(e.target.value))}
      />
    </div>
  );
};
