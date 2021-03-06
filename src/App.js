import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Homepage from "./Components/Homepage";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <ProtectedRoute exact path = "/homepage" component = {Homepage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

