import Router from "./routes/Router";
import ListOfCountries from "./utils/ListOfCountries";

function App() {

  console.log(ListOfCountries());

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
