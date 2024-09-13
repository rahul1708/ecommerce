import "./App.css";
import Navigation from "./customer/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/HomeSectionCard/Footer/Footer";
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
