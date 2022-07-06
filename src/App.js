import { useDispatch, useSelector } from "react-redux";

import { dataSliceActions } from "./Store/data-store";
import { fetchData } from "./Store/data-store";
import "./App.module.css";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const storeCountries = useSelector((state) => state.data.countries);
  useEffect(() => {
    dispatch(fetchData("https://restcountries.com/v3.1/all"));
  }, [dispatch]);

  return <div className="App">hello</div>;
}

export default App;
