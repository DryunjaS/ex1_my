import { BrowserRouter} from "react-router-dom";
import NavBar from "./components/UI/NavBar";
import Routers from "./components/Routes";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routers/>
    </BrowserRouter>
  );
}

export default App;



