import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import classes from "./Home.module.css";
import Search from "../Search/Search";
import DropMenu from "../DropMenu/DropMenu";
import CountryContainer from "../CountryContainer/CountryContainer";
import IndividualCountry from "../IndividualCountry/IndividualCountry";
import NoPage from "../NoPage/NoPage";

const Home = () => {
  return (
    <main className={classes.home}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home" exact>
          <div className={classes.forms}>
            <Search />
            <DropMenu />
          </div>
          <CountryContainer />
        </Route>
        <Route path="/home/:country" exact>
          <IndividualCountry />
        </Route>
        <Route path="*">
          <NoPage />
        </Route>
      </Switch>
    </main>
  );
};

export default Home;
