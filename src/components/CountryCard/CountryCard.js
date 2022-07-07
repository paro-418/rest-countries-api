import classes from "./CountryCard.module.css";
import { useHistory } from "react-router-dom";

const CountryCard = (props) => {
  const history = useHistory();

  const countryClickHandler = (event) => {
    const countryTargeted =
      event.currentTarget.childNodes[1].children[0].textContent;
    history.push(
      `/rest-countries-api-with-color-theme-switcher-master/home/${countryTargeted}`
    );
  };
  return (
    <article className={classes.card} onClick={countryClickHandler}>
      <div className={classes.flag}>
        <img src={props.flag} className={classes.flagImage} />
      </div>
      <div className={classes.text}>
        <h4 className={classes.name}>{props.name}</h4>
        <div className={classes.allInfo}>
          <p>
            Population &nbsp;:&nbsp;
            <span className={classes.population}>{props.population}</span>
          </p>
          <p>
            Region&nbsp;:&nbsp;
            <span className={classes.region}>{props.region}</span>
          </p>
          <p>
            Capital&nbsp;:&nbsp;
            <span className={classes.capital}>
              {props.capital ? props.capital[0] : "no Capital"}
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default CountryCard;
