import classes from "./CountryContainer.module.css";
import { useSelector } from "react-redux";
import CountryCard from "../CountryCard/CountryCard";
import { useEffect, useState } from "react";

const CountryContainer = () => {
  const [loading, setLoading] = useState(true);
  const storeCountries = useSelector((state) => state.data.countries);

  useEffect(() => {
    if (storeCountries.length > 0) setLoading(false);
  }, [storeCountries]);

  if (storeCountries.length === 0 && loading)
    return <p className={classes.loading}>Loading...</p>;
  if (storeCountries.length === 0 && !loading)
    return (
      <p className={classes.noData}>Couldn't found countries from selected region 😕. Please Try different region.</p>
    );
  return (
    <main className={classes.countryContainer}>
      {storeCountries.map((obj, index) => (
        <CountryCard
          key={index}
          region={obj.region}
          capital={obj.capital}
          population={obj.population}
          name={obj.name.common}
          flag={obj.flags.svg}
        />
      ))}
    </main>
  );
};

export default CountryContainer;
