import PropTypes from "react";
import Style from "./style";

export default function InputFilter({ props }) {
  const { searchValue, setSearchValue } = props;
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
  props: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.string.isRequired,
};
