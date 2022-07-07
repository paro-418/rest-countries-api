import classes from "./IndividualCountry.module.css";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";

const extractedCountry = {
  nativeName: undefined,
  population: null,
  region: undefined,
  subregion: undefined,
  capital: undefined,
  tld: undefined,
  currency: [],
  languages: [],
  flag: undefined,
  border: [],
};

const IndividualCountry = (props) => {
  const [loadeding, setLoading] = useState(true);
  const storeCountries = useSelector((state) => state.data.countries);
  const countrySearched = useParams();
  const history = useHistory();

  // fetching country clicked ro show
  const countryToDisplay = storeCountries.find(
    (obj) =>
      obj.name.common.trim().toLowerCase() ===
      countrySearched.country.trim().toLowerCase()
  );

  useEffect(() => {
    if (countryToDisplay === undefined) return;

    // storing clicked country's data
    extractedCountry.nativeName = countryToDisplay.name.common;
    extractedCountry.population = countryToDisplay.population.toLocaleString();
    extractedCountry.region = countryToDisplay.region
      ? countryToDisplay.region
      : "No Region";
    extractedCountry.subregion = countryToDisplay.region
      ? countryToDisplay.subregion
      : "No subregion";
    extractedCountry.capital = countryToDisplay.capital
      ? countryToDisplay.capital[0]
      : "No Capital";
    extractedCountry.tld = countryToDisplay.tld
      ? countryToDisplay.tld[0]
      : "No Top Level Domain";
    extractedCountry.currency = Object.entries(countryToDisplay.currencies).map(
      (item) => item
    );
    extractedCountry.flag = countryToDisplay.flags.svg;
    for (const lang of Object.entries(countryToDisplay.languages))
      extractedCountry.languages.push(lang[1]);
    if (countryToDisplay.borders) {
      countryToDisplay.borders.forEach((border) => {
        const found = storeCountries.find(
          (country) =>
            country.cca3.trim().toLowerCase() === border.trim().toLowerCase()
        );
        extractedCountry.border.push(found.name.common);
      });
    }
    setLoading(false);
  }, [countryToDisplay]);

  if (loadeding) return <p className={classes.loading}>Loading...</p>;

  return (
    <main className={classes.individualCountry}>
      <div className={classes.btnContainer}>
        <Button className={classes.btn}>
          <MdKeyboardBackspace /> Back
        </Button>
      </div>
      <div className={classes.allInfo}>
        <div className={classes.flag}>
          <img className={classes.flagImage} src={extractedCountry.flag} />
        </div>
        <div className={classes.countryInfo}>
          <h1 className={classes.name}>{extractedCountry.nativeName}</h1>
          <div className={classes.twoPart}>
            <div className={classes.part1}>
              <p>
                Native Name &nbsp; : &nbsp;
                <span>{extractedCountry.nativeName}</span>
              </p>
              <p>
                Population &nbsp; : &nbsp;
                <span>{extractedCountry.population}</span>
              </p>
              <p>
                Region &nbsp; : &nbsp;
                <span>{extractedCountry.region}</span>
              </p>
              <p>
                Sub region &nbsp; : &nbsp;
                <span>{extractedCountry.subregion}</span>
              </p>
              <p>
                Capital &nbsp; : &nbsp;
                <span>{extractedCountry.capital}</span>
              </p>
            </div>
            <div className={classes.part2}>
              <p>
                Top Level Domain &nbsp; : &nbsp;{" "}
                <span>{extractedCountry.tld}</span>
              </p>
              <p>
                Currencies &nbsp; : &nbsp;{" "}
                <span>{extractedCountry.currency[0][1].name}</span>
              </p>
              <p>
                Languages &nbsp; : &nbsp;{" "}
                {extractedCountry.languages.map((lang, index) => (
                  <span key = {index}>{lang} &nbsp;</span>
                ))}
              </p>
            </div>
          </div>
          <div className={classes.border}>
            <p>
              Border Countries&nbsp;:&nbsp;
              {extractedCountry.border.length > 0
                ? extractedCountry.border.map((border, index) => <Button key={index} className={classes.btn}>{border}</Button>)
                : <span>Not sharing border with any country</span>}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndividualCountry;
