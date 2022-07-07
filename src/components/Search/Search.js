import classes from "./Search.module.css";
import { BiSearch } from "react-icons/bi";
import { useRef } from "react";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";

const Search = () => {
  const textRef = useRef();
  const history = useHistory();

  const searchCountry = (event) => {
    event.preventDefault();
    const countryTyped = textRef.current.value;
    history.push(
      `/rest-countries-api-with-color-theme-switcher-master/home/${countryTyped}`
    );
  };
  return (
    <form onSubmit={searchCountry} className={classes.search}>
      <Button type="submit" className={classes.btn}>
        <BiSearch />
      </Button>
      <input
        ref={textRef}
        type="text"
        placeholder="Search for a country"
        className={`${classes.input}`}
      />
    </form>
  );
};

export default Search;
