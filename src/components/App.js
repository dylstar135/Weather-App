import "../styles/App.css";
import LocationDetails from "./locationDetails";

function App({location}) {
 const {city, country} = location;
 return (
  <LocationDetails
  city = {city}
  country = {country}
  />
 );
};

export default App;
