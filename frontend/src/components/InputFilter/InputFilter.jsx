import PropTypes from "prop-types";
import { BsSearch } from "react-icons/bs";
import Style from "./style";

export default function InputFilter({ searchValue, setSearchValue }) {
  return (
    <Style>
      <div className="search-input">
        <BsSearch className="bs-search" />
        <input
          value={searchValue}
          type="text"
          placeholder="name"
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>
    </Style>
  );
}

InputFilter.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.string.isRequired,
};
