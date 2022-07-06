import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./Store/data-store";
import { useEffect } from "react";
import Home from "./components/Home/Home";

function App() {
  const dispatch = useDispatch();
  const storeCountries = useSelector((state) => state.data.countries);
  useEffect(() => {
    dispatch(fetchData("https://restcountries.com/v3.1/all"));
  }, [dispatch]);

  return <Home />;
}

export default App;
