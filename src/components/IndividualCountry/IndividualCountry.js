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
  const [loading, setLoading] = useState(true);
  const storeCountries = useSelector((state) => state.data.countries);
  const countrySearched = useParams();
  const history = useHistory();
  const light = useSelector((state) => state.theme.light);

  // fetching country clicked ro show
  const countryToDisplay = storeCountries.find(
    (obj) =>
      obj.name.common.trim().toLowerCase() ===
      countrySearched.country.trim().toLowerCase()
  );
  const resetData = () => {
    extractedCountry.border = [];
    extractedCountry.capital =
      extractedCountry.flag =
      extractedCountry.nativeName =
      extractedCountry.region =
      extractedCountry.subregion =
      extractedCountry.tld =
        undefined;
    extractedCountry.currency = [];
    extractedCountry.languages = [];
    setLoading(true);
  };
  useEffect(() => {
    if (countryToDisplay === undefined) return;
    console.log("i'm running");

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

    return resetData;
  }, [countryToDisplay, countrySearched]);

  const backHandler = () => {
    history.push("/home");
  };


  const countryChangeHandler = (event) => {
    const borderClicked = event.target.textContent;
    // resetting state
    resetData();
    history.push(`/home/${borderClicked}`);
  };

  if (storeCountries.length > 0 && countryToDisplay === undefined) {
    history.push("/home/country/noCountryFound");
  }
  if (loading)
    return (
      <p className={`${classes.loading} ${!light ? classes.loadingDark : ""}`}>
        Loading...
      </p>
    );

  return (
    <main
      className={`${classes.individualCountry} ${
        !light ? classes.IndividualCountryDark : ""
      }`}
    >
      <div
        className={`${classes.btnContainer} ${
          !light ? classes.btnContainerDark : ""
        }`}
      >
        <Button
          callFunction={backHandler}
          className={`${classes.btn} ${!light ? classes.btnDark : ""}`}
        >
          <MdKeyboardBackspace /> Back
        </Button>
      </div>
      <div
        className={`${classes.allInfo} ${!light ? classes.allInfoDark : ""}`}
      >
        <div className={classes.flag}>
          <img className={classes.flagImage} src={extractedCountry.flag} />
        </div>
        <div className={classes.countryInfo}>
          <h1 className={`${classes.name} ${!light ? classes.nameDark : ""}`}>
            {extractedCountry.nativeName}
          </h1>
          <div className={classes.twoPart}>
            <div className={classes.part1}>
              <p className={`${classes.p} ${!light ? classes.pDark : ""}`}>
                Native Name &nbsp; : &nbsp;
                <span
                  className={`${classes.span} ${
                    !light ? classes.spanDark : ""
                  }`}
                >
                  {extractedCountry.nativeName}
                </span>
              </p>
              <p className={`${classes.p} ${!light ? classes.pDark : ""}`}>
                Population &nbsp; : &nbsp;
                <span
                  className={`${classes.span} ${
                    !light ? classes.spanDark : ""
                  }`}
                >
                  {extractedCountry.population}
                </span>
              </p>
              <p className={`${classes.p} ${!light ? classes.pDark : ""}`}>
                Region &nbsp; : &nbsp;
                <span
                  className={`${classes.span} ${
                    !light ? classes.spanDark : ""
                  }`}
                >
                  {extractedCountry.region}
                </span>
              </p>
              <p className={`${classes.p} ${!light ? classes.pDark : ""}`}>
                Sub region &nbsp; : &nbsp;
                <span>{extractedCountry.subregion}</span>
              </p>
              <p className={`${classes.p} ${!light ? classes.pDark : ""}`}>
                Capital &nbsp; : &nbsp;
                <span>{extractedCountry.capital}</span>
              </p>
            </div>
            <div className={classes.part2}>
              <p className={`${classes.p} ${classes.pDark}`}>
                Top Level Domain &nbsp; : &nbsp;{" "}
                <span className={`${classes.span} ${classes.spanDark}`}>
                  {extractedCountry.tld}
                </span>
              </p>
              <p className={`${classes.p} ${classes.pDark}`}>
                Currencies &nbsp; : &nbsp;{" "}
                <span className={`${classes.span} ${classes.spanDark}`}>
                  {extractedCountry.currency[0][1].name}
                </span>
              </p>
              <p className={`${classes.p} ${classes.pDark}`}>
                Languages &nbsp; : &nbsp;{" "}
                {extractedCountry.languages.map((lang, index) => (
                  <span
                    className={`${classes.span} ${classes.spanDark}`}
                    key={index}
                  >
                    {lang} &nbsp;
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className={classes.border}>
            <p className={`${classes.p} ${!light ? classes.pDark : ""}`}>
              Border Countries&nbsp;:&nbsp;
              {extractedCountry.border.length > 0 ? (
                extractedCountry.border.map((border, index) => (
                  <Button
                    callFunction={countryChangeHandler}
                    key={index}
                    className={`${classes.btn} ${
                      !light ? classes.btnDark : ""
                    }`}
                  >
                    {border}
                  </Button>
                ))
              ) : (
                <span>Not sharing border with any country</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndividualCountry;
