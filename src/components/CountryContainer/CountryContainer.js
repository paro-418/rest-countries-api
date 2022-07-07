import classes from "./CountryContainer.module.css";
import store from "../../Store/Store";
import { useSelector } from "react-redux";
import CountryCard from "../CountryCard/CountryCard";

const CountryContainer = () => {
  const storeCountries = useSelector((state) => state.data.countries);

  if (storeCountries.length === 0) return <p className={classes.loading}>Loading...</p>;

  return (
    <main className={classes.countryContainer}>
      {storeCountries.map((obj, index) => (
        <CountryCard
          key={index}
          region={obj.region}
          capital={obj.capital}
          population={obj.population}
          name={obj.name.common}
          flag ={obj.flags.svg}
        />
      ))}
    </main>
  );
};

export default CountryContainer;
