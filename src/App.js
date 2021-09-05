import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacto from "./components/Contact";
import Home from "./components/Home";
import Movie from "./components/Movie";
import SobreNosotros from "./components/Sobre-nosotros";

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pelicula/:id" component={Movie} />
          <Route path="/sobre-nosotros" component={SobreNosotros} />
          <Route path="/contacto" component={Contacto} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
