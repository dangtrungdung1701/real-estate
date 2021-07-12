import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Rentals from "./pages/rentals/Rentals";
import Error from "./pages/error/Error";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="real-estate">
      <NavBar />
      <div className="body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/rentals" component={Rentals} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
