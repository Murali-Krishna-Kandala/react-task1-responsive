import "./App.css";
import HeaderComponent from "./components/header";
import HeadingComponent from "./components/heading";
import NavigationComponent from "./components/navgation";
import AboutComponent from "./components/about";
import Footercomponent from "./components/footer";
function App() {
  return (
    <div className="container">
      <HeaderComponent />
      <HeadingComponent />
      <NavigationComponent />
      <AboutComponent />
      <Footercomponent />
    </div>
  );
}

export default App;
