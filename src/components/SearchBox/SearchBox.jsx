import { useId } from "react";

export const SearchBox = ({ value, onChange }) => {
  const filterId = useId();
  return (
    <div>
      <label htmlFor={filterId}>Find contacts by name</label>
      <br />
      <input
        type="text"
        id={filterId}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
};
