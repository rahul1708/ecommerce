import "./App.css";
import Navigation from "./customer/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";
function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
