import PropTypes from "react";
import Style from "./style";

export default function InputFilter({ searchValue, setSearchValue }) {
  return (
    <Style>
      <input
        value={searchValue}
        type="text"
        placeholder="name"
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </Style>
  );
}

InputFilter.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.string.isRequired,
};
