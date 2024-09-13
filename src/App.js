import "./App.css";
import Navigation from "./customer/Navigation/Navigation";
import Footer from "./customer/components/HomeSectionCard/Footer/Footer";
import HomePage from "./customer/pages/HomePage/HomePage";
function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
